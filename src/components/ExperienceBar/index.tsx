import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";
import * as S from "./styles";

export function ExperienceBar () {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <S.Header>
      <span>0 xp</span>
      <S.CurrentExperience>
        <div style={{width: percentToNextLevel + '%'}}></div>
        <span style={{left: percentToNextLevel + '%'}}>{currentExperience} px</span>
      </S.CurrentExperience>
      <span>{experienceToNextLevel} xp</span>
    </S.Header>
  )
}