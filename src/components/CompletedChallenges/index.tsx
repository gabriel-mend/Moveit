import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export function CompletedChallenges () {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <S.Wrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Wrapper>
  )
}