import { Routes, Route } from "react-router-dom";
import ViewPage from "./Components/View/ViewPage";
import Table from "./Components/Table/Table";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/view/:id" element={<ViewPage />} />
      </Routes>
  );
}

export default App;

