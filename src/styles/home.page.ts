import styled, { css } from "styled-components"

export const Section = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    background-color: ${theme.light.blue};
    background-image: url('Simbolo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 50%;
    background-position-y: center;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 990px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    & div {
      width: 100%;
    }
  `}
`

export const Login = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 420px;
    height: auto;
    margin: 0 auto;

    & > img {
      margin-bottom: 6rem;
    }

    & h1 {
      color: #fff;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 46px;
    }

    & div {
      margin-top: 1.5rem;
      display: flex;
      color: ${theme.light.textHighlight};

      & > img:first-child {
        margin-right: 1.5rem;
      }
    }
  `}
`

export const Input = styled.div`
  ${({ theme }) => css`
    & input {
      width: 100%;
      padding: 0 2rem; 
      border: 0;
      background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
      border-radius: 5px 0px 0px 5px;
      color: #fff;

      &::placeholder {
        color: ${theme.light.textHighlight};
      }
    }

    & button {
      min-width: 80px;
      height: 80px;
      border: 0;
      background: ${theme.light.blueDark};
      border-radius: 0px 5px 5px 0px;
      transition: .3s;

      &:focus {
        background: ${theme.light.green};
      }
    }
  `}
`