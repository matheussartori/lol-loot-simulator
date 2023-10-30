-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CHAMPION', 'SKIN', 'CHROMA');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'VALIDATED_INVENTORY', 'VALIDATED_BALANCE', 'FAILED_OWNED', 'FAILED_BALANCE', 'COMPLETED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "TransactionCurrency" AS ENUM ('BLUE_ESSENCE', 'RIOT_POINTS');

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

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "currency" "TransactionCurrency" NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "champions_champion_id_key" ON "champions"("champion_id");
