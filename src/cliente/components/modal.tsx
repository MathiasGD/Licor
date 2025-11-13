const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-preto bg-opacity-50 flex justify-end">
      <div className="w-full h-3/4 bg-branco p-8">
        {children}
      </div>
    </div>
  )
}

export default Modal;