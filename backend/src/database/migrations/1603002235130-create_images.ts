import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603002235130 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name:'images',
      columns:[
        {
          name: 'id',
          type: 'integer',
          unsigned: true, // define que essa coluna não pode ser negativa
          isPrimary:true, //indica que essa coluna é minha PRIMARY KEY na minha tabela
          isGenerated:true, //coluna gerada automaticamente
          generationStrategy: 'increment', //cada registro novo, ele aumenta o id
        },
        {
          name:'path',
          type:'varchar',
        },
        {
          name:'orphanage_id',
          type: 'integer',
        },
      ],
      foreignKeys:[
        {
          name:'ImageOrphanage',
          columnNames:['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',      //altera o id de forma automatica para não perder o relacionamento
          onDelete:'CASCADE',

        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
