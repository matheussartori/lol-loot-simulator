-- CreateTable
CREATE TABLE "champions" (
    "id" TEXT NOT NULL,
    "champion_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "blue_essence_price" INTEGER NOT NULL,
    "riot_points_price" INTEGER NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "champions_champion_id_key" ON "champions"("champion_id");
