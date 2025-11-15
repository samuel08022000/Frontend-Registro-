'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { FileText, Download } from 'lucide-react'

interface ReportsPageProps {
  onBack: () => void
}

export default function ReportsPage({ onBack }: ReportsPageProps) {
  const data = [
    { name: 'Medicina', asistencias: 90, faltas: 10 },
    { name: 'Ingeniería', asistencias: 82, faltas: 18 },
    { name: 'Derecho', asistencias: 88, faltas: 12 },
    { name: 'Enfermería', asistencias: 92, faltas: 8 },
  ]

  const chartData = [
    { name: 'Sep 20', value: 85 },
    { name: 'Sep 25', value: 88 },
    { name: 'Sep 28', value: 82 },
    { name: 'Oct 02', value: 90 },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">REPORTES Y ESTADÍSTICAS</h1>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition"
          >
            Volver
          </button>
        </div>

        {/* Date Filter */}
        <div className="bg-card rounded-lg p-4 mb-6 shadow">
          <p className="font-medium text-foreground">Período: 20/09/2025 - 02/10/2025</p>
        </div>

        {/* Charts and Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Chart */}
          <div className="bg-card rounded-lg p-6 shadow">
            <h2 className="text-lg font-bold text-foreground mb-4">Tendencia de Asistencia</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="oklch(0.62 0.2 35)" name="Asistencia %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Table */}
          <div className="bg-card rounded-lg p-6 shadow">
            <h2 className="text-lg font-bold text-foreground mb-4">Resumen por Carrera</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-semibold">Carrera</th>
                    <th className="px-4 py-3 text-left font-semibold">Asistencias</th>
                    <th className="px-4 py-3 text-left font-semibold">Faltas</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-muted' : 'bg-white'}>
                      <td className="px-4 py-3 text-foreground">{row.name}</td>
                      <td className="px-4 py-3 text-foreground">{row.asistencias}%</td>
                      <td className="px-4 py-3 text-foreground">{row.faltas}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition">
            <Download size={20} />
            EXPORTAR PDF
          </button>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition">
            <FileText size={20} />
            EXPORTAR EXCEL
          </button>
        </div>
      </div>
    </div>
  )
}
