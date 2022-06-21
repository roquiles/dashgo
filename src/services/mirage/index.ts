import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer() {
  const server = createServer({
    // Serializer determina para o MirageJS como ele deve interpretar os dados que são enviados por ele
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750; // milliseconds

      // Implementing pagination in MirageJS
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length; // discover how many user registers we have

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200, //status code
          { "x-total-count": String(total) }, // headers
          { users } // the body/content
        );
      });

      // Definindo esta rota, o Mirage cria automaticamente uma rota capaz de listar usuários pelo seu ID
      this.get("/users/:id");

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
