'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/home/Hero'
import { IntroSection } from '@/components/home/IntroSection'
import { FoodShowcase } from '@/components/home/FoodShowcase'
import { ExperienceSection } from '@/components/home/ExperienceSection'
import { SocialProof } from '@/components/home/SocialProof'
import { ReservationCTA } from '@/components/home/ReservationCTA'

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Hero />
      <IntroSection />
      <FoodShowcase />
      <ExperienceSection />
      <SocialProof />
      <ReservationCTA />
    </motion.div>
  )
}
