import React, { PropsWithChildren } from 'react'

interface Props {}

const DefaultLayout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <h1>DefaultLayout</h1>
      <div>ahoj</div>
    </div>
  )
}

export default DefaultLayout
