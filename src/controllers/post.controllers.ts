import { Request, Response, NextFunction } from "express";
import { connectDatabase } from "../database/database";
import { Post } from "../database/models/post.interface";

// GET POST LIST
export async function getPosts(req:Request, res: Response, next: NextFunction):Promise<Response> {
    const conn = await connectDatabase();
    const postList = await conn.query("SELECT * FROM post")
    
    return res.json(postList[0])
}
// POST NEW POST
export async function newPost(req:Request, res: Response, next: NextFunction):Promise<Response> {
    const newPost: Post = req.body;
    const conn = await connectDatabase();
    await conn.query("INSERT INTO post SET ?", [newPost])
    return res.json({msg:"post CREATED", data: newPost})
}

// OPERATIONS BY ID

// GET POST BY ID
export async function getPost(req:Request, res: Response, next: NextFunction):Promise<Response> {
    const id = req.params.postId
    const conn = await connectDatabase();
    const post = await conn.query("SELECT * FROM post WHERE id = ?", [id])
    return res.json(post[0])
}

//DELETE POST

export async function deletePost(req:Request, res: Response, next: NextFunction):Promise<Response> {
    const id = req.params.postId
    const conn = await connectDatabase();
    await conn.query("DELETE FROM post WHERE id = ?", [id])
    return res.json({msg: "Post DELETED"})
}