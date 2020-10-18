import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602995221500 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {  //metodo que realiza as alterações que queremos no banco de dados(ex:criar tabela, criar um novo campo, deletar algum campo)
    await queryRunner.createTable(new Table({  //criando tabela
      name:'orphanages',
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
          name: 'name',
          type: 'varchar',
        },
        {
          name:'latitude',
          type:'decimal',
          scale:10, //numeros depois da virgula
          precision:2, //numeros antes da virgula
        },
        {
          name:'longitude',
          type:'decimal',
          scale:10, //numeros depois da virgula
          precision:2, //numeros antes da virgula
        },
        {
          name:'about',
          type:'text',
        },
        {
          name:'instructions',
          type:'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name:'open_on_weekends',
          type:'boolean',
          default:false,
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {   //metodo que desfaz o que foi feito no UP. 
  
    await queryRunner.dropTable('orphanages');
  }

}
