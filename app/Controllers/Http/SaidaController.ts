import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Saida from 'App/Models/Saida';
import Historico from 'App/Models/Historico';

export default class SaidaController {

    public async createSaida ({  request,  }: HttpContextContract)  {
        const { id, valor, d_entrada, tag, tipo_saida } = request.all();
       const tipo =  'S';

        const r = await Saida.create({
            id,
            valor, 
            d_entrada, 
            tag,
            tipo_saida
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

        return [r, h]
    }

    public async updateSaida ({  request,  }: HttpContextContract)  {
        const { id, valor, d_entrada, tag } = request.all();

        const r = await Saida.findOrFail(id);
        r.d_entrada = d_entrada,
        r.valor = valor,
        r.tag = tag
        await r.save();

        return r;
    }

    public async getSaida () {
        const s = await Saida.all();
        return s;
    }
    public async getSaidaPeriodo ({  params  }: HttpContextContract) {
        const s = await Saida.query()
                        .where('d_entrada', params.d_entrada)
                        .orderBy('id', 'desc')
        return s;
    }
    public async getEntradaSituacao({  params  }: HttpContextContract) {
        const s = await Saida.query()
                            .where('situacao', params.situacao)
                            .orderBy('id', 'desc')
        return s;
    }
    public async getEntradaTag({  params  }: HttpContextContract) {
        const s = await Saida.query()
                            .where('tag', params.tag)
                            .orderBy('id', 'desc')
        return s;
    }

    public async deleteEntrada ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Saida.findOrFail(id);

        await r.delete();
    }
}  