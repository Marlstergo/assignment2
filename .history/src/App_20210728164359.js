import "./App.css";
import { Menu } from "@headlessui/react";

import Nachos from "./asset/nachos.png";
import Taco from "./asset/taco.png";
import Noodles from "./asset/noodles.png";
import Pizza from "./asset/pizza.png";
import Chicken from "./asset/chicken.png";
import { MenuAlt2, ShoppingCart, X } from "heroicons-react";

function App() {
  return (
    <div className="">
      <div className="full">
        <div className="cont">
          <div className="mobile-menu">
            {/* using headlessui for the menu slider mobile */}
            <Menu>
              {({ open }) => (
                <>
                  {open? <X className="menu"/> : <Menu.Button as="div" className=" md:hidden block z-50">
                    <MenuAlt2 className="menu" />
                  </Menu.Button>}
                  
                  <Menu.Items
                    as="div"
                    className="menu-items"
                    
                  >
                    <Menu.Item as="div" className="item">
                      <h2 id="currnet">About</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 >Services</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 >Cousine</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2 >Gallery</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2>Contact</h2>
                    </Menu.Item>
                    <Menu.Item as="div" className="item">
                      <h2>Book</h2>
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
        {/* side bar for bigger screen */}
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
          {/* list of foods */}
          <div className="row sidebars">
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
