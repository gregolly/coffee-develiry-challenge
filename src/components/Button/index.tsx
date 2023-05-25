import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  icon?: ReactNode
  label: string
  selected?: boolean
  onClick?: () => void
}

export function Button({ icon, label, selected, onClick }: ButtonProps) {
  return (
    <ButtonContainer
      style={{
        backgroundColor: selected ? '#EBE5F9' : '#E6E5E5',
        border: selected ? '1px solid #8047F8' : '1px solid #E6E5E5',
      }}
      onClick={onClick}
    >
      {icon}
      {label}
    </ButtonContainer>
  )
}
