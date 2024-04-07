import React, { useState } from "react";

const CreateNewForm = () => {

  const [item, setItem] = useState({
    name: "",
    category: "",
    year_acquired: "1555",
    current:"Unsure",
    notes:""
  })

  const [current, setCurrent] = useState("Unsure")
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You pressed submit")
    fetch('http://localhost:8084/inventory/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    });
  }


  // changing handleTextChange so that I can use it with a drop down menu. Adding the const part and the id/value

  function handleTextChange(event){
    console.log(item);
    let change = event.target.value
    setItem({
      ...item,
      [event.target.id]: change
    })
  }

  
  function onCurrentChange(event) {
    const { value } = event.target;
    setItem(prevState => ({
      ...prevState,
      current: value
    }));
    console.log("onCurrentChange",item);
  }

  return (
    <form className="form new-item" onSubmit={handleSubmit}>
      <h1>Add Item</h1>
      <label htmlFor="name">Item:  
        <input type="text" value={item.name} id="name" onChange={handleTextChange}/>
      </label>
      <label htmlFor="category">Category:  
        <input type="text" value={item.category} id="category" onChange={handleTextChange}/>
      </label>
      <label htmlFor="year_acquired">Year:
        <input type="number" value={item.year_acquired} id="year_acquired" onChange={handleTextChange}/>
      </label>
      <label htmlFor="notes">Notes:
        <textarea id="notes" value={item.notes} onChange={handleTextChange}/>
      </label>
  
      <div className="dropdown question">
        <label htmlFor="current">Do you have this in your possession?</label>
        <select className="current" id="current" onChange={onCurrentChange}>
          <option value="">--select an option--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unsure">unsure</option>
        </select>
      </div>


      <div className="button-container">
        <button type="submit" className="submit-button button">submit</button>
      </div>

    </form>
  )
}

export default CreateNewForm


/* CODE I ENDED UP NOT USING

// import { useNavigate } from "react-router-dom";

// const API = process.env.REACT.env.REACT_APP_API_URL;

    // let navigate = useNavigate();

    // const [item, setItem] = useState({
    //     name: "",
    //     category: "",
    //     description: "",
    //     year_acquired: "",
    //     where_from: "",
    //     current:"",
    //     price:"",
    //     serial_number: "",
    //     notes:""
    // })v



OLD function
  function handleTextChange(event){
    console.log(item);
    let change = event.target.value
    setItem({
      ...item,
      [event.target.id]: change
    })
  }

*/