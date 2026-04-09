export type ButtonProps = {
    isDone: boolean;
    children?: React.ReactNode|null;
}
export default function Button(p:ButtonProps){
    const content = p.children ?? (p.isDone ? 'Hoàn thành' : 'Chưa hoàn thành');
    return (
        <button
                className={p.isDone ? `px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
                        hover:bg-blue-700 active:bg-blue-800
                        focus:outline-none focus:ring-2 focus:ring-blue-400`
                    : `px-5 py-2 rounded-lg bg-red-600 text-white font-medium
                    hover:bg-red-700 active:bg-red-800
                    focus:outline-none focus:ring-2 focus:ring-red-400`}
                    onClick={() => {alert('mày click gì đấy ?')}}>
                {content}
            </button>
    );
}