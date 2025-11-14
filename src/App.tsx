import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfissionalLayout from "./profissional/profissional-layout";
import Menu from "./profissional/pages/menu";
import Estoque from "./profissional/pages/estoque";
import Pedidos from "./profissional/pages/pedidos";
import Drinks from "./profissional/pages/drinks";
import ClienteLayout from "./cliente/cliente-layout";
import Cardapio from "./cliente/pages/cardapio";
import Intro from "./global-pages/intro";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route element={<ProfissionalLayout />}>
        <Route path="/profissional" element={<Menu />} />
        <Route path="/profissional/estoque" element={<Estoque />} />
        <Route path="/profissional/pedidos" element={<Pedidos />} />   
        <Route path="/profissional/drinks" element={<Drinks />} />
      </Route>
      <Route element={<ClienteLayout />}>
        <Route path="/cliente" element={<Cardapio />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;