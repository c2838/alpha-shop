import { useState, useContext, useEffect } from "react";
import { ShippingFeeContext } from "../../context/MainContentContext.js";
import { ProductsDataContext } from "../../context/CartContext.js";
import { formatter } from "../../context/ConstContext";
import Register from "../Register";
import Cart from "../Cart";
import mainStyle from "./mainContent.module.css";

export default function Main() {
  // 取得運費
  const fee = useContext(ShippingFeeContext);
  // 取得商品資料
  const productsData = useContext(ProductsDataContext);
  //運費兩邊都會使用，故放在最上層
  const [shippingFee, setShippingFee] = useState(fee);
  // 商品金額的total因為要在送出信用卡資料時可一併傳出，也放在最上層
  const [products, setProdusts] = useState(productsData);
  const [total, setTotal] = useState(0);
  // 使用useEffect避免每次都要重新計算價格 (Cart & Register)
  useEffect(() => {
    // 計算總價函式
    function totalPrice() {
      let total = 0;
      products.forEach((item) => {
        total += item.price * item.quantity;
      });
      // 加入運費
      total = total + Number(shippingFee);
      return formatter.format(total);
    }
    setTotal(totalPrice());
  }, [products, shippingFee]);

  // 選擇運費時可設定運費金額handle eventer (Register)
  function handleRadio(event) {
    setShippingFee(event.target.value);
  }

  // 商品數量增加用event handler (Cart)
  function handlePlus(products, productId) {
    const plusProducts = products.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setProdusts(plusProducts);
  }

  // 商品數量減少用event handler (Cart)
  function handleMinus(products, productId) {
    // 回傳新陣列以避免修改陣列
    const minusProducts = products.map((item) =>
      // Math.max()會回傳較大值，故如果quantity < 0，回傳 0 ，避免產品下單量為負值
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
        : item
    );
    setProdusts(minusProducts);
  }

  return (
    <main>
      <ShippingFeeContext.Provider value={{ shippingFee, handleRadio }}>
        <ProductsDataContext.Provider
          value={{ products, total, handleMinus, handlePlus }}
        >
          <div className={mainStyle.mainContainer}>
            <Register />
            <Cart />
          </div>
        </ProductsDataContext.Provider>
      </ShippingFeeContext.Provider>
    </main>
  );
}
