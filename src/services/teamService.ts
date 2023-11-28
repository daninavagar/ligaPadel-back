import http from "../plugins/axios"
import constant from "../constant"


export const getTeams = async () => {

    const sheetName = '/Equipos'

    const options = {
        method: 'GET',
        url: constant.URL_SHEETS + sheetName,
    }

    let result = '' 
    await http.request(options)
        .then((response) => {
            result = response.data
        }).catch((error => {
            console.error(error)
        }))

    console.log(result);
    return result

}

export const getPlayers = async () => {
    
        const sheetName = '/Jugadores'
    
        const options = {
            method: 'GET',
            url: constant.URL_SHEETS + sheetName,
        }
    
        let result = '' 
        await http.request(options)
            .then((response) => {
                result = response.data
            }).catch((error => {
                console.error(error)
            }))
    
        console.log(result);
        return result
}

export const getClasification = async () => {
    const sheetName = '/Clasificación'

    const options = {
        method: 'GET',
        url: constant.URL_SHEETS + sheetName,
    }

    let result = '' 
    await http.request(options)
        .then((response) => {
            result = response.data
        }).catch((error => {
            console.error(error)
        }))

    console.log(result);
    return result
}

export const getRound = async (roundParameter: string) => {
    const sheetName = roundParameter

    const options = {
        method: 'GET',
        url: constant.URL_SHEETS + `/${sheetName}`,
    }

    let result = null 
    await http.request(options)
        .then((response) => {
            result = response.data
            result = result.map((item:any) => {
                for (let i = 3; i <= 10; i++) {
                    delete item[i.toString()]
                }
                return item
            });
            let partidos = []
            let partidoNum = 1
            for (let i = 0; i < result.length; i += 2) {
                if (result[i].EQUIPOS && result[i+1].EQUIPOS) {
                    let partido = {
                        [`Partido ${partidoNum}`]: [result[i], result[i+1]]
                    };
                    partidos.push(partido)
                    partidoNum++
                }
            }
            result = partidos;
        }).catch((error => {
            console.error(error)
        }))
    return result
}