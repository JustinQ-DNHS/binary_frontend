---
layout: post
title: Binary Calculator
search_exclude: true
description: Binary Calculator
hide: true
---

<style>
    /* General Table and Cell Styles */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        font-family: Arial, sans-serif;
    }

    th, td {
        text-align: center;
        vertical-align: middle;
        padding: 12px;
        border: 2px solid #333;
    }

    th {
        background-color: #4CAF50;
        color: white;
    }

    td {
        background-color: #f2f2f2;
    }

    /* Button Styles */
    .calc-button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .calc-button:hover {
        background-color: #0056b3;
    }

    .button {
        padding: 10px;
        font-size: 16px;
        color: white;
        background-color: #28a745;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .button:active {
        background-color: #218838;
    }

    .button.off {
        background-color: #dc3545;
    }

    .button.off:active {
        background-color: #c82333;
    }

    /* Input Field Styles */
    input[type="text"] {
        width: 40px;
        height: 40px;
        text-align: center;
        font-size: 20px;
        background-color: #e9ecef;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: #333;
    }

    /* Image and Bulb Styles */
    img {
        width: 40px;
        height: auto;
        transition: opacity 0.3s ease;
    }

    /* Turned on Bulb Effect */
    img.on {
        opacity: 1;
    }

    img.off {
        opacity: 0.5;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        table {
            width: 100%;
            font-size: 14px;
        }

        .calc-button {
            padding: 8px;
            font-size: 16px;
        }

        .button {
            font-size: 14px;
        }

        input[type="text"] {
            width: 30px;
            height: 30px;
            font-size: 18px;
        }
    }
</style>

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
            <td><div class="calc-button" id="add1" onclick="add(1)">+1</div></td>
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
            <th><img id="bulb0" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt0" onclick="javascript:toggleBit(0)">Turn on</div>
            </th>
            <th><img id="bulb1" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt1" onclick="javascript:toggleBit(1)">Turn on</div>
            </th>
            <th><img id="bulb2" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt2" onclick="javascript:toggleBit(2)">Turn on</div>
            </th>
            <th><img id="bulb3" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt3" onclick="javascript:toggleBit(3)">Turn on</div>
            </th>
            <th><img id="bulb4" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt4" onclick="javascript:toggleBit(4)">Turn on</div>
            </th>
            <th><img id="bulb5" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt5" onclick="javascript:toggleBit(5)">Turn on</div>
            </th>
            <th><img id="bulb6" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt6" onclick="javascript:toggleBit(6)">Turn on</div>
            </th>
            <th><img id="bulb7" src="/portfolio_2025/images/bulb_off.png" alt="" class="off" />
                <div class="button off" id="butt7" onclick="javascript:toggleBit(7)">Turn on</div>
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
    const IMAGE_OFF = "/portfolio_2025/images/bulb_off.png";

    function getBits() {
        let bits = "";
        for (let i = 0; i < BITS; i++) {
            bits = bits + document.getElementById('digit' + i).value;
        }
        return bits;
    }

    function setConversions(binary) {
        document.getElementById('binary').innerHTML = binary;
        document.getElementById('octal').innerHTML = parseInt(binary, 2).toString(8);
        document.getElementById('hexadecimal').innerHTML = parseInt(binary, 2).toString(16);
        document.getElementById('decimal').innerHTML = parseInt(binary, 2).toString();
    }

    function decimal_2_base(decimal, base) {
        let conversion = "";
        do {
            let digit = decimal % base;
            conversion = "" + digit + conversion;
            decimal = ~~(decimal / base);
        } while (decimal > 0);

        if (base === 2) {
            for (let i = 0; conversion.length < BITS; i++) {
                conversion = "0" + conversion;
            }
        }
        return conversion;
    }

    function toggleBit(i) {
        const dig = document.getElementById('digit' + i);
        const image = document.getElementById('bulb' + i);
        const butt = document.getElementById('butt' + i);

        if (image.src.match(IMAGE_ON)) {
            dig.value = 0;
            image.src = IMAGE_OFF;
            butt.innerHTML = MSG_ON;
            butt.classList.add('off');
        } else {
            dig.value = 1;
            image.src = IMAGE_ON;
            butt.innerHTML = MSG_OFF;
            butt.classList.remove('off');
        }

        const binary = getBits();
        setConversions(binary);
    }

    function add(n) {
        let binary = getBits();
        let decimal = parseInt(binary, 2);
        if (n > 0) {
            decimal = MAX === decimal ? 0 : decimal += n;
        } else {
            decimal = 0 === decimal ? MAX : decimal += n;
        }

        binary = decimal_2_base(decimal, 2);
        setConversions(binary);

        for (let i = 0; i < binary.length; i++) {
            let digit = binary.substr(i, 1);
            document.getElementById('digit' + i).value = digit;
            if (digit === "1") {
                document.getElementById('bulb' + i).src = IMAGE_ON;
                document.getElementById('butt' + i).innerHTML = MSG_OFF;
                document.getElementById('butt' + i).classList.remove('off');
            } else {
                document.getElementById('bulb' + i).src = IMAGE_OFF;
                document.getElementById('butt' + i).innerHTML = MSG_ON;
                document.getElementById('butt' + i).classList.add('off');
            }
        }
    }
</script>
