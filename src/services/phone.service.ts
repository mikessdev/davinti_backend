import { Phone } from "@utils/types/phone.type";
import {
  PhoneRepository,
  IPhoneRepository,
} from "src/repositoy/phone.repository";

export interface IPhoneService {
  createPhone: (phone: Phone) => Promise<Phone>;
  updatePhone: (phone: Phone) => Promise<number[]>;
  deletePhone: (id: number) => Promise<number>;
}

export class PhoneService implements IPhoneService {
  private readonly repository: IPhoneRepository = new PhoneRepository();

  async createPhone(phone: Phone): Promise<Phone> {
    return await this.repository.createPhone(phone);
  }

  async updatePhone(phone: Phone): Promise<number[]> {
    return await this.repository.updatePhone(phone);
  }

  async deletePhone(id: number): Promise<number> {
    return await this.repository.deletePhone(id);
  }
}
