'use client'

import React, { useState, useEffect } from 'react'
import { EventList } from './components/EventList/EventList';
import Link from 'next/link';
import { EventInterface } from '@/interfaces/Event.interface';

export default function Home() {
  const [list, setList] = useState<EventInterface[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/events', { cache: 'no-store' });
      return await response.json();
    } catch (err) {
      console.log("Error ==", err)
      return null;
      //TODO: Error handling
    }
  };
  
  const handleSSEConnection = () => {
    const eventSource = new EventSource('http://localhost:4000/sse');
  
    eventSource.onmessage = async (event) => {  
      const updatedEvents = await fetchEvents();
      setList(updatedEvents);
    };
    
    eventSource.onerror = (error) => {
      console.error('SSE Error:', error);
      eventSource.close()
    };
  }

  useEffect(() => {
    fetchEvents().then(initialEvents => {
      if (initialEvents) {
        setList(initialEvents);
      }
    });

    handleSSEConnection();
  }, []);

  return (
    <>
      <Link className="navigation" href="/create">Create new event</Link>
      <EventList list={list} />
    </>
  )
}
