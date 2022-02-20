import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Internet from 'App/Models/Internet';

export default class InternetController {

    public async createInternet ({  request,  }: HttpContextContract)  {
        const { id, valor, d_vencimento, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Internet.create({
            id,
            valor, 
            d_vencimento, 
            d_pagamento, 
            f_pagamento,
            situacao
        });
        return r
    }

    public async updateInternet ({  request,  }: HttpContextContract)  {
        const { id, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Internet.findOrFail(id);
        r.d_pagamento = d_pagamento,
        r.f_pagamento = f_pagamento,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getInternet () {
            const s = await Internet.all();
        return s;
    }
    public async getInternetPago () {
        const s = await Internet.query()
                        .where('situacao', '1')
                        .orderBy('id', 'desc')
        return s;
    }
    public async getInternetAberto() {
        const s = await Internet.query()
                            .whereNot('situacao', '1')
                            .orderBy('id', 'desc')
        return s;
    }

    public async deleteInternet ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Internet.findOrFail(id);

        await r.delete();
    }
}  