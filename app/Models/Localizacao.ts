import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Cartao extends BaseModel {
  public static table = 'localizacao'

  @column({ isPrimary: true })
  public id: number

  @column()
  public motorista: string

  @column()
  public veiculo: string

  @column.dateTime({ autoCreate: true })
  public data: DateTime

  @column()
  public latitude: number

  @column()
  public longitude: number

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
