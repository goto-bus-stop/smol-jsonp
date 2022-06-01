import { expectType } from 'tsd'
import jsonp from '.'

await jsonp('https://example.com')
await jsonp('https://example.com', {})
await jsonp('https://example.com', { param: undefined })
await jsonp('https://example.com', { param: 'cb' })

expectType<{ test: number }>(
  await jsonp<{ test: number }>('https://example.com')
)
