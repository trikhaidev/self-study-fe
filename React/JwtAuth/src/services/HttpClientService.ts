import { createContext } from "react";
import type { ResponseBaseModel } from "../models/response/ResponseBaseModel";
import type { AuthModel } from "../models/response/AuthModel";

export const HOST_NAME = "https://localhost:7180"
export class HttpClientService {
    public accessToken: string | null | undefined;
    public setAccessToken: (newToken: string | null | undefined) => void;

    constructor(accessToken: string | null | undefined,
        setAccessToken: (newToken: string | null | undefined) => void) {
        this.accessToken = accessToken;
        this.setAccessToken = setAccessToken;
    }

    public async Fetch<T>(request: RequestMessage): Promise<ResponseBaseModel<T> | undefined> {
        let res;
        let body;
        try {
            res = await fetch(
                `${HOST_NAME}/${request.path}`,
                {
                    method: request.method,
                    credentials: request.credentials,
                    headers: {
                        ...request.headers,
                        "content-type":'application/json',
                        "Authorization": `Bearer ${this.accessToken}`
                    },
                    body: request.body
                }
            );
            body = await res.json() as ResponseBaseModel<T>;
        }
        catch {
            if (res?.status === 401) {
                await this.RefreshSession();
                res = await fetch(
                    `${HOST_NAME}/${request.path}`,
                    {
                        method: request.method,
                        credentials: request.credentials,
                        headers: {
                            ...request.headers,
                            "Authorization": `Bearer ${this.accessToken}`
                        },
                        body: request.body
                    }
                );
                body = await res.json() as ResponseBaseModel<T>;
            }
        }
        return body;
    }

    public async Login(userName: string, password: string) {
        try {
            const res = await fetch(
                `${HOST_NAME}/Auth`,
                {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "userName": userName,
                        "password": password
                    })
                }
            );
            if (res.ok) {
                const body = await res.json() as ResponseBaseModel<AuthModel>;
                const accessToken = body?.data?.accessToken;
                this.accessToken = accessToken;
                this.setAccessToken(accessToken);
            }
        }
        catch {
            this.accessToken = null;
            this.setAccessToken(null);
        }
    }

    public async RefreshSession() {
        try {
            const res = await fetch(`${HOST_NAME}/Auth/Session/RefreshSession`,
                {
                    method: "PUT",
                    credentials: "include"
                }
            );
            if (res.ok) {
                const body = await res.json() as ResponseBaseModel<AuthModel>;
                const accessToken = body?.data?.accessToken;
                this.accessToken = accessToken;
                this.setAccessToken(accessToken);
            }
            else {
                this.accessToken = null;
                this.setAccessToken(null);
            }
        }
        catch {
            this.accessToken = null;
            this.setAccessToken(null);
        }
    }

    public async Logout() {
        this.setAccessToken(null);
        await this.Fetch({
            path: 'Auth/Session/Logout',
            credentials: "include",
            method: "DELETE"
        });
    }
}

export class RequestMessage {
    public path: string = null!;
    public method?: string = 'GET';
    public headers?: HeadersInit | undefined;
    public credentials?: RequestCredentials | undefined;
    public body?: BodyInit | null | undefined
}

export const HttpClientContext = createContext<HttpClientService | null>(null);