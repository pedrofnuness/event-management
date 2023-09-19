import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEvents1694807445788 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
						isNullable: true,
          },
          {
            name: 'host_id',
            type: 'uuid',
          },
          {
            name: 'speakers',
            type: 'jsonb',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: "fk_events_host",
            columnNames: ['host_id'],
            referencedTableName: 'hosts',
            referencedColumnNames: ['id']
          }
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
