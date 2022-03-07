import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Mercado from 'App/Models/Mercado';

export default class MercadoController {

    public async createMercado ({  request,  }: HttpContextContract)  {
        const { id, nome_mercado, valor, d_pagamento, f_pagamento } = request.all();
        const r = await Mercado.create({
            id,
            nome_mercado,
            valor, 
            d_pagamento, 
            f_pagamento,
        });
        return r
    }

    public async getMercado () {
        const s = await Mercado.query()
        .select('*')
        .orderBy('id', 'desc');
        return s;
    }

    public async getMercadoValorTotal() {
        const s = await Mercado.query()
        .select('valor')
        return s;
    }

    public async deleteMercado ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Mercado.findOrFail(id);

        await r.delete();
    }
}  