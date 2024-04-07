
/*
Press the button to pitch the ball!:
button: pitch
Was the ball thrown yet?
We caught the ball!

===========

pseudocode/thoughts: 
I will need a button. The purpose of the button is to submit the form, so there needs to be a form. 
There needs to be a handleClick for the button.
use a ternary operator?

afterthoughts:  Most of what I thought was wrong. I didn't need to submit anything so it didn't need to be a form. The purpose of the button was just to change some text.  I thought I needed props, but I didn't.

In this case, <div> and <form> were interchangable. And while I didn't need onSubmit, I DID need onClick. 

I had to work backwards because I knew I needed useState but not really what I needed it for.

*/


import React, {useState} from 'react'

const StateAndProps = () => {
    const [buttonText, setButtonText] = useState("Was the ball thrown yet?");

    const handleClick = () => {
        setButtonText(buttonText==="Was the ball thrown yet?" ? "We caught the ball!" : "Was the ball thrown yet?")
    }

  return (
    <form className="form left bisque">

    <h1>Press the button to pitch the ball!:</h1>

    <button type="button" onClick={handleClick}>pitch</button>

        <p className='buttonText'>{buttonText}</p>

    </form>
  )
}

export default StateAndProps
