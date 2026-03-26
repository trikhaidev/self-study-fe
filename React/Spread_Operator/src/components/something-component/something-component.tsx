import Content from "../content-component/content-component.tsx";
import { Contents } from "../../models/content-model/content-props.ts";

export default function SomeThing() {
    return (
        <>
            <div style={{
                width: '80%',
                padding: '20px',
                border:'1px solid black'
            }}>
                <Content text={Contents[0].text} style={Contents[0].style}></Content>
                <Content text={Contents[1].text} style={Contents[1].style}></Content>
                <Content {...Contents[2]}></Content>
                <Content {...Contents[3]}></Content>
                <Content {...Contents[4]} />
            </div>
        </>
    );
}
