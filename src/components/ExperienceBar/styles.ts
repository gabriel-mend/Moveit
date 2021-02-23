import styled, { css } from 'styled-components'

export const Header = styled.header`
    ${({ theme }) => css`
        display: flex;
        align-items: center;

        & span {
            font-size: 1rem;
        }
    `}
`

export const CurrentExperience = styled.div`
    ${({ theme }) => css`
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background-color: var(--gray-line);
        margin: 0 1.5rem;
        position: relative;

        & > div {
            height: 4px;
            border-radius: 4px;
            background-color: var(--green);
        }

        & > span {
            position: absolute;
            transform: translateX(-50%);
            top: 12px;
        }
    `}
`