import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create({ name, email, password, type }: CreateUserDTO) {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        type
      }
    });
    return user;
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