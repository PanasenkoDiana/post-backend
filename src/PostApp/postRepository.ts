import { PrismaClient } from '@prisma/client'
// из client надо импортировать
const Prisma = new PrismaClient()

async function getAllPosts() {
    try {
        const posts = await Prisma.post.findMany({
            include: {
                category: true, 
            }
        })
        console.log(posts)
        return posts
    } catch (error) {
        console.log("Error getAllPosts: ", error)
    }
}

async function getPostById(id: number) {
    try {
        const post = await Prisma.post.findUnique({
            where: {
                id: id
            },
            include: {
                category: true,
            }
        })
        console.log(post)
        return post
    } catch (error) {
        console.log("Error getPostById: ", error)
    }
}

async function getPostsByCategory(categoryId: number) {
    try {
        const posts = await Prisma.post.findMany({
            where: {
                categoryId: categoryId
            },
            include: {
                category: true, 
            }
        })
        console.log(posts)
        return posts
    } catch (error) {
        console.error("Error getPostsByCategory: ", error)
        // тут throw а выше нет. Делай все репо под один стиль
        throw error
    }
}

const functions = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    getPostsByCategory: getPostsByCategory
}

export default functions
