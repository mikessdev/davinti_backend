import { FastifyReply } from "fastify";
import { Phone } from "@utils/types/phone.type";
import { IPhoneService, PhoneService } from "@services/phone.service";

export interface IPhoneController {
  createPhone: (phone: Phone, reply: FastifyReply) => Promise<Phone>;
}

export class PhoneController implements IPhoneController {
  private readonly service: IPhoneService = new PhoneService();

  async createPhone(phone: Phone, reply: FastifyReply): Promise<Phone> {
    return await this.service.createPhone(phone);
  }
}
