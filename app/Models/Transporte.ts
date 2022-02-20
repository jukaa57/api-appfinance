// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Transporte extends BaseModel {
  public static table = 'transporte'

  
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string

  @column()
  public valor: number

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
