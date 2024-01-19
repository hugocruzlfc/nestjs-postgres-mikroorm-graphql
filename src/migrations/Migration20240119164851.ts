import { Migration } from '@mikro-orm/migrations';

export class Migration20240119164851 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "student" ("id" uuid not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int null, "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "student_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "student" cascade;');
  }

}
