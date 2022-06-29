import { useState } from 'react'
import useInterval from 'hooks/useInterval'

export default function useListening(defaultValue) {
  const [listening, setListening] = useState(defaultValue)

  useInterval(async () => {
    const response = await fetch('/api/listening')
    const track = await response.json() // Handle response code

    if (track.id !== listening.id)
      setListening(track)
  }, 60 * 1000)

  return listening
}
