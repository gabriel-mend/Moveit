import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export function Profile () {
  const { level } = useContext(ChallengesContext)
  return (
    <S.Wrapper>
      <img src="https://github.com/loadingGabriel.png" />
      <div>
        <strong>Gabriel Mendonça</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </S.Wrapper>
  )
}