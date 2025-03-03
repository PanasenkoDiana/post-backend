import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

async function getAllPosts() {
    try {
        const posts = await Prisma.post.findMany({
            include: {
                category: true
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

const functions = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
}

export default functions
