import React, {useState, useEffect} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);

    const [counter2, setCounter2] = useState(0);

    function setToZero(){
        setCounter(0);
        setCounter2(0)
    }


    useEffect(()=>{
        console.log("useEffect in effect")
        console.log(counter)
    }, [counter])

  return (
    <div>
        <h1>Counter: {`${counter}`}</h1>
        <button type='button' className='orange' onClick={() => setCounter(counter+1)}>Count One</button>
        <h1>Other Counter: {`${counter2}`}</h1>
        <button type='button' className='orange' onClick={() => setCounter2(counter2+2)}>Count Two</button>
        <p></p>
        <button type='button' className='orange' onClick={setToZero}>Return to Zero</button>
    </div>
  )
}

export default Counter


