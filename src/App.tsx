import React from "react";
import { Store } from "redux";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import kanbasStore from "./Kanbas/store";
import labStore from "./Labs/store";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  // 根据路径动态选择对应的 Redux store
  const currentStore: Store = pathname.startsWith("/Kanbas")
  ? kanbasStore
  : labStore;


  // 如果无法匹配到路径，重定向到默认路径
  if (!currentStore) {
    return <Navigate to="/Labs" />;
  }

  return (
    <Provider store={currentStore}>
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </Provider>
  );
}

function Root() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default Root;
