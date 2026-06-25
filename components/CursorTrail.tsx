'use client'

import { useEffect } from 'react'
import styles from './CursorTrail.module.css'

export default function CursorTrail() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let last = 0
    const colors = ['#a87e1e', '#c9a44e', '#e8c87a', '#f2e6cb']

    function spawn(x: number, y: number) {
      const el = document.createElement('div')
      el.className = styles.particle
      const size = Math.random() * 10 + 5
      el.style.cssText = [
        `width:${size}px`,
        `height:${size}px`,
        `left:${x - size / 2}px`,
        `top:${y - size / 2}px`,
        `background:${colors[Math.floor(Math.random() * colors.length)]}`,
      ].join(';')
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 700)
    }

    function onMove(e: MouseEvent) {
      const now = Date.now()
      if (now - last < 80) return
      last = now
      spawn(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}
