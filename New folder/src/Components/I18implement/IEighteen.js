import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   en: {
    //     translation: 
    //   },
    //   hi: {
    //     translation: {
    //       "Welcome to React": "भाषा बदलो",
    //     },
    //   },
    // },
    // lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
    supportedLngs:["en","ac","fr"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "path", "subdomain"],
      caches:['cookie'],
    },
    backend:{
        loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react :{useSuspense:false},
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default function IEighteen() {
  const { t } = useTranslation();
  return (
    <>
      {/* <select
        style={{
          float: "right",
          padding: "5px",
          borderRadius: "10px",
          outline: "none",
          marginRight: "20px",
        }}
      >
        <option>English</option>
        <option>Hindi</option>
        <option>Arbic</option>
      </select> */}
      <h2>{t("Welcome_to_React")}</h2>
    </>
  );
}
