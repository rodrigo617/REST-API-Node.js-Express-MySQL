import { getConnection } from "./../database/database"


const getLanguages= async (req, res) => {
    try{
        const connection = await getConnection()
        const result = await connection.querry("SELECT id, name, programers FROM language") 
        res.json(result)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const methods = {
    getLanguages
}