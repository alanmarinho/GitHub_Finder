import * as S from './styles';

type AvatarProps = {
  url_image: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url_image }) => {
  return (
    <S.Borda>
      <S.Container>
        <S.Image src={url_image}></S.Image>
      </S.Container>
    </S.Borda>
  );
}