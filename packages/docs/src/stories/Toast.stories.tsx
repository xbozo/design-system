import { Button, Toast, ToastProps } from '@bozo-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

function DemoToast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  // Lógica de autoclose do toast abaixo
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setIsOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
