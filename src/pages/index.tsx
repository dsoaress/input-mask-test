import { useState } from 'react'

import { CurrencyInput } from '../components/Input'
import { formatPrice } from '../utils/formatPrice'

const Home = () => {
  const [price, setPrice] = useState(9.99)

  return (
    <div>
      <p>Valor formatado: {formatPrice(price)}</p>
      <p>Valor real: {price}</p>
      <CurrencyInput value={price} onChange={value => setPrice(value)} />
    </div>
  )
}

export default Home
