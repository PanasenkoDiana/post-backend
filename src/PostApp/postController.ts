import { Request, Response } from "express"
import postsService from "./postService"

async function getAllPosts(req: Request, res: Response) {
    // это не контексты
    const context = await postsService.getAllPosts()
    res.json(context)
}

async function getPostById(req: Request, res: Response) {
    let id: number = Number(req.params.id)
    const context = await postsService.getPostById(id)
    res.json(context)
}


const functions = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
}

export default functions
