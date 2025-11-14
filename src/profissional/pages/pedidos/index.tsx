import { useState } from "react";
import { StatusPedido, type Pedido } from "../../../services/pedidos";
import PedidoCard from "./pedido-card";
import Modal from "../../components/modal";
import { Button } from "@mui/material";

const pedidos: Pedido[] = [
  {
    id: 1,
    cliente: 'Mathias',
    dataPedido: new Date(),
    status: StatusPedido.PENDENTE,
    drink: {
      id: 1,
      nome: 'Drink base',
      modoPreparo: 'Modo de preparo do drink base',
      precoBase: 34.90,
      descricao: 'Descrição do drink base',
      composicao: [
        {
          id: 1,
          unidadeMedida: 'ml',
          quantidade: 100,
          ingrediente: { id: 1, nome: 'Ingrediente 1', descricao: 'Descrição do ingrediente 1', estoque: { id: 1, dataAtualizado: new Date(), quantidadeDisponivel: 100 } },
        },
        {
          id: 2,
          unidadeMedida: 'ml',
          quantidade: 100,
          ingrediente: { id: 2, nome: 'Ingrediente 2', descricao: 'Descrição do ingrediente 2', estoque: { id: 2, dataAtualizado: new Date(), quantidadeDisponivel: 100 } },
        },
      ],
    },
  },
  {
    id: 2,
    cliente: 'João',
    dataPedido: new Date(),
    status: StatusPedido.PENDENTE,
    drink: {
      id: 2,
      nome: 'Drink de limão',
      modoPreparo: 'Modo de preparo do drink de limão',
      precoBase: 34.90,
      descricao: 'Descrição do drink de limão',
      composicao: [
        {
          id: 1,
          unidadeMedida: 'g',
          quantidade: 50,
          ingrediente: { id: 1, nome: 'Limão', descricao: 'Limão, ingrediente principal do drink de limão', estoque: { id: 1, dataAtualizado: new Date(), quantidadeDisponivel: 100 } },
        },
        {
          id: 2,
          unidadeMedida: 'g',
          quantidade: 50,
          ingrediente: { id: 2, nome: 'Açúcar', descricao: 'Açúcar, ingrediente secundário do drink de limão', estoque: { id: 2, dataAtualizado: new Date(), quantidadeDisponivel: 100 } },
        },
      ],
    },
  },    
]

function Pedidos() {
  const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
  // const { data: pedidos } = usePedidos();
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {pedidos.map((pedido) => <PedidoCard key={pedido.id} pedido={pedido} onClick={() => setPedidoSelecionado(pedido)} />)}
      </div>
      <Modal isOpen={!!pedidoSelecionado}>
        {pedidoSelecionado && (
          <div className="flex flex-col justify-between h-full overflow-auto gap-3.5">
            <div className="flex flex-col items-center gap-3.5 w-full">
              <p className="text-xl font-medium">#{pedidoSelecionado.id}</p>
              <div className="flex flex-col items-center">
                <p className="text-sm">Cliente:</p>
                <p className="text-xl font-medium">{pedidoSelecionado.cliente}</p>
              </div>
              <div className="w-20 h-px bg-roxo-escuro" />
              <div className="w-full flex flex-col gap-3.5">
                <div className="flex flex-col">
                  <p className="text-xl font-medium text-roxo-escuro">{pedidoSelecionado.drink.nome}</p>
                  <p className="text-sm">{pedidoSelecionado.drink.precoBase}$</p>                
                </div>
                <div className="w-full h-px bg-branco-muito-escuro" />
                <p className="font-medium">Composição</p>
                <div className="grid grid-cols-2 gap-2">
                  {pedidoSelecionado.drink.composicao.map((ingrediente) => 
                    <div key={ingrediente.id} className="p-3 bg-branco-escuro flex flex-col">
                      <p className="text-sm font-medium">{ingrediente.ingrediente.nome}</p>
                      <p className="text-sm">Quantidade: {ingrediente.quantidade}</p>
                      <p className="text-sm">Unidade medida: {ingrediente.unidadeMedida}</p>
                    </div>
                  )}
                </div>
                <div className="w-full h-px bg-branco-muito-escuro" />
                <p className="font-medium">Modo de preparo</p>
                <p className="text-sm">{pedidoSelecionado.drink.modoPreparo}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Button variant="outlined" onClick={() => setPedidoSelecionado(null)} disableElevation fullWidth>Voltar</Button>
              <Button variant="contained" onClick={() => setPedidoSelecionado(null)} disableElevation fullWidth>Concluir pedido</Button>
            </div>
          </div>
          
        )}        
      </Modal>
    </>
    
  );
}

export default Pedidos;