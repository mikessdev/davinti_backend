import { Phone } from "@utils/types/phone.type";
import { Phone as PhoneEntity } from "@database/entities/phone.entity";
export interface IPhoneRepository {
  createPhone: (phone: Phone) => Promise<Phone>;
  updatePhone: (phone: Phone) => Promise<number[]>;
  deletePhone: (id: number) => Promise<number>;
}

export class PhoneRepository implements IPhoneRepository {
  async createPhone(phone: Phone): Promise<Phone> {
    try {
      const { dataValues } = await PhoneEntity.create(phone);
      return dataValues;
    } catch (error) {
      throw new Error("Unable to create phone!");
    }
  }

  async updatePhone(phone: Phone): Promise<number[]> {
    try {
      const result: number[] = await PhoneEntity.update(phone, {
        where: { id: phone.id },
      });
      return result;
    } catch (error) {
      throw new Error("Unable to update phone!");
    }
  }

  async deletePhone(id: number): Promise<number> {
    try {
      const result: number = await PhoneEntity.destroy({
        where: {
          id: id,
        },
      });

      return result;
    } catch (error) {
      throw new Error("Unable to delete phone!");
    }
  }
}
