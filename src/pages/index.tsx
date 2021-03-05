import { useContext } from "react";
import { useRouter } from 'next/router'
import * as S from "styles/home.page";
import { UserContext } from 'contexts/UserContext'

export default function Login() {
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()
  
  return (
    <S.Section>
      <S.Container>
        <div></div>
        <div>
          <S.Login>
            <img src="/logo-full.svg" alt=""/>
            <h1>Bem Vindo</h1>
            <div>
              <img src="/icons/github.svg" alt=""/>
              <p>Faça login com seu Github<br/>para começar</p>
            </div>
            <S.Input>
              <input 
                type="text"
                placeholder="Digite seu username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <button 
                type="button"
                onClick={user !== '' ? () => router.push(`/app/${user}`) : null}
              >
                <img src="/icons/vector.svg" alt=""/>
              </button>
            </S.Input>
          </S.Login>
        </div>
      </S.Container>
    </S.Section>
  )
}