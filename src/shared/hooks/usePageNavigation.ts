import { useNavigate } from 'react-router-dom'

export function usePageNavigation() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  const goToSchedule = () => {
    navigate('/schedule')
  }

  const goToDashboard = () => {
    navigate('/dashboard')
  }

  return {
    goToHome,
    goToSchedule,
    goToDashboard,
  }
}
