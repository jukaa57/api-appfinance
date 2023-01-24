// import { DateTime } from 'luxon'
import { BaseModel, column,  } from '@ioc:Adonis/Lucid/Orm'

export default class Aluguel extends BaseModel {
  public static table = 'aluguel'

  
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nome: string

  @column.dateTime({ autoCreate: true })
  public dataCad: DateTime

  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public dataAtt: DateTime


  @column()
  public cpf: string

  @column()
  public cnh: string

  @column()
  public cnh: string

  @column()
  public cnh: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
