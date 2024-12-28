
import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked: "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upperCase!","success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowerCase!","success");
  }

  const handleCaClick = ()=>{
    let newText = text.trimStart(" ");
    setText(newText);
    props.showAlert(" Trim starting blank space!","success");
  }

  const handleRsClick = ()=>{
    let str1=text.split("");
    str1=str1.reverse();
    let str2=str1.join("");
    let newText = str2.toString();
    setText(newText)
    props.showAlert("Text reversed!","success");
  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied!","success");
  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" In-between extra spaces are removed!","success");
  }

  const handleClearText=()=>{
    let newT="";
    setText(newT);
    props.showAlert(" Text cleared!","success");
  }

  // const handleSpeak =()=>{
  //   let msg= newSpeechSynthesisUtterance();
  //   msg.text=text;
  //   window.speechSynthesis.speak(msg);
  // }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState(' ');
//  "#042743""#042743"

  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} id="myBox" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',
       color: props.mode==="dark"?"white":"#042743"}}></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-2" onClick={handleCaClick}>Remove start blank space</button>
     <button className="btn btn-primary mx-2" onClick={handleRsClick}>Reverse String</button>
     <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
     <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
     
     {/* <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak the text</button> */}
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length + text.split("\n").length-1} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <p>{text.split(".").length} Sentences</p>
      <p>{text.split("\n").length} Paragraph</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}