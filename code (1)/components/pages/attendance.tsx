'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface AttendancePageProps {
  onBack: () => void
}

export default function AttendancePage({ onBack }: AttendancePageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAttendance, setSelectedAttendance] = useState<{ [key: number]: string }>({})

  const teachers = [
    { id: 1, name: 'ANA TORRES', carrera: 'MEDICINA', materias: 'ANATOMÍA, FISIOLOGÍA' },
    { id: 2, name: 'CARLOS RIVERA', carrera: 'INGENIERÍA', materias: 'PROGRAMACIÓN, CÁLCULO' },
    { id: 3, name: 'MARÍA GARCÍA', carrera: 'DERECHO', materias: 'DERECHO CIVIL, PENAL' },
  ]

  const filteredTeachers = teachers.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAttendance = (id: number, status: string) => {
    setSelectedAttendance(prev => ({ ...prev, [id]: status }))
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">CONTROL DE ASISTENCIA</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition"
          >
            Volver
          </button>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-4 mb-6 shadow grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Carrera</label>
            <select className="w-full px-3 py-2 border border-input rounded bg-white">
              <option>Medicina</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Materia</label>
            <select className="w-full px-3 py-2 border border-input rounded bg-white">
              <option>Anatomía</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Fecha</label>
            <input type="date" className="w-full px-3 py-2 border border-input rounded bg-white" />
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 flex gap-2">
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
        </div>

        {/* Attendance Table */}
        <div className="bg-card rounded-lg shadow overflow-hidden mb-6">
          <div className="p-4 bg-primary text-primary-foreground">
            <h3 className="font-bold">DOCENTE</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">NOMBRE</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">CARRERA</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">MATERIAS</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">ASISTENCIA</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-4 py-3 text-foreground">{teacher.name}</td>
                  <td className="px-4 py-3 text-foreground">{teacher.carrera}</td>
                  <td className="px-4 py-3 text-foreground text-sm">{teacher.materias}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAttendance(teacher.id, 'present')}
                        className={`px-3 py-1 rounded text-sm font-medium transition ${
                          selectedAttendance[teacher.id] === 'present'
                            ? 'bg-green-500 text-white'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        PRESENTE
                      </button>
                      <button
                        onClick={() => handleAttendance(teacher.id, 'justified')}
                        className={`px-3 py-1 rounded text-sm font-medium transition ${
                          selectedAttendance[teacher.id] === 'justified'
                            ? 'bg-blue-500 text-white'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        JUSTIFICACIÓN
                      </button>
                      <button
                        onClick={() => handleAttendance(teacher.id, 'absent')}
                        className={`px-3 py-1 rounded text-sm font-medium transition ${
                          selectedAttendance[teacher.id] === 'absent'
                            ? 'bg-red-500 text-white'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        AUSENTE
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-card rounded-lg p-6 shadow">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Asistencia Hoy</h3>
            <p className="text-3xl font-bold text-primary">85%</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">CLASES ACTIVAS</h3>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition">
          GUARDAR ASISTENCIA
        </button>
      </div>
    </div>
  )
}
