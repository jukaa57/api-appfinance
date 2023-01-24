import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database, {  } from '@ioc:Adonis/Lucid/Database';
import Localizacao from 'App/Models/Localizacao';

export default class LocalizacaoController {

    public async createLocalizacao ({  request,  }: HttpContextContract)  {
        const { id, data, latitude, longitude, motorista, veiculo } = request.all();

        const r = await Localizacao.create({
            id,
            data,
            latitude,
            longitude,
            motorista,
            veiculo
        });
        return r
    }

    public async updateLocalizacao ({  request,  }: HttpContextContract)  {
        const { id, dataHora, latitude, longitude } = request.all();

        const r = await Localizacao.findOrFail(id);
        r.data = dataHora,
        r.latitude = latitude,
        r.longitude = longitude
        await r.save();
        return r;
    }

    public async getLocalizacao () {
            const s = await Localizacao.all();
        return s;
    }
    
    public async getLocalizacaoVeiculo ({ params }: HttpContextContract) {
        const s = await Localizacao.query()
            .where('veiculo', params.veiculo)
            .orderBy('id', 'desc')
        return s;
    }
    // public async getLocalizacao() {
    //     const s = await Localizacao.query()
    //         .whereNot('situacao', '1')
    //         .orderBy('id', 'desc')
    //     return s;
    // }

    // public async deleteLuz ({  request,  }: HttpContextContract) {
    //     const { id } = request.all();
    //     const r = await Localizacao.findOrFail(id);

    //     await r.delete();
    // }
}  