import { type LucideIcon } from 'lucide-react'

interface MenuButtonProps {
  label: string
  Icon: LucideIcon
  onClick: () => void
}

export default function MenuButton({ label, Icon, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-primary-foreground rounded-lg p-8 hover:bg-primary/90 transition flex flex-col items-center justify-center gap-4 min-h-48 shadow-lg"
    >
      <Icon size={48} />
      <span className="font-bold text-center text-lg">{label}</span>
    </button>
  )
}
