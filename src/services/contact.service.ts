import { Contact } from "@utils/types/contact.type";
import {
  ContactRepository,
  IContactRepository,
} from "src/repositoy/contact.repository";

export interface IContactService {
  getContactByName: (name: string) => Promise<Contact[]>;
  createContact: (contact: Contact) => Promise<Contact>;
}

export class ContactService implements IContactService {
  private readonly repository: IContactRepository = new ContactRepository();

  async getContactByName(name: string): Promise<Contact[]> {
    return await this.repository.getContactByName(name);
  }

  async createContact(contact: Contact): Promise<Contact> {
    return await this.repository.createContact(contact);
  }
}
