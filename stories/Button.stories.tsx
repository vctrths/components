import {IcRoundRefresh} from 'alinea/ui/icons/IcRoundRefresh'
import type {CSSProperties} from 'react'
import {Button} from '../src/components/Button.tsx'

const styleStack: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: 10
}

export function All() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <div style={styleStack}>
        <Button>Solid</Button>
        <Button isDisabled>Solid disabled</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="outline" isDisabled>
          Outline disabled
        </Button>
      </div>
      <div style={styleStack}>
        <Button intent="secondary">Solid secondary</Button>
        <Button appearance="outline" intent="secondary">
          Outline secondary
        </Button>
      </div>
      <div style={styleStack}>
        <Button appearance="plain">Plain</Button>
      </div>
    </div>
  )
}

export function Appearance() {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button>Solid</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="plain">Plain</Button>
    </div>
  )
}

export function Intents({isDisabled}: {isDisabled: boolean}) {
  return (
    <div style={{display: 'flex', gap: 10}}>
      <Button isDisabled={isDisabled}>Primary</Button>
      <Button intent="secondary" isDisabled={isDisabled}>
        Secondary
      </Button>
      <Button intent="danger" isDisabled={isDisabled}>
        Danger
      </Button>
      <Button intent="warning" isDisabled={isDisabled}>
        Warning
      </Button>
    </div>
  )
}

Intents.args = {
  isDisabled: false
}

export function Sizes() {
  return (
    <div style={{display: 'flex', alignItems: 'flex-start', gap: 10}}>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </div>
  )
}

export function WithIcon() {
  return (
    <div style={styleStack}>
      <Button>
        <IcRoundRefresh data-slot="icon" />
        With icon
      </Button>
    </div>
  )
}
