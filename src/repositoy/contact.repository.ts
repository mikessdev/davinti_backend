import { Contact } from "@utils/types/contact.type";
import { Contact as ContactIntity } from "@database/entities/contact.entity";
export interface IContactRepository {
  createContact: (contact: Contact) => Promise<Contact>;
  getContactByName: (name: string) => Promise<Contact[]>;
}

export class ContactRepository implements IContactRepository {
  async createContact(contact: Contact): Promise<Contact> {
    const { dataValues } = await ContactIntity.create(contact);
    return dataValues;
  }

  async getContactByName(name: string): Promise<Contact[]> {
    return await ContactIntity.findAll({
      where: {
        name: name,
      },
      raw: true,
      nest: true,
    });
  }
}
