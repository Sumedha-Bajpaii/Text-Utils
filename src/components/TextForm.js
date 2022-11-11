import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
        
        let count = text.length;
        if(count == 0){
            setChars(0);
            setWords(0);
        }
        else{
            setChars(count);
            setWords(text.split(" ").length);
        }
    }
    
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleTiClick = () =>{
        let newText = "";
        let arr = text.split(" ");
        let newArr = [];

        arr.forEach( (val) => {
            let cap = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() ;
            newArr.push(cap);
        })

        newText = newArr.join(" ");
        setText(newText);
    }

    const handleClear = () =>{
        let newText = '';
        setText(newText);
    }

    const handleExtraSpace = () =>{
        let arr = text.split(/[ ]+/);
        let newText = arr.join(" ");
        setText(newText);
    }

    const [text, setText] = useState('');
    const [words, setWords] = useState(0);
    const [chars, setChars] = useState(0);

    return (
        <>
        <div className="conatainer"  >
            <h1 className='mt-3' style={{color: props.mode=='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='light'?'#f2eeff':'grey', color: props.mode=='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleTiClick} >Convert to Titlecase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClear} >Clear Text</button>
            

            {/* find replace */}
            {/* //To find the the no. of occurrences of a given word or letter in the text  */}

        </div>

        <div className="container my-3" style={{color: props.mode=='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{words} words and {chars} characters</p>
            <p>{words*(.008)} minutes read</p>
        </div>
        </>
  )
}
