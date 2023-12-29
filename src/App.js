import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './shared/components/Header'
import Footer from './shared/components/Footer'
import Home from './home/pages/Home'
import About from './about/pages/About'
import Contact from './contact/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mt-8 lg:mt-16 z-0 overflow-hidden">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
