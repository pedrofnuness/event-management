'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { EventInterface } from '@/interfaces/Event.interface';
import { EVENT_STATUS } from '@/app/common/eventStatus';
import { EventComponent } from '../Event/EventComponent';
import Filter from '../Filter/Filter';
import * as Styled from './EventListStyles';

interface EventListProps {
  list: EventInterface[];
};

export function EventList({ list }: EventListProps) {
  const eventsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [sortedEvents, setSortedEvents] = useState<EventInterface[]>([]);
  const [visibleEvents, setVisibleEvents] = useState<EventInterface[]>([]);
  const [selectedStatus, setSelectedStatus] = useState(EVENT_STATUS.DEFAULT);

  const sortEventsByCreationDate = (events: EventInterface[]) => {
    return events.slice().sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  };

  const updateVisibleEvents = () => {
    if (selectedStatus === EVENT_STATUS.DEFAULT) {
      const startIndex = (currentPage - 1) * eventsPerPage;
      const endIndex = startIndex + eventsPerPage;
      const nextEvents = sortedEvents.slice(startIndex, endIndex);
      setVisibleEvents([ ...visibleEvents, ...nextEvents ]);
    };
  };

  const loadMore = () => {
    const startIndex = currentPage * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const nextEvents = sortedEvents.slice(startIndex, endIndex);
    setCurrentPage(currentPage + 1);
    setVisibleEvents([...visibleEvents, ...nextEvents]);
  };

  const filterEvents = useCallback(() => {
    if (selectedStatus === EVENT_STATUS.DEFAULT) {
      setSortedEvents(sortEventsByCreationDate(list));
    } else {
      const filteredEvents = sortedEvents.filter((event) => event.status === selectedStatus);
      setVisibleEvents(filteredEvents);
    }
  }, [selectedStatus, list]);

  useEffect(() => {
    filterEvents();
  }, [selectedStatus, filterEvents, list]);

  useEffect(() => {
    updateVisibleEvents();
  }, [currentPage, sortedEvents]);

  const shouldShowLoadButton = visibleEvents.length < sortedEvents.length;

  return (
    <>
      <Filter selectedStatus={selectedStatus} onSelectStatus={setSelectedStatus} />

      <Styled.GridContainer>
        {visibleEvents.map((event: EventInterface) => (
          <EventComponent event={event} key={event.id} />
        ))}
      </Styled.GridContainer>
      {shouldShowLoadButton && (
        <Styled.LoadButton onClick={loadMore}>Load More</Styled.LoadButton>
      )}
    </>
  );
}