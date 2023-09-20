'use client'

import * as Styled from './ButtonStyles';
 
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void;
};

export default function ButtonComponent({ children, onClick }: ButtonProps) {
  return (
    <Styled.ButtonContainer>
      <Styled.Button onClick={onClick}>
        {children}
      </Styled.Button>
    </Styled.ButtonContainer>

  )
};