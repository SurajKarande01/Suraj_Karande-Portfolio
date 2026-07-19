import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Sleek outer spinning ring */}
            <div className="h-14 w-14 animate-spin rounded-full border-2 border-accent/10 border-t-accent" />
            {/* Pulsing center glow */}
            <div className="absolute h-6 w-6 animate-pulse rounded-full bg-accent/20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
