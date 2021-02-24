import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      {activeChallenge ? (
        <S.ChallangeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button 
              type="button"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
            >
              Completei
            </button>
          </footer>
        </S.ChallangeActive>
      ): (
        <S.ChallangeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up"/>
            Avance de level completando desafio
          </p>
        </S.ChallangeNotActive>
      )}
    </S.Wrapper>
  )
}