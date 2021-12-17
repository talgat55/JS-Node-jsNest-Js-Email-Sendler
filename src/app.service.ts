import { Injectable } from "@nestjs/common";
import { MailService } from "./mail/mail.service";

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {
  }

  async getHello(): Promise<string> {
    await this.mailService.sendUserEmail({ email: 'test@mail.ru' });
    return "Hello World!";
  }
}
