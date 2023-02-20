import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
