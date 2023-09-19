import { AppDataSource } from '../../../data-source';
import { Event } from '../../entities/Event';
import { Host } from '../../entities/Host';
import { eventsMock } from '../../mocks/events.mock';
import { hostsMock } from '../../mocks/hosts.mock';

const seedHosts = async () => {
  const hostRepository = AppDataSource.getRepository(Host);
  const hostsCount = await hostRepository.count();
  if (hostsCount === 0) {
    console.info("=> Starting to seed hosts");

    await Promise.all(
      hostsMock.map(async (host) => {
        const newHost = hostRepository.create(host);
        await hostRepository.save(newHost);
      })
    );

    console.info("✅ Hosts seeded successfully.");
  } else {
    console.info("=> Database is already seeded with hosts");
  }
};

const seedEvents = async () => {
  const eventRepository = AppDataSource.getRepository(Event);
  const hostRepository = AppDataSource.getRepository(Host);
  const allHosts = await hostRepository.find();
  
  const eventsCount = await eventRepository.count();
  if (eventsCount < 10) {
    console.info("=> Starting to seed events");

    await Promise.all(
      eventsMock.map(async (event) => {
        const randomHost = allHosts[Math.floor(Math.random() * allHosts.length)];
        const newEvent = eventRepository.create(event);
        await eventRepository.save({...newEvent, host_id: randomHost.id});
      })
    );

    console.info("✅ Events seeded successfully.");
  } else {
    console.info("=> Database is already seeded with events");
  }
};

export async function seedDatabase() {
  try {
    console.info("=> Starting to run the seed script");

    await AppDataSource.initialize()
    await seedHosts();
    await seedEvents();
  } catch (err) {
    console.error("⚠ Error seeding hosts: ", err);
  }
}

seedDatabase().then(async () => {
  console.info("=> Destroying DB connection...");
  await AppDataSource.destroy()

  console.info("✅ Completed!");
});
