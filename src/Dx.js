import React from 'react';

function Calculator() {
    function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;

        return [add, subtract, multiply, divide];
    }

    const [add, subtract, multiply, divide] = calculate(12, 17);

    return (

        <div>
            <center>
            <p>Sum: {add}</p>
            <p>Difference: {subtract}</p>
            <p>Product: {multiply}</p>
            <p>Quotient: {divide}</p>

            </center>
            
        </div>
    );
}

export default Calculator;
