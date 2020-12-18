import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProject1608250836665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "project",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    unsigned: true,
                    generationStrategy: "increment",
                },
                {
                    name: "user_id",
                    type: "integer",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "created_at",
                    type: "date",
                },
            ],
            foreignKeys: [
                {
                    name: "UserProject",
                    columnNames: ["user_id"],
                    referencedTableName: "user",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
