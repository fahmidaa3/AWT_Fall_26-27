import { MigrationInterface, QueryRunner } from "typeorm";

export class InitEntities1793023880513 implements MigrationInterface {
    name = 'InitEntities1793023880513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "skills" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_81f05095507fd84aa2769b4a522" UNIQUE ("name"), CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "impact_records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "source_type" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'Active', "visibility" character varying NOT NULL DEFAULT 'Private', CONSTRAINT "PK_10f8c5a15df7f5bb0ebaa71dde7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "causes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_9f344a5037fc865ec9287d2a94b" UNIQUE ("name"), CONSTRAINT "PK_5f2a74a26cb4e00f1f4a1723486" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "causes"`);
        await queryRunner.query(`DROP TABLE "impact_records"`);
        await queryRunner.query(`DROP TABLE "skills"`);
    }

}
