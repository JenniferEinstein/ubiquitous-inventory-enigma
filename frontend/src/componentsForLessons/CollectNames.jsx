import React, {useState} from 'react'

const CollectNames = (props) => {
    const [name, setName] = useState("")


    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
        props.updateUser(name);
    }


  return (
    <form onSubmit={handleSubmit}>
        <label>
            Please enter your name:
            <input type="text" onChange={(event)=> setName(event.target.value)} />
        </label>
    </form>
  )
}

export default CollectNames