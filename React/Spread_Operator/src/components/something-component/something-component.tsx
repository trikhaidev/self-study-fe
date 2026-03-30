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
                <Content text={Contents[0].text} style={Contents[0].style}><h1>Ok</h1></Content>
                <Content text={Contents[1].text} style={Contents[1].style}>
                    <ul style={{color:'darkorange'}}>
                        <li>Content 1</li>
                        <li>Content 2</li>
                    </ul>
                </Content>
                <Content {...Contents[2]}></Content>
                <Content {...Contents[3]}></Content>
                {/* <Content {...Contents[4]} /> */}
            </div>
        </>
    );
}
