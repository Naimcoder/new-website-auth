import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCards/NewsCard';


const Category = () => {
    const allNews=useLoaderData()
    
    return (
        <div>
            <h2>This is Caregory{allNews.length}</h2>
            {allNews.map(news=><NewsCard key={news._id}news={news}></NewsCard>)}
        </div>
    );
};

export default Category;