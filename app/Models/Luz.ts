// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Luz extends BaseModel {
  public static table = 'luz'

  
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor: number

  @column()
  public d_vencimento: string

  @column()
  public d_pagamento: string

  @column()
  public f_pagamento: string

  @column()
  public situacao: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
