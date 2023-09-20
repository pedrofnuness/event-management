'use client'

import * as Styled from './InputStyles';
 
interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  label?: string;
  type?: string
  autoFocus?: boolean;
  onChange: any;
  isRequired?: boolean;
};

export default function InputComponent({ 
  value, 
  placeholder, 
  label, 
  id, 
  type, 
  autoFocus, 
  onChange,
  isRequired
}: InputProps) {
  return (
    <>
      <Styled.Container>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Input 
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={id}
          id={id}
          type={type}
          autoFocus={autoFocus}
          required={isRequired}
        />
      </Styled.Container>
    </>

  )
};