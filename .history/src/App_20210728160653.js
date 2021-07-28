import logo from "./logo.svg";
import "./App.css";
import { Menu, Transition } from "@headlessui/react";

import Nachos from "./asset/nachos.png";
import Taco from "./asset/taco.png";
import Noodles from "./asset/noodles.png";
import Pizza from "./asset/pizza.png";
import Chicken from "./asset/chicken.png";
import { MenuAlt2, ShoppingCart } from "heroicons-react";

function App() {
  return (
    <div className="">
      <div className="full">
        <div className="cont">
          <div className="mobile-menu">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button as="div" className=" md:hidden block z-50">
                    <MenuAlt2 className="menu" />
                  </Menu.Button>
                  {/* <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  > */}
                  <Menu.Items
                    as="div"
                    className="menu-items"
                    // className="md:hidden z-50 h-[100vh] w-[100vw] flex-col -top-5 text-xl left-0 absolute bg-white flex justify-center pl-[24px] space-y-8 z-40 bg-white border-themegreen rounded-tl-[50px] border-8 outline-none"
                  >
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">About</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">Services</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">Cousine</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">Gallery</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">Contact</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">Book</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <button className="button">Cart</button>
                    </Menu.Item>
                  </Menu.Items>
                  {/* </Transition> */}
                </>
              )}
            </Menu>

            <h1 className="mobile-header">Lorem</h1>
            <ShoppingCart className="shop" />
          </div>
        </div>
        <div className="sidebar">
          <div className="logo">
            <h1>Lorem</h1>

            <h1> Ipsum</h1>
          </div>
          <div className="items">
            <div className="item ">
              <h2 id="currnet">About</h2>
            </div>
            <div className="item">
              <h2 className="">Services</h2>
            </div>
            <div className="item">
              <h2 className="">Cuisine</h2>
            </div>
            <div className="item">
              <h2 className="">Gallery</h2>
            </div>
            <div className="item">
              <h2 className="">Contact</h2>
            </div>
            <div className="item">
              <h2 className="">Book</h2>
            </div>
            <div className="item">
              <button className="button">Cart</button>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
                iusto!
              </p>
              <div className="divider" />
            </div>
          </div>
          <div className="row">
            <div className="cell">
              <div className="imagediv">
                {/* image */}
                <img src={Taco} alt="tago" className="" />
              </div>
              <div className="text-field">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
            <div className="cell">
              <div className="imagediv">
                <img src={Pizza} alt="pizza" className="" />
                {/* image */}
              </div>
              <div className="text-field">
                <h3 className="">Farmhouse Pizza</h3>
              </div>
            </div>
            <div className="cell">
              <div className="imagediv">
                {/* image */}
                <img src={Chicken} alt="chicken" className="" />
              </div>
              <div className="text-field">
                <h3 className="">Chicken Burger</h3>
              </div>
            </div>
            <div className="cell">
              <div className="imagediv">
                {/* image */}
                <img src={Nachos} alt="nachos" className="" />
              </div>
              <div className="text-field">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
            <div className="cell taco">
              <div className="imagediv">
                {/* image */}
                <img src={Noodles} alt="noodles" className="" />
              </div>
              <div className="text-field">
                <h3 className="">Mexican Taco</h3>
              </div>
            </div>
          </div>
          <div className="footerparagraph">
            <div className="paragraph2">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
                iusto!
              </p>
              <div className="divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
