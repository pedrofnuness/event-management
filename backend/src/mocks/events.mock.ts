import EventInterface from '../interfaces/Event.interface';
import { speakersMock } from './speakers.mock';

export const eventsMock: EventInterface[] = [
  {
    title: "Tech Symposium 2025",
    date: new Date('2025-09-20'),
    speakers: speakersMock,
  },
  {
    title: "Digital Marketing Masterclass",
    date: new Date('2025-10-15'),
    speakers: speakersMock,
  },
  {
    title: "Finance for Beginners Workshop",
    date: new Date('2025-08-10'),
    speakers: speakersMock,
  },
  {
    title: "Innovations in Artificial Intelligence",
    date: new Date('2025-11-05'),
    speakers: speakersMock,
  },
  {
    title: "Web Development Bootcamp",
    date: new Date('2022-12-25'),
    speakers: speakersMock,
  },
  {
    title: "Leadership and Management Summit",
    date: new Date('2025-06-30'),
    speakers: speakersMock,
  },
  {
    title: "Startup Pitch Competition",
    date: new Date('2023-04-01'),
    speakers: speakersMock,
  },
  {
    title: "Design Thinking Workshop",
    date: null,
    speakers: speakersMock,
  },
  {
    title: "Blockchain and Cryptocurrency Conference",
    date: new Date('2023-07-15'),
    speakers: speakersMock,
  },
  {
    title: "Health and Wellness Expo",
    date: new Date('2023-03-10'),
    speakers: speakersMock,
  },
  {
    title: "Health and Wellness Expo",
    date: new Date('2023-02-01'),
    speakers: speakersMock,
  },
  {
    title: "Event 12",
    date: new Date('2023-09-01'),
    speakers: speakersMock,
  },
  {
    title: "Event 13",
    date: new Date('2023-01-15'),
    speakers: speakersMock,
  },
  {
    title: "Event 14",
    date: new Date('2023-05-20'),
    speakers: speakersMock,
  },
  {
    title: "Event 15",
    date: null,
    speakers: speakersMock,
  }
];