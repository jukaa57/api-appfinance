import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Luz extends BaseSchema {
  protected tableName = 'luz'

  public async up () {
    this.schema.createTableIfNotExists("luz", (table) => {
      table.increments('id').unique()
      table.float('valor')
      table.string('d_vencimento')
      table.string('d_pagamento')
      table.string('f_pagamento')
      table.string('situacao')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  // public async down () {
  //   this.schema.dropTable(this.tableName)
  // }
}
