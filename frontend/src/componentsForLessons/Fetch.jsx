// eslint-disable-next-line
import React, {useState, useEffect} from 'react'

function Fetch() {

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }, [])


/*  This is the same as....
    useEffect(async()=>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [])
*/

  return (
    <div>
        <hr></hr>
        <h4>{`Fetched? (See console)`}</h4>


    </div>
  )
}

export default Fetch


