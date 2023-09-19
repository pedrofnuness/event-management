import Button from './components/Button/Button';
import { EventList } from './components/EventList/EventList';

export default function Home() {
  return (
    <>
      <EventList />
      <Button type="navigate">Create new event</Button>
    </>
  )
}
