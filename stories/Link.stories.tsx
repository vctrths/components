import {Link} from '../src/components/Link.tsx'
import {Stack} from './Stack.tsx'

export const Variants = () => (
  <Stack>
    <Link href="https://google.com" target="_blank">
      Default link (plain)
    </Link>
    <Link href="https://google.com" target="_blank" variant="underline">
      Underline link
    </Link>
  </Stack>
)
