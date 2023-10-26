-- CreateTable
CREATE TABLE "champions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,
    "purchased_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skins" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "champion_id" TEXT NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,
    "purchased_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chromas" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "skin_id" TEXT NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,
    "purchased_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chromas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "champions_user_id" ON "champions"("user_id");

-- CreateIndex
CREATE INDEX "skins_user_id" ON "skins"("user_id");

-- AddForeignKey
ALTER TABLE "skins" ADD CONSTRAINT "skins_champion_id_fkey" FOREIGN KEY ("champion_id") REFERENCES "champions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chromas" ADD CONSTRAINT "chromas_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "skins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
