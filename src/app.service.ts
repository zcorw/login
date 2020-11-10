import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import {User} from '@prisma/client';
import crypto from 'crypto';
import { userInfo, loginInfo } from './app.interface';
import { PrismaService } from './shared/services/prisma.service';

const salt = 'issecret';

@Injectable()
export class AppService {
  constructor(
    private prisma: PrismaService
  ) { }
  valid(validWord, realWord): boolean {
    return this.md5(validWord) === realWord;
  }
  md5(password: string): string {
    var md5 = crypto.createHash('md5');
    return md5.update(password + salt).digest('hex');
  }
  async getUserByEmail(email: string): Promise<User | null> {
    const result = await this.prisma.user.findFirst({
      where: {
        email: email
      }
    });
    if (!result) {
      return null;
    }
    return result;
  }
  // async login(user: userInfo): Promise<loginInfo> {
  //   const errors = { User: 'email or password wrong' };
  //   const result = await this.getUserByEmail(user.email);
  //   if (result === null) {
  //     throw new HttpException({errors}, 401);
  //   }
  //   if (!this.valid(user.password, result.password)) {
  //     throw new HttpException({errors}, 401);
  //   }

  // }
}
