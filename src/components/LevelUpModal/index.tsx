import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export function LevelUpModal () {
  const { level, closeModalLevelUp } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Wrapper>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>
        <button 
          type="button"
          onClick={closeModalLevelUp}
        >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </S.Wrapper>
    </S.Overlay>
  )
}