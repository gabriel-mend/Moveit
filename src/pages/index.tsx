import { ChallengeBox } from "components/ChallengeBox";
import { CompletedChallenges } from "components/CompletedChallenges";
import { Countdown } from "components/Countdown";
import { Profile } from "components/Profile";
import { Wrapper } from "components/Wrapper";
import { CountdownProvider } from "contexts/CountdownContext";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengesProvider } from 'contexts/ChallengesContext'
import { ExperienceBar } from "../components/ExperienceBar";

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  console.log(props)
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

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}