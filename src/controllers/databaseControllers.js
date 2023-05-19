import {pool} from "../db.js"

export const test =async(req,res) => {
    const [ans] = await pool.query(`select * from personas`)
    console.log(ans)
}

export const getOneUser = async(id) => {
    const [ans] = await pool.query(`select * from personas where nombre = ?`, 
    [id])
    console.log(ans)
}

export const createUser = async(id, name) => {
    const [ans] = await pool.query(`insert into personas values (?,?)`,
    [id, name])
    if(ans.affectedRows > 0 ) console.log("operacion exitosa")
    else console.log("insert no realizado")
}