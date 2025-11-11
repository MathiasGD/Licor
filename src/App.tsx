import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu";
import Estoque from "./pages/estoque";
import Pedidos from "./pages/pedidos";
import Layout from "./Layout";
import Drinks from "./pages/drinks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/pedidos" element={<Pedidos />} />   
          <Route path="/drinks" element={<Drinks />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );

}


export default App;