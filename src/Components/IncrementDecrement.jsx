import {useState} from "react";
import "./IncrementDecrement.css"


function ButtonIncrement(props) {
  
   return (
     
      <button className="minus" style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      -
      </button>
   )
}

function ButtonDecrement(props) {
  
  return (
    <button className="plus" style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     +
     </button>
  )
}

function Display(props) {
  return (
    <label className= "num"style={{ marginLeft: '.5rem'}} >{props.message}</label>
  )
}

function App() {
  const [counter, setCounter] = useState(1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if(counter<=1) {
    decrementCounter = () => setCounter(1);
    
  }
  if(counter>=10) {
    incrementCounter = () => setCounter(1);
    
  }


  return (
    <div> 
      <ButtonIncrement onClickFunc={decrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={incrementCounter}/>
    </div>
  );
}

export default App;

 