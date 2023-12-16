import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  ContactController,
  IContactController,
} from "@controllers/contact.controller";

export async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/contact/:name",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const contactController: IContactController = new ContactController();
      const { name } = request.params;

      return reply.send(await contactController.getContactByName(name, reply));
    }
  );
}
