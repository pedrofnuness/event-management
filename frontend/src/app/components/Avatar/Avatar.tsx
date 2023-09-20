import * as Styled from './AvatarStyles'

interface AvatarProps {
  path: string;
  size: string;
}

export default function Avatar({ path, size }: AvatarProps) {
  return (
    <Styled.Image src={path} size={size} />
  )
};