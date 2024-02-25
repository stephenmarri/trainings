import React, {useState} from 'react';
import PropTypes from 'prop-types';

let handleClick;
export default function TextForm(props){
    const handleOnChange = (event) =>{
        setTex(event.target.value);
    }

    const generateText = (leng = 10) =>{
        let result = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789';
        let charsLenght = chars.length;
        let counter = 0;
        while( counter < leng){
            counter++;
            result += chars.charAt(Math.floor(Math.random() * charsLenght));            
        }
        return result;
    }
    handleClick = funcValue => {
        console.log(`function triggerd: ${funcValue}`);
        props.showAlert(`function triggerd: ${funcValue}`,'Success')
        switch (funcValue.toLowerCase()) {
            case 'lcase':
                setTex(text.toLowerCase());
                break;
            
            case 'ucase':
                setTex(text.toUpperCase());
                break;
            case 'clear':
                setTex('');
                break;
            case 'generatetext':
                setTex(generateText(100));
                break;
            default:
                break;
        }
    }
    

    const [text, setTex] = useState("Enter Text Here...")
    return (
        <div className='container w-75'>
            <div className="form-floating">
            <h2>{props.heading}</h2>
            <textarea className="form-control h-75" value={text} onChange={handleOnChange} rows="5"></textarea>                
            <Button bname="Change to UCase" funcName="ucase"/>
            <Button bname="Change to LCase" funcName="lcase"/>
            <Button bname="Clear" funcName="clear"/>
            <Button bname="Create Text" funcName="generateText"/>
            </div>
            <h3>Your Text Summary</h3>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
    );
}

function Button({bname = "", funcName=""}){
    return(
        <button type="button" onClick={()=>handleClick(funcName)} className="btn btn-outline-primary my-3 mx-2">{bname}</button>  
    );
}

function countWords(word = ""){      
    let counter = 0;
    let arr = word.split(" ")
    for (const iterator of arr) {
       if(iterator.trim() != "") counter++;
    }    
    return counter;
}


TextForm.propTypes = {
    heading: PropTypes.string
};

TextForm.defaultProps = {
    heading: "Enter the text to be analysed"
};