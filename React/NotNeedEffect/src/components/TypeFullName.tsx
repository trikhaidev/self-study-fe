import React, { useEffect, useState } from "react";

/**
 * Khi một thứ gì đó có thể được tính toán từ các props hoặc state hiện có, đừng đưa nó vào state. 
 * Thay vào đó, hãy tính toán nó trong quá trình render. Điều này giúp mã của bạn chạy nhanh hơn (bạn tránh được các cập nhật "lan truyền" 
 * không cần thiết), đơn giản hơn (bạn loại bỏ được một số mã) và ít xảy ra lỗi hơn (bạn tránh được các lỗi do các biến state khác nhau 
 * không đồng bộ với nhau). Nếu cách tiếp cận này có vẻ mới mẻ với bạn, hãy tham khảo cuốn sách "Thinking in React" để hiểu rõ hơn những gì 
 * nên được đưa vào state.
 */

type TypeFullNameProps = {
    children: React.ReactNode
}
export default function TypeFullName({children}:TypeFullNameProps) {
    return (
        <div style={
            {
                border:'2px solid black',
                padding: 10
            }
        }>
            <h1>{children}</h1>
            <div>
                <h2>Cách 1: sử dụng Effect:</h2>
                <WithEffect></WithEffect>
            </div>
            <div>
                <h2>Cách 2: tối ưu hơn</h2>
                <WithoutEffect></WithoutEffect>
            </div>
        </div>
    );
}

function WithEffect() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        setFullName(`${firstName} ${lastName}`);
        /**
         * Cách này không tốt vì nó render với giá trị fullName cũ, ngay sau đó effect chạy và set lại fullName với value mới
         * => Kích hoạt quá trình render lại. => Render 2 lần chỉ để cập nhật fullName ?
         */
    }, [firstName, lastName]);
    return (
        <>
            <div>
                <p>
                    <label>
                        FirstName: <input type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)}></input>
                    </label>
                </p>
                <p>
                    <label>
                        LastName: <input type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)}></input>
                    </label>
                </p>
                <h3>FullName: {fullName}</h3>
            </div>
        </>
    );
}

function WithoutEffect() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = `${firstName} ${lastName}`;
    return (
        <>
            <div>
                <p>
                    <label>
                        FirstName: <input type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)}></input>
                    </label>
                </p>
                <p>
                    <label>
                        LastName: <input type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)}></input>
                    </label>
                </p>
                <h3>FullName: {fullName}</h3>
            </div>
        </>
    );
}