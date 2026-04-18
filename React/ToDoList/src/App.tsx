import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { ListItem } from "./components/ToDoList";
import ToDoList from "./components/ToDoList";
import Clock from "./components/Clock";

function App() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [typeShow, setTypeShow] = useState<number>(0);
  const completedCount = listItems.filter((item) => item.isDone).length;
  const pendingCount = listItems.length - completedCount;
  const progress =
    listItems.length === 0 ? 0 : Math.round((completedCount / listItems.length) * 100);

  let itemsToShow = listItems;
  if(typeShow === 1){
    itemsToShow = listItems.filter(x => x.isDone);
  }
  else if(typeShow === 2){
    itemsToShow = listItems.filter(x => !x.isDone)
  }
  
  function handleAddItem() {
    const trimmedItem = newItem.trim();

    if (!trimmedItem) {
      alert("Please enter a task before adding it.");
      return;
    }
    const maxId = listItems.length > 0 ? Math.max(...listItems.map((item) => item.id)) : 0;

    setListItems((currentItems) => [
      ...currentItems,
      {
        id: maxId + 1,
        title: trimmedItem,
        isDone: false,
        isEditing: false,
      },
    ]);
    setNewItem("");
  }

  function handleToggleItem(itemId: number) {
    setListItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  }

  function handleRemoveItem(itemId: number) {
    setListItems(current => {
      return current.filter(x => x.id !== itemId);
    });
  }

  function handleEditingItem(itemId:number){
    setListItems(curr => {
      return curr.map(x => x.id === itemId ? {...x, isEditing: !x.isEditing} : x);
    });
  }

  function handleUpdateTitle(itemId:number, newTitle:string){
    setListItems(curr => {
      return curr.map(x => x.id == itemId ? {...x,title :newTitle} : x);
    });
  }

  function handleAcceptUpdateTitle(itemId:number){
    setListItems(curr => {
      return curr.map(x => {
        if(x.id !== itemId){
          return x;
        }
        if(!x.title || x.title.trim() === ''){
          alert("The title can't be empty. Please enter a new title.");
          return x;
        }
        return {... x, isEditing: false};
      });
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleAddItem();
    }
  }
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7,_#fff7ed_32%,_#f8fafc_70%)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Focus workspace
              <Clock></Clock>
            </div>
            <h1 className="mt-5 max-w-md text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Organize your day with a cleaner todo flow.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Add tasks quickly, track progress at a glance, and keep your list feeling
              lightweight instead of cluttered.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white">
                <p className="text-sm text-slate-300">Total tasks</p>
                <p className="mt-2 text-3xl font-bold">{listItems.length}</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 px-5 py-4 text-emerald-900 ring-1 ring-emerald-100">
                <p className="text-sm">Completed</p>
                <p className="mt-2 text-3xl font-bold">{completedCount}</p>
              </div>
              <div className="rounded-2xl bg-amber-50 px-5 py-4 text-amber-900 ring-1 ring-amber-100">
                <p className="text-sm">In progress</p>
                <p className="mt-2 text-3xl font-bold">{pendingCount}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.75)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Today&apos;s list
                </p>
                <h2 className="mt-3 text-2xl font-bold">What needs attention?</h2>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-3 text-right backdrop-blur">
                <p className="text-xs text-slate-300">Progress</p>
                <p className="mt-1 text-lg font-semibold">{progress}%</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={newItem}
                placeholder="Add a new task..."
                onChange={(event) => {
                  setNewItem(event.currentTarget.value);
                }}
                onKeyDown={handleKeyDown}
                className="h-13 flex-1 rounded-2xl border border-white/10 bg-white/8 px-4 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="inline-flex h-13 items-center justify-center rounded-2xl bg-amber-300 px-5 font-semibold text-slate-950 transition hover:bg-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-300/30"
              >
                Add task
              </button>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Filter tasks
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Choose which items should appear in the list.
                </p>
              </div>
              <select
                value={typeShow}
                onChange={(e) => {
                  const data = e.currentTarget.value;
                  setTypeShow(parseInt(data));
                }}
                className="min-w-40 rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm font-medium text-white outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
              >
                <option value={0}>All</option>
                <option value={1}>Completed</option>
                <option value={2}>In Progress</option>
              </select>
            </div>
            <div className="mt-6">
              <ToDoList items={itemsToShow} 
                onToggleItem={handleToggleItem} 
                onRemoveItem={handleRemoveItem} 
                onEditingItem={handleEditingItem} 
                onUpdateTitle={handleUpdateTitle} 
                onAcceptUpdateTile={handleAcceptUpdateTitle}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;

