import { useContext } from 'react'
// 匯入CSS module
import cartStyle from '../style/cart.module.css'
// 匯入圖片
import minusImg from '../assets/minus.svg'
import plusImg from '../assets/plus.svg'
// 課程指定資料
import { ProductsDataContext, formatter } from './cartContext'
// 傳入運費用
import { ShippingFeeContext } from './mainContent'
// 格式化數字用


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


function CartInfo() {
  const { shippingFee } = useContext(ShippingFeeContext);
  const { total } = useContext(ProductsDataContext)
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
  return (
    <>
      <section className={cartStyle.cartContainer}>
        <CartTitle />
        <CartProductsList />
        <CartInfo /> 
      </section>
    </>
  );
}
