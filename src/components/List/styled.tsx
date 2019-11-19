import SunIcon from '@material-ui/icons/WbSunny'
import styled from 'styled-components'

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  padding: 10px;
  transition: 0.25s linear background;
  background: #fff;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`

export const Image = styled.img`
  max-width: 40px;
  max-height: 40px;
  margin-right: 30px;
`

export const Cell = styled.div`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`

export const CityName = styled.b`
  display: block;
`

export const Description = styled.span`
  display: block;
`

export const SunIcons = styled.div`
  display: inline-flex;
  align-items: center;

  & > * + * {
    margin-right: 5px;
  }
`

export const Sun = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.sunColor};
`

export const SmallSpan = styled.span`
  font-size: 10px;
  line-height: 10px;
`
