import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCards/NewsCard';


const Home = () => {
    const allNewsCategory=useLoaderData()
    return (
        <div>
           <h2> This is My Home page {allNewsCategory.length}</h2>
           {
            allNewsCategory.map(news=><NewsCard key={news._id}news={news}></NewsCard>)
           }
        </div>
    );
};

export default Home;