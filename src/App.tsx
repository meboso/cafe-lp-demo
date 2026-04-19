import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Access from './components/Access'
import Contact from './components/Contact'
import Footer from './components/Footer'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)'/%3E%3C/svg%3E")`

function App() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          backgroundImage: GRAIN_SVG,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
          opacity: 0.032,
          animation: 'grain 0.35s steps(1) infinite',
        }}
      />
      <Header />
      <Hero />
      <Concept />
      <Menu />
      <Gallery />
      <Access />
      <Contact />
      <Footer />
    </>
  )
}

export default App
