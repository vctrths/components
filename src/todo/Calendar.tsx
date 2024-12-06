import {
  Calendar as AriaCalendar,
  type CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
  type DateValue,
  Heading,
  Text
} from 'react-aria-components'

import './Calendar.css'
import {Button} from '../components/Button'

export interface CalendarProps<T extends DateValue>
  extends AriaCalendarProps<T> {
  errorMessage?: string
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar {...props}>
      <header>
        <Heading />
        <Button size="square" shape="circle" appearance="plain" slot="previous">
          ◀
        </Button>
        <Button size="square" shape="circle" appearance="plain" slot="next">
          ▶
        </Button>
      </header>
      <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaCalendar>
  )
}
