import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Login } from './pages/Login'
import { RepositoryList } from './components/RepositoryList'
import { AICodeReview } from './pages/AICodeReview'
import { CloudSecurity } from './pages/CloudSecurity'
import { HowToUse } from './pages/HowToUse'
import { Settings } from './pages/Settings'
import { Support } from './pages/Support'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Layout><RepositoryList /></Layout>} />
      <Route path="/ai-code-review" element={<Layout><AICodeReview /></Layout>} />
      <Route path="/cloud-security" element={<Layout><CloudSecurity /></Layout>} />
      <Route path="/how-to-use" element={<Layout><HowToUse /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />
      <Route path="/support" element={<Layout><Support /></Layout>} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App