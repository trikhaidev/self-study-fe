import Component from "./someThingComponent";
import {type Props} from "./someThingComponent";
export default function DTO(p:Props){
    return (
    <>
        <Component {... p}>
            <h3 style={{backgroundColor:'aqua'}}>Ưu tien cái này hơn là children ở trong {'{... p} (ghi đè children của param đang truyền)'}</h3>
            {/* {p.children} */}
            {/* {'<h3>Hello world</h3>'} */}
        </Component>
    </>);
}