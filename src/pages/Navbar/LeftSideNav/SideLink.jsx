import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideLink = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  
    return (
        <div className='px-5 py-4  flex justify-center'>
        <div>
        <h1 className='text-2xl font-bold'>All Caterogy</h1>
            <div className='mt-4 space-y-4 md:text-xl'>
               {data.map(name=><div id='navbar' key={name.id}><NavLink
               to={`/categorie/${name.id}`}
               >{name.name}</NavLink></div>)}
            </div>
           </div>              
        </div>
    );
};

export default SideLink;