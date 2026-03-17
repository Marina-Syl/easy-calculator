import { useState } from 'react'
import './calculator.css'

type Operator = "+" | "-" | "*" | "/" | "%";

export function Calc() {
    const [display, setDisplay] = useState('');
    const [num1, setNum1] = useState(0);
    const [operator, setOperator] = useState<Operator | null>(null);


    const numClick = (n: number | string) => {
        setDisplay(display => display + n)
    }

    const operatorClick = (oper:  Operator) => {
        if (!display) return;

        setOperator(oper);
        setDisplay("")
        setNum1(Number(display))
    }

    const sumClick = () => {
        if (operator === null || !display) {
            console.error("error")
            return
        }
        const num2 = Number(display)
        let summa = 0
        switch (operator) {
            case '+':
                summa = num1 + num2;
                break;
            case '-':
                summa = num1 - num2;
                break;
            case '/':
                summa = num1 / num2;
                break;
            case '*':
                summa = num1 * num2;
                break;
            case '%':
                summa = num1 % num2;
                break;
        }

        setDisplay(String(summa));
        setOperator(null);
    }
    const resetClick = () => {
        setNum1(0);
        setDisplay("");
        setOperator(null);
    }

    return <>
        <div className="main-box">
            <div className="screen">
                <input type="text"
                    className='width100'
                    value={display}
                    readOnly>
                </input>
                <div className="numbers">
                    <span onClick={resetClick}>(</span>
                    <span onClick={resetClick}>)</span>
                    <span onClick={resetClick}>%</span>
                    <span onClick={() => operatorClick("/")}>/</span>

                    <span onClick={() => numClick(7)}>7</span>
                    <span onClick={() => numClick(8)}>8</span>
                    <span onClick={() => numClick(9)}>9</span>
                    <span onClick={() => operatorClick("*")}>*</span>

                    <span onClick={() => numClick(4)}>4</span>
                    <span onClick={() => numClick(5)}>5</span>
                    <span onClick={() => numClick(6)}>6</span>
                    <span onClick={() => operatorClick("-")}>-</span>

                    <span onClick={() => numClick(1)}>1</span>
                    <span onClick={() => numClick(2)}>2</span>
                    <span onClick={() => numClick(3)}>3</span>
                    <span onClick={() => operatorClick("+")}>+</span>

                    <span onClick={resetClick}>C</span>
                    <span onClick={() => numClick(0)}>0</span>
                    <span onClick={() => numClick(".")}>.</span>
                    <span onClick={sumClick}>=</span>



                </div>
            </div>

        </div>

    </>
}