import { NextFunction, Request, Response } from "express";

export function getIndex(req:Request, res: Response, next: NextFunction):Response{
    return res.json({msg:"hey!"})
}
