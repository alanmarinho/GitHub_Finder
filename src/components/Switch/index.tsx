import { ChangeEvent, useState} from 'react';
import * as S from './style'
import usePersistState from '../../Utils/usePersistState';

interface Props {
  active?: boolean
  onChange(e: ChangeEvent<HTMLInputElement>): void
}
usePersistState
export const Switch: React.FC<Props> = ({ onChange, active = false }) => {
  const [checked, setChecked] = useState(active);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e);
  }

  return (
    <S.Label>
      <S.Input checked={checked} type="checkbox" onChange={handleChange} />
      <S.Switch />
    </S.Label>
  )
}