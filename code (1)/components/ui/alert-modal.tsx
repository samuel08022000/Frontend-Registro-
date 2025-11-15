interface AlertModalProps {
  icon: string
  title: string
  message: string
  onClose: () => void
}

export function AlertModal({ icon, title, message, onClose }: AlertModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-4">{icon}</div>
          <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground mb-6">{message}</p>
          <button
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground font-bold py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}
