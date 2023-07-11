import logo from "./logo.svg";
import "./App.css";
import { startTransition, useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(50);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(1500);


  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} ฿</h3>
      </div>
      <div>
        <img src="case.png" alt="case" width="7%"/><br />
        ถุงหิ้ว ราคา {product1} ฿
      </div>
      <button 
        onClick={()=> {
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product1);
      }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button 
        onClick={()=> {
        if (totalItems > 0) {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }
      }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="bag.jpg" alt="bag" width="20%"/><br />
        กระเป๋าเดินทาง ราคา {product2} ฿
      </div>
      <button 
        onClick={()=> {
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product2);
      }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button 
        onClick={()=> {
        if (totalItems > 0) {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product2);
        }
      }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="shirt.jpg" alt="shirt" width="15%"/><br />
        เสื้อกันหนาว ราคา {product3} ฿
      </div>
      <button 
        onClick={()=> {
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product3);
      }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button 
        onClick={()=> {
        if (totalItems > 0) {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product3);
        }
      }}
      >
        นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;
