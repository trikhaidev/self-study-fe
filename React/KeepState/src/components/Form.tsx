type FormProps = {
    showTitle:boolean
}
export default function Form(p:FormProps){
    // if(p.showTitle){
    //     // Viết như này thì giá trị của input sẽ không được giữ lại vì tùy thuộc vào showTitle mà input sẽ được render trên UI tree ở các
    //     //vị trí khác nhau
    //     return (
    //         <form>
    //             <h1>Your name!</h1>
    //             <input type="text" placeholder="Full Name"/>
    //         </form>
    //     );
    // }
    return (
        <form>
            {
                p.showTitle && <h1>Your name!</h1>
            }
            <input type="text" placeholder="Full Name"/>
        </form>
    );
}