export default function Modules() {
  return (
    <div>
      <br />
      <br />
      <button>Collapes</button>
      <button>View all</button>
      <select>
        <option value="VAL1">Publish Some</option>
        <option value="VAL2" selected>
          Publish All
        </option>
        <option value="VAL3">Publish None</option>
      </select>
      <button>+ Module</button>
      <br />
      <br />
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML</li>
                <li className="wd-content-item">
                  Basic HTML tags and structure
                </li>
                <li className="wd-content-item">Creating our first website</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Understanding CSS selectors</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
