import { EventInterface } from '@/interfaces/Event.interface';
import { EventComponent } from '../Event/EventComponent';

export async function EventList() {
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:4000/events');
      return await response.json();
    } catch (err) {
      console.log("Error ==", err)
      return null;
    }
  };

  const eventList = await fetchEvents();
  console.log ("eventList = ", eventList)

  return (
    eventList.map((event: EventInterface) => (
      <EventComponent event={event} key={event.id} />
    ))
  )
}