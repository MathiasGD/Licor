import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Estoque from "./pages/estoque";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão */}
        <Route path="/" element={<Home />} />

        {/* Outras rotas */}
        <Route path="/estoque" element={<Estoque />} />

        {/* Rota coringa */}
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

