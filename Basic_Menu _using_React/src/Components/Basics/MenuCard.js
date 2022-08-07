// react arrow function component export
import React from 'react'

const MenuCard = ({Menudata}) => {
    console.log(Menudata);
    let style = {
        color : "blue"
    }
  return (
    <>
    <section className="main-card--cointainer">
    {
        Menudata.map((ele)=>{
            // destructuring
            const {id,image,name, category,price,description} = ele;
            return (
                <div className="card-container" key = {id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author subtle" style={style}> {category} </span>
                        <h2 className="card-title">{name}</h2>
                        <span className="description"> {description} </span>
                        <div className="card-read"> Price :  {price} </div>
                        <img src={image} alt="" className="src" />
                    </div>
                </div>
            </div>
            )
        })
        };
    </section>
    </>
  )
}

export default MenuCard