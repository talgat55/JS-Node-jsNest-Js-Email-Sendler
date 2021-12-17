import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { User } from "src/user/user.entity";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {
  }

  async sendUserEmail(user: User) {
    const url = "sample";
    await this.mailerService.sendMail({
      to: user.email,
      subject: "Проверка отправки письма",
      template: './letter',
      // context: {
      //   name: user
      // }

    })
  }
}
