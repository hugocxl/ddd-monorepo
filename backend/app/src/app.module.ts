// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { UsersModule } from './modules';
@Module({
  imports: [UsersModule],
})
export class AppModule {}
