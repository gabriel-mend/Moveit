import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        height: 100vh;
        max-width: 992px;
        margin: 0 auto;
        padding: 2.5rem 2rem;

        display: flex;
        flex-direction: column;

        & section {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6.25rem;
            align-content: center;
        }

        & section >  div:nth-child(1) {

        }
    `}
`