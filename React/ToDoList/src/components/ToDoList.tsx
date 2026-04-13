export type ListItem = {
    id: number,
    title: string,
    isDone: boolean
};
export type ToDoListProps = {
    items: ListItem[],
    onToggleItem: (itemId: number) => void,
    removeItem: (itemId: number) => void,
};

export default function ToDoList({ items, onToggleItem, removeItem }: ToDoListProps) {
    if (items.length === 0) {
        return (
            <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 px-6 py-10 text-center">
                <p className="text-lg font-semibold text-white">No tasks yet</p>
                <p className="mt-2 text-sm text-slate-400">
                    Add your first task to start building momentum.
                </p>
            </div>
        );
    }

    return (
        <ul className="space-y-3">
            {items.map((item) => {
                return (
                    <li
                        key={item.id}
                        className={`group flex cursor-pointer items-center gap-4 rounded-3xl border px-4 py-4 transition ${item.isDone
                                ? "border-emerald-400/20 bg-emerald-400/10"
                                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                            }`}
                        onClick={() => onToggleItem(item.id)}
                    >
                        <label className="relative flex cursor-pointer items-center">
                            <input
                                type="checkbox"
                                checked={item.isDone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.stopPropagation();
                                    onToggleItem(item.id);
                                }}
                                className="peer sr-only"
                            />
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 transition peer-checked:border-emerald-300 peer-checked:bg-emerald-300">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-3.5 w-3.5 stroke-slate-950 opacity-0 transition peer-checked:opacity-100"
                                    fill="none"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                        </label>

                        <div className="min-w-0 flex-1">
                            <p
                                className={`text-base font-medium transition ${item.isDone ? "text-slate-300 line-through" : "text-white"
                                    }`}
                            >
                                {item.title}
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                                {item.isDone ? "Completed" : "Ready to focus"}
                            </p>
                        </div>

                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${item.isDone
                                    ? "bg-emerald-300 text-emerald-950"
                                    : "bg-white/10 text-slate-200"
                                }`}
                        >
                            {item.isDone ? "Done" : "Open"}
                        </span>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                removeItem(item.id);
                            }}
                            className="inline-flex items-center justify-center rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1.5 text-xs font-semibold text-rose-100 transition hover:border-rose-300/40 hover:bg-rose-400/20 hover:text-white focus:outline-none focus:ring-4 focus:ring-rose-300/20"
                        >
                            Remove
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
