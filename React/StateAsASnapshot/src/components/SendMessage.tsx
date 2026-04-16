import { useState } from "react";

export default function SendMessage() {
    const [isSendt, setIsSent] = useState(false);
    const [message, setMessage] = useState<string>("");
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setIsSent(true);
                setTimeout(()=>{
                    alert("Bạn đã gửi thư với nội dung: " + message);
                },5000);
            }}
        >
            <h3>{isSendt && 'Thank you for your message!'}</h3>
            <textarea
                value={message}
                onChange={e => setMessage(e.currentTarget.value)}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}