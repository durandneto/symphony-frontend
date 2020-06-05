import styled from 'styled-components'
import Colors from '../Colors'

export const GraphContainer = styled.div`
  display: flex;
  height: 200px;
  position: relative;

  ${({ height }) => height && `
    height: ${height};
  `}

  ${({ loading }) => loading && `
    opacity: 0.5;
  `}
`

export const GraphColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 5px;
  transition: transform .2s;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`
export const GraphHover = styled.div`
  bottom: -40px;
  position: absolute;
  transform: rotate(-90deg);
  white-space: nowrap;
`

export const GraphColumnValue = styled.div`
  background-color: blue;
  transition: height 0.3s ease-out;
  height: 0;
  ${({ height }) => height && `
    height: ${height}%;
  `}

  ${({ lineWidth }) => lineWidth && `
    width: ${lineWidth};
  `}
`

export const GraphGap = styled(GraphColumnValue)`
  background-color: ${Colors["Grey-100"]};

  ${({ height }) => height && height === 100 && `
    height: ${height/2}%;
    background-color: ${Colors["Grey-200"]};
  `}
`

export const GraphValue = styled(GraphColumnValue)`
  ${({ color }) => color && `
    background-color: ${Colors[color]};
  `}
  ${({ color }) => color && `
    background-color: ${Colors[color]};
  `}
`

export default GraphContainer