type ButtonProps = {
  children: string
  value: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
  className: string
  isSelected: boolean
}

export default function Button(props: ButtonProps) {
  const isSelectedStyle = props.isSelected
    ? 'border-amber-300 text-amber-300'
    : ''

  return (
    <button
      className={`rounded border-2 border-slate-50 p-2 m-2 ${props.className} ${isSelectedStyle}`}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </button>
  )
}
