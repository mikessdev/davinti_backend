import { Contact } from "@utils/types/contact.type";
import { Contact as ContactEntity } from "@database/entities/contact.entity";
import { Phone as PhoneEntity } from "@database/entities/phone.entity";
export interface IContactRepository {
  createContact: (contact: Contact) => Promise<Contact>;
  getContactByName: (name: string) => Promise<Contact[]>;
  getContactByPhoneNumber: (phoneNumber: string) => Promise<Contact[]>;
  findAll: () => Promise<Contact[]>;
  deleteContact: (id: number) => Promise<number>;
  updateContact: (contact: Contact) => Promise<number[]>;
}

export class ContactRepository implements IContactRepository {
  async createContact(contact: Contact): Promise<Contact> {
    try {
      const { dataValues } = await ContactEntity.create(contact);
      return dataValues;
    } catch (error) {
      throw new Error("Unable to create contact!");
    }
  }

  async getContactByName(name: string): Promise<Contact[]> {
    try {
      const result: Contact[] = await ContactEntity.findAll({
        where: {
          name: name,
        },
        include: { model: PhoneEntity },
        nest: true,
      });

      return result;
    } catch (error) {
      throw new Error("Unable to reach contact!");
    }
  }

  async findAll(): Promise<Contact[]> {
    try {
      const result: Contact[] = await ContactEntity.findAll({
        raw: true,
        nest: true,
      });
      return result;
    } catch (error) {
      throw new Error("Unable to reach contacts!");
    }
  }

  async getContactByPhoneNumber(phoneNumber: string): Promise<Contact[]> {
    try {
      const result: Contact[] = await ContactEntity.findAll({
        include: {
          model: PhoneEntity,
          where: { number: phoneNumber },
        },
        nest: true,
      });
      return result;
    } catch (error) {
      throw new Error("Unable to reach contact by phone number!");
    }
  }

  async deleteContact(id: number): Promise<number> {
    try {
      const result: number = await ContactEntity.destroy({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw new Error("Unable to delete contact!");
    }
  }

  async updateContact(contact: Contact): Promise<number[]> {
    try {
      const result: number[] = await ContactEntity.update(contact, {
        where: { id: contact.id },
      });

      return result;
    } catch (error) {
      throw new Error("Unable to update contact!");
    }
  }
}
