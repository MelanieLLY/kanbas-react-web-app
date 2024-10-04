import ModulesControls from "./ModulesControls";
export default function Modules() {
  return (
<div>
  <ModulesControls /><br /><br /><br /><br />
  
  <ul id="wd-modules" className="list-group rounded-0">
    
    {/* Wek 1 */}
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Introduction to the course</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Learn what is Web Development</li>

      </ul>
    </li>
    
    {/* Week 2 */}
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Introduction to HTML</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Basic HTML tags and structure</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Creating our first website</li>
      </ul>
    </li>
    
    {/* Week 3 */}
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 3 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Introduction to CSS</li>
        <li className="wd-lesson list-group-item p-3 ps-1">Understanding CSS selectors</li>
      </ul>
    </li>

  </ul>
</div>

  );
}
