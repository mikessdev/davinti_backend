import { Contact } from "@controllers/contact.controller";
import { Contact as ContactIntity } from "@database/entities/contact.entity";
export interface IContactRepository {
  createContact: (contact: Contact) => Promise<Contact>;
}

export class ContactRepository implements IContactRepository {
  async createContact(contact: Contact): Promise<Contact> {
    return await ContactIntity.create(contact);
  }
}
