import './content-component.css'

const images = [
    "https://dthezntil550i.cloudfront.net/n4/latest/n41611050401464760001833695/1280_960/1128ba0a-efcb-4370-97cf-7704d4c0555d.png",
    "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-003.jpg",
    "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg",
    "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-002.jpg",
]

function randomImage(){
    return images[Math.floor(Math.random() * images.length)];
}

function Img(){
    return <>
        <img src= {randomImage()}/>
    </>
}

export default function Content(){
    return (
        <>
            <div id='content'>
                <Img></Img>
            </div>
        </>
    );
}