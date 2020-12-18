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
                    name: "project_id",
                    type: "integer",
                    isNullable: true,
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
                    name: "completed",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "created_at",
                    type: "date",
                },
                {
                    name: "completed_at",
                    type: "date",
                },
            ],
            foreignKeys: [
                {
                    name: "UserTasks",
                    columnNames: ["user_id"],
                    referencedTableName: "user",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
                {
                    name: "ProjectTasks",
                    columnNames: ["project_id"],
                    referencedTableName: "project",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task");
    }

}
