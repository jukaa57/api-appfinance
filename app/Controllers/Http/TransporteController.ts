import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Transporte from 'App/Models/Transporte';

export default class TransporteController {

    public async createTransporte ({  request,  }: HttpContextContract)  {
        const { id, nome, valor, d_pagamento, situacao } = request.all();
        const r = await Transporte.create({
            id,
            nome,
            valor, 
            d_pagamento,
            situacao
        });
        return r
    }

    public async updateTransporte ({  request,  }: HttpContextContract)  {
        const { id, nome, d_pagamento, situacao } = request.all();
        const r = await Transporte.findOrFail(id);
        r.nome = nome,
        r.d_pagamento = d_pagamento,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getTransporte () {
        const s = await Transporte.query()
            .select('*')
            .orderBy('d_pagamento', 'desc')  
        return s;
    }
    public async getTransporteValor () {
        const s = await Transporte.query()
            .select('valor')
        return s;
    }

    public async deleteTransporte ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Transporte.findOrFail(id);

        await r.delete();
    }
}  