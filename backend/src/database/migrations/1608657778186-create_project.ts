import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProject1608657778186 implements MigrationInterface {

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
                {
                    name: "completed",
                    type: "boolean",
                },
                {
                    name: "completed_at",
                    type: "date",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("project");
    }

}
