import React, { useEffect, useState } from "react";
type ProfilePageProps = {
    children:React.ReactNode
}
export default function ProfilePage({children}:ProfilePageProps) {
    const [select, setSelect] = useState(0);
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'Kai',
            comments: []
        },
        {
            id: 2,
            name: 'Son',
            comments: []
        },
        {
            id: 3,
            name: 'Dom',
            comments: []
        },
    ]);

    function handleSubmit(userId:number, comment:string){
        setUsers(users.map(u => {
            return u.id !== userId ? u :
            {
                ... u,
                comments:[
                    ...u.comments,
                    comment
                ]
            }
        }));
    }

    return (
        <div style={{
            border: '1px solid black',
            padding : 15,
            marginTop: 15
        }}>
            <h1>{children}</h1>
            <ul>
                {
                    users.map((u,i) => <li key={u.id}><button onClick={() => setSelect(i)}>{u.name}</button></li>)
                }
            </ul>
            <Comment user={users[select]} onSubmit={handleSubmit} key={users[select].id}></Comment>
            /**
                Truyền key cho Comment component để khi chuyển sang select user khác thì state của comment sẽ bị xóa đi
             */
        </div>
    );
}

type CommentProps = {
    user: User;
    onSubmit: (userId: number, comment: string) => void,
};
function Comment({ user, onSubmit }: CommentProps) {
    const [text, setText] = useState('');

    // useEffect(() => {
    //     setText('');
    // },[user]);
    /**
     * Không nên dùng cách này vì nó không tối ưu. useEffect chỉ chạy sau khi component đã render xong Tức là nó sẽ render với text cũ trước,
     * sau đó mới kiểm tra user có thay đổi hay không, nếu thay đổi thì mới chạy effect để set lại text. Mất tới 2 lần render để xóa text.
     * 
     * => Cách khác phục là khi gọi Comment component thì ta truyền thêm key cho nó (key này có thể id của user được select). Khi user selected
     * thay đổi thì key cũng sẽ thay đổi => React sẽ xem component cũ đã bị xóa và ngay lập tức xóa bỏ trạng thái của nó (tức là value của text
     * sẽ bị xóa) => truyền key mới, React sẽ xem đây là component mới và mới được gọi lần đầu nên sẽ khởi tạo state với giá trị mặc định
     */
    return (
        <>
            <h2>User: {user.name}</h2>
            <input type="text" value={text} onChange={e => setText(e.currentTarget.value)} />
            <button onClick={() => { onSubmit(user.id, text) }}>Submit</button>
            <ol>
                {
                    user.comments.map((c,i) => <li key={i}>{c}</li>)
                }
            </ol>
        </>
    );
}

interface User {
    id: number;
    name: string;
    comments: string[];
}