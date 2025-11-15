'use client'

import { useState } from 'react'
import { AlertModal } from '@/components/ui/alert-modal'

export default function LoginPage({ onNext }: { onNext: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== '123456') {
      setShowAlert(true)
    } else {
      onNext()
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">UNIFRANZ</h1>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Bienvenido</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Inicia sesión con tu nombre de usuario y tu contraseña
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Usuario
              </label>
              <input
                type="text"
                placeholder="DIEGO CALLISAYA QUISPE"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#" className="text-sm text-primary hover:underline">
                ¿Olvidó su contraseña?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition mt-6"
            >
              INICIAR SESIÓN
            </button>
          </form>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <AlertModal
          icon="!"
          title="ALERTA: CONTRASEÑA INCORRECTA"
          message="Te Quedan 3 intentos"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  )
}
