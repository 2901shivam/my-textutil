import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter the text");

  const chnageHandeler = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // console.log(text);
    // props.showAlert("Text converted into upperCase","Success")
  };
  const chnageloHandeler = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    // console.log(text);
    // props.showAlert("Text converted into lowerCase","Success")
  };

  const chnageclHandeler = () => {
    let newtext = "";
    setText(newtext);
  };

  const chnagereverseHandeler = () => {
    let newtext = text.split(" ");
    console.log(newtext.length);
    var str = "";
    for (var i = newtext.length - 1; i >= 0; i--) {
      str += newtext[i] + " ";
    }
    console.log(str);
    setText(str);
  };

  let textlength = text.length;
  let textword = text.split(" ");
  let textwordlength = textword.length;

  const changeHandel = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <label htmlFor="enteryourtext" className="form-label">
            Enter Your Text here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={changeHandel}
            style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={chnageHandeler}
        >
          Convert to upperCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={chnageloHandeler}
        >
          Convert to lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={chnageclHandeler}
        >
          Clear
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={chnagereverseHandeler}
        >
          Reverse words
        </button>
      </div>

      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>No of Words:{textwordlength}</p>
        <p>No of Character:{textlength}</p>
        <p>Mintus to Read:{0.008 * textwordlength}</p>
        <p>Priview:{text.length>0?text:'Write somethingh to preview your text'}</p>
      </div>
    </>
  );
};

export default TextForm;
