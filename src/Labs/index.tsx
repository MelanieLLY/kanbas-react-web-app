import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Kanbas from "../Kanbas";


export default function Labs(){
    return (
        <div id="wd-lab1">
            <h1>Collection for Labs</h1>

            <h2> Name: Liuyi Yang </h2>

            <a href="https://github.com/MelanieLLY/kanbas-react-web-app" id="wd-github"> Link to my Github</a>
 
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="/Lab1" element={<Lab1 />} />
                <Route path="/Lab2" element={<Lab2 />} />
                <Route path="/Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    )
}