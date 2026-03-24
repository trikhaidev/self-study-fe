import './content-component.css'
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpeg"
import img4 from "../../assets/img4.jpg"

const images = [img1,img2,img3,img4]

function randomImage():string{
    return images[Math.floor(Math.random() * images.length)];
}

function Img(){
    return <>
        <img src= {randomImage()}/>
    </>
}

function Text(model:TextModel){
    return (
        <>
            <p style={{color:model.color ?? 'black'}}>{model.text}</p>
        </>
    );
}

export default function Content(){
    return (
        <>
            <div id='content'>
                <Img></Img>
                <hr />
                <Text text= "Hello bro! ok bro" color="blue"></Text>
                <hr />
                <Text text={'Are You Ok?'} color={'Yellow'}/>
            </div>
        </>
    );
}

class TextModel{
    public text:string|undefined|null;
    public color:string|undefined|null;
}