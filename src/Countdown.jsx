import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

const Countdown = () => {
  const targetDate = new Date('2025-07-04T10:00:00-04:00')
  const [now, setNow] = useState(new Date())
  const [celebrated, setCelebrated] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const afterThesis = new Date('2025-07-04T11:00:00-04:00')
    if (now >= afterThesis && !celebrated) {
      confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } })
      setCelebrated(true)
    }
  }, [now, celebrated])

  let content = ''
  if (now < targetDate) {
    const diff = targetDate - now
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    content = `Erika Melissa, faltan ${hours}h ${minutes}m ${seconds}s para exponer tu tesis. ¡Ánimo! 💪`
  } else if (now >= targetDate && now < new Date('2025-07-04T11:00:00-04:00')) {
    content = '¡Erika Melissa está exponiendo su tesis ahora mismo! 👩‍🎓📐 ¡Confía en ti!'
  } else {
    content = '¡Felicidades Erika Melissa! 🥳 Ya eres arquitecta oficialmente. ¡Bravo!'
  }

  return <p className="message">{content}</p>
}

export default Countdown
