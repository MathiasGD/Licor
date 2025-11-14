import { useState } from "react";
import Modal from "../../components/modal";
import { Button, TextField } from "@mui/material";
import DrinkCard from "../../components/drink-card";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import {
  useCadastrarPedido,
  useDrinks,
  type Drink,
} from "../../../services/geral";

// const drinks = [
//   {
//     id: 1,
//     nome: 'Drink base',
//     descricao: 'Drink base, referência para todos os outros drinks.',
//     preco: 34.90,
//     composicao: [
//       {
//         id: 1,
//         nome: 'Ingrediente 1',
//         quantidade: 1,
//       },
//     ],
//   },
// ]

function Cardapio() {
  const drinks = useDrinks();
  const cadastrarPedido = useCadastrarPedido();

  const [preCliente, setPreCliente] = useState("");
  const [cliente, setCliente] = useState("");
  const [drinkSelecionado, setDrinkSelecionado] = useState<Drink | null>(null);

  return (
    <div className="flex flex-col items-center">
      <Modal isOpen={!cliente}>
        <div className="flex flex-col items-center gap-4">
          <p className="text-roxo-escuro text-xl font-medium">
            Como você quer ser identificado?
          </p>
          <TextField
            fullWidth
            placeholder="Identificador"
            value={preCliente}
            onChange={(e) => setPreCliente(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={() => setCliente(preCliente)}
            disableElevation
          >
            Confirmar
          </Button>
        </div>
      </Modal>
      {drinks.map((drink) => (
        <DrinkCard
          key={drink.id}
          drink={drink}
          selecionarDrink={() => setDrinkSelecionado(drink)}
        />
      ))}
      <Modal isOpen={!!drinkSelecionado}>
        {drinkSelecionado && (
          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center gap-4">
              <LocalBarIcon className="text-roxo" />
              <div className="flex flex-col items-center">
                <p className="text-roxo-escuro font-medium text-xl">
                  {drinkSelecionado.nome}
                </p>
                <p>{drinkSelecionado.precoBase}</p>
              </div>
              <div className="w-full h-px bg-branco-muito-escuro" />
              <p className="text-sm text-preto-fraco">
                {drinkSelecionado.descricao}
              </p>
              <div className="w-full h-px bg-branco-muito-escuro" />
              <div className="flex flex-col items-center gap-2 text-sm">
                <p className="font-medium">Composição</p>
                {drinkSelecionado.composicao?.map((ingrediente) => (
                  <p key={ingrediente.id} className="text-preto-fraco">
                    {" "}
                    {ingrediente.ingrediente.nome}
                  </p>
                ))}
              </div>
              <div className="w-full h-px bg-branco-muito-escuro" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Button
                variant="outlined"
                onClick={() => setDrinkSelecionado(null)}
                disableElevation
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  cadastrarPedido.mutateAsync({
                    cliente,
                    drinkId: drinkSelecionado.id,
                  });
                  setDrinkSelecionado(null);
                }}
                disableElevation
              >
                Fazer pedido | {drinkSelecionado.precoBase}$
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Cardapio;
