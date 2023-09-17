import { AppDataSource } from '../../../data-source';
import { Host } from '../../entities/Host';
import { hostsData } from '../../mocks/hosts.mock';

export async function seedHosts() {
  try {
    console.info("=> Starting to run the seed script");

    await AppDataSource.initialize()
    const hostRepository = AppDataSource.getRepository(Host);
    const hostsCount = await hostRepository.count();
    if (hostsCount === 0) {
      await Promise.all(
        hostsData.map(async (host) => {
          const newHost = hostRepository.create(host);
          await hostRepository.save(newHost);
        })
      );

      console.info("✅ Hosts seeded successfully.");
    } else {
      console.info("=> Database is already seeded");
    }
  } catch (err) {
    console.error("⚠ Error seeding hosts: ", err);
  }
}

seedHosts().then(async () => {
  console.info("=> Destroying DB connection...");
  await AppDataSource.destroy()

  console.info("✅ Completed!");
});
