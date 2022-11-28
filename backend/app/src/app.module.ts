// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { NodesModule, UsersModule } from './modules';
@Module({
  imports: [UsersModule, NodesModule],
})
export class AppModule {}
