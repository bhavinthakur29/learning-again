import './App.css'
import { ThemeProvider } from './components/ThemeToggle/ThemeProvider'
import { Header, MainSection, Footer } from './layout'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='teksquad-theme'>
      <div className='app-container'>
        <Header siteName='Teksquad' />
        <MainSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
