import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Button } from '@mui/material';
import type { Pedido } from '../../../../services/pedidos';

const PedidoCard = ({ pedido, onClick }: { pedido: Pedido, onClick: () => void }) => {
  return (
    <div className="flex flex-col gap-4 w-116">
      <div className="flex gap-4">
        <div className="h-full w-px bg-branco-muito-escuro" />
        <div className="flex flex-col gap-3.5 w-full">
          <div className="flex justify-between">
              <div className="flex items-end gap-2">
                <p className="font-medium text-lg">#{pedido.id}</p>
                <p className="text-preto-fraco text-xs">Pedido</p>
              </div>
              <LocalBarIcon className="text-roxo" />
          </div>
          <div className='flex gap-2'>
              <p className='text-sm'>Cliente:</p>
              <p className='text-sm font-medium'>{pedido.cliente}</p>
          </div>
          <div className='bg-branco-escuro p-3.5 w-full'>
              <p className='font-medium'>{pedido.drink.nome}</p>
              <p className='text-sm'>{pedido.drink.precoBase}$</p>
          </div>
          <Button variant='contained' disableElevation fullWidth onClick={onClick}>Abrir pedido</Button>
        </div>
        <div className="h-full w-px bg-branco-muito-escuro" />
      </div>
      <div className="h-px bg-branco-muito-escuro" />
    </div>
  );
}

export default PedidoCard;