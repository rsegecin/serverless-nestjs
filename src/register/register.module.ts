import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterRepository } from './register.repository';
import { RegisterService } from './register.service';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService, RegisterRepository]
})
export class RegisterModule {}
