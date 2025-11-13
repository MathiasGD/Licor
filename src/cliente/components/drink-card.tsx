import LocalBarIcon from '@mui/icons-material/LocalBar';


const DrinkCard = ({drink, selecionarDrink}: {drink: {id: number, nome: string, descricao: string, preco: number}, selecionarDrink: () => void}) => {
  return (
    <button className="flex flex-col gap-4 w-full items-center p-4 border-b border-branco-muito-escuro active:bg-branco-escuro" onClick={selecionarDrink}>
      <LocalBarIcon className="text-roxo" />
      <h1 className='text-roxo-escuro'>{drink.nome}</h1>
      <p className='text-xs text-preto-fraco'>{drink.descricao}</p>
      <p className='text-sm'>{drink.preco}$</p>
    </button>
  )
}

export default DrinkCard;