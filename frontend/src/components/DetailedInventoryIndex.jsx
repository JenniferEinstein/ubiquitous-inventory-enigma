//a component that displays the inventory
// we need to get all of the data and then loop through it
// When should it get the data? It gets the data when the page loads.
// useEffect has two arguments. A callback function and a dependency array.

import React, {useState, useEffect} from 'react';

const DetailedInventoryIndex = () => {
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch('http://localhost:8084/inventory')
        .then(response => response.json())
        .then(data => {
            console.log(data, inventory);
            setInventory(data);
        })
        .catch((error) => console.log(error))
    }, []);

    console.log(inventory)

    
  return (
    <div>
        <section>
            <h1>Detailed Inventory</h1>
            <table className='table'>
                <thead>
                    <tr className='header table-row'>
                        <th className='table-cell header'>name</th>
                        <th className='table-cell header'>category</th>
                        <th className='table-cell header'>description</th>
                        <th className='table-cell header'>year</th>
                        <th className='table-cell header'>Where from</th>
                        <th className='table-cell header'>current</th>
                        <th className='table-cell header'>price</th>
                        <th className='table-cell header'>serial number</th>
                        <th className='table-cell header'>notes</th>
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
                                {item.desc}
                            </td>
                            <td className='table-cell body'>
                                {item.year_acquired}
                            </td>
                            <td className='table-cell body '>
                                {item.fromwhere}
                            </td>
                            <td className='table-cell body'>
                                {item.current}
                            </td>
                            <td className='table-cell body'>
                                {item.price}
                            </td>
                            <td className='table-cell body'>
                                {item.serial_number}
                            </td>
                            <td className='table-cell body '>
                                {item.notes}
                            </td>
                        </tr>
                    )})}

                </tbody>
            </table>
        </section>
    </div>
  )
}

export default DetailedInventoryIndex;