import { ChallengeBox } from "components/ChallengeBox";
import { CompletedChallenges } from "components/CompletedChallenges";
import { Countdown } from "components/Countdown";
import { Profile } from "components/Profile";
import { Wrapper } from "components/Wrapper";
import { CountdownProvider } from "contexts/CountdownContext";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengesProvider } from 'contexts/ChallengesContext'
import { ExperienceBar } from "../../components/ExperienceBar";
import { UserContext } from "contexts/UserContext";
import { useContext, useEffect } from "react";

interface AppProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function App (props: AppProps) {
  const { user } = useContext(UserContext)
  useEffect(() => {
    console.log(user)
  }, []) 
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Wrapper>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Wrapper>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  console.log(ctx.params)

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}