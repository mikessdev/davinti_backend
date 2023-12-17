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
    "/contact",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const contactController: IContactController = new ContactController();

      return reply.send(await contactController.getContact(request, reply));
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

  fastify.put(
    "/contact",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const contactController: IContactController = new ContactController();
      const { body: contact } = request;

      return reply.send(
        await contactController.updateContact(contact as Contact, reply)
      );
    }
  );

  fastify.delete(
    "/contact/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const contactController: IContactController = new ContactController();
      const { id } = request.params;

      return reply.send(await contactController.deleteContact(id, reply));
    }
  );

  fastify.post(
    "/phone",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const phoneController: IPhoneController = new PhoneController();
      const { body: phone } = request;

      return reply.send(await phoneController.createPhone(phone as Phone));
    }
  );

  fastify.delete(
    "/phone/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const phoneController: IPhoneController = new PhoneController();
      const { id } = request.params;

      return reply.send(await phoneController.deletePhone(id, reply));
    }
  );

  fastify.put(
    "/phone",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const phoneController: IPhoneController = new PhoneController();
      const { body: phone } = request;

      return reply.send(await phoneController.updatePhone(phone as Phone));
    }
  );
}
