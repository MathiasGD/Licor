import PedidoCard from "./pedido-card";

function Pedidos() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <PedidoCard />
      <PedidoCard />
      <PedidoCard />
    </div>
  );
}

export default Pedidos;