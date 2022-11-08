import client from "./utils/client";

describe("Todo", () => {
  describe("user: Improper Permission to retreive Id field", () => {
    it("should throw error if todo query includes id", async () => {


      // create a client with credentials for Franz
      const userClient = client({ defaultRole: 'user' });

      // get Franz's todos
      const fTodo = await userClient.GetTodos().then((r) => {

      }).catch((e) => {
        console.log(e.response.errors[0].message)
        if (e.response) {
          expect(e.response.status).toBeGreaterThanOrEqual(200);
          expect(e.response.errors[0].message).toEqual('field "id" not found in type: \'todo\'');
          
        } else {
          throw e;
        }

      });
    });
  });
  describe("Admin able to retreive all of todo", () => {
    it("should only see todos with ids", async () => {
      // create a client with credentials for Herbert
      const adminClient = client({ defaultRole: 'admin' });
      const adminTodos = await adminClient.GetTodos()
      expect(adminTodos.todo[0]).toHaveProperty('id')
      expect(adminTodos.todo).toBeDefined();

    });
  });
});