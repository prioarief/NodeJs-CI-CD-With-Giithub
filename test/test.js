const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("respond with Hello World With CI/CD", (done) => {
    request(app).get("/").expect("Hello World With CI/CD", done);
  })
});