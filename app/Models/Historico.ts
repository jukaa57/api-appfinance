// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Historico extends BaseModel {
  public static table = 'historico'

  
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor: number

  @column()
  public d_entrada: string

  @column()
  public tag: string

  @column()
  public tipo: string

  @column()
  public id_tipo: number

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
