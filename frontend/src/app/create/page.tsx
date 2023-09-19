'use client'

import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input';
import * as Styled from './createPageStyles';

export default function CreatePage() {
  return (
    <Styled.Container>
      <Styled.Title>Create new event</Styled.Title>

      <Styled.FormContainer>
        <Input id="title" label="Title" placeholder="Event title"/>
        <Input id="description" label="Description" placeholder="Event description"/>
        <Input 
          id="date" 
          label="Date of the event" 
          placeholder="Event description" 
          type="date" 
        />
      </Styled.FormContainer>

      <Styled.ButtonsContainer>
        <Button type="create">Confirm</Button>
        <Button type="navigate-back">Back</Button>
      </Styled.ButtonsContainer>

    </Styled.Container>
  )
}
