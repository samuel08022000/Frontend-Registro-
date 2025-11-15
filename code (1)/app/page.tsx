'use client'

import { useState } from 'react'
import LoginPage from '@/components/pages/login'
import VerificationPage from '@/components/pages/verification'
import MenuPage from '@/components/pages/menu'
import ReportsPage from '@/components/pages/reports'
import AttendancePage from '@/components/pages/attendance'
import JustificationPage from '@/components/pages/justification'
import AdminPage from '@/components/pages/admin'
import AcademicPage from '@/components/pages/academic'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>('login')
  const [userRole, setUserRole] = useState<string>('controller')

  const handlePageChange = (page: string, role?: string) => {
    setCurrentPage(page)
    if (role) setUserRole(role)
  }

  return (
    <main>
      {currentPage === 'login' && <LoginPage onNext={() => handlePageChange('verification')} />}
      {currentPage === 'verification' && <VerificationPage onNext={() => handlePageChange('menu')} />}
      {currentPage === 'menu' && (
        <MenuPage 
          userRole={userRole}
          onSelectModule={(module) => handlePageChange(module)}
          onChangeRole={(role) => handlePageChange('menu', role)}
        />
      )}
      {currentPage === 'reports' && <ReportsPage onBack={() => handlePageChange('menu')} />}
      {currentPage === 'attendance' && <AttendancePage onBack={() => handlePageChange('menu')} />}
      {currentPage === 'justification' && <JustificationPage onBack={() => handlePageChange('attendance')} />}
      {currentPage === 'admin' && <AdminPage onBack={() => handlePageChange('menu')} />}
      {currentPage === 'academic' && <AcademicPage onBack={() => handlePageChange('menu')} />}
    </main>
  )
}
