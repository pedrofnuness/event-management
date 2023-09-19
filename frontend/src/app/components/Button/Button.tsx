'use client'

import * as Styled from './ButtonStyles';
import { useRouter } from 'next/navigation'
 
interface ButtonProps {
  children: React.ReactNode
  type: string;
};

export default function ButtonComponent({ children, type }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    switch (type) {
      case "navigate":
        return router.push('/create');
      
      case "navigate-back":
        return router.back();

      default:
        return () => {}
    }
  };

  return (
    <Styled.ButtonContainer>
      <Styled.Button onClick={handleClick}>
        {children}
      </Styled.Button>
    </Styled.ButtonContainer>

  )
};