import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { HashPasswordPipe } from "src/resources/pipes/hash-password.pipe";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() {password, ...dataUser}: CreateUserDTO,
    @Body('password', HashPasswordPipe) hashedPassword: string
  ) {
    const userExists = await this.userService.findByEmail(dataUser.email);
    if (!userExists) {
      const user = await this.userService.create(
        {...dataUser, password: hashedPassword}
      );
      return user;
    } else {
      throw new Error("Email ja existe");
    }
  }
}