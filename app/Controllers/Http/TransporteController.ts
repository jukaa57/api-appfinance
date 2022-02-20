import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Transporte from 'App/Models/Transporte';

export default class TransporteController {

    public async createTransporte ({  request,  }: HttpContextContract)  {
        const { id, valor, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Transporte.create({
            id,
            valor, 
            d_pagamento, 
            f_pagamento,
            situacao
        });
        return r
    }

    public async updateTransporte ({  request,  }: HttpContextContract)  {
        const { id, d_pagamento, f_pagamento, situacao } = request.all();

        const r = await Transporte.findOrFail(id);
        r.d_pagamento = d_pagamento,
        r.f_pagamento = f_pagamento,
        r.situacao = situacao
        await r.save();

        return r;
    }

    public async getTransporte () {
            const s = await Transporte.all();
        return s;
    }
    public async getTransportevalor () {
        const s = await Transporte.query()
            .select('valor')
        return s;
    }

}  