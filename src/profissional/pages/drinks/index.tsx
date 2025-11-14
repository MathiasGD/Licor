import { Button, MenuItem, Select, TextField } from "@mui/material";
import type { Drink, Ingrediente } from "../../../services/pedidos";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Modal from "../../components/modal";

const drinks: Drink[] = [
  {
    id: 1,
    nome: "Drink base",
    modoPreparo: "Modo de preparo do drink base",
    precoBase: 34.9,
    descricao: "Descrição do drink base",
    composicao: [],
  },
  {
    id: 2,
    nome: "Drink de limão",
    modoPreparo: "Modo de preparo do drink de limão",
    precoBase: 39.9,
    descricao: "Descrição do drink de limão",
    composicao: [],
  },
];

const colunas: GridColDef[] = [
  {
    field: "nome",
    headerName: "Nome",
    width: 200,
    flex: 1,
  },
  {
    field: "descricao",
    headerName: "Descrição",
    width: 300,
    flex: 1,
  },
  {
    field: "precoBase",
    headerName: "Preço base",
    width: 120,
    flex: 1,
  },
]

const ingredientes: Ingrediente[] = [
  {
    id: 1,
    nome: "Ingrediente 1",
    descricao: "Descrição do ingrediente 1",
    estoque: {
      id: 1,
      dataAtualizado: new Date(),
      quantidadeDisponivel: 100,
    },
  },
  {
    id: 2,
    nome: "Ingrediente 2",
    descricao: "Descrição do ingrediente 2",
    estoque: {
      id: 2,
      dataAtualizado: new Date(),
      quantidadeDisponivel: 100,
    },
  },
]

function Drinks() {
  const [openModalCadastro, setOpenModalCadastro] = useState(false);
  const [composicao, setComposicao] = useState<{unidadeMedida: string, quantidade: number | '', ingredienteId: number | ''}[]>([{ingredienteId: '', unidadeMedida: "", quantidade: '', }]);
  const [nomeNovoDrink, setNomeNovoDrink] = useState('');
  const [precoNovoDrink, setPrecoNovoDrink] = useState('');
  const [descricaoNovoDrink, setDescricaoNovoDrink] = useState('');
  const [modoPreparoNovoDrink, setModoPreparoNovoDrink] = useState('');

  const adicionarIngrediente = () => {
    setComposicao([...composicao, { ingredienteId: '', unidadeMedida: "", quantidade: '',  }]);
  };

  const atualizarIngrediente = (index: number, campo: 'ingredienteId' | 'quantidade' | 'unidadeMedida', valor: number | string) => {
    const novaComposicao = [...composicao];
    novaComposicao[index] = { ...novaComposicao[index], [campo]: valor };
    setComposicao(novaComposicao);
  };
  
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <Button variant="contained" disableElevation onClick={() => setOpenModalCadastro(true)}>Cadastrar drink</Button>
        <DataGrid className="w-full"
          sx={{
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#F9ECE2",
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "#FFF3EA",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#F9ECE2",
              cursor: "pointer",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #E8D5C4",
              backgroundColor: "#FFF3EA",
            },
            border: "none",
          }}
          rows={drinks}
          columns={colunas}
          rowSelection={false} />
      <Modal isOpen={openModalCadastro} 
        rightSide={
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium self-center">Composição:</p>
            {composicao.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Ingrediente:</p>
                  <Select size="small" value={item.ingredienteId} onChange={(e) => atualizarIngrediente(index, 'ingredienteId', e.target.value)}>
                    {ingredientes.map((ingrediente) => (
                      <MenuItem key={ingrediente.id} value={ingrediente.id}>{ingrediente.nome}</MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="flex gap-2">
                    <TextField
                      size="small"
                      placeholder="Unidade de medida"
                      value={item.unidadeMedida}
                      onChange={(e) => atualizarIngrediente(index, 'unidadeMedida', e.target.value)}
                      sx={{ flex: 1 }}
                    />
                    <TextField
                      size="small"
                      type="number"
                      placeholder="Quantidade"
                      value={item.quantidade}
                      onChange={(e) => atualizarIngrediente(index, 'quantidade', e.target.value)}
                      sx={{ flex: 1 }}
                    />
                  </div>
              </div>
            ))}
            <Button variant="contained" disableElevation onClick={adicionarIngrediente}>Adicionar ingrediente</Button>
          </div>
        }
      >
        <div className="flex flex-col justify-between gap-3 min-h-full">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-roxo-escuro self-center">Novo drink</p>
            <TextField fullWidth placeholder="Nome" value={nomeNovoDrink} onChange={(e) => setNomeNovoDrink(e.target.value)} />
            <div className="w-full h-px bg-branco-muito-escuro" />
            <TextField fullWidth placeholder="Preço" type="number" value={precoNovoDrink} onChange={(e) => setPrecoNovoDrink(e.target.value)} />
            <div className="w-full h-px bg-branco-muito-escuro" />
            <TextField fullWidth placeholder="Descrição" value={descricaoNovoDrink} onChange={(e) => setDescricaoNovoDrink(e.target.value)} />
            <div className="w-full h-px bg-branco-muito-escuro" />
            <p className="text-sm">Composição:</p>
            <div className="w-full h-px bg-branco-muito-escuro" />
            <TextField fullWidth placeholder="Modo de preparo" value={modoPreparoNovoDrink} onChange={(e) => setModoPreparoNovoDrink(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button variant="outlined" disableElevation onClick={() => setOpenModalCadastro(false)}>Cancelar</Button>
            <Button variant="contained" disableElevation onClick={() => setOpenModalCadastro(false)}>Cadastrar</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Drinks;