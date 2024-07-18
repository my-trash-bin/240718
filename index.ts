import { main } from "./main";
import { prisma } from "./prisma";

(async () => {
  await prisma.a.upsert({
    where: { id: 42 },
    create: { id: 42, name: "hello", b: { create: { name: "world", id: 42 } } },
    update: {},
  });
  const aWithoutB = await main(42, false);
  const bInAWhichShouldBeNullable = aWithoutB.b;
  console.log(bInAWhichShouldBeNullable[42]); // no type error?
})();
