import React from 'react';

const Names = ({name, nickname, action}) => {
  return (
    <>

      <div className='names'>
          Call me {nickname}. My actual name is {name}. I enjoy {action}.
      </div>
    </>
  )
}

Names.propTypes = {}

export default Names