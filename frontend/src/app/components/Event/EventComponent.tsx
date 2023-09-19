'use client'

import { EventInterface } from '@/interfaces/Event.interface';
import * as Styled from './EventStyles';

interface EventDataProps {
  event: EventInterface
}

export function EventComponent({ event }: EventDataProps) {

  return (
    <Styled.Container>
      <Styled.Title>{event.title}</Styled.Title>
    </Styled.Container>
  )
}