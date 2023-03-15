-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "about" TEXT,
    "companySize" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_website_key" ON "Company"("website");
