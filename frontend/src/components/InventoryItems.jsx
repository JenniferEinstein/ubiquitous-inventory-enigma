    import React, {useState, useEffect} from 'react';
    // eslint-disable-next-line 
    import axios from 'axios';
    
    const InventoryItems = () => {


      // Setting the use state of a new items - all these fields, but empty
      const [item, setItem] = useState( {
        item_name : "",
        category : "",
        description : "",
        year_acquired : "",
        where_from : "",
        current : "",
        price : "",
        serial_number : "",
        notes : ""
    })

      // Setting the use state of a new items - all these fields, but empty
      const [fakeUser, setFakeUser] = useState({
        
          "name": "",
          "username": "",
          "email": "",
          "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
              "lat": "",
              "lng": ""
            }
          },
          "phone": "",
          "website": "",
          "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
          }
    
      })

      // For Fetching from the fake database
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log("API Response", response.json());
          })
        .then((data) => {
          console.log("data", data);
          setFakeUser(data);
        })
        .catch((error) => console.log(error))
    }, [])

      return (
        <div>
          <p>I am testing useEffect here.</p>
        </div>
      )
    }
    
    export default InventoryItems