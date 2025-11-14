import { Link, Outlet, useLocation } from "react-router-dom";

function ProfissionalLayout() {
  const location = useLocation();

  // const isActive = (path: string) => location.pathname === path;
  const isActiveEstoque = location.pathname === "/profissional/estoque";
  const isActivePedidos = location.pathname === "/profissional/pedidos";
  const isActiveDrinks = location.pathname === "/profissional/drinks";
  const isActiveMenu = location.pathname === "/profissional/menu";

  return (
    <div className="h-screen bg-preto p-10">
      <div className="bg-branco p-9 flex flex-col items-center gap-9 h-full overflow-auto relative">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-18">
            <Link to="/profissional/estoque" className={`${isActiveEstoque ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Estoque</Link>
            <Link to="/profissional/pedidos" className={`${isActivePedidos ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Pedidos</Link>
            <Link to="/profissional/drinks" className={`${isActiveDrinks ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Drinks</Link>
          </div>
          <div className="w-full h-px bg-branco-muito-escuro" />
          <Link to="/profissional/menu" className={`${isActiveMenu ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Menu</Link>
        </div> 
        <div className="w-28 h-px bg-roxo" />
        <h1 className="text-roxo font-parisienne">{isActiveMenu ? "Menu" : isActiveEstoque ? "Estoque" : isActivePedidos ? "Pedidos" : isActiveDrinks && "Drinks"}</h1>
        <Outlet />        
      </div>
    </div>
  )
}

export default ProfissionalLayout;