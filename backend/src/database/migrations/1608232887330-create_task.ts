import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTask1608232887330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "task",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
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
            ],
            foreignKeys: [
                {
                    name: "ProjectImages",
                    columnNames: ["project_id"],
                    referencedTableName: "user",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task");
    }

}
