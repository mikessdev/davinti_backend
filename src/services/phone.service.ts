import { Phone } from "@utils/types/phone.type";
import {
  PhoneRepository,
  IPhoneRepository,
} from "src/repositoy/phone.repository";

export interface IPhoneService {
  createPhone: (phone: Phone) => Promise<Phone>;
}

export class PhoneService implements IPhoneService {
  private readonly repository: IPhoneRepository = new PhoneRepository();

  async createPhone(phone: Phone): Promise<Phone> {
    return await this.repository.createPhone(phone);
  }
}
