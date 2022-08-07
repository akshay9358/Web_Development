// react arrow function component export
import React from 'react'

const Navbar = ({filterItem,Menulist}) => {
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        {
            // this will get all unique category and will create 
            // a button for each one of them
            Menulist.map((ele)=>{
                return (
                    /*  use fat-arrow function, so that it will not call itself again and again */
                    <button className="btn-group__item"onClick={() =>filterItem(ele)}> {ele} </button>
                );
            })
        }
      </div>
    </nav> 
    </>
  )
}

export default Navbar
