import LocalBarIcon from '@mui/icons-material/LocalBar';
import type { Drink } from '../../services/geral';


const DrinkCard = ({drink, selecionarDrink}: {drink: Drink, selecionarDrink: () => void}) => {
  return (
    <button className="flex flex-col gap-3 w-full items-center p-3 border-b border-branco-muito-escuro active:bg-branco-escuro" onClick={selecionarDrink}>
      <LocalBarIcon className="text-roxo" />
      <p className='text-roxo-escuro font-medium'>{drink.nome}</p>
      <p className='text-xs text-preto-fraco'>{drink.descricao}</p>
      <p className='text-sm'>{drink.precoBase}$</p>
    </button>
  )
}

export default DrinkCard;