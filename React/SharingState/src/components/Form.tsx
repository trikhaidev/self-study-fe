import type React from "react";

type FormProps = {
    title: string;
    children: React.ReactNode
}

export default function Form(props: FormProps){
    return (
        <form>
            <h2>{props.title}</h2>
            <div>
                {props.children}
            </div>
        </form>
    );
}