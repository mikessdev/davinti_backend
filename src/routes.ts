import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  ContactController,
  IContactController,
} from "@controllers/contact.controller";
import { Contact } from "@utils/types/contact.type";
import {
  IPhoneController,
  PhoneController,
} from "@controllers/phone.controller";
import { Phone } from "@utils/types/phone.type";

export async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/contact/:name",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const contactController: IContactController = new ContactController();
      const { name } = request.params;

      return reply.send(await contactController.getContactByName(name, reply));
    }
  );

  fastify.post(
    "/contact",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const contactController: IContactController = new ContactController();
      const { body: contact } = request;

      return reply.send(
        await contactController.createContact(contact as Contact, reply)
      );
    }
  );

  fastify.post(
    "/phone",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const phoneController: IPhoneController = new PhoneController();
      const { body: phone } = request;

      return reply.send(
        await phoneController.createPhone(phone as Phone, reply)
      );
    }
  );
}
