/*
  Warnings:

  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `socialLinks` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "socialLinks" JSONB NOT NULL;

-- DropTable
DROP TABLE "Social";
