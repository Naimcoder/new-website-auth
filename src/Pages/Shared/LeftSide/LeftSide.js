import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [Category,setCategory]=useState([]);

    useEffect(()=>{
        fetch('https://dango-app-auth.vercel.app/news-Categori')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div>
           <h3>This is leftside</h3>
           {
            Category.map(categoris=><p key={categoris.id}>
                <Link to={`/category/${categoris.id}`}>{categoris.name}</Link></p>)
           }
        </div>
    );
};

export default LeftSide;