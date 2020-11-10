import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import secretKey from './utls/secret';
import {PrismaService} from './shared/services/prisma.service';

@Module({
  imports: [JwtModule.register({ secret: secretKey }), PrismaService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
