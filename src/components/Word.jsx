import React, { useState } from 'react';
 function Word() {
     const[num, setNum] = useState(0);
     const[result, setResult]=useState('');
     
     const handleNumChange=(event)=>{
         setNum(event.target.value)
     }
     const handleResultChange=()=>{
         setResult(convert(num));
     }

    const numToWords = (num) => {
        let units = ['', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let tens = ['', '', 'twenty', 'thirty', 'forty',
            'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            let str = "";
    if (num === 0) {
        return 0;
    }
    else if (num < 20) {
        str = units[num];
        return str;
    }
    else if (num >= 20 && num < 100) {
        str = tens[parseInt(num / 10)] + '-' + units[num % 10]
        return str;
    }
}
const convert = (num1) => {
    let str1 = "";
    if (num1 < 100) {
        str1 = numToWords(num1)
    }
    else if (num1 >= 100 && num1 < 1000) {
        if (num1 % 100==0) {
            str1 = numToWords(parseInt(num1 / 100)) + " " + "Hundred";
            return str1;
        }
        else{
        str1 = numToWords(parseInt(num1 / 100)) + " " + "Hundred and" + " " + convert(num1 % 100);
        return str1;
    }
}

else if (num1 >= 1000 && num1 < 100000) {//Thousand
    if (num1 % 1000 == 0) {
        str1 = numToWords(parseInt(num1 / 1000)) + " " + "Thousand";
        return str1;
    }
    else {
        str1 = numToWords(parseInt(num1 / 1000)) + " " + "Thousand " + " " + convert(num1 % 1000);
        return str1;
    }
}
else if(num1>=100000 && num1<1000000){
    let num_a=parseInt(num1/1000)
    if(num1%1000==0){
        str1=convert(num_a)+" "+ "thousand";
    }
    else{
    str1=numToWords(parseInt(num_a/100))+" "+"Hundred and "+convert(num_a%100)+" "+" Thouand"+" "+convert(num1%1000);
    }
    return str1;
}
else if(num1>=1000000 && num1<10000000){
    let num_a=parseInt(num1/1000000);
    if(num1%1000000==0){
        str1=convert(num_a)+" "+ "million";
    }
    else{
        str1=convert(num_a)+" "+" million "+convert(num1%1000000);
    }
    return str1;
}
return str1;
 
}

    return (
        <div className="Form">
            <form>
                <label>Please Type a Number:</label>
                <input className="number" type="text" input value={num}
                onChange={handleNumChange}/>
                <button type="button" className="submit-btn" onClick={handleResultChange}>Convert to Words</button>
            </form>
            <div className="result">
                
                <h1>{result}</h1>
                </div>
        </div>
    )
}
export default Word;