import { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("light");

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  const [textStyle, setTextStyle] = useState({
    fontWeight: "",
    fontStyle: "",
  });

  const upperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
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
    text = setText("");
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
      <div class="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          mode={mode}
          ToggleMode={ToggleMode}
        />
      </div>
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
        Convert To lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={copyText}>
        Copy Text
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
