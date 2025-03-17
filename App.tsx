import React from 'react';
import './style.css';
import { newsData } from './fixture/newsData';
import { blogData } from './fixture/blogData';
import NewsItem from './components/NewsItem';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <div>
      <h1>Новини</h1>
      {newsData.map(news => <NewsItem key={news.id} {...news} />)}

      <h1>Блог</h1>
      {blogData.map(post => <BlogPost key={post.id} {...post} />)}
    </div>
  );
};

export default App;
