import React from 'react'

const ModalWrapper = (props) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen ${props.position!== null && props.position !== "center" ? "" : "flex"} flex justify-end items-center z-50`}>
      <div className='backdrop absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 '></div>
      {props.children}
    </div>
  );
}

export default ModalWrapper
