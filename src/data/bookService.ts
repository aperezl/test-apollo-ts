import { Book } from '@prisma/client'
import prisma from '../prisma/client'

export const getAllBooks = async (): Promise<Book[]> => {
  return prisma.book.findMany()
}
