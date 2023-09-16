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
            name: 'status',
            type: 'enum',
            enum: ['draft', 'upcoming', 'past'],
            enumName: 'event_status',
            default: "'draft'"
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'hosts',
            type: 'jsonb',
            isArray: true,
          },
          {
            name: 'speakers',
            type: 'jsonb',
            isArray: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("events");
  }
};
