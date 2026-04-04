export type UProps = {
    style:React.CSSProperties,
    children: React.ReactNode,
}
export default function U(p:UProps){
    return (
        <ul style={p.style}>
            {p.children}
        </ul>
    );
}