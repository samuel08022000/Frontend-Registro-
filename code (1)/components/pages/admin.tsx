'use client'

import { useState } from 'react'
import { Search, Plus } from 'lucide-react'

interface AdminPageProps {
  onBack: () => void
}

export default function AdminPage({ onBack }: AdminPageProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const teachers = [
    { id: 8435323, name: 'ANA TORRES', carrera: 'MEDICINA', materias: 'ANATOMÍA, FISIOLOGÍA, BIOQUÍMICA' },
    { id: 8435324, name: 'CARLOS RIVERA', carrera: 'INGENIERÍA', materias: 'PROGRAMACIÓN, CÁLCULO' },
    { id: 8435325, name: 'MARÍA GARCÍA', carrera: 'DERECHO', materias: 'DERECHO CIVIL, PENAL' },
  ]

  const filteredTeachers = teachers.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">ADMINISTRACIÓN Y GESTIÓN</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition"
          >
            Volver
          </button>
        </div>

        {/* Search and Add Button */}
        <div className="flex gap-4 mb-6 flex-col sm:flex-row">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Buscar: ANA TORRES"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            />
          </div>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-2 rounded-lg hover:bg-primary/90 transition whitespace-nowrap">
            <Plus size={20} />
            Agregar Docente
          </button>
        </div>

        {/* Teachers Table */}
        <div className="bg-card rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left font-semibold">ID</th>
                <th className="px-4 py-3 text-left font-semibold">NOMBRE</th>
                <th className="px-4 py-3 text-left font-semibold">CARRERA</th>
                <th className="px-4 py-3 text-left font-semibold">MATERIAS</th>
                <th className="px-4 py-3 text-left font-semibold">ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher, index) => (
                <tr key={teacher.id} className={index % 2 === 0 ? 'bg-muted' : 'bg-white'}>
                  <td className="px-4 py-3 text-foreground font-mono text-sm">{teacher.id}</td>
                  <td className="px-4 py-3 text-foreground">{teacher.name}</td>
                  <td className="px-4 py-3 text-foreground">{teacher.carrera}</td>
                  <td className="px-4 py-3 text-foreground text-sm">{teacher.materias}</td>
                  <td className="px-4 py-3">
                    <a href="#" className="text-primary font-medium hover:underline">
                      EDITAR >
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
