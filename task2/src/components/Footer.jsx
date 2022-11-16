import React from "react";
import "../styles/footer.css";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";
import teleg from "../assets/teleg.svg";
import Rights from "./Rights";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className="footer__left">
        <div className={"footer__wrap"}>
          <div>
            <h6 className={"footer__about"}>О КОМПАНИИ</h6>
            <p>Партнёрская программа</p>
            <p>Вакансии</p>
          </div>
        </div>
        <div className={"footer__wrap"}>
          <h6 className={"footer__about"}>МЕНЮ</h6>
          <div className={"footer__container"}>
            <div className={"footer__menu-wrap"}>
              <p>Расчёт стоимости</p>
              <p>Услуги</p>
              <p>Виджеты</p>
              <p>Интеграции</p>
              <p>Наши клиенты</p>
            </div>
            <div className={"footer__menu-wrap"}>
              <p>
                {window.innerWidth >= 630 ? "Кейсы" : "Благодарность клиентов"}
              </p>
              <p>
                {window.innerWidth >= 630 ? "Благодарственные письма" : "Кейсы"}
              </p>
              <p>Сертификаты</p>
              <p>Блог на Youtube</p>
              <p>Вопрос / Ответ</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"footer__right"}>
        <h6 className={"footer__about"}>КОНТАКТЫ</h6>
        <p>
          <span>+7 555 555-55-55</span>
        </p>
        <div className={"footer__contact-wrap"}>
          <img src={teleg} alt={"telegram"} className={"footer__contact"} />
          <img src={phone} alt={"phone"} className={"footer__contact"} />
          <img src={whatsapp} alt={"whatsapp"} className={"footer__contact"} />
        </div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <Rights />
      </div>
    </footer>
  );
};

export default Footer;
