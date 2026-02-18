import { useState } from 'react'
import './calculator.css'

export function Calc() {
    const [display, setDisplay] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [summa, setSumma] = useState(0)
    const [operator, setOperator] = useState<string | null>(null)

    const numClick = (n: number) => {
        setDisplay(display => display + n)
        // setRecord(display => display + n)
    }

    const operatorClick = (o: string) => {
        if (display === "") {
            return
        }
        setNum1(Number(display))

        if (o === "+") {
            // setRecord(display => display + "+")
            setOperator("+")
        }
        if (o === "-") {
            // setRecord(display => display + "-")
            setOperator("-")
        }
        if (o === "/") {
            // setRecord(display => display + "/")
            setOperator("/")
        }
        if (o === "*") {
            // setRecord(display => display + "*")
            setOperator("*")
        }

        setDisplay("")
    }

    const sumClick = () => {
        if (num1 === null || operator === null) {
            console.log("error")
            return
        }

        setNum2(Number(display))

        if (operator === "+") {
            let summa = num1 + Number(display)
            setDisplay(String(summa))
            setSumma(summa)
        }
        if (operator === "-") {
            let summa = num1 + Number(display)
            setDisplay(String(summa))
            setSumma(summa)
        }
        if (operator === "/") {
            let summa = num1 + Number(display)
            setDisplay(String(summa))
            setSumma(summa)
        }
        if (operator === "*") {
            let summa = num1 + Number(display)
            setDisplay(String(summa))
            setSumma(summa)
        }

    }
    const resetClick = () => {
        setNum1(0)
        setNum2(0)
        setSumma(0)
        setDisplay("")
        setOperator("")
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
                {summa ? <span>{num1} {operator} {num2} = {summa} </span> : <span/>}
            </div>

        </div>

    </>
}