import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  alert("Trước useState");
  const [count, setCount] = useState(0);
  alert("Sau useState");
  const handleClick = () => {
    //setCount(count + 1);
    setCount(c => {
      alert("Update function 1: " + c);
      return c + 1;
    });
    setCount(c => {
      alert("Update function 2: " + c);
      return c + 1;
    });

    // if(count !== 42){
    //   setCount(count + 1);
    //   setCount(c => c + 1);
    // }
    
    setCount(36);

    alert("Current count: "+count);

    /**
     *  Khi lần đầu tiền gọi setState (trong trường hợp này là setCount) thì update function sẽ được chạy ngay lập tức hay nếu là newState thì sẽ được cập nhật ngay lập tức.
     * Tuy nhiên, sau đó nếu có gọi setState tiếp thì sẽ chỉ đơn giản là trigger re-render, update function mới hay newState mới sẽ được đưa vào hàng đợi và ở lần gọi useState
     * tiếp theo thì React sẽ duyệt qua hàng đợi này để tính toán ra state mới nhất để trả về cho component.
     * 
     * Lưu ý: + Event handler phải thực thi xong thì Component mới được re-render.
     *        + Sau setState đầu tiên thì tất cả những lần sau sẽ chỉ trigger re-render, các update function cũng như là state mới sẽ được đưa vào hàng đợi
     */
  };
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={handleClick}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
