import { Button } from "@mui/material";
import logo from "../../../assets/logo-licor.svg";
import QRCode from "react-qr-code";
import { useMemo } from "react";

function Menu() {
  const qrLink = useMemo(() => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/?qr=${Math.random().toString(36).substring(2, 15)}`;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <img src={logo} alt="Logo" className="w-16 h-16" />
        <h2 className="text-roxo font-medium text-lg">QR Code para Clientes</h2>
          <QRCode
            value={qrLink}
            level="H"
            style={{ height: "auto", maxWidth: "200px", width: "200px" }}
          />
        <p className="text-sm text-preto-fraco text-center max-w-xs">
          Clientes podem escanear este código para acessar o cardápio
        </p>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={() => navigator.clipboard.writeText(qrLink)}
          size="small"
        >
          Copiar Link
        </Button>
    </div>
  );
}

export default Menu;