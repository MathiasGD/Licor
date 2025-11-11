import { useQuery } from "@tanstack/react-query";
import api from "..";

export interface Pedido {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
}

// export const getPedidos = async () => {
//   const response = await api.get("/pedidos");
//   return response.data;
// }

export const usePedidos = () => {
  return useQuery({
    queryKey: ["pedidos"],
    queryFn: async () => {
      const response = await api.get<Pedido[]>("/pedidos");
      return response.data;
    },
  });
};
