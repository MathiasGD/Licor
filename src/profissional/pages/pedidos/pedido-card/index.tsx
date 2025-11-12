import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Button } from '@mui/material';

const PedidoCard = () => {
  return (
    <div className="flex flex-col gap-4 max-w-116 w-full">
      <div className="flex gap-4">
        <div className="h-full w-px bg-branco-muito-escuro" />
        <div className="flex flex-col gap-3.5 w-full">
          <div className="flex justify-between">
              <div className="flex items-end gap-2">
                <p className="font-medium text-lg">#4</p>
                <p className="text-preto-fraco text-xs">Pedido</p>
              </div>
              <LocalBarIcon className="text-roxo" />
          </div>
          <div className='flex gap-2'>
              <p className='text-sm'>Cliente:</p>
              <p className='text-sm font-medium'>Mathias</p>
          </div>
          <div className='bg-branco-escuro p-3.5 w-full'>
              <p className='font-medium'>Drink base</p>
              <p className='text-sm'>34.90$</p>
          </div>
          <Button variant='contained' disableElevation fullWidth>Abrir pedido</Button>
        </div>
        <div className="h-full w-px bg-branco-muito-escuro" />
      </div>
      <div className="h-px bg-branco-muito-escuro" />
    </div>
  );
}

export default PedidoCard;