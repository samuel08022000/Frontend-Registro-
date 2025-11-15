'use client'

interface JustificationPageProps {
  onBack: () => void
}

export default function JustificationPage({ onBack }: JustificationPageProps) {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">FORMULARIO DE JUSTIFICACIÓN</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition"
          >
            Volver
          </button>
        </div>

        {/* Form */}
        <div className="bg-card rounded-lg shadow p-8">
          <form className="space-y-6">
            {/* Carrera */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">CARRERA</label>
              <select className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                <option>Medicina</option>
                <option>Ingeniería</option>
                <option>Derecho</option>
              </select>
            </div>

            {/* Asignatura */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">ASIGNATURA</label>
              <select className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                <option>Anatomía</option>
              </select>
            </div>

            {/* Docente */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">DOCENTE</label>
              <select className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                <option>Ana Torres</option>
              </select>
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">FECHA</label>
              <input type="date" className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
            </div>

            {/* Fecha de Recuperación */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">FECHA DE RECUPERACIÓN</label>
              <input type="date" className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white" />
            </div>

            {/* Motivo */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">MOTIVO</label>
              <textarea className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white" rows={3}></textarea>
            </div>

            {/* Justificación Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" id="justified" className="w-4 h-4" />
              <label htmlFor="justified" className="ml-2 text-sm font-medium text-foreground">
                INASISTENCIA JUSTIFICADA
              </label>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition"
            >
              GUARDAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
