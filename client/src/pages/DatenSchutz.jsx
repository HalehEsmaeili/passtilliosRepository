import React, { useEffect, useState } from "react";

//import "./TeamPage.css";
import "./ContactPage.css";
import "./datenschutz.css";

import { useLanguageContext } from "../context/LanguageContext";
function Datenschutz() {
  const { t } = useLanguageContext();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{width:"90%",marginTop:"30%",marginLeft:"5%",marginRight:"5%"}}>
      <h1>{t("Datenschutzerklärung.title.h1")}</h1>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number1")}</strong>
      </p>
      <p className="datenschutzp">{t("Datenschutzerklärung.text.number1")}</p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number2")}</strong>
      </p>
      <p className="datenschutzp">{t("Datenschutzerklärung.text.number2")}</p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number3")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number3.a.obersatz")}
        <ul>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.1")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.2")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.3")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.4")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.5")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.6")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.7")}</li>
          <li>{t("Datenschutzerklärung.text.number3.a.erklärung.li.8")}</li>
        </ul>
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.text.number3.b.obersatz")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number3.b.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.text.number3.c.obersatz")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number3.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number4")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number4.a.obersatz")}
        {t("Datenschutzerklärung.text.number4.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number4.b.obersatz")}
        {t("Datenschutzerklärung.text.number4.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number4.c.obersatz")}
        {t("Datenschutzerklärung.text.number4.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number5")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number5.a.obersatz")}
        {t("Datenschutzerklärung.text.number5.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number5.b.obersatz")}
        {t("Datenschutzerklärung.text.number5.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number5.c.obersatz")}
        {t("Datenschutzerklärung.text.number5.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number6")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number6.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.text.number6.a.obersatz")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number6.a.erklärung")}
      </p>
      <ul>
        <li  className="datenschutzp">{t("Datenschutzerklärung.text.number6.a.erklärung.li.1")}</li>
        <li  className="datenschutzp">{t("Datenschutzerklärung.text.number6.a.erklärung.li.2")}</li>
        <li  className="datenschutzp">{t("Datenschutzerklärung.text.number6.a.erklärung.li.3")}</li>
        <li  className="datenschutzp">{t("Datenschutzerklärung.text.number6.a.erklärung.li.4")}</li>
        <li  className="datenschutzp">{t("Datenschutzerklärung.text.number6.a.erklärung.li.5")}</li>
      </ul>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.text.number6.b.obersatz")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number6.b.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.text.number6.c.obersatz")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number6.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number7")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number7.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number7.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number7.b.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number7.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number7.c.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number7.c.erklärung")}
      </p>

      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number8")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.c.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.d.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.e.erklärung")}
      </p>
      <ul>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number8.e.li1")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number8.e.li2")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number8.e.li3")}</li>
      </ul>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number8.e.erklärung2")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number9")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.b.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.c.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.c.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number9.d.obersatz")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number10")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number10.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number10.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number10.b.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number10.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number10.c.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number10.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number11")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number11.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number11.a.erklärung")}
      </p>
      <ul>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li1")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li2")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li3")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li4")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li5")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li6")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li7")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li8")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li9")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li10")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li11")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li12")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li13")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li14")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li15")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li16")}</li>
        <li className="datenschutzp">{t("Datenschutzerklärung.text.number11.a.li17")}</li>
      </ul>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number12")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.stark.number12.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number12.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number12.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number12.b.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number12.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number12.c.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number12.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number13")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number13.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number13.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number13.b.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number13.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number13.c.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number13.c.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number14")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.stark.number15")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.stark.number15.erklärung")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number16")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.text.number16")}
      </p>
      <p className="datenschutzpNum">
        <strong>{t("Datenschutzerklärung.title.stark.number17")}</strong>
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.stark.number17.erklärung.generell")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.stark.number17.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.title.stark.number17.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.a.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.a.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.b.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.b.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.c.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.c.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.d.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.d.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.e.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.e.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.f.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.f.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.g.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.g.erklärung")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.h.obersatz")}
      </p>
      <p className="datenschutzp">
        {t("Datenschutzerklärung.text.number17.h.erklärung")}
      </p>

    
     
     
    </div>
  );
}

export default Datenschutz;
