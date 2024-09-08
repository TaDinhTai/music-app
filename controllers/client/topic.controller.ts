import { Request, Response, Router } from "express";
import Topic from "../../models/topic.model";

// [GET] /topics/
export const topics = async (req: Request, res: Response) => {
  const topics = await Topic.find({
    deleted: false
  });
 
  res.render("client/pages/topics/index", {
    pageTitle: "Chủ đề bài hát",
    topics: topics
  });
};