import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import UsagePage from './pages/UsagePage'
import ExamplesPage from './pages/ExamplesPage'
import SolverPage from './pages/SolverPage'

export default function App(){
  const [theme, setTheme] = useState(()=> {
    try{ return localStorage.getItem('theme') || 'light' }catch{ return 'light' }
  })

  useEffect(()=>{
    try{ 
      document.documentElement.setAttribute('data-theme', theme)
      if(theme === 'dark') document.documentElement.classList.add('dark-theme')
      else document.documentElement.classList.remove('dark-theme')
    }catch{}
    try{ localStorage.setItem('theme', theme) }catch{}
  }, [theme])

  return (
    <Router>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
        <header className="topbar">
          <div className="brand">
            <h1>📚 Eng qisqa yo'l yechuvchi</h1>
          </div>
          <nav className="nav">
            <NavLink to="/" end className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Asosiy</NavLink>
            <NavLink to="/usage" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Qo'llanma</NavLink>
            <NavLink to="/examples" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Misollar</NavLink>
            <NavLink to="/solver" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Yechish</NavLink>
          </nav>
          <div className="topbar-right">
            <button 
              className="theme-btn" 
              onClick={()=>setTheme(t => t === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </header>

        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-title">Navigatsiya</div>
            <NavLink to="/" className={({isActive})=> isActive? 'sidebar-item active':'sidebar-item'}>
              📖 Asosiy ma'lumot
            </NavLink>
            <NavLink to="/usage" className={({isActive})=> isActive? 'sidebar-item active':'sidebar-item'}>
              📋 Qo'llanma
            </NavLink>
            <NavLink to="/examples" className={({isActive})=> isActive? 'sidebar-item active':'sidebar-item'}>
              ✨ Misollar
            </NavLink>
            <NavLink to="/solver" className={({isActive})=> isActive? 'sidebar-item active':'sidebar-item'}>
              🎯 Masala yechish
            </NavLink>
          </div>
        </aside>

        <main className="container centered">
          <Routes>
            <Route path="/" element={<AboutPage/>} />
            <Route path="/usage" element={<UsagePage/>} />
            <Route path="/examples" element={<ExamplesPage/>} />
            <Route path="/solver" element={<SolverPage/>} />
          </Routes>
        </main>

        <footer className="footer">© 2026 Dinamik Dasturlash Platformasi. Barcha huquqlar himoyalangan.</footer>
      </div>
    </Router>
  )
}
