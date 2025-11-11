import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  // const isActive = (path: string) => location.pathname === path;
  const isActiveEstoque = location.pathname === "/estoque";
  const isActivePedidos = location.pathname === "/pedidos";
  const isActiveDrinks = location.pathname === "/drinks";

  return (
    <div className="h-screen bg-preto p-10">
      <div className="bg-branco p-9 flex flex-col items-center gap-9 h-full">
        <div className="flex items-center gap-18">
          <Link to="/estoque" className={`${isActiveEstoque ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Estoque</Link>
          <Link to="/pedidos" className={`${isActivePedidos ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Pedidos</Link>
          <Link to="/drinks" className={`${isActiveDrinks ? "text-roxo font-medium" : "text-roxo-muito-escuro"}`}>Drinks</Link>
        </div>
        <div className="w-28 h-px bg-roxo" />
        <h1 className="text-roxo font-parisienne">{location.pathname === "/" ? "Menu" : location.pathname === "/estoque" ? "Estoque" : location.pathname === "/pedidos" ? "Pedidos" : "Drinks"}</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;