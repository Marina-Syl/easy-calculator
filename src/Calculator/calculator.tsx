import { useState } from 'react'
import './calculator.css'

type Operator = "+" | "-" | "*" | "/"

export function Calc() {
    const [display, setDisplay] = useState('');
    const [num1, setNum1] = useState(0);
    const [operator, setOperator] = useState<Operator | null>(null);


    const numClick = (n: number) => {
        setDisplay(display => display + n)
    }

    const operatorClick = (oper: string) => {
        if (!display) return

        setOperator(oper as Operator)
        setDisplay("")
        setNum1(Number(display))
    }

    const sumClick = () => {
        if (num1 === null || operator === null || !display) {
            console.error("error")
            console.error(num1,operator,display)
            return
        }
        const num2 = Number(display)
        let summa= 0

        if (operator === "+") {
             summa = num1 + num2
        
        }
        if (operator === "-") {
            summa = num1 - num2
        
        }
        if (operator === "/") {
            summa = num1 / num2
            
        }
        if (operator === "*") {
            summa = num1 * num2
           
        }
        setDisplay(String(summa))
    }
    const resetClick = () => {
        setNum1(0);
        setDisplay("");
        setOperator(null);
    }

    return <>
        <div className="main-box">
            <div className="screen">
                {/* <input type="text"
                    className='width100'
                    value={record}
                    readOnly>
                </input> */}
                <input type="text"
                    className='width100'
                    value={display}
                    readOnly>
                </input>
                <div className="numbers">

                    <span onClick={() => numClick(1)}>1</span>
                    <span onClick={() => numClick(2)}>2</span>
                    <span onClick={() => numClick(3)}>3</span>
                    <span onClick={() => numClick(4)}>4</span>
                    <span onClick={() => numClick(5)}>5</span>
                    <span onClick={() => numClick(6)}>6</span>
                    <span onClick={() => numClick(7)}>7</span>
                    <span onClick={() => numClick(8)}>8</span>
                    <span onClick={() => numClick(9)}>9</span>
                    <span onClick={() => numClick(0)}>0</span>
                    <span onClick={() => operatorClick("+")}>+</span>
                    <span onClick={() => operatorClick("-")}>-</span>
                    <span onClick={() => operatorClick("/")}>/</span>
                    <span onClick={() => operatorClick("*")}>*</span>
                    <span onClick={sumClick}>=</span>
                    <span onClick={resetClick}>C</span>
                    {/* {num1 ? <p>{num1}</p> : <p></p>}
                    {operator ? <p>{operator}</p> : <p></p>}
                    {num2 ? <p>{num2}</p> : <p></p>} */}

                </div>
            </div>

        </div>

    </>
}