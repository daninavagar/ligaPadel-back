const ERROR_CODES = {
    UsedPlayer: {
        code: 101,
        message: 'This person is already used'
    }
}

interface player {
    name?: string,
    lastname?: string 
}
const playerObject:player = {
    'name': 'Daniel'
}
const teams = 'Real Madrid'

export const getTeams = () => {
   return teams;
}

export const setPlayer = (playerName: {}) => {
   if (playerObject.name === playerName) return ERROR_CODES
   else return 'Jugadores disponible'
   
}