export type ButtonProps = {
    isDone: boolean;
    children: React.ReactNode;
    onClick:() => void;
}
export default function Button(p: ButtonProps) {
    return (
        <button
            className={p.isDone ? `px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
                        hover:bg-blue-700 active:bg-blue-800
                        focus:outline-none focus:ring-2 focus:ring-blue-400`
                : `px-5 py-2 rounded-lg bg-red-600 text-white font-medium
                    hover:bg-red-700 active:bg-red-800
                    focus:outline-none focus:ring-2 focus:ring-red-400`}
            onClick={(e) => {
                // e.stopPropagation();
                p.onClick();
            }}>
            {p.children}
        </button>
    );
}
