import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { routes } from "./routes";
import { database } from "@database/database.config";

const app = Fastify({
  logger: true,
});

const start = async () => {
  await app.register(routes);

  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }

  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();
