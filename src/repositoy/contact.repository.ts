import { Contact } from "@utils/types/contact.type";
import { Contact as ContactEntity } from "@database/entities/contact.entity";
import { Phone as PhoneEntity } from "@database/entities/phone.entity";
export interface IContactRepository {
  createContact: (contact: Contact) => Promise<Contact>;
  getContactByName: (name: string) => Promise<Contact[]>;
}

export class ContactRepository implements IContactRepository {
  async createContact(contact: Contact): Promise<Contact> {
    const { dataValues } = await ContactEntity.create(contact);
    return dataValues;
  }

  async getContactByName(name: string): Promise<Contact[]> {
    console.log(
      await ContactEntity.findAll({
        where: {
          name: name,
        },
        include: { model: PhoneEntity },
        raw: true,
        nest: true,
      })
    );
    return await ContactEntity.findAll({
      where: {
        name: name,
      },
      include: [{ model: PhoneEntity }],
      raw: true,
      nest: true,
    });
  }
}
