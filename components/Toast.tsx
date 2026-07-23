'use client'

import { useEffect } from 'react'

interface ToastProps {
  message: string | null
  onDismiss: () => void
}

export default function Toast({ message, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(onDismiss, 2750)
    return () => clearTimeout(timer)
  }, [message, onDismiss])

  if (!message) return null

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] bg-[#3F3F3F] text-white text-sm px-6 py-3 rounded shadow-lg animate-slide-up max-w-sm text-center"
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
