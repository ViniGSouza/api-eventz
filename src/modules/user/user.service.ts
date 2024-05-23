import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create({ name, email, password, type }: CreateUserDTO) {
    try {
      const userExists = await this.findByEmail(email);
      if (!userExists) {
        const user = await this.prisma.user.create({
          data: {
            name,
            email,
            password,
            type
          }
        });
        return user;
      } else {
        throw new Error("Email ja existe");
      }
    } catch (error) {
      throw new Error(`Ocorro um erro, tente novamente:${error}`);
    }
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
}