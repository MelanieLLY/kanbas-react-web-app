import React from 'react';

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        {/* 超链接导航到 Lab 5 的 HTTP 路由 */}
        <a 
          href="http://localhost:4000/lab5/welcome" 
          className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
    </div>
  );
}
