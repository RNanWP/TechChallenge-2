import request from "supertest";
import { app } from "../index";

describe("GET /api/posts", () => {
  it("retorna status 200 e uma lista de posts", async () => {
    const res = await request(app).get("/api/posts");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
