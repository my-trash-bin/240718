import { prisma } from "./prisma";

export async function main(id: number, include: boolean) {
  return await prisma.a.findUniqueOrThrow({
    where: { id },
    include: { b: include },
  });
}
