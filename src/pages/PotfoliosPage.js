import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from "../Components/Tittle";
import portfolios from "../Components/AllPortfolios";
import {useState} from 'react';


const allCategories  = ['All' , ...new Set(portfolios.map(item => item.category ))];
console.log(allCategories);


function PotfoliosPage() {
    
    const [categories,setcategories] = useState(allCategories);
    const [menuItems,setMenuItems] = useState(portfolios);

    //create filter method
    const filter = (category) =>{
      if (category === 'All'){
        setMenuItems(portfolios)
        return;
      }
      const filterdData = portfolios.filter((item)=>{
        return item.category === category;
      })
      setMenuItems(filterdData);
    }

  return (
    <div className='PortfolioPage'>
        
      <div className="titel"> 
         <Tittle tittel={"Portfolios"} span={"Portfolios"} />
      </div>

      <div className="portfolios-data">
          <Categories filter={filter} categories={categories}/> 
          <MenuItems menuItem={menuItems}/>
      </div>
    </div>

  );
}

export default PotfoliosPage;
