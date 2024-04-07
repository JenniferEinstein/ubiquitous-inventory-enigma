import React from 'react'

const AddNums = ({num1, num2}) => {

  return (
    <>
        <div className='add-nums'>
            <h3>Adding some numbers:</h3>
            {num1+num2}
        </div>
    </>
  )
}

export default AddNums