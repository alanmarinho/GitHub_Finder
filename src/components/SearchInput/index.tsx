import * as C from "../Button/index"
import * as S from "./style"
import { useState , KeyboardEvent} from 'react'

type searchProps = {
  loadUser: (userName: string) => Promise<void> 
}

export const SearchInput: React.FC<searchProps> = ({loadUser}) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName);
    }
  }

  return (
    <div>
      <S.Container>
        <S.Input value={userName} onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
        <C.Button onClick={() => {
          loadUser(userName);
          setUserName("");}
          }>Buscar usuário</C.Button>
      </S.Container>
    </div>
  )
}

export default SearchInput;