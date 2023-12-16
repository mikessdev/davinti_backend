import { FastifyReply, FastifyRequest } from "fastify";

export interface IContactController {
  getContactByName: (name: string, reply: FastifyReply) => Promise<Contact>;
}

export type Contact = {};

export class ContactController implements IContactController {
  async getContactByName(name: string, reply: FastifyReply): Promise<Contact> {
    if (!name) {
      reply.code(422);
      throw new Error("Preencha o campo nome!");
    }
    return { name: name };
  }
}
