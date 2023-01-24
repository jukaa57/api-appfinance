import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Historico from 'App/Models/Historico';


export default class HistoricoController {

    public async getHistorico () {
        const s = await Historico.query().orderBy('d_entrada', 'asc')
        return s;
    }
    public async getHistoricoPeriodo ({  params  }: HttpContextContract) {
        const s = await Historico.query()
                    .where('d_entrada', params.d_entrada)
                    .orderBy('id', 'desc')
        return s;
    }
    public async getHistoricoTipo({  params  }: HttpContextContract) {
        const s = await Historico.query()
                        .where('tipo', params.tipo)
                        .orderBy('id', 'desc')
        return s;
    }
    public async getHistoricoTag({  params  }: HttpContextContract) {
        const s = await Historico.query()
                        .where('tag', params.tag)
                        .orderBy('id', 'desc')
        return s;
    }

    public async deleteHistorico ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Historico.findOrFail(id);

        await r.delete();
    }
}  