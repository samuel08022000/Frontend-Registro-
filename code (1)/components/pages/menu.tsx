'use client'

import { useState } from 'react'
import MenuButton from '@/components/ui/menu-button'
import { LayoutGrid, Users, PieChart, BookOpen } from 'lucide-react'

interface MenuPageProps {
  userRole: string
  onSelectModule: (module: string) => void
  onChangeRole: (role: string) => void
}

export default function MenuPage({ userRole, onSelectModule, onChangeRole }: MenuPageProps) {
  const [selectedRole, setSelectedRole] = useState(userRole)

  const roles = [
    { id: 'controller', name: 'CONTROLADOR DE AULAS' },
    { id: 'head', name: 'JEFE DE CARRERA' },
    { id: 'teacher', name: 'DOCENTE' },
  ]

  const getMenuItems = () => {
    const commonItems = [
      { label: 'REPORTES Y ESTADÍSTICAS', icon: PieChart, module: 'reports' },
    ]

    switch (selectedRole) {
      case 'controller':
        return [
          { label: 'REPORTES Y ESTADÍSTICAS', icon: PieChart, module: 'reports' },
          { label: 'CONTROL DE ASISTENCIA', icon: Users, module: 'attendance' },
          { label: 'ADMINISTRACION Y GESTION', icon: LayoutGrid, module: 'admin' },
          { label: 'ACADEMICO', icon: BookOpen, module: 'academic' },
        ]
      case 'head':
        return [
          { label: 'REPORTES Y ESTADÍSTICAS', icon: PieChart, module: 'reports' },
          { label: 'ACADEMICO', icon: BookOpen, module: 'academic' },
          { label: 'ADMINISTRACION Y GESTION', icon: LayoutGrid, module: 'admin' },
        ]
      case 'teacher':
        return [
          { label: 'REPORTES Y ESTADÍSTICAS', icon: PieChart, module: 'reports' },
        ]
      default:
        return commonItems
    }
  }

  const menuItems = getMenuItems()

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Menú</h1>
          <p className="text-lg text-muted-foreground">ROL: {roles.find(r => r.id === selectedRole)?.name}</p>
        </div>

        {/* Role Selector */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedRole === role.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {role.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className={`grid gap-6 ${menuItems.length === 1 ? 'grid-cols-1 max-w-xs' : menuItems.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
          {menuItems.map((item) => (
            <MenuButton
              key={item.module}
              label={item.label}
              Icon={item.icon}
              onClick={() => onSelectModule(item.module)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
