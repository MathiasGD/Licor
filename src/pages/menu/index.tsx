import logo from "../../assets/logo-licor.svg";

function Menu() {
  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <img src={logo} alt="Logo" className="w-16 h-16" />
      <h1>Menu</h1>
      <p>Bem-vindo à página de menu!</p>
    </div>
  );
}

export default Menu;