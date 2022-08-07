import React, { useState } from 'react'
import MenuCard from './MenuCard';
import Menu from './menuApi';
import "./Style.css";
import Navbar from './Navbar';

// used ... (spread operator) to get array of pure ele from array of obj.
const UniqueList = [...new Set(
  Menu.map((ele) => {
    return ele.category;
  })
),
];

UniqueList.push("All");

console.log(UniqueList);

const Restaurant = () => {
    // use state return array of two ele : alternative is redux
    const [MenuData, setMenuData]  = useState(Menu);
    const [Menulist, setMenulist]  = useState(UniqueList);

    // filterItem return all items of same category
    const filterItem = (Catogory) =>{
      // store category in Updated
      const Updated = Menu.filter((ele) => {
        if(ele.category === Catogory){
          return Catogory;
        }
      });
      // now update : here it will rewrite all menu data
      // for only given category
      setMenuData(Updated);

      if(Catogory == "All"){
        // means get all items
        setMenuData(Menu);
      }
    }
  return ( 
    <>
    <Navbar filterItem = {filterItem} Menulist = {Menulist}/>
    <MenuCard Menudata = {MenuData}/>
    </>
  )
}

export default Restaurant
