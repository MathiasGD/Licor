import { useEffect } from "react";
import logo from "../assets/logo-licor.svg";
import { useNavigate, useSearchParams } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const qrCode = searchParams.get("qr");

  useEffect(() => {
    setTimeout(() => {
      if (qrCode) {
        navigate(`/cliente`);
      } else {
        navigate("/profissional");
      }
    }, 3000);
  }, [navigate, qrCode]);

  return (
    <div className="h-screen bg-preto flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-9">
        <img src={logo} alt="Logo" className="w-16 h-16 animate-pulse" />
        <h1 className="text-branco font-parisienne">Licor</h1>
      </div>
    </div>
  )
}

export default Intro;