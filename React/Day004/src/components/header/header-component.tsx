import './header-component.css'

const headers = [
    "Hello world",
    "Welcome to my website",
    "Have a nice day",
    "Good job bro!",
    "Good night!"
];

function randomGeneateHeaderString(){
    return headers[Math.floor(Math.random() *headers.length)];
}

export default function Header(){
    return (
        <>
            <h1 id='header'>{randomGeneateHeaderString()}</h1>
        </>
    );
}