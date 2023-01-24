import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Cartao from 'App/Models/Localizacao';
import Historico from 'App/Models/Historico';

export default class CartaoController {

    public async getCartao () {
            const s = await Cartao.query().orderBy('id', 'asc');
        return s;
    }

    public async getGastosCartao ({  params  }: HttpContextContract) {

        const s = await Historico.query().where('tag', params.tag).where('tipo', 'S').limit(20)
                        .orderBy('d_entrada', 'asc');
        
        // const som = await Cartao.findByOrFail('id', params.tag)
        // som.disponivel = som.limite - temp.data
        // await som.save();
        
    return s;
    }

    public async getTotalGastoMes ({  params  }: HttpContextContract) {

        //const s = await Database.raw(`SELECT SUM(valor) FROM historico WHERE tag = ${params.tag} AND tipo = 'S'`) 
         const s = Database.from('historico').sum('valor', 'v').where('tag', params.tag).where('tipo', 'S')
        
        // const som = await Cartao.findByOrFail('id', params.tag)
        // som.disponivel = som.limite - temp.data
        // await som.save();
        
    return s;
    }
}  