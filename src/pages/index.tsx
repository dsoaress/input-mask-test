import { useState } from 'react'

import { CurrencyInput } from '../components/CurrencyInput'
import { formatPrice } from '../utils/formatPrice'

export default function Home() {
  const [price, setPrice] = useState(1234.99)

  return (
    <div>
      <p>Valor formatado: {formatPrice(price)}</p>
      <p>Valor real: {price}</p>
      <CurrencyInput value={price} onChange={value => setPrice(value)} />
    </div>
  )
}
