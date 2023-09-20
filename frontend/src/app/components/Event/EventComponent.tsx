'use client'

import { EventInterface } from '@/interfaces/Event.interface';
import * as Styled from './EventStyles';
import { format } from 'date-fns';
import Avatar from '../Avatar/Avatar';
import { EVENT_STATUS } from '@/app/common/eventStatus';

interface EventDataProps {
  event: EventInterface
}

export function EventComponent({ event }: EventDataProps) {
  const date = !!event.date ? format(new Date(event.date!), 'dd/MM/yyyy') : null;

  return (
    <Styled.Container>
      <Styled.Title>{event.title}</Styled.Title>
      <Styled.HostContent>
        <Styled.Label>Hosted by: </Styled.Label>
        <Styled.HostTitle>{event.host?.name || "Host mock"}</Styled.HostTitle>
        <Avatar size="70" path={event.host?.avatar || ""} />
      </Styled.HostContent>
      <Styled.Date>{EVENT_STATUS[event.status]}</Styled.Date>
      { !!date && <Styled.Date>Event date: {date}</Styled.Date> }
    </Styled.Container>
  )
}