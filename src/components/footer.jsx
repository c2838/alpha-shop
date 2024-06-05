function FooterLogo () {
  return (
    <section className="footer-section">
      <div className="footer-logo-container">
        <img src="./public/icons/logo.svg" className="cursor-point" />
      </div>
    </section>
  );
}

function FooterService() {
  return (
    <section className="footer-section">
      <h2 className="section-title">客戶服務</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          運送說明
        </a>
        <a className="page-link" href="#">
          退換貨相關
        </a>
        <a className="page-link" href="#">
          付款資訊
        </a>
        <a className="page-link" href="#">
          FAQ
        </a>
      </div>
    </section>
  );
}

function FooterAbout() {
  return (
    <section className="footer-section">
      <h2 className="section-title">關於我們</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          品牌故事
        </a>
        <a className="page-link" href="#">
          媒體聯繫
        </a>
        <a className="page-link" href="#">
          Press kit
        </a>
      </div>
    </section>
  );
}

function FooterInfo() {
  return (
    <section className="footer-section">
      <h2 className="section-title">資訊</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          隱私權政策
        </a>
        <a className="page-link" href="#">
          Cookie
        </a>
        <a className="page-link" href="#">
          GDPR
        </a>
      </div>
    </section>
  );
}

function FooterSocial() {
 return (
   <section className="footer-section">
     <h2 className="section-title">追蹤 ALPHA Shop</h2>
     <div className="section-content">
       <div className="tel-info">+886 02123-45678</div>
       <div className="social-icon-group">
         <object
           data="./assets/facebook.svg"
           className="social-icon cursor-point"
         ></object>
         <object
           data="./assets/instagram.svg"
           className="social-icon cursor-point"
         ></object>
         <object
           data="./assets/whatsapp.svg"
           className="social-icon cursor-point"
         ></object>
       </div>
     </div>
   </section>
 );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <FooterLogo />
        <FooterService />
        <FooterAbout />
        <FooterInfo />
        <FooterSocial />
      </div>
    </footer>
  );
}