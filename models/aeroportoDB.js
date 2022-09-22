import sqlite3 from 'sqlite3';
import path from 'path';

export class DetalhesAeroportos {
    static getDB = new sqlite3.Database(path.resolve('.', 'database', 'aeroportos.db'));
    static getAllCities = (cb) => {
        this.getDB.all(`SELECT cod_IATA, cidade, UF FROM aeroportos`, cb)
    }
    static getOneCity = (cidade, UF, cb) => {
        this.getDB.get(`SELECT cod_IATA FROM aeroportos WHERE cidade = ?, UF = ?`, [cidade, UF], cb)
    }
    static getDetails = (cod_IATA, cb) => {
    this.getDB.get(`SELECT cidade, nome FROM aeroportos WHERE  cod_IATA = ?`, cod_IATA, cb)
    }
    static getAllAirportInfo = (cb) => {
    this.getDB.all(`SELECT * FROM aeroportos`, cb)
    }
}


