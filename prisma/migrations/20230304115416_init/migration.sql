-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "about" TEXT,
    "companySize" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT true,
    "location" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
