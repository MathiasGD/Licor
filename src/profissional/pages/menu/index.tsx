import { Button } from "@mui/material";
import logo from "../../assets/logo-licor.svg";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <img src={logo} alt="Logo" className="w-16 h-16" />
      <div className="flex gap-6">
        <Button variant="contained" color="primary" onClick={() => handleNavigate("/profissional/estoque")} disableElevation>Estoque</Button>
        <Button variant="contained" color="primary" onClick={() => handleNavigate("/profissional/pedidos")} disableElevation>Pedidos</Button>
        <Button variant="contained" color="primary" onClick={() => handleNavigate("/profissional/drinks")} disableElevation>Drinks</Button>
      </div>
    </div>
  );
}

export default Menu;