import type ContentProps from "../../models/content-model/content-props.ts";

export default function Content(model: ContentProps) {
    return (
        <>
            <div style={model.style}>{model.text}</div>
        </>
    );
}