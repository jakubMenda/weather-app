import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
`

export const Content = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1000px;
  height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`
