import { Button } from "@mui/material";
import logo from "../../assets/logo-licor.svg";
import QRCode from "react-qr-code";
import { useMemo } from "react";

function Menu() {
  const qrLink = useMemo(() => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/?qr`;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <img src={logo} alt="Logo" className="w-16 h-16" />
      <div className="flex flex-col items-center gap-4 p-6 bg-branco-escuro rounded-lg">
        <h2 className="text-roxo font-medium text-lg">QR Code para Clientes</h2>
        <div className="p-4 bg-branco rounded-lg">
          <QRCode
            value={qrLink}
            size={200}
            level="H"
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
        </div>
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
    </div>
  );
}

export default Menu;