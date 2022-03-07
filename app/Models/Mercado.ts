// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Mercado extends BaseModel {
  public static table = 'mercado'
  
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome_mercado: string

  @column()
  public valor: number

  @column()
  public d_pagamento: string

  @column()
  public f_pagamento: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
