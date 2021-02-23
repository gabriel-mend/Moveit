import * as S from "./styles";

export function Wrapper (props) {
    return (
        <S.Wrapper>
            {props.children}
        </S.Wrapper>
    )
}