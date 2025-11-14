import { useMutation, useQuery } from "@tanstack/react-query";
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

export enum TipoUsuario {
  ADMIN = "admin",
  PROFISSIONAL = "profissional",
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
  return (
    useQuery({
      queryKey: ["pedidos"],
      queryFn: async () => {
        const response = await api.get<Pedido[]>("/pedidos/pedidos");
        return response.data;
      },
    }).data ?? []
  );
};

export const useCadastrarPedido = () => {
  return useMutation({
    mutationFn: async (data: { cliente: string; drinkId: number }) => {
      const response = await api.post("/pedidos/pedido", data);
      return response.data;
    },
  });
};

export const useAceitarPedido = () => {
  return useMutation({
    mutationFn: async (pedidoId: number) => {
      const response = await api.post("/pedidos/aceitar-pedido", {pedidoId});
      return response.data;
    },
  });
};

export const useDrinks = () => {
  return (
    useQuery({
      queryKey: ["drinks"],
      queryFn: async () => {
        const response = await api.get<Drink[]>("/drinks/drinks");
        return response.data;
      },
    }).data ?? []
  );
};

export const useCadastrarDrink = () => {
  return useMutation({
    mutationFn: async (data: {
      nome: string;
      modoPreparo: string;
      precoBase: number;
      descricao?: string;
      composicao: {
        ingredienteId: number;
        unidadeMedida: string;
        quantidade: number;
      }[];
    }) => {
      const response = await api.post("/drinks/drink", data);
      return response.data;
    },
  });
};

export const useIngredientes = () => {
  return (
    useQuery({
      queryKey: ["ingredientes"],
      queryFn: async () => {
        const response = await api.get<Ingrediente[]>(
          "/ingredientes/ingredientes"
        );
        return response.data;
      },
    }).data ?? []
  );
};

export const useCadastrarIngrediente = () => {
  return useMutation({
    mutationFn: async (data: { nome: string; descricao?: string }) => {
      const response = await api.post("/ingredientes/ingrediente", data);
      return response.data;
    },
  });
};

export const useEstoques = () => {
  return (
    useQuery({
      queryKey: ["estoques"],
      queryFn: async () => {
        const response = await api.get<Estoque[]>("/estoques/estoques");
        return response.data;
      },
    }).data ?? []
  );
};

export const useCadastrarEstoque = () => {
  return useMutation({
    mutationFn: async (data: {
      ingredienteId: number;
      quantidadeDisponivel: number;
    }) => {
      const response = await api.post("/estoques/estoque", data);
      return response.data;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; senha: string }) => {
      const response = await api.get("/usuarios/usuario", { params: data });
      return response.data;
    },
  });
};

export const useCadastrarUsuario = () => {
  return useMutation({
    mutationFn: async (data: {
      nome: string;
      email: string;
      senha: string;
      tipoUsuario: TipoUsuario;
    }) => {
      const response = await api.post("/usuarios/usuario", data);
      return response.data;
    },
  });
};
