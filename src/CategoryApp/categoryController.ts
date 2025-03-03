import { Request, Response } from "express"
import categoriesService from "./categoryService"

async function getAllCategories(req: Request, res: Response) {
    const context = await categoriesService.getAllCategories()
    res.json(context)
}

const functions = {
    getAllCategories: getAllCategories
}

export default functions
