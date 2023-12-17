import { Phone } from "@utils/types/phone.type";
import { Phone as PhoneEntity } from "@database/entities/phone.entity";
export interface IPhoneRepository {
  createPhone: (phone: Phone) => Promise<Phone>;
}

export class PhoneRepository implements IPhoneRepository {
  async createPhone(phone: Phone): Promise<Phone> {
    const { dataValues } = await PhoneEntity.create(phone);
    return dataValues;
  }
}
