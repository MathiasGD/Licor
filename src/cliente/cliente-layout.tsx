import { Outlet } from "react-router-dom";

function ClienteLayout() {

  return (
    <div className="h-screen bg-branco">
      <Outlet />
    </div>
  )
}

export default ClienteLayout;