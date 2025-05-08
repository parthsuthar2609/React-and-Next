import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "", text: "Option" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "gu", text: "Gujarati" },
];

const Language = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    if (selectedLang) {
      setLang(selectedLang);
      i18n.changeLanguage(selectedLang);
      localStorage.setItem("i18nextLng", selectedLang);
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, [i18n]);

  return (
    <div className="flex items-center text-white space-x-2">
      <label htmlFor="language" className="font-montserrat font-medium text-amber-50 text-center">
        {t("MyApi")}
      </label>
      <span className="font-montserrat font-bold text-amber-50 text-center pl-3 hover:underline underline-offset-4 cursor-pointer">
         {t("MyExommerce")}
          </span>
      <select  
        id="language"
        value={lang}
        onChange={handleChange}
        className="bg-black text-white border border-none rounded px-2 py-1 text-sm font-montserrat font-bold mb-1 ml-16 focus-none"
      >
        {languages.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Language;
