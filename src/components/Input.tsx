import { IMaskInput } from "react-imask"

type CurrencyInputProps = {
  value: number
  onChange: (value: number) => void
}

export function CurrencyInput(props: CurrencyInputProps) {
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
      value={props.value.toString()}
      onAccept={(value: number) => props.onChange(value)}
    />
  )
}
