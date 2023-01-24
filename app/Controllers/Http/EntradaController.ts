import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Entrada from 'App/Models/Entrega';
import Historico from 'App/Models/Historico';

export default class EntradaController {

    public async createEntrada ({  request,  }: HttpContextContract)  {
        const { id, valor, d_entrada, tag } = request.all();
       const tipo =  'E';

        const r = await Entrada.create({
            id,
            valor, 
            d_entrada, 
            tag
        });

        const id_tipo = r.$original.id;

        const h = await Historico.create({
            id,
            valor, 
            d_entrada, 
            tag,
            tipo,
            id_tipo
        })

        return {r, h}
    }

    public async updateEntrada ({  request,  }: HttpContextContract)  {
        const { id, valor, d_entrada, tag, situacao } = request.all();

        const r = await Entrada.findOrFail(id);
        r.d_entrada = d_entrada,
        r.valor = valor,
        r.tag = tag,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getEntrada () {
        const s = await Entrada.all();
        return s;
    }
    public async getEntradaPeriodo ({  params  }: HttpContextContract) {
        const s = await Entrada.query()
                        .where('d_entrada', params.d_entrada)
                        .orderBy('id', 'desc')
        return s;
    }
    public async getEntradaSituacao({  params  }: HttpContextContract) {
        const s = await Entrada.query()
                            .where('situacao', params.situacao)
                            .orderBy('id', 'desc')
        return s;
    }
    public async getEntradaTag({  params  }: HttpContextContract) {
        const s = await Entrada.query()
                            .where('tag', params.tag)
                            .orderBy('id', 'desc')
        return s;
    }

    public async deleteEntrada ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Entrada.findOrFail(id);

        await r.delete();
    }
}  