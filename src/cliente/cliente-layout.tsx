import { Outlet } from "react-router-dom";

function ClienteLayout() {

  return (
    <div className="h-screen bg-branco p-4 flex flex-col items-center gap-6">
      <h1 className="text-roxo font-parisienne">Cardápio</h1>
      <div className="w-28 h-px bg-roxo" />
      <Outlet />
    </div>
  )
}

export default ClienteLayout;