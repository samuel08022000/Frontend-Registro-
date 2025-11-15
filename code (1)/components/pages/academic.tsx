'use client'

interface AcademicPageProps {
  onBack: () => void
}

export default function AcademicPage({ onBack }: AcademicPageProps) {
  const courses = [
    '</> PROGRAMACIÓN I',
    'MATEMÁTICAS BÁSICAS',
    'INTRODUCCIÓN A LA INGENIERÍA',
  ]

  const schedule = [
    { dia: 'LUNES', hora: '08:00-10:00', aula: 'A001' },
    { dia: 'MIÉRCOLES', hora: '08:00-10:00', aula: 'A001' },
    { dia: 'VIERNES', hora: '10:00-12:00', aula: 'A002' },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">ACADÉMICO</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition"
          >
            Volver
          </button>
        </div>

        {/* My Courses Section */}
        <div className="bg-card rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">MIS CURSOS</h2>
          <div className="space-y-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition cursor-pointer"
              >
                <p className="font-semibold text-foreground">{course}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="bg-card rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">MIS HORARIOS</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left font-semibold">DÍA</th>
                  <th className="px-4 py-3 text-left font-semibold">HORA</th>
                  <th className="px-4 py-3 text-left font-semibold">AULA</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-muted' : 'bg-white'}>
                    <td className="px-4 py-3 text-foreground font-medium">{item.dia}</td>
                    <td className="px-4 py-3 text-foreground">{item.hora}</td>
                    <td className="px-4 py-3 text-foreground font-mono">{item.aula}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
