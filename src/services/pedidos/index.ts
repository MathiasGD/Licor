import { useQuery } from "@tanstack/react-query";
import api from "..";

export interface Pedido {
  id: number;
  cliente: string;
  dataPedido: Date;
  status: StatusPedido;
  drink: Drink;
}

export enum StatusPedido {
  PENDENTE = "pendente",
  ACEITO = "aceito",
}

export interface Drink {
  id: number;
  nome: string;
  modoPreparo: string;
  precoBase: number;
  descricao?: string;
  composicao: ComposicaoDrink[];
}

export interface ComposicaoDrink {
  id: number;
  unidadeMedida: string;
  quantidade: number;
  ingrediente: Ingrediente;
}

export interface Ingrediente {
  id: number;
  nome: string;
  descricao?: string;
  estoque: Estoque;
}

export interface Estoque {
  id: number;
  dataAtualizado: Date;
  quantidadeDisponivel: number;
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
