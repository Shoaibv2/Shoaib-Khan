import { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");
  const [textStyle, setTextStyle] = useState({
    fontWeight: "",
    fontStyle: "",
  });

  const dark = () => {
    document.querySelector(".body").style.backgroundColor = "black";
  };

  const upperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const bold = () => {
    setTextStyle({
      fontWeight: textStyle.fontWeight === "bold" ? "" : "bold",
      fontStyle: textStyle.fontStyle,
    });
  };

  const italic = () => {
    setTextStyle({
      fontStyle: textStyle.fontStyle === "italic" ? "" : "italic",
      fontWeight: textStyle.fontWeight,
    });
  };

  const clearText = () => {
    let newtext = setText("");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container mt-3">
      <h2>Enter Text Here</h2>
      <textarea
        className="form-control"
        value={text}
        id="textBox"
        rows="7"
        onChange={onChange}
      />
      <p className="border py-1 m-0 mb-1">
        {text.split(" ").length} words and {text.length} characters
      </p>
      <button className="btn btn-primary" onClick={upperCase}>
        Convert To UPPERCASE
      </button>
      <button className="btn btn-primary mx-2" onClick={lowerCase}>
        Convert To lowecase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear
      </button>
      <button className="btn btn-primary mx-2" onClick={speak}>
        Speak
      </button>
      <button className="btn btn-primary mx-2" onClick={bold}>
        Bold
      </button>
      <button className="btn btn-primary mx-2" onClick={italic}>
        Italic
      </button>
      <h3 className="mt-2">Preview</h3>
      <p style={textStyle}>{text}</p>
    </div>
  );
}
