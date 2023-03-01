-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "industry" TEXT,
    "about" TEXT,
    "companySize" TEXT,
    "socialLinks" TEXT[],
    "approved" BOOLEAN NOT NULL DEFAULT true,
    "location" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
