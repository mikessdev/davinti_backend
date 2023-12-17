import { Phone } from "@utils/types/phone.type";
import { IPhoneService, PhoneService } from "@services/phone.service";
import { Message } from "@utils/types/message.type";
import { FastifyReply } from "fastify";

export interface IPhoneController {
  createPhone: (phone: Phone) => Promise<Phone>;
  updatePhone: (phone: Phone) => Promise<number[]>;
  deletePhone: (id: number, reply: FastifyReply) => Promise<Message>;
}

export class PhoneController implements IPhoneController {
  private readonly service: IPhoneService = new PhoneService();

  async createPhone(phone: Phone): Promise<Phone> {
    return await this.service.createPhone(phone);
  }

  async updatePhone(phone: Phone): Promise<number[]> {
    return await this.service.updatePhone(phone);
  }

  async deletePhone(id: number, reply: FastifyReply): Promise<Message> {
    const result: number = await this.service.deletePhone(id);
    const phoneHasBeenDeleted: boolean = result === 1;

    if (!phoneHasBeenDeleted) {
      reply.code(404);
      return { message: "No phone found that can be deleted!" };
    }

    return { message: "The phone has been successfully deleted!" };
  }
}
