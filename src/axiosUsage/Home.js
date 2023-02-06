import React, { useEffect, useState } from "react";
import axios from "axios";
import "./shoppingCart.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    sessionStorage.getItem("cartItem") === null
      ? []
      : JSON.parse(sessionStorage.getItem("cartItem"))
  );

  useEffect(() => {
    function getRandomData() {
      axios.get("https://dummyjson.com/products").then((response) => {
        // console.log(response.data.products);
        setProducts(response.data.products);
      });
    }
    getRandomData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart])

  function addToCart(e, id) {
    e.preventDefault();
    setCart([...cart, id]);
  }

  console.log(cart);
  console.log(sessionStorage.getItem("cartItem"));

  return (
    <div>
      <header>
        <h1>Shopping Cart</h1>
        <a className="cart">
          Cart <span className="cartCount">{cart.length}</span>
        </a>
      </header>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div className="product" key={index}>
              <img src={product.thumbnail}></img>
              <a href="" onClick={(e) => addToCart(e, index)}>
                Add To Cart
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

// https://dummyjson.com/products
