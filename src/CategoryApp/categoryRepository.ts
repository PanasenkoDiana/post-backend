import { IError, ISuccess, Category } from "../types/types"
import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();


async function getAllCategories(): Promise<IError | ISuccess<Category[]>> {
    const categories = await Prisma.category.findMany()
    if (!categories) {
        return { status: 'error', message: 'Categories not found' }
    }
    return { status: 'success', data: categories }
}

const functions = {
    getAllCategories: getAllCategories
}

export default functions
