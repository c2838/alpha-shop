import logoImg from '../assets/logo.svg'
import fbImg from "../assets/facebook.svg";
import igImg from "../assets/instagram.svg";
import whImg from "../assets/whatsapp.svg";
import footerStyle from '../style/footer.module.css'

function FooterLogo () {
  return (
    <section className={footerStyle.footerSection}>
      <div className={footerStyle.footerLogoConatainer}>
        <img src={logoImg} className={footerStyle.footerLogo} />
      </div>
    </section>
  );
}

function FooterService() {
  return (
    <section className={footerStyle.footerSection}>
      <h2 className={footerStyle.sectionTitle}>客戶服務</h2>
      <div className={footerStyle.sectionContent}>
        <a className={footerStyle.pageLink} href="#">
          運送說明
        </a>
        <a className={footerStyle.pageLink} href="#">
          退換貨相關
        </a>
        <a className={footerStyle.pageLink} href="#">
          付款資訊
        </a>
        <a className={footerStyle.pageLink} href="#">
          FAQ
        </a>
      </div>
    </section>
  );
}

function FooterAbout() {
  return (
    <section className={footerStyle.footerSection}>
      <h2 className={footerStyle.sectionTitle}>關於我們</h2>
      <div className={footerStyle.sectionContent}>
        <a className={footerStyle.pageLink} href="#">
          品牌故事
        </a>
        <a className={footerStyle.pageLink} href="#">
          媒體聯繫
        </a>
        <a className={footerStyle.pageLink} href="#">
          Press kit
        </a>
      </div>
    </section>
  );
}

function FooterInfo() {
  return (
    <section className={footerStyle.footerSection}>
      <h2 className={footerStyle.sectionTitle}>資訊</h2>
      <div className={footerStyle.sectionContent}>
        <a className={footerStyle.pageLink} href="#">
          隱私權政策
        </a>
        <a className={footerStyle.pageLink} href="#">
          Cookie
        </a>
        <a className={footerStyle.pageLink} href="#">
          GDPR
        </a>
      </div>
    </section>
  );
}

function FooterSocial() {
 return (
   <section className={footerStyle.footerSection}>
     <h2 className={footerStyle.sectionTitle}>追蹤 ALPHA Shop</h2>
     <div className={footerStyle.sectionContent}>
       <div className={footerStyle.telInfo}>+886 02123-45678</div>
       <div className={footerStyle.socialIconGroup}>
         <object data={fbImg} className={footerStyle.socialIcon}></object>
         <object data={igImg} className={footerStyle.socialIcon}></object>
         <object data={whImg} className={footerStyle.socialIcon}></object>
       </div>
     </div>
   </section>
 );
}

export default function Footer() {
  return (
      <div className={footerStyle.footerContainer}>
        <FooterLogo />
        <FooterService />
        <FooterAbout />
        <FooterInfo />
        <FooterSocial />
      </div>
  );
}