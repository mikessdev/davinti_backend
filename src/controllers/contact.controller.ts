import { FastifyReply, FastifyRequest } from "fastify";
import { ContactService, IContactService } from "@services/contact.service";

export interface IContactController {
  getContactByName: (name: string, reply: FastifyReply) => Promise<Contact>;
  createContact: (contact: Contact, reply: FastifyReply) => Promise<Contact>;
}

export type Contact = {};

export class ContactController implements IContactController {
  private readonly service: IContactService = new ContactService();

  async getContactByName(name: string, reply: FastifyReply): Promise<Contact> {
    if (!name) {
      reply.code(422);
      throw new Error("Preencha o campo nome!");
    }

    return await this.service.getContactByName(name);
  }

  async createContact(contact: Contact, reply: FastifyReply): Promise<Contact> {
    if (!contact) {
      reply.code(422);
      throw new Error("Preencha o campo de contato!");
    }
    return await this.service.createContact(contact);
  }
}
