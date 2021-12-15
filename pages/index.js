import { useState } from 'react'
import Header from '../components/Pages/Home/Header'
import Features from '../components/Pages/Home/Features'
import FAQ from '../components/Pages/Home/FAQ'
import Footer from '../components/Pages/Home/Footer'
import LoginModal from '../components/Pages/Home/LoginModal'

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header OpenModal={() => setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} CloseModal={() => setOpen(false)} />
    </>
  )
}
