import { useState } from 'react'
// 匯入CSS module
import cartStyle from '../style/cart.module.css'
// 匯入圖片
import minusImg from '../assets/minus.svg'
import plusImg from '../assets/plus.svg'
// import productImg_1 from '../assets/product-1.jpg'
// import productImg_2 from "../assets/product-2.jpg";

// 課程指定資料
const productsData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];


function CartTitle() {
  return <h3 className={cartStyle.cartTitle}>購物籃</h3>;
}

// 產品清單渲染用function
function ProductsList({ products, onMinus, onPlus }) {
  const productsList = products.map(item => {
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
        <div className={cartStyle.productPrice}>
          {item.price * item.quantity}
        </div>
      </div>
    );
  })
  return (
    <>{productsList}</>
  )
}

function CartProductList({ products, onMinus, onPlus }) {
  return (
    <section className={cartStyle.productList} data-total-price="0">
      <ProductsList
        products={products}
        onMinus={onMinus}
        onPlus={onPlus}
      />
      {/* 舊資料 */}
      {/* <div
        className={cartStyle.productContainer}
        data-count="0"
        data-price="3999"
      >
        <img className={cartStyle.imgContainer} src={productImg_1} />
        <div className={cartStyle.productInfo}>
          <div className={cartStyle.productName}>破壞補丁修身牛仔褲</div>
          <div className={cartStyle.productControlContainer}>
            <div className={cartStyle.productControl}>
              <object className="product-action minus" data={minusImg}></object>
              <span className={cartStyle.productCount}>0</span>
              <object className="product-action minus" data={plusImg}></object>
            </div>
          </div>
        </div>
        <div className={cartStyle.productPrice}>$3999</div>
      </div>
      <div
        className={cartStyle.productContainer}
        data-count="0"
        data-price="1299"
      >
        <img className={cartStyle.imgContainer} src={productImg_2} />
        <div className={cartStyle.productInfo}>
          <div className={cartStyle.productName}>刷色直筒牛仔褲</div>
          <div className={cartStyle.productControlContainer}>
            <div className={cartStyle.productControl}>
              <object className="product-action minus" data={minusImg}></object>
              <span className={cartStyle.productCount}>0</span>
              <object className="product-action minus" data={plusImg}></object>
            </div>
          </div>
        </div>
        <div className={cartStyle.productPrice}>$1299</div>
      </div> */}
    </section>
  );
}

function CartInfo({ shippingFee, total }) {
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
        <div className={cartStyle.cartInfoPrice}>${total}</div>
      </section>
    </>
  );
}


export default function Cart({ shippingFee }) {
  const [products, setProdusts] = useState(productsData);
  // 物品數量增加用event handler
  function handlePlus(products, productId) {
    const plusProducts = products.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: (item.quantity += 1) };
      } else return item;
    });
    setProdusts(plusProducts);
  }
  // 物品數量減少用event handler
  function handleMinus(products, productId) {
    // 避免修改陣列
    const minusProducts = products.map((item) => {
      if (item.id === productId) {
        // 數量為0後不會再減少
        if (item.quantity === 0) {
          return { ...item, quantity: 0 };
        } else {
          // 回傳新物件，避免直接修改
          return { ...item, quantity: (item.quantity -= 1) };
        }
      } else return item; //若無修改則直接回傳
    });
    setProdusts(minusProducts);
  }
  // 計算總價用
  function totalPrice() {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    // 加入運費
    total = total + Number(shippingFee);
    return total;
  }
  const total = totalPrice();

  return (
    <>
      <section className={cartStyle.cartContainer}>
        <CartTitle />
        <CartProductList
          products={products}
          onMinus={handleMinus}
          onPlus={handlePlus}
        />
        <CartInfo shippingFee={shippingFee} total={total} />
      </section>
    </>
  );
}
