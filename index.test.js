const app = require('./app')
const request = require('supertest')

describe("Test the root path", () => {
    test("It should return 'Olá galera!'", async () => {
    const response = await request(app).get("/")
    expect(response.text).toBe('<h1>Olá galera</h1>')
    });
  });