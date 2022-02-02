import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aluguel extends BaseSchema {
  protected tableName = 'aluguel'

  public async up () {
    this.schema.createTableIfNotExists("aluguel", (table) => {
      table.increments('id').unique()
      table.float('Valor')
      table.string('D_Vencimento')
      table.string('D_Pagamento')
      table.string('F_Pagamento')
      table.string('Situacao')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  // public async down () {
  //   this.schema.dropTable(this.tableName)
  // }
}
