import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Transporte from 'App/Models/Transporte';

export default class LuzController {

    public async createLuz ({  request,  }: HttpContextContract)  {
        const { id, valor, d_vencimento, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Transporte.create({
            id,
            valor, 
            d_vencimento, 
            d_pagamento, 
            f_pagamento,
            situacao
        });
        return r
    }

    public async updateLuz ({  request,  }: HttpContextContract)  {
        const { id, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Transporte.findOrFail(id);
        r.d_pagamento = d_pagamento,
        r.f_pagamento = f_pagamento,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getLuz () {
            const s = await Transporte.all();
        return s;
    }
    public async getLuzPago () {
        const s = await Transporte.query()
                        .where('situacao', '1')
                        .orderBy('id', 'desc')
        return s;
    }
    public async getLuzAberto() {
        const s = await Transporte.query()
                                .whereNot('situacao', '1')
                                .orderBy('id', 'desc')
        return s;
    }

}  