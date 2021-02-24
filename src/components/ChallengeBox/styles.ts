import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    text-align: center;
    
  `}
`

export const ChallangeNotActive = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    & p {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 70%;
      line-height: 1.4;
      margin-top: 3rem;
    }

    & p img {
      margin-bottom: 1rem;
    }
  `}
`

export const ChallangeActive = styled.div`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    flex-direction: column;

    & header {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem; 

      border-bottom: 1px solid var(--gray-line);
    }

    & main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & strong {
        font-size: 2rem;
        font-weight: 600;
        color: var(--title);
        margin: 1.5rem 0 1rem;

      }

      & p {
        line-height: 1.5;
      }
    }

    & footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      
      & button {
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
        color: var(--white);

        font-size: 1rem;
        font-weight: 600;
        transition: filter .2s;

        &:hover {
          filter: brightness(0.9);
        }

        &:first-child {
          background-color: var(--red);
        }

        &:last-child {
          background-color: var(--green);
        }
      }
    }
  `}
`