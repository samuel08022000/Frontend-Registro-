'use client'

import { useState } from 'react'
import { AlertModal } from '@/components/ui/alert-modal'

export default function VerificationPage({ onNext }: { onNext: () => void }) {
  const [digits, setDigits] = useState(['', '', '', ''])
  const [showAlert, setShowAlert] = useState(false)
  const correctCode = '1290'

  const handleDigitChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newDigits = [...digits]
    newDigits[index] = value
    setDigits(newDigits)

    // Auto focus next input
    if (value && index < 3) {
      document.getElementById(`digit-${index + 1}`)?.focus()
    }
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    const code = digits.join('')
    if (code !== correctCode) {
      setShowAlert(true)
    } else {
      onNext()
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">VERIFICACIÓN</h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Ingrese el código de 4 dígitos enviado a su correo:
          </p>

          <form onSubmit={handleVerify} className="space-y-6">
            {/* Code Input Fields */}
            <div className="flex gap-4 justify-center mb-6">
              {digits.map((digit, index) => (
                <input
                  key={index}
                  id={`digit-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleDigitChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                />
              ))}
            </div>

            {/* Resend Link */}
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline">
                ¿No recibiste el código? Reenviar código
              </a>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition"
            >
              VERIFICAR
            </button>
          </form>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <AlertModal
          icon="!"
          title="ALERTA: CODIGO INCORRECTO"
          message="Te Quedan 2 intentos"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  )
}
