import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aluguel extends BaseSchema {
  protected tableName = 'aluguel'

  public async up () {
    this.schema.createTableIfNotExists("aluguel", (table) => {
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
