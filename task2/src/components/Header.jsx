import React from "react";
import "../styles/header.css";
import logo_part1 from "../assets/logo_part1.svg";
import logo_part2 from "../assets/logo_part2.svg";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";
import teleg from "../assets/teleg.svg";

const Header = () => {
  return (
    <header className={"header"}>
      <div className="header__logo_container">
        <div className={"header__logo-wrap"}>
          <img
            src={logo_part1}
            alt={"logo_part1"}
            className={"header__logo-part1"}
          />
          <img
            src={logo_part2}
            alt={"logo_part2"}
            className={"header__logo-part2"}
          />
        </div>
        <p className={"header__under-text"}>
          крупный интегратор CRM <br /> в Росcии и ещё 8 странах
        </p>
      </div>
      <menu className={"header__menu"}>
        <p className={"header__menu-item"}>Услуги</p>
        <p className={"header__menu-item"}>Виджеты</p>
        <p className={"header__menu-item"}>Интеграция</p>
        <p className={"header__menu-item"}>Кейсы</p>
        <p className={"header__menu-item"}>Сертификаты</p>
      </menu>
      <p className={"header__number"}>+7 555 555-55-55</p>
      <div className={"header__contacts"}>
        <img src={teleg} alt={"telegram"} className={"header__contact"} />
        <img src={phone} alt={"phone"} className={"header__contact"} />
        <img src={whatsapp} alt={"whatsapp"} className={"header__contact"} />
      </div>
    </header>
  );
};

export default Header;
