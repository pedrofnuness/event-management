'use client'

import React, { useState } from 'react';
import * as Styled from './InputStyles';
 
interface InputProps {
  id: string;
  placeholder: string;
  label: string;
  type?: string
};

export default function InputComponent({ placeholder, label, id, type }: InputProps) {
  const [value, setValue] = useState("");

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  return (
    <>
      <Styled.Container>
        <Styled.Label htmlFor={id}>{label}</Styled.Label>
        <Styled.Input 
          value={value}
          onChange={handleChangeValue}
          placeholder={placeholder}
          name={id}
          id={id}
          type={type}
        />
      </Styled.Container>
    </>

  )
};