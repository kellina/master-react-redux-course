import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Greek",
    value: "el",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Portuguese",
    value: "pt",
  },
];
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Translate</h4>
      <div className="ui form">
        <div className="field">
          <label>Enter your text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
