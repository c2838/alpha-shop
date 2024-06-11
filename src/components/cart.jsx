import cartStyle from '../style/cart.module.css'
import minusImg from '../assets/minus.svg'
import plusImg from '../assets/plus.svg'
import productImg_1 from '../assets/product-1.jpg'
import productImg_2 from "../assets/product-2.jpg";

export default function Cart() {
  return (
    <>
      <section className={cartStyle.cartContainer}>
        <h3 className={cartStyle.cartTitle}>購物籃</h3>
        <section className={cartStyle.productList} data-total-price="0">
          <div
            className={cartStyle.productContainer}
            data-count="0"
            data-price="3999"
          >
            <img className={cartStyle.imgContainer} src={productImg_1} />
            <div className={cartStyle.productInfo}>
              <div className={cartStyle.productName}>破壞補丁修身牛仔褲</div>
              <div className={cartStyle.productControlContainer}>
                <div className={cartStyle.productControl}>
                  <object
                    className="product-action minus"
                    data={minusImg}
                  ></object>
                  <span className={cartStyle.productCount}>0</span>
                  <object
                    className="product-action minus"
                    data={plusImg}
                  ></object>
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
                  <object
                    className="product-action minus"
                    data={minusImg}
                  ></object>
                  <span className={cartStyle.productCount}>0</span>
                  <object
                    className="product-action minus"
                    data={plusImg}
                  ></object>
                </div>
              </div>
            </div>
            <div className={cartStyle.productPrice}>$1299</div>
          </div>
        </section>
        <section className={cartStyle.cartInfo}>
          <div className={cartStyle.cartInfoText}>運費</div>
          <div className={cartStyle.cartInfoPrice}>免費</div>
        </section>
        <section className={cartStyle.cartInfo}>
          <div className={cartStyle.cartInfoText}>小計</div>
          <div className={cartStyle.cartInfoPrice}>$5298</div>
        </section>
      </section>
    </>
  );
}
