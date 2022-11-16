import React from "react";
import "../styles/content.css";
import "../styles/button.css";
import Button from "./Button";
const Content = () => {
  let height = window.innerHeight;
  return (
    <main className="main">
      <div className="main__left">
        <h1 className="main__heading">
          Зарабатывайте больше{" "}
          <span className={"main__name"}>
            <br />c WELBEX
          </span>
        </h1>
        <h3 className="main__text">Развиваем и контролируем продажи за вас</h3>
      </div>
      <div className="main__right">
        <h3 className="main__gift">
          Вместе с{" "}
          <span className={"main__gift main__colored"}>БЕСПЛАТНОЙ </span>{" "}
          <span className={"main__gift main__colored"}>КОНСУЛЬТАЦИЕЙ </span>
          мы дарим:
        </h3>
        <div className="main__wrap">
          <div className="main__wrap-two">
            <div className={"main__left-div"}>
              <div className={"main__hidden"}>
                <div className={"tire"}></div>
                <h4>{window.innerWidth >= 630 ? "Виджеты" : "SKYPE АУДИТ"}</h4>
              </div>

              <h5>
                30 готовых <br /> решений
              </h5>
            </div>
            <div>
              <div className={"main__hidden"}>
                <div className={"tire"}></div>
                <h4>
                  {window.innerWidth >= 630 ? "DASHBOARD" : "30 ВИДЖЕТОВ"}
                </h4>
              </div>
              <h5>
                с показателями <br /> вашего бизнеса
              </h5>
            </div>
          </div>
          <div className="main__wrap-two">
            <div className={"main__left-div"}>
              <div className={"main__hidden"}>
                <div className={"tire"}></div>
                <h4>
                  {window.innerWidth >= 650 ? "SKYPE АУДИТ" : "DASHBOARD  "}
                </h4>
              </div>
              <h5>
                отдела продаж <br /> и CRM системы
              </h5>
            </div>
            <div>
              <div className={"main__hidden"}>
                <div className={"tire"}></div>
                <h4>{window.innerWidth >= 630 ? "35 ДНЕЙ" : "МЕСЯЦ AMOCRM"}</h4>
              </div>
              <h5>
                использования <br /> CRM
              </h5>
            </div>
          </div>
        </div>
        <Button />
      </div>
    </main>
  );
};

export default Content;
