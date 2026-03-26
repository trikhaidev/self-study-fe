export default interface ContentProps {
    text:string|number|null|undefined,
    style:React.CSSProperties
}

export const Contents: ContentProps[] = [
    {
        text: "Xin chào React + TypeScript",
        style: {
            color: "blue",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "right"
        },
    },
    {
        text: 2026,
        style: {
            color: "green",
            fontSize: "16px",
        },
    },
    {
        text: 'Okay bro!',
        style: {
            color: "gray",
            fontStyle: "italic",
        },
    },
    {
        text: 'Null|Undefined',
        style: {
            color: "red",
            backgroundColor:'lightgray'
        },
    },
    {
        text: "Nội dung có nền",
        style: {
            backgroundColor: "#4d2a2a",
            padding: "8px 12px",
            borderRadius: "6px",
        },
    },
];