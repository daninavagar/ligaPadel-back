// import connection from "../mysql/mysql";
import supabase from "../plugins/subapase";
// const ERROR_CODES = {
//     UsedPlayer: {
//         code: 101,
//         message: 'This person is already used'
//     }
// }




// interface playerByTeams {
//     id?: number,
//     player_id?: number,
//     teams_id?: number,
//     captain?: boolean
// }



export const setPlayer = (_playerName: {}) => {
   return "Daniel Navarro"
   
}

export async function getPlayers() {
    // const [players] = await (await connection).query<player[]>(
    //     'Select * from players;',
    // )
    // return players;
}

export async function getTeams() {
    
    let { data: teams, error: teamsError } = await supabase
        .from('teams')
        .select()

    if (teamsError && !teams) return teamsError

    let { data: players, error: playersError } = await supabase
        .from('players')
        .select()
        if (playersError && !players) return playersError
    
    let { data: playerTeams, error: playerTeamsError } = await supabase
        .from('player_teams')
        .select()
    if (playerTeamsError && !playerTeams) return playerTeamsError

    const teamsWithPlayers:any = {}

    playerTeams?.map((playerTeam) => {
        const team = teams?.find(team => team.id === playerTeam.team_id)
        const player = players?.find(player => player.id === playerTeam.player_id)

        if (!teamsWithPlayers[team?.name]) {
            teamsWithPlayers[team?.name] = { jugadores: [] };
        }

        // Añadimos el jugador al equipo
        teamsWithPlayers[team?.name].jugadores.push({ nombre: player?.name });
    })
    return teamsWithPlayers
}

export async function getPlayerByTeams() {
    // const [playerByTeams] = await (await connection).query<playerByTeams[]>(
    //     `select t.name as NombreEquipo, p.name as NombreJugadores, pt.captain as Capitán from player_teams as pt 
    //     inner join players as p on pt.player_id = p.id
    //     inner join teams as t on pt.team_id = t.id`,
    // ) 
}


