import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSteps1608250666944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "step",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isGenerated: true,
                    isPrimary: true,
                    unsigned: true,
                    generationStrategy: "increment",
                },
                {
                    name: "task_id",
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
            ],
            foreignKeys: [
                {
                    name: "TaskSteps",
                    columnNames: ["task_id"],
                    referencedTableName: "task",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("step");
    }

}
