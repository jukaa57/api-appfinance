// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Saida extends BaseModel {
  public static table = 'saida'

  @column({ isPrimary: true })
  public id: number

  @column()
  public valor: number

  @column()
  public d_entrada: string

  @column()
  public tag: string

  @column()
  public tipo_saida: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
