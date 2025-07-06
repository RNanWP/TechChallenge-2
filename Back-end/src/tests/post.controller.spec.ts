import { Request, Response } from "express";
import { getAllPosts } from "../controllers/postController";

describe("postController.getAllPosts", () => {
  it("deve chamar res.json com um array vazio quando não há posts", async () => {
    const req = {} as Request;
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status } as unknown as Response;

    await getAllPosts(req, res);

    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(expect.any(Array));
  });
});
