import { useState } from "react";
import Modal from "../../components/modal";
import { Button, Input } from "@mui/material";
import DrinkCard from "../../components/drink-card";
import LocalBarIcon from '@mui/icons-material/LocalBar';

const drinks = [
  {
    id: 1,
    nome: 'Drink base',
    descricao: 'Drink base, referência para todos os outros drinks.',
    preco: 34.90,
    composicao: [
      {
        id: 1,
        nome: 'Ingrediente 1',
        quantidade: 1,
      },
    ],
  },
]

function Cardapio() {
  const [preCliente, setPreCliente] = useState('');
  const [cliente, setCliente] = useState('');
  const [drinkSelecionado, setDrinkSelecionado] = useState<{id: number, nome: string, descricao: string, preco: number, composicao: {id: number, nome: string, quantidade: number}[]} | null>(null);


  if (!cliente) {
    return (
      <Modal>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-roxo-escuro">Como você quer ser identificado?</h1>
          <Input placeholder="Nome" value={preCliente} onChange={(e) => setPreCliente(e.target.value)} />
          <Button variant="contained" onClick={() => setCliente(preCliente)} disableElevation>Confirmar</Button>
        </div>
      </Modal>
    )
  }

  return (
    <div className="flex flex-col items-center">
      {drinks.map((drink) => <DrinkCard key={drink.id} drink={drink} selecionarDrink={() => setDrinkSelecionado(drink)} />)}
      {drinkSelecionado && 
        <Modal>
          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center gap-4">
              <LocalBarIcon className="text-roxo" />
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-roxo-escuro">{drinkSelecionado.nome}</h1>
                <p>{drinkSelecionado.preco}</p>
              </div>
              <div className="w-full h-px bg-branco-muito-escuro" />
              <p className="text-sm text-preto-fraco">{drinkSelecionado.descricao}</p>
              <div className="w-full h-px bg-branco-muito-escuro" />
              <div className="flex flex-col items-center gap-2 text-sm">
                <p>Composição</p>
                {drinkSelecionado.composicao.map((ingrediente) => <p key={ingrediente.id} className="text-preto-fraco"> {ingrediente.nome}</p>)}
              </div>
              <div className="w-full h-px bg-branco-muito-escuro" />
            </div>
            <Button variant="outlined" onClick={() => setDrinkSelecionado(null)} disableElevation>Cancelar</Button>
            <Button variant="contained" onClick={() => setDrinkSelecionado(null)} disableElevation>Fazer pedido | {drinkSelecionado.preco}$</Button>
          </div>
        </Modal>
      }
    </div>
    
  );
}

export default Cardapio;