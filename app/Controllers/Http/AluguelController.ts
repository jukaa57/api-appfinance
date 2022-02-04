import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Aluguel from 'App/Models/Aluguel';

export default class AluguelController {

    public async createAluguel ({  request,  }: HttpContextContract)  {
        const { id, valor, d_vencimento, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Aluguel.create({
            id,
            valor, 
            d_vencimento, 
            d_pagamento, 
            f_pagamento,
            situacao
        });
        return r
    }

    public async updateAluguel ({  request,  }: HttpContextContract)  {
        const { id, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Aluguel.findOrFail(id);
        r.d_pagamento = d_pagamento,
        r.f_pagamento = f_pagamento,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getAluguel () {
            const s = await Aluguel.all();
        return s;
    }
    public async getAluguelPago () {
        const s = await Aluguel.query()
                        .where('situacao', '1')
                        .orderBy('asc')
        return s;
    }
    public async getAluguelAberto() {
        const s = await Aluguel.query()
                            .where('situacao', '2')
                            .orderBy('asc')
        return s;
    }
    public async getAluguelUltimo () {
        const s = await Aluguel.query()
                        .whereNot('situacao', '1')
        return s;
    }

}  