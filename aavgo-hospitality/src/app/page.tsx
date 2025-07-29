import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import StatsSection from '@/components/StatsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <ContactSection />
    </main>
  )
}
