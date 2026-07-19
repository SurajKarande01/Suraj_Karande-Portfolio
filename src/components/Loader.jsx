import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="flex gap-2">
            {[
              { delay: 0, color: 'bg-blue-500 shadow-blue-500/20' },
              { delay: 0.15, color: 'bg-emerald-500 shadow-emerald-500/20' },
              { delay: 0.3, color: 'bg-indigo-500 shadow-indigo-500/20' },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className={`h-3 w-3 rounded-full shadow-lg ${dot.color}`}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: dot.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
