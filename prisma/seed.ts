import { PrismaClient } from '@prisma/client'
import { fakerHU } from '@faker-js/faker';
const prisma = new PrismaClient()

const faker = fakerHU;

async function main() {
  for (let i = 0; i <100; i++){
    await prisma.userProfile.create({
    data: {
      email: faker.internet.email(),
      favBand: faker.music.artist(),
      favColor: faker.color.human(),
      introduction: faker.lorem.sentences({min: 1, max:3}),
      phone: faker.phone.number({style: "international"}),
    }
  })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
