import getAuth from "../auth/index"


export const getTeams = async () => {

    const sheetName = 'Equipos'

    const result = await getAuth(sheetName)

    result.values?.shift()
    const resultTransformed = result.values?.map((team:any) => {
        return {
            EQUIPOS: team[0]
        }
    })
    return resultTransformed

}

export const getPlayers = async () => {
    
        const sheetName = 'Jugadores'
    
        const result = await getAuth(sheetName)

        result.values?.shift()
        const resultTransformed = result.values?.map((team:any) => {
            return {
                JUGADORES: team[0],
                EQUIPOS: team[1],
                CAPITAN: team[2]
            }
        })

        return resultTransformed
}

export const getClasification = async () => {
    const sheetName = 'Clasificación';

    const values = (await getAuth(sheetName)).values;

    let headers = values![0];

    let resultNoSpaces = values!.slice(1).map(row => {
        let obj: { [key: string]: any } = {}; // Add type annotation for obj
        headers.forEach((header, index) => {
            if (header !== "") {
                obj[header] = row[index];
            }
        });
        return obj;
    });

    return resultNoSpaces
}

export const getRound = async (roundParameter: string) => {
    const sheetName = roundParameter + '!A1:C15'

    const result = (await getAuth(sheetName)).values
    result?.splice(3, 1);
    result?.splice(6, 1);
    result?.splice(9, 1);
    
  let resultsRound = [];

    // let partido = {};

    for (let i = 1; i < result!.length; i += 3) {
    const partidoNumber = (i + 2) / 3;
    let partido: { [key: string]: any } = {}; // Define the type of partido
    partido[`Partido ${partidoNumber}` as keyof typeof partido] = [
        {
            EQUIPOS: result![i][0],
            'JUEGOS GANADOS': result![i][1],
            PUNTOS: result![i][2]
        },
        {
            EQUIPOS: result![i + 1][0],
            'JUEGOS GANADOS': result![i + 1][1],
            PUNTOS: result![i + 1][2]
        }
    ] as { [key: string]: any }[];
    resultsRound.push(partido);
    partido = {};
}




    return resultsRound
}