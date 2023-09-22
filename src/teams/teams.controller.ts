import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller()
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get('teams')
    getTeams(): string {
        console.log("ruta de /teams");
        return this.teamsService.getTeams();
        
    }

    @Get('champions')
    getChampions(): string{
        return this.teamsService.getChampionsByNumber().toString();
    }
}
