import { IMaskInput } from "react-imask"

type CurrencyInputProps = {
  value: number
  onChange: (value: number) => void
}

export function CurrencyInput({value, onChange}: CurrencyInputProps) {
  return (
    <IMaskInput
      //@ts-ignore
      //Bug na tipagem da lib
      mask="R$ num"
      unmask={true}
      blocks={{
      num: {
        mask: Number,
        thousandsSeparator: '.',
        radix: ',',
        min: 0,
        max: 99999
      }}}
      value={value.toString()}
      onAccept={(value: number) => onChange(value)}
      style={{
        border: '1px solid black',
        padding: '8px'
      }}
    />
  )
}
