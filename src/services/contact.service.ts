import { Contact } from "@utils/types/contact.type";
import {
  ContactRepository,
  IContactRepository,
} from "src/repositoy/contact.repository";

export interface IContactService {
  getContactByName: (name: string) => Promise<Contact[]>;
  getContactByPhoneNumber: (phoneNumber: string) => Promise<Contact[]>;
  findAll: () => Promise<Contact[]>;
  createContact: (contact: Contact) => Promise<Contact>;
  updateContact: (contact: Contact) => Promise<number[]>;
  deleteContact: (id: number) => Promise<number>;
}

export class ContactService implements IContactService {
  private readonly repository: IContactRepository = new ContactRepository();

  async getContactByName(name: string): Promise<Contact[]> {
    return await this.repository.getContactByName(name);
  }

  async getContactByPhoneNumber(number: string): Promise<Contact[]> {
    return await this.repository.getContactByPhoneNumber(number);
  }

  async findAll(): Promise<Contact[]> {
    return await this.repository.findAll();
  }

  async createContact(contact: Contact): Promise<Contact> {
    return await this.repository.createContact(contact);
  }

  async updateContact(contact: Contact): Promise<number[]> {
    return this.repository.updateContact(contact);
  }

  async deleteContact(id: number): Promise<number> {
    return await this.repository.deleteContact(id);
  }
}
