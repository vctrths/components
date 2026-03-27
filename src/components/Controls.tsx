import {BoxRow} from './BoxRow.tsx'

export function Controls({label, icon}) {
  return (
    <BoxRow>
      <Button size="icon" appearance="outline" intent="secondary">
        <IcRoundSettings />
      </Button>
      <Button size="icon" appearance="outline" intent="secondary">
        <IcRoundClose />
      </Button>
    </BoxRow>
  )
}
