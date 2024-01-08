'use client'

import { useState } from 'react'

import Button from '@/components/Button'
import {
  ALPACA_CHARACTERISTICS_MAP,
  ALPACA_CHARACTERISTICS,
  DEFAULT_ALPACA_CHARACTERISTICS,
} from '@/constants/alpaca'

export default function ImageGenerator() {
  const [selectedPart, setSelectedPart] = useState('accessories')
  const [characteristics, setCharacteristics] = useState({})

  const onSetSelectedPart = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedPart(event.target.value)
  }
  console.log(DEFAULT_ALPACA_CHARACTERISTICS)

  return (
    <div>
      <div>
        {ALPACA_CHARACTERISTICS.map((keys) => (
          <Button
            key={keys}
            onClick={onSetSelectedPart}
            value={keys}
            className="capitalize"
            isSelected={keys === selectedPart}
          >
            {keys}
          </Button>
        ))}
      </div>

      <div>
        {Object.entries(ALPACA_CHARACTERISTICS_MAP[selectedPart]).map(
          ([key, value]) => (
            <Button key={key} value={value}>
              {value}
            </Button>
          )
        )}
      </div>
    </div>
  )
}
