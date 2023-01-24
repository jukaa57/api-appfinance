// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Entrada extends BaseModel {
  public static table = 'entrada'

  
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor: number

  @column()
  public d_entrada: string

  @column()
  public tag: string

  @column()
  public situacao: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
