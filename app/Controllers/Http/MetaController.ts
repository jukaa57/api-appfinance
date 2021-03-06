import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Meta from 'App/Models/Meta';

export default class MetaController {

    public async createMeta ({  request,  }: HttpContextContract)  {
        const { nome_meta, valor, d_validade } = request.all();
        const r = await Meta.create({
            nome_meta,
            valor,
            d_validade
        });
        return r
    }

    public async deposito ({  request,  }: HttpContextContract)  {
        const { id, valor_depositado } = request.all();
        const s = await Meta.query().select('valor_depositado').where('id', id);
        const r = await Meta.findOrFail(id);
        s.map((i) =>   r.valor_depositado = i.valor_depositado + valor_depositado);
        // r.valor_depositado =  valor_depositado,
        await r.save();
        return r
    }

    public async getMeta () {
        const s = await Meta.query()
        .select('*')
        .orderBy('id', 'desc');
        return s;
    }

    public async getMetaValorTotal() {
        const s = await Meta.query().select('valor')
        return s;
    }

    
    public async getMetaTotalDepositado({  params  }: HttpContextContract) {
        const {id} = params.all()
        const s = await Meta.query().select('valor_depositado').where(id)
        return s;
    }

    public async deleteMeta ({  request,  }: HttpContextContract) {
        const { id } = request.all();
        const r = await Meta.findOrFail(id);

        await r.delete();
    }
}  