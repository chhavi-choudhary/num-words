import React, { useState } from 'react';
import './Word.css';
function Word() {
    const [num, setNum] = useState();
    const [result, setResult] = useState('');

    const handleNumChange = (event) => {
        setNum(event.target.value)
    }
    const handleResultChange = () => {
        setResult(convert(num));
    }
    const numToWords = (num) => {
        let units = ['', 'One', 'Two', 'Three', 'Four',
            'Five', 'Six', 'Seven', 'Eight', 'Nine',
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
            'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        let tens = ['', '', 'Twenty', 'Thirty', 'Forty',
            'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        let str = "";
        if (num === 0) {;
            return 0;
        }
        else if (num < 20) {
            str = units[num];
            return str;
        }
        else if (num >= 20 && num < 100) {
            str = tens[parseInt(num / 10)] + '-' + units[num % 10];
            return str;
        }
    }
    const convert = (num1) => {
        let str1 = "";
        if (num1 < 100) {
            str1 = numToWords(num1)
        }
        else if (num1 >= 100 && num1 < 1000) {
            if (num1 % 100 == 0) {
                str1 = numToWords(parseInt(num1 / 100)) + " " + "Hundred";
                return str1;
            }
            else {
                str1 = numToWords(parseInt(num1 / 100)) + " " + "Hundred and" + " " + convert(num1 % 100);
                return str1;
            }
        }
        else if (num1 >= 1000 && num1 <= 1999) {
            if (num1 % 100 == 0) {
                str1 = numToWords(parseInt(num1) / 100) + " " + "Hundred";
            }
            else {
                str1 = numToWords(parseInt(num1 / 100)) + " " + "Hundred and" + " " + convert(num1 % 100);
            }
            return str1;
        }
        else if (num1 >= 2000 && num1 < 9999) {
            if (num1 % 100 == 0) {
                str1 = numToWords(parseInt(num1) / 100) + " " + "Hundred";
            }
            else {
                str1 = numToWords(parseInt(num1 / 1000)) + " " + "Thousand and" + " " + convert(num1 % 1000);
            }
            return str1;
        }
        else if (num1 >= 1000 && num1 < 1000000) {
            if ((num1 / 1000) < 99) {
                if (num1 % 1000 == 0) {
                    str1 = numToWords(parseInt(num1 / 1000)) + " " + "Thousand ";
                    return str1;
                }
                else {
                    str1 = numToWords(parseInt(num1 / 1000)) + " " + "Thousand " + " " + convert(num1 % 1000);
                    return str1;
                }
            }
            else {
                let num_a = parseInt(num1 / 1000);
                let str2 = convert(num_a);
                if (num1 % 1000 == 0) {
                    str1 = str2 + " " + "Thousand";
                }
                else {
                    str1 = str2 + " " + " Thousand" + " " + convert(num1 % 1000);
                }
                return str1;
            }
        }
        else if (num1 >= 1000000 && num1 < 100000000) {
            if ((num1 / 1000000) < 99) {
                if (num1 % 1000000 == 0) {
                    str1 = numToWords(parseInt(num1 / 1000000)) + " " + " Million ";
                }
                else {
                    str1 = numToWords(parseInt(num1 / 1000000)) + " " + " Million " + convert(num1 % 1000000);
                    return str1;
                }
            }
            else {
                let num_a = parseInt(num1 / 1000000);
                let str2 = convert(num_a);
                if (num1 % 1000000 == 0) {
                    str1 = str2 + " " + " Million ";
                }
                else {
                    str1 = str2 + " " + " Million " + " " + convert(num1 % 1000000);
                }
                return str1;
            }
        }
        return str1;
    }
    return (
        <div className="Form">
            <h1> Convert Number in to Word </h1>
            <div className="input">
            <form>
                <label className="enter">Enter The Number:</label>
                <input className="number" type="text" input value={num}
                    onChange={handleNumChange} />
                <button type="button" className="submit-btn" onClick={handleResultChange}>Convert to Words 👆🏻</button>
            </form>
            </div>
            <div className="result">              
                    <h2>{result}</h2>           
            </div>
        </div>

    )
}
export default Word;