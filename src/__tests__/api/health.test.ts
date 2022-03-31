import health from "@/pages/api/health";
import { createMocks } from "node-mocks-http";

test("health api works", async () => {
  const { req, res } = createMocks({ method: "GET" });

  await health(req, res);
  expect(res._getStatusCode()).toBe(200);
});
