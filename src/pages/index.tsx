import { ChallengeBox } from "components/ChallengeBox";
import { CompletedChallenges } from "components/CompletedChallenges";
import { Countdown } from "components/Countdown";
import { Profile } from "components/Profile";
import { Wrapper } from "components/Wrapper";
import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

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
    </Wrapper>
  )
}
