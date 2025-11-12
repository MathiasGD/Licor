import PedidoCard from "./pedido-card";

function Pedidos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden w-full">
      <PedidoCard />
      <PedidoCard />
      <PedidoCard />
    </div>
  );
}

export default Pedidos;