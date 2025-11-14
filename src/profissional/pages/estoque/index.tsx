import { Button, MenuItem, Select, TextField } from "@mui/material";
import {
  useCadastrarEstoque,
  useCadastrarIngrediente,
  useIngredientes,
} from "../../../services/geral";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Modal from "../../components/modal";

// const ingredientes: Ingrediente[] = [
//   {
//     id: 1,
//     nome: "Ingrediente 1",
//     descricao: "Descrição do ingrediente 1",
//     estoque: {
//       id: 1,
//       dataAtualizado: new Date(),
//       quantidadeDisponivel: 100,
//     },
//   },
//   {
//     id: 2,
//     nome: "Ingrediente 2",
//     descricao: "Descrição do ingrediente 2",
//     estoque: {
//       id: 2,
//       dataAtualizado: new Date(),
//       quantidadeDisponivel: 100,
//     },
//   },
// ];

const colunas: GridColDef[] = [
  {
    field: "nome",
    headerName: "Ingrediente",
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
    field: "quantidadeDisponivel",
    headerName: "Quantidade disponível",
    width: 120,
    flex: 1,
    valueGetter: (value, row) => row.estoque?.quantidadeDisponivel,
  },
  {
    field: "dataAtualizado",
    headerName: "Data atualizado",
    width: 120,
    flex: 1,
    valueGetter: (value, row) =>
      new Date(row.estoque?.dataAtualizado).toLocaleDateString(),
  },
];

function Estoque() {
  const ingredientes = useIngredientes();
  const cadastrarIngrediente = useCadastrarIngrediente();
  const cadastrarEstoque = useCadastrarEstoque();

  const [openModalCadastro, setOpenModalCadastro] = useState(false);
  const [openModalRegistro, setOpenModalRegistro] = useState(false);
  const [nomeNovoIngrediente, setNomeNovoIngrediente] = useState("");
  const [descricaoNovoIngrediente, setDescricaoNovoIngrediente] = useState("");
  const [registroIngredienteId, setRegistroIngredienteId] = useState<
    number | null
  >(null);
  const [registroQuantidade, setRegistroQuantidade] = useState<number | null>(
    null
  );

  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex gap-2">
        <Button
          variant="contained"
          disableElevation
          onClick={() => setOpenModalCadastro(true)}
        >
          Cadastrar ingrediente
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => setOpenModalRegistro(true)}
        >
          Registrar em estoque
        </Button>
      </div>
      <DataGrid
        className="w-full"
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
        rows={ingredientes}
        columns={colunas}
        rowSelection={false}
      />
      <Modal isOpen={openModalCadastro}>
        <div className="flex flex-col justify-between gap-3 min-h-full">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-roxo-escuro self-center">
              Novo ingrediente
            </p>
            <TextField
              fullWidth
              placeholder="Nome"
              value={nomeNovoIngrediente}
              onChange={(e) => setNomeNovoIngrediente(e.target.value)}
            />
            <div className="w-full h-px bg-branco-muito-escuro" />
            <TextField
              fullWidth
              placeholder="Descrição"
              value={descricaoNovoIngrediente}
              onChange={(e) => setDescricaoNovoIngrediente(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              variant="outlined"
              disableElevation
              onClick={() => setOpenModalCadastro(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                cadastrarIngrediente.mutateAsync({
                  nome: nomeNovoIngrediente,
                  descricao: descricaoNovoIngrediente,
                });
                setOpenModalCadastro(false);
              }}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={openModalRegistro}>
        <div className="flex flex-col justify-between gap-3 min-h-full">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-roxo-escuro self-center">
              Registrar em estoque
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-sm">Ingrediente:</p>
              <Select
                size="small"
                fullWidth
                value={registroIngredienteId}
                onChange={(e) =>
                  setRegistroIngredienteId(Number(e.target.value))
                }
              >
                {ingredientes.map((ingrediente) => (
                  <MenuItem key={ingrediente.id} value={ingrediente.id}>
                    {ingrediente.nome}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="w-full h-px bg-branco-muito-escuro" />
            <TextField
              fullWidth
              placeholder="Quantidade"
              value={registroQuantidade}
              type="number"
              onChange={(e) => setRegistroQuantidade(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              variant="outlined"
              disableElevation
              onClick={() => setOpenModalRegistro(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                if (registroIngredienteId && registroQuantidade) {
                  cadastrarEstoque.mutateAsync({
                    ingredienteId: registroIngredienteId,
                    quantidadeDisponivel: registroQuantidade,
                  });
                }
                setOpenModalRegistro(false);
              }}
            >
              Registrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Estoque;
