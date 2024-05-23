/*
  Warnings:

  - Added the required column `userId` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "userId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
