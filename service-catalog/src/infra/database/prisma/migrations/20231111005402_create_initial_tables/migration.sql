-- CreateEnum
CREATE TYPE "ChampionImageType" AS ENUM ('PORTRAIT', 'LOADING', 'SPLASH');

-- CreateEnum
CREATE TYPE "RarityTier" AS ENUM ('STANDARD', 'EPIC', 'LEGENDARY', 'MYTHIC', 'ULTIMATE', 'EXCLUSIVE');

-- CreateTable
CREATE TABLE "champions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rarityTier" "RarityTier" NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "champion_images" (
    "id" TEXT NOT NULL,
    "championId" TEXT NOT NULL,
    "type" "ChampionImageType" NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "champion_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skins" (
    "id" TEXT NOT NULL,
    "champion_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chromas" (
    "id" TEXT NOT NULL,
    "skin_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chromas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "champions_name_key" ON "champions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "skins_name_key" ON "skins"("name");

-- CreateIndex
CREATE UNIQUE INDEX "chromas_name_key" ON "chromas"("name");

-- AddForeignKey
ALTER TABLE "champion_images" ADD CONSTRAINT "champion_images_championId_fkey" FOREIGN KEY ("championId") REFERENCES "champions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skins" ADD CONSTRAINT "skins_champion_id_fkey" FOREIGN KEY ("champion_id") REFERENCES "champions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chromas" ADD CONSTRAINT "chromas_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "skins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
