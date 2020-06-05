import styled, { keyframes } from 'styled-components'
import Colors from '../Colors'

const inputLoadingAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledErrorMessage = styled.span`
  color: ${Colors['Red-600']};
  top: 42px;
  ${({ highlight }) => highlight && `
    top: 72px;
  `}
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 15px;
  font-size: 12px;
`

export const StyledIconError = styled.span`
    color: ${Colors['Red-700']};
    top: 45px;
    position: absolute;
    width: 100%;
    :before {
        content: '!';
        color: #fff ;
        padding-left: 6px;
        box-sizing: border-box;
        position: absolute;
        top: -21px;;
        right: 21px;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid #fff;
    }
`

export const StyledIconLoading = styled.span`
  cursor: wait;
  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 12px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 1px solid ${Colors['Blue-Grey-200']};
    border-top-color: ${Colors['Blue-500']};
    animation: ${inputLoadingAnimation} .6s linear infinite;
  }
`

export const Input = styled.input`
  position: relative;
  border: none;
  border-bottom: 1px solid ${Colors["Blue-Grey-100"]};
  color: ${Colors["Grey-900"]};
  font-size: 14px;
  padding: 10px 50px 10px 20px;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    font-size: 14px;
    ${({ highlight }) => highlight && `
      font-size: 2.4rem;
    `}
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: ${Colors["Blue-Grey-100"]};
  }

  ${({ disabled }) => disabled && `
    color: ${Colors["Blue-Gray-200"]};
    border-color: ${Colors["Blue-Gray-200"]};
    cursor: not-allowed;
    ::placeholder {
      color: ${Colors["Blue-Gray-100"]};
    }`}

  ${({ textCenter }) => textCenter && `
    text-align: center;
  `}

  ${({ highlight }) => highlight && `
    font-size: 2.4rem;
  `}

  ${({ loading }) => loading && `
    color: ${Colors["Light-Blue-200"]};
    border-color: ${Colors["Light-Blue-200"]};
    background-color: transparent;
    cursor: wait;
    ::placeholder {
      color: ${Colors["Light-Blue-100"]};
    }`}

  ${({ error }) => error && `
    color: ${Colors["Red-500"]};
    border-color: ${Colors["Red-500"]};
    ::placeholder {
      color: ${Colors["Red-100"]};
    }`}

  ${({ success }) => success && `
    color: ${Colors["Green-500"]};
    border-color: ${Colors["Green-500"]};
    ::placeholder {
      color: ${Colors["Green-100"]};
    }`}

`;

export default Input