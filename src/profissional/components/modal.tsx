import { motion, AnimatePresence } from 'motion/react';


const Modal = ({ children, isOpen, rightSide }: { children: React.ReactNode, isOpen: boolean, rightSide?: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-preto/50 flex items-end justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-5/6 bg-branco p-5 w-114 overflow-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
          {rightSide && 
            <motion.div
              className="h-4/6 bg-branco p-5 w-114 overflow-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {rightSide}
            </motion.div>
          }
          
        </motion.div>
      )}
    </AnimatePresence>
    
  )
}

export default Modal;