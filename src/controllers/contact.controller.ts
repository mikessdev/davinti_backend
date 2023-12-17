import { FastifyReply, FastifyRequest } from "fastify";
import { ContactService, IContactService } from "@services/contact.service";
import { Contact } from "@utils/types/contact.type";
import { Message } from "@utils/types/message.type";

export interface IContactController {
  getContact: (
    request: FastifyRequest,
    reply: FastifyReply
  ) => Promise<Contact[]>;
  createContact: (contact: Contact, reply: FastifyReply) => Promise<Contact>;
  updateContact: (contact: Contact, reply: FastifyReply) => Promise<number[]>;
  deleteContact: (id: number, reply: FastifyReply) => Promise<Message>;
}

export class ContactController implements IContactController {
  private readonly service: IContactService = new ContactService();

  async getContact(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<Contact[]> {
    const { name, phoneNumber } = request.query;
    if (name) {
      return await this.service.getContactByName(name);
    }

    if (phoneNumber) {
      return await this.service.getContactByPhoneNumber(phoneNumber);
    }

    reply.code(422);
    throw new Error("You need to put a query to search: name or phoneNumber!");
  }

  async createContact(contact: Contact, reply: FastifyReply): Promise<Contact> {
    return await this.service.createContact(contact);
  }

  async updateContact(contact: Contact): Promise<number[]> {
    return this.service.updateContact(contact);
  }

  async deleteContact(id: number, reply: FastifyReply): Promise<Message> {
    const result: number = await this.service.deleteContact(id);
    const contactHasBeenDeleted: boolean = result === 1;

    if (!contactHasBeenDeleted) {
      reply.code(404);
      return { message: "No contacts found that can be deleted!" };
    }

    return { message: "The contact has been successfully deleted!" };
  }
}
