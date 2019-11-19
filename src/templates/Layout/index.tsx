import React, { PropsWithChildren } from 'react'
import { Content, Wrapper } from './styled'

interface Props {}

const Layout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout
