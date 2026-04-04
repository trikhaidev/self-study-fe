import type SomeThing from "../../models/someThing";

export type Props = {data: SomeThing, children: React.ReactNode};
export default function SomeThing({data,children}:Props){
    return (
        <>
            <h4 style={{fontSize: data.size}}>{data.name}</h4>
            <div>{children}</div>
        </>
    );
}