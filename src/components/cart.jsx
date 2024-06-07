import cartStyle from '../style/cart.module.css'
import minusImg from '../assets/minus.svg'
import plusImg from '../assets/plus.svg'
import productImg_1 from '../assets/product-1.jpg'
import productImg_2 from "../assets/product-2.jpg";

export default function Cart() {
  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="0">
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="3999"
          >
            <img className="img-container" src={productImg_1} />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <object
                    className="product-action minus"
                    data={minusImg}
                  ></object>
                  <span className="product-count">0</span>
                  <object
                    className="product-action minus"
                    data={plusImg}
                  ></object>
                </div>
              </div>
              <div className="price">$0</div>
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="1299"
          >
            <img className="img-container" src={productImg_2} />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <object
                    className="product-action minus"
                    data={minusImg}
                  ></object>
                  <span className="product-count">0</span>
                  <object
                    className="product-action minus"
                    data={plusImg}
                  ></object>
                </div>
              </div>
              <div className="price">$0</div>
            </div>
          </div>
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">$0</div>
        </section>
      </section>
    </>
  );
}
