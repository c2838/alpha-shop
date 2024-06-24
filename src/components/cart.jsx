import { useState, useEffect, useContext } from 'react'
// 匯入CSS module
import cartStyle from '../style/cart.module.css'
// 匯入圖片
import minusImg from '../assets/minus.svg'
import plusImg from '../assets/plus.svg'
// 課程指定資料
import { ProductsDataContext } from './cartContext'

import { ShippingFeeContext } from './mainContent'
// 格式化數字用
const formatter = new Intl.NumberFormat("zh-tw", {
  style: "currency",
  currency: "TWD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// 購物車標題渲染用
function CartTitle() {
  return <h3 className={cartStyle.cartTitle}>購物籃</h3>;
}

// 產品清單渲染用
function CartProductsList() {
  // 使用context傳入資料與handle eventer
  const {
    products,
    handleMinus: onMinus,
    handlePlus: onPlus,
  } = useContext(ProductsDataContext);

  const productsList = products.map((item) => {
    // 單項產品總計金額
    const formatProductPrice = formatter.format(item.price * item.quantity);
    return (
      <div
        className={cartStyle.productContainer}
        data-count={item.quantity}
        data-price={item.price}
        key={item.id}
      >
        <img className={cartStyle.imgContainer} src={item.img} />
        <div className={cartStyle.productInfo}>
          <div className={cartStyle.productName}>{item.name}</div>
          <div className={cartStyle.productControlContainer}>
            <div className={cartStyle.productControl}>
              <img
                className="product-action minus"
                src={minusImg}
                onClick={() => onMinus(products, item.id)}
              />
              <span className={cartStyle.productCount}>{item.quantity}</span>
              <img
                className="product-action plus"
                src={plusImg}
                onClick={() => onPlus(products, item.id)}
              />
            </div>
          </div>
        </div>
        <div className={cartStyle.productPrice}>{formatProductPrice}</div>
      </div>
    );
  });
  return (
    <section className={cartStyle.productList} data-total-price="0">
      {productsList}
    </section>
  );
}


function CartInfo({ total }) {
  const { shippingFee } = useContext(ShippingFeeContext);
  return (
    <>
      <section className={cartStyle.cartInfo}>
        <div className={cartStyle.cartInfoText}>運費</div>
        <div className={cartStyle.cartInfoPrice}>
          {shippingFee === '500' ? '$500' : '免費'}
        </div>
      </section>
      <section className={cartStyle.cartInfo}>
        <div className={cartStyle.cartInfoText}>小計</div>
        <div className={cartStyle.cartInfoPrice}>{total}</div>
      </section>
    </>
  );
}


export default function Cart() {
  // 取得商品資料
  const productsData = useContext(ProductsDataContext)
  // 取得運費金額
  const { shippingFee } = useContext(ShippingFeeContext);
  // state渲染宣告
  const [products, setProdusts] = useState(productsData);
  const [total, setTotal] = useState(0)
  // 利用useEffect避免每次重新渲染都計算總價
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
    setTotal(totalPrice())
  }, [products, shippingFee])
  // 物品數量增加用event handler
  function handlePlus(products, productId) {
    const plusProducts = products.map((item) => 
      item.id === productId ? { ...item, quantity: (item.quantity + 1) } : item
    );
    setProdusts(plusProducts);
  }
  // 物品數量減少用event handler
  function handleMinus(products, productId) {
    // 回傳新陣列以避免修改陣列
    const minusProducts = products.map((item) =>
      // Math.max()會回傳較大值，故如果quantity < 0，回傳 0 ，避免產品下單量為負值
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item 
    );
    setProdusts(minusProducts);
  }

  return (
    <>
      <ProductsDataContext.Provider value={{products, handleMinus, handlePlus}}>
        <section className={cartStyle.cartContainer}>
          <CartTitle />
          <CartProductsList />
          {/* total只有往下傳一階層，我覺得似乎沒有需要特別寫在context內，若有需要改進再請助教提醒~ */}
          <CartInfo total={total} /> 
        </section>
      </ProductsDataContext.Provider>
    </>
  );
}
