export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <p className="wd-assignment-overview">
      Multiple Modules | <strong>Not available until:</strong> <span>2024-09-12 09:00 AM</span> | <strong>Due:</strong> <span>2024-09-12 11:59 PM</span> | 满分 100
    </p>
            
          </li>
          <li className="wd-assignment-list-item">

          <li className="wd-assignment-list-item">
    <a className="wd-assignment-link" href="#/Kanbas/Courses/CS1234/Assignments/124">
      A2 - CSS Basics
    </a>
    <p className="wd-assignment-overview">
      Single Module | <strong>Not available until:</strong> <span>2024-09-19 09:00 AM</span> | <strong>Due:</strong> <span>2024-09-19 11:59 PM</span> | 满分 100
    </p>
  </li>


  <li className="wd-assignment-list-item">
    <a className="wd-assignment-link" href="#/Kanbas/Courses/CS1234/Assignments/125">
      A3 - Responsive Design
    </a>
    <p className="wd-assignment-overview">
      Multiple Modules | <strong>Not available until:</strong> <span>2024-09-26 09:00 AM</span> | <strong>Due:</strong> <span>2024-09-26 11:59 PM</span> | 满分 100
    </p>
  </li>


          </li>
        </ul>

      </div>
  );}
  


