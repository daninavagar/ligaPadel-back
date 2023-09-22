import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsService } from './teams/teams.service';
import { TeamsController } from './teams/teams.controller';

@Module({
  imports: [],
  controllers: [AppController, TeamsController],
  providers: [AppService, TeamsService],
})
export class AppModule {}
