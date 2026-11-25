import { MotionConfig } from 'motion/react'

import { Page } from './site/Page'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Page />
    </MotionConfig>
  )
}
