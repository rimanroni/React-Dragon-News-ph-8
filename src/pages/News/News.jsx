import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
     
    return (
        <div>
            {news.map(news=><NewsCard key={news.id} news={news}/>)}
        </div>
    );
};

export default News;