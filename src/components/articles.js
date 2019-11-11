import React from 'react'

const Articles = ({ articles }) => {
  return (
    <div>
      <center><h1>Article List</h1></center>
    <center><em>&nbsp;--&nbsp;Link here for <a href="https://documenter.getpostman.com/view/9438658/SW7T6qef" target="_blank" rel="noopener noreferrer">API docs</a>--</em></center>
      {articles.map((article) => (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <h3 className="card-subtitle mb-2 text-muted">{article.body}</h3>
            <h6 className="card-subtitle mb-2 text-muted">{article.superhero}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Articles
