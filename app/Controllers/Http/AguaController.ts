import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Agua from 'App/Models/Agua';

export default class AguaController {

    public async createAgua ({  request,  }: HttpContextContract)  {
        const { id, valor, d_vencimento, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Agua.create({
            id,
            valor, 
            d_vencimento, 
            d_pagamento, 
            f_pagamento,
            situacao
        });
        return r
    }

    public async updateAgua ({  request,  }: HttpContextContract)  {
        const { id, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Agua.findOrFail(id);
        r.d_pagamento = d_pagamento,
        r.f_pagamento = f_pagamento,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getAgua () {
            const s = await Agua.all();
        return s;
    }
    public async getAguaPago () {
        const s = await Agua.query()
                        .where('situacao', '1')
                        .orderBy('id', 'desc')
        return s;
    }
    public async getAguaAberto() {
        const s = await Agua.query()
                            .whereNot('situacao', '1')
                            .orderBy('id', 'desc')
        return s;
    }

    public async deleteAgua ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Agua.findOrFail(id);

        await r.delete();
    }
}  