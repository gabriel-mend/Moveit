import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        font-family: Rajdhani, sans-serif;
        font-weight: 600;
        color: var(--title);


        & div {
            flex: 1;

            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background-color: var(--white);
            box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            font-size: 8.5rem;
            text-align: center;
        }

        & div > span {
            flex: 1;
        }

        & div > span:first-child {
            border-right: 1px solid #f0f1f3;
        }

        & div > span:last-child {
            border-left: 1px solid #f0f1f3;
        }

        & > span {
            font-size: 6.25rem;
            margin: 0 0.5rem;
        }
    `}
`
export const Button = styled.button`
    ${({ theme }) => css`
        width: 100%;
        height: 5rem;
        margin-top: 2rem;
        
        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        background-color: var(--blue);
        color: var(--white);

        font-size: 1.25rem;
        font-weight: 600;

        transition: all .2s;

        &:hover {
            background-color: var(--blue-dark);
        }
    `}
`