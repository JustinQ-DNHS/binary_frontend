---
layout: post
title: Binary Calculator
search_exclude: true
description: Binary Calculator
hide: true
---

<style>
    body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(135deg, #1e1e2f, #2b5876);
        color: #fff;
        text-align: center;
        padding: 30px;
    }

    table {
        margin: 30px auto;
        border-collapse: collapse;
        width: 85%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    th, td {
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    th {
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffcc00;
        font-size: 20px;
        text-transform: uppercase;
    }

    .calc-button {
        padding: 12px 25px;
        background: linear-gradient(135deg, #ff512f, #dd2476);
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        transition: transform 0.3s ease, background 0.3s ease;
        font-weight: bold;
    }

    .calc-button:hover {
        transform: scale(1.1);
        background: linear-gradient(135deg, #dd2476, #ff512f);
    }

    .button {
        padding: 7px 15px;
        background: linear-gradient(135deg, #2193b0, #6dd5ed);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: transform 0.3s ease, background 0.3s ease;
    }

    .button:hover {
        transform: scale(1.1);
        background: linear-gradient(135deg, #6dd5ed, #2193b0);
    }

    input[type="text"] {
        width: 50px;
        text-align: center;
        font-size: 16px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
        padding: 5px;
    }

    #binary, #octal, #hexadecimal, #decimal {
        font-size: 18px;
        font-weight: bold;
        color: #ffcc00;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }

    img {
        margin: 10px 0;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    #add1, #sub1 {
        margin-top: 15px;
    }

    #add1 {
        margin-right: 20px;
    }

    tbody tr:last-child td {
        border-top: none;
    }

    thead th img {
        display: block;
        margin: 0 auto 10px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .header {
        color: #ffcc00;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
</style>

<script>
        async function incrementCounter() {
            try {
                console.log('Button pressed! Sending POST request...');
                const response = await fetch('http://127.0.0.1:5000/increment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Response:', data);
                    document.getElementById('counter').innerText = `Counter: ${data.value}`;
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
</script>

<table>
    <thead>
        <tr class="header" id="table">
            <th>Plus</th>
            <th>Binary</th>
            <th>Octal</th>
            <th>Hexadecimal</th>
            <th>Decimal</th>
            <th>Minus</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><div class="calc-button" onclick="incrementCounter()">+1</div></td>
            <td id="binary">00000000</td>
            <td id="octal">0</td>
            <td id="hexadecimal">0</td>
            <td id="decimal">0</td>
            <td><div class="calc-button" id="sub1" onclick="add(-1)">-1</div></td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th><img id="bulb0" alt="" width="40" height="Auto" />
                <div class="button" id="butt0" onclick="javascript:toggleBit(0)">Turn on</div>
            </th>
            <th><img id="bulb1" alt="" width="40" height="Auto" />
                <div class="button" id="butt1" onclick="javascript:toggleBit(1)">Turn on</div>
            </th>
            <th><img id="bulb2" alt="" width="40" height="Auto" />
                <div class="button" id="butt2" onclick="javascript:toggleBit(2)">Turn on</div>
            </th>
            <th><img id="bulb3" alt="" width="40" height="Auto" />
                <div class="button" id="butt3" onclick="javascript:toggleBit(3)">Turn on</div>
            </th>
            <th><img id="bulb4" alt="" width="40" height="Auto" />
                <div class="button" id="butt4" onclick="javascript:toggleBit(4)">Turn on</div>
            </th>
            <th><img id="bulb5" alt="" width="40" height="Auto" />
                <div class="button" id="butt5" onclick="javascript:toggleBit(5)">Turn on</div>
            </th>
            <th><img id="bulb6" alt="" width="40" height="Auto" />
                <div class="button" id="butt6" onclick="javascript:toggleBit(6)">Turn on</div>
            </th>
            <th><img id="bulb7" alt="" width="40" height="Auto" />
                <div class="button" id="butt7" onclick="javascript:toggleBit(7)">Turn on</div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="text" id="digit0" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit1" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit2" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit3" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit4" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit5" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit6" value="0" size="1" readonly="" /></td>
            <td><input type="text" id="digit7" value="0" size="1" readonly="" /></td>
        </tr>
    </tbody>
</table>

<script>
    const BITS = 8;
    const MAX = 2 ** BITS - 1;
    const MSG_ON = "Turn on";
    const IMAGE_ON = "/portfolio_2025/images/bulb_on.gif";
    const MSG_OFF = "Turn off";
    const IMAGE_OFF = "/portfolio_2025/images/bulb_off.png"

    // return string with current value of each bit
    function getBits() {
        let bits = "";
        for(let i = 0; i < BITS; i++) {
            bits = bits + document.getElementById('digit' + i).value;
        }
        return bits;
    }
    // setter for Document Object Model (DOM) values
    function setConversions(binary) {
        document.getElementById('binary').innerHTML = binary;
        // Octal conversion
        document.getElementById('octal').innerHTML = parseInt(binary, 2).toString(8);
        // Hexadecimal conversion
        document.getElementById('hexadecimal').innerHTML = parseInt(binary, 2).toString(16);
        // Decimal conversion
        document.getElementById('decimal').innerHTML = parseInt(binary, 2).toString();
    }
    // convert decimal to base 2 using modulo with divide method
    function decimal_2_base(decimal, base) {
        let conversion = "";
        // loop to convert to base
        do {
            let digit = decimal % base;           // obtain right most digit
            conversion = "" + digit + conversion; // what does this do? inserts digit to front of string
            decimal = ~~(decimal / base);         // what does this do? divides by base what is ~~? force whole number
        } while (decimal > 0);                    // why while at the end? 0 pads front of binary number
            // loop to pad with zeros
            if (base === 2) {                     // only pad for binary conversions
                for (let i = 0; conversion.length < BITS; i++) {
                    conversion = "0" + conversion;
            }
        }
        return conversion;
    }
    // toggle selected bit and recalculate
    function toggleBit(i) {
        //alert("Digit action: " + i );
        const dig = document.getElementById('digit' + i);
        const image = document.getElementById('bulb' + i);
        const butt = document.getElementById('butt' + i);
        // Change digit and visual
        if (image.src.match(IMAGE_ON)) {
            dig.value = 0;
            image.src = IMAGE_OFF;
            butt.innerHTML = MSG_ON;
        } else {
            dig.value = 1;
            image.src = IMAGE_ON;
            butt.innerHTML = MSG_OFF;
        }
        // Binary numbers
        const binary = getBits();
        setConversions(binary);
    }
    // add is positive integer, subtract is negative integer
    function add(n) {
        let binary = getBits();
        // convert to decimal and do math
        let decimal = parseInt(binary, 2);
        if (n > 0) {  // PLUS
            decimal = MAX === decimal ? 0 : decimal += n; // OVERFLOW or PLUS
        } else  {     // MINUS
            decimal = 0 === decimal ? MAX : decimal += n; // OVERFLOW or MINUS
        }
        // convert the result back to binary
        binary = decimal_2_base(decimal, 2);
        // update conversions
        setConversions(binary);
        // update bits
        for (let i = 0; i < binary.length; i++) {
            let digit = binary.substr(i, 1);
            document.getElementById('digit' + i).value = digit;
            if (digit === "1") {
                document.getElementById('bulb' + i).src = IMAGE_ON;
                document.getElementById('butt' + i).innerHTML = MSG_OFF;
            } else {
                document.getElementById('bulb' + i).src = IMAGE_OFF;
                document.getElementById('butt' + i).innerHTML = MSG_ON;
            }
        }
    }
</script>
