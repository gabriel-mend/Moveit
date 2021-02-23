import * as S from "./styles";

export function Profile () {
  return (
    <S.Wrapper>
      <img src="https://github.com/loadingGabriel.png" />
      <div>
        <strong>Gabriel Mendonça</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </S.Wrapper>
  )
}