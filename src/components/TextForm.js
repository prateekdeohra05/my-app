import React, {useState} from 'react';

export default function TextForm(props) {
  
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
        const [text, setText] = useState('');
const handleDownloadTxtClick = ()=>{
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); 
    element.click();
    props.showAlert('.txt file is downloading....');
}

const handleUpClick = ()=>{
    setText(text.toUpperCase())
    props.showAlert('CONVERTED TO UPPERCASE.');
  }
  const handleLowClick = ()=>{
      setText(text.toLowerCase())
      props.showAlert('converted to lower case.');
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleared!!');
  }
  const handleCapitaliseWordClick = ()=>{
    let newText = "";
    let wordArray = text.split(" ");
    for(let i=0; i<text.split(" ").length-1;i++){
      newText += (wordArray[i].charAt(0).toUpperCase()+ wordArray[i].slice(1) + " ");
    }
    newText += (wordArray[text.split(" ").length-1].charAt(0).toUpperCase()+ wordArray[text.split(" ").length-1].slice(1));
    setText(newText);
    props.showAlert('Each Word Is Capitalised.');
  }
  const handleCapitaliseSentenceClick = ()=>{
    let newText = "";
    let sentenceArray = text.split(". ");
    for(let i=0; i<text.split(". ").length-1;i++){
      newText += (sentenceArray[i].charAt(0).toUpperCase()+ sentenceArray[i].slice(1) + ". ");
    }
    newText += (sentenceArray[text.split(". ").length-1].charAt(0).toUpperCase()+ sentenceArray[text.split(". ").length-1].slice(1));
    setText(newText);
    props.showAlert('Each sentence is capitalised.');
  }
  var numberOfWords=0;
  var numberOfChars;
  var timeToRead;
  if(text===''){
    numberOfWords = 0;
    numberOfChars = 0;
    timeToRead=0;
  }
  else{
     
    if(text===''){
      numberOfWords = 0;
      numberOfChars = 0;
      timeToRead=0;}
      else{
        var wordArray = text.split(/\s+/);
        for(let i=0;i<text.split(/\s+/).length;i++){
          if(wordArray[i]!==''){
            numberOfWords++;
          }
        }
        numberOfChars = text.length;}
        timeToRead = 0.08*numberOfWords;
      }
     const handleCopyClick = ()=>{ 
  navigator.clipboard.writeText(text);
  props.showAlert('Text is copied to Clipboard.');
     }
 const handleRemoveExtraSpacesClick = ()=>{
       let textArray = text.split(" ");
       let newText="";
       
       for( let i=0;i<text.split(" ").length-1;i++){
        if(textArray[i]!=="") {newText += (textArray[i] + " ");}
       }
       newText+= textArray[text.split(" ").length-1];
       
       setText(newText.trim());
       props.showAlert('Extra spaces are removed.');
     }
     const handleSelectedUpClick =()=>{
       var textarea = document.getElementById("myBox");
  
       var len = textarea.value.length;
       var start = textarea.selectionStart;
       var end = textarea.selectionEnd;
       var sel = textarea.value.substring(start, end); 
       let replace = sel.toUpperCase();
     
    
     setText(textarea.value.substring(0,start) + replace + textarea.value.substring(end,len));
     props.showAlert('SELECTED TEXT IS CONVERTED TO UPPERCASE.');
     }
     const handleSelectedLowClick=()=>{
      var textarea = document.getElementById("myBox");
  
      var len = textarea.value.length;
      var start = textarea.selectionStart;
      var end = textarea.selectionEnd;
      var sel = textarea.value.substring(start, end); 
       let replace = sel.toLowerCase();
     
   
     setText(textarea.value.substring(0,start) + replace + textarea.value.substring(end,len));
     props.showAlert('selected text is converted to lowercase.')
     }
      const handleSelectedCapitaliseEachWordClick=()=>{
        var textarea = document.getElementById("myBox");
  
        var len = textarea.value.length;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var sel = textarea.value.substring(start, end); 
        let replace = "";
    let wordArray = sel.split(" ");
    for(let i=0; i<sel.split(" ").length-1;i++){
      replace += (wordArray[i].charAt(0).toUpperCase()+ wordArray[i].slice(1) + " ");
    }
    replace += (wordArray[sel.split(" ").length-1].charAt(0).toUpperCase()+ wordArray[sel.split(" ").length-1].slice(1));
    setText(textarea.value.substring(0,start) + replace + textarea.value.substring(end,len));
    props.showAlert('Each Word In Selected Text Is Capitalised.');
      }
      const handleSelectedCapitaliseEachSentenceClick=()=>{
        var textarea = document.getElementById("myBox");
  
        var len = textarea.value.length;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var sel = textarea.value.substring(start, end); 
        let replace = "";
        let sentenceArray = sel.split(". ");
    for(let i=0; i<sel.split(". ").length-1;i++){
      replace += (sentenceArray[i].charAt(0).toUpperCase()+ sentenceArray[i].slice(1) + ". ");
    }
    replace += (sentenceArray[sel.split(". ").length-1].charAt(0).toUpperCase()+ sentenceArray[sel.split(". ").length-1].slice(1));
    setText(textarea.value.substring(0,start) + replace + textarea.value.substring(end,len));
    props.showAlert('Each sentence in selected text is capitalised.');
      }

    return (
        <>
        <div className="bodyContainer" >
        <div className="textFormContainer mx-5">
            <h6 className={` text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h6>
    <div className="mb-3">
  <textarea  className={`form-control text-${props.mode==='light'?'dark':'light'}`}  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    </div>
    <div >
    <div className="btnContainer" >
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleLowClick}>convert to lowercase</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleClearClick}>Clear Text</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleCapitaliseWordClick}>Capitalise Each Word</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleCapitaliseSentenceClick}>Capitalise each sentence</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleDownloadTxtClick}>Download Text</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleCopyClick}>Copy Text</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleRemoveExtraSpacesClick}>Remove Extra        Spaces</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleSelectedUpClick}>SELECTED TEXT TO UPPERCASE</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleSelectedLowClick}>selected text to lowercase</button>
      <button disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleSelectedCapitaliseEachWordClick}>Capitalise Each Word In Selected Text</button>
      <button  disabled={ text.length===0} className={`btn rounded btn-primary action-btn mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} onClick={handleSelectedCapitaliseEachSentenceClick}>Capitalise each sentence in selected text</button>
</div>
</div>
</div>
<div className={`mx-3  textFormContainer container my-3 text-${props.mode==='light'?'dark':'light'}`} >
    <h3 className="underlinedHeading" >Text Summary</h3>
    <h6 className="textSummary"><span> {numberOfWords} words &nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;{numberOfChars} characters&nbsp; &nbsp;</span>|<span>&nbsp;&nbsp;{timeToRead} minutes to read </span></h6>
    
    <h3 className="underlinedHeading">Preview</h3>
    <p id='previewText'>{text.length>0?text:'Nothing to Preview!!'}</p>
</div>
</>
    )
}
