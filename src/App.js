import {useState} from "react"





function App() {
  const [calc ,setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*" , "+", "-", "."];


  const updateCalc = value =>{
    if(
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return;
      }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
/*  importante el eval sin eso no hace el calculo
 */  }


  const calculate = () => {
    if (result === "" ||  calc.isNaN  ){
      console.log ("error")
    }
    else {
      setCalc(eval(calc).toString());
      setResult("")

    }
  }
   
  const deleteLast = () => {
    if (calc === "") {
      return
    }
    const value = calc.slice(0, -1);
    setCalc (value)
  }

  const restartApp = () => {
    setCalc("")
    setResult("")
  }

  const createDigits =()=>{
    const digits = []
    for (let i = 1; i < 10; i++) {
     digits.push(
       <button 
              className="numbers"
              onClick={()=> updateCalc(i.toString())} 
              key={i}>

              {i}
        </button>
     )
    }
    return digits;
  }


  return (
    <div className="App">
        <div className='calculator'>
          <div className='display'>
              {result ? <span>({result})</span> : ""} 
              {calc || "0"}
          </div>
          <div className='operators'>
            <button onClick={restartApp}>AC</button>
            <button onClick={()=> updateCalc("/")}>/</button>
            <button onClick={()=> updateCalc("*")}>*</button>
            <button onClick={()=> updateCalc("+")}>+</button>
            <button onClick={()=> updateCalc("-")}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className='digits'>
            {createDigits()}
            <button className="numbers" onClick={()=> updateCalc("0")}>0</button>
            <button  className="numbers" onClick={()=> updateCalc(".")}>.</button>
            <button className="equal" onClick={calculate}>=</button>
          </div>
      </div>
    </div>
  );
}

export default App;
