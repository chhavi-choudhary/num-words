import React from 'react'

export default function Word() {
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
    }

    return (
        <div>
            
        </div>
    )
}
