import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function getAllCategories() {
    try {
        const categories = await Prisma.category.findMany()
        console.log(categories)
        return categories
    } catch (error) {
        console.log("Error getAllCategories: ", error)
    }
}

const functions = {
    getAllCategories: getAllCategories
}

export default functions
