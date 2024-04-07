//a component that displays the inventory
// we need to get all of the data and then loop through it
// When should it get the data? It gets the data when the page loads.
// useEffect has two arguments. A callback function and a dependency array.

import React, {useState, useEffect} from 'react';

const InventoryIndex = () => {
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch('http://localhost:8084/inventory')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setInventory(data);
        })
        .catch((error) => console.log(error))
    }, []);

    
  return (
    <div className='inventory-index'>
        <section className='inventory-index'>
            <h1>Inventory</h1>
            <table className='table'>
                <thead>
                    <tr className='header table-row'>
                        <th className='table-cell header'>Name</th>
                        <th className='table-cell header'>Category</th>
                        <th className='table-cell header'>Year</th>
                        <th className='table-cell header'>Notes</th>
                        <th className='table-cell header'>Current?</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => {
                        return (<tr key={item.id} className='table-row'>
                            <td className='table-cell body '>
                                {item.name}
                            </td>
                            <td className='table-cell body'>
                                {item.category}
                            </td>
                            <td className='table-cell body'>
                                {item.year_acquired}
                            </td>
                            <td className='table-cell body'>
                                {item.notes}
                            </td>
                            <td className='table-cell body'>
                                {item.current}
                            </td>
                        </tr>
                    )})}

                </tbody>
            </table>
        </section>
    </div>
  )
}

export default InventoryIndex;



/*

                    <tr>
                        <td className='table-cell body '>Owned Thing</td>
                        <td className='table-cell body '>misc</td>
                        <td className='table-cell body '>2024</td>
                        <td className='table-cell body '>this is just a test</td>
                    </tr>
                    <tr>
                        <td className='table-cell body '>cow glass (4)</td>
                        <td className='table-cell body '>kitchen</td>
                        <td className='table-cell body '>1998</td>
                        <td className='table-cell body '>For milk. I got this in Vermont, from Dakin Farms</td>
                    </tr>
                    <tr>
                        <td className='table-cell body '>orange glass (2)</td>
                        <td className='table-cell body '>kitchen</td>
                        <td className='table-cell body '>2002</td>
                        <td className='table-cell body '>for orange juice</td>
                    </tr>


*/