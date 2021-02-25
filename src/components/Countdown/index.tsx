import { CountdownContext } from "contexts/CountdownContext";
import { useContext, useEffect, useState } from "react";
import * as S from "./styles";

export function Countdown () {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
  

  return (
    <>
      <S.Wrapper>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.Wrapper>
      {hasFinished ? (
        <S.Button 
          type="button"
          disabled
        >
          Ciclo Encerrado
        </S.Button>
      ): (
        <S.Button 
          type="button"
          active={isActive}
          onClick={!isActive ? startCountdown : resetCountdown}

        >
          { !isActive ? 'Iniciar um ciclo' : 'Abadonar ciclo' }
        </S.Button>
      )}
    </>
  )
}