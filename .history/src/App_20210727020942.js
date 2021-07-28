import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="full">
        <div className="sidebar">
          <div className='logo'>
          <h1>Lorem Ipsum</h1>
          </div>
          <div className="">
            <div className="">
              <h2 className="">About</h2>
            </div>
            <div className="">
              <h2 className="">Services</h2>
            </div>
            <div className="">
              <h2 className="">Cuisine</h2>
            </div>
            <div className="">
              <h2 className="">Gallery</h2>
            </div>
            <div className="">
              <h2 className="">Contact</h2>
            </div>
            <div className="">
              <h2 className="">Book</h2>
            </div>
            <div className="">
              <button className="">Cart</button>
            </div>
          </div>
        </div>
        <div className="main-view">
          <div className="hero">
            <div className="title">
              <h1 className="">What are you having for Lunch?</h1>
            </div>
            <div className="paragraph">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, iusto!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="cell">
              <div className="">{/* image */}</div>
              <div className="">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
            <div className="cell">
              <div className="">{/* image */}</div>
              <div className="">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
            <div className="cell">
              <div className="">{/* image */}</div>
              <div className="">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
            <div className="cell">
              <div className="">{/* image */}</div>
              <div className="">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
            <div className="cell">
              <div className="">{/* image */}</div>
              <div className="">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
