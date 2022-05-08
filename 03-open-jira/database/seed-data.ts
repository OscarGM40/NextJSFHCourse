import { Entry } from '../interfaces';

type SeedEntry = Omit<Entry, '_id'>;
// interface SeedEntry extends Omit<Entry, '_id'> {}

interface SeedData {
  entries: SeedEntry[];
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pending: lNisi sint do eiusmod enim commodo eu laborum ea reprehenderit do.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'In progress: lNisi sint do eiusmod enim commodo eu laborum ea reprehenderit do.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Finished: lNisi sint do eiusmod enim commodo eu laborum ea reprehenderit do.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
