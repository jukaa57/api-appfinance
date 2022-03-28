// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Meta extends BaseModel {
  public static table = 'meta'
  
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome_meta: string

  @column()
  public valor: number
  
  @column()
  public valor_depositado: number

  @column()
  public d_validade: string


  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
