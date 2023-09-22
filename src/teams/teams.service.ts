import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  getTeams(): string {
    return 'Real madrid!';
  }

  getChampionsByNumber(): Array<string> {
    const teams = [
      {
          "name": "Real Madrid",
          "TrophiesNumber": 14,
      },
      {
          "name": "AC Milán",
          "TrophiesNumber": 7,
      },
      {
          "name": "Liverpool",
          "TrophiesNumber": 10,
      }
  ]
  
  return teams
          .sort((a, b) => b.TrophiesNumber - a.TrophiesNumber)
          .map( team => `${team.name} - ${team.TrophiesNumber}`)
  }
}