import "./calculator.css";
import React, { useState } from "react";



function Calculator() {

    const [value, setValue] = useState(0);
    const [oldValue, setOldValue] = useState(0);
    const [operator, setOperator] = useState();

    function inputValue(e) {
        const input = e.target.value;
        if(input === '.' && value.includes('.')) {
            return
        }
            if (value === 0) {
                setValue(input);
            } else {
                setValue(value + input);
            }
    }

    function clearMemory() {
        setValue(0);
    }

    function porcentage() {
        setValue(value / 100);
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldValue(value);
        setValue(0);
    }

    function changeSign() {

        if (value > 0) {
            setValue(-value);
        } else {
            setValue(Math.abs(value));
        }
    }


    function calculate() {
        
        if (operator === "/") {
            setValue(parseFloat(oldValue) / parseFloat(value));
        } else if (operator === "X") {
            setValue(parseFloat(oldValue) * parseFloat(value));
        } else if (operator === "-") {
            setValue(parseFloat(oldValue) - parseFloat(value));
        } else if (operator === "+") {
            setValue(parseFloat(oldValue) + parseFloat(value));
        }
    }

  return <>
        
        <div className="calculator">
          
            <h1 className="result">{value}</h1>
            <button onClick={clearMemory}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className="orange" onClick={operatorHandler} value="/">/</button>
            <button className="gray" onClick={inputValue} value={7}>7</button>
            <button className="gray" onClick={inputValue} value={8}>8</button>
            <button className="gray" onClick={inputValue} value={9}>9</button>
            <button className="orange" onClick={operatorHandler} value="X">X</button>
            <button className="gray" onClick={inputValue} value={4}>4</button>
            <button className="gray" onClick={inputValue} value={5}>5</button>
            <button className="gray" onClick={inputValue} value={6}>6</button>
            <button className="orange" onClick={operatorHandler} value="-">-</button>
            <button className="gray" onClick={inputValue} value={1}>1</button>
            <button className="gray" onClick={inputValue} value={2}>2</button>
            <button className="gray" onClick={inputValue} value={3}>3</button>
            <button className="orange" onClick={operatorHandler} value="+">+</button>
            <button className="gray" onClick={inputValue} value={0}>0</button>
            <button className="gray" onClick={inputValue} value={"."}>,</button>
            <button className="gray" style={{ visibility: "hidden" }}>,</button>
            <button className="orange" onClick={calculate}>=</button>
        </div>
  </>
}

export default Calculator;


/*
const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


function Calculadora(){
    
    const [state, setState] = useState({ ...initialState })

    const [memory, setMemory] = useState(null);
    const [operation, setOperation] = useState(null);
    const [currentValue, setCurrentValue] = useState('');

    const clearMemory = () => {
        setState({ ...initialState })
    }

    const setOperation = (operation) => {
        if(state.current === 0){
            setState({ operation, current: 1,clearDisplay: true})
        } else {
            const equals = operation === "="
            const currentOperation = state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    const addDigit = (n) => {
        if(n === '.' && state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = state.displayValue === "0" || state.clearDisplay;
        const currentValue = clearDisplay ? '' : state.displayValue;
        const displayValue = currentValue + n 
        setState({ displayValue, clearDisplay: false })


        if(n !== '.'){
            const i = state.current
            const newValue = parseFloat(displayValue)
            const values = [...state.values] 
            values[i] = newValue
            setState({ values })
            console.log(values)
        }
    }
 */