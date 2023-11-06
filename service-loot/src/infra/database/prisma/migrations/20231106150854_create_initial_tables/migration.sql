-- CreateEnum
CREATE TYPE "CapsuleType" AS ENUM ('HEXTECH_CHEST', 'CHAMPION_CAPSULE');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('CHAMPION', 'SKIN', 'CHROMA');

-- CreateEnum
CREATE TYPE "RarityTier" AS ENUM ('STANDARD', 'EPIC', 'LEGENDARY', 'MYTHIC', 'ULTIMATE', 'EXCLUSIVE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "orange_essence" INTEGER NOT NULL,
    "mythic_essence" INTEGER NOT NULL,
    "keys" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capsules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "CapsuleType" NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "capsules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_capsules" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "capsule_id" TEXT NOT NULL,
    "opened_at" TIMESTAMP(3),
    "reward_set_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_capsules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ItemType" NOT NULL,
    "rarity_tier" "RarityTier" NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capsule_items" (
    "id" TEXT NOT NULL,
    "capsule_id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "capsule_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reward_set" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reward_set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" TEXT NOT NULL,
    "reward_set_id" TEXT NOT NULL,
    "item_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE INDEX "users_user_id_idx" ON "users"("user_id");

-- CreateIndex
CREATE INDEX "capsules_type_idx" ON "capsules"("type");

-- CreateIndex
CREATE INDEX "user_capsules_user_id_idx" ON "user_capsules"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "items_item_id_key" ON "items"("item_id");

-- CreateIndex
CREATE INDEX "items_type_idx" ON "items"("type");

-- AddForeignKey
ALTER TABLE "user_capsules" ADD CONSTRAINT "user_capsules_reward_set_id_fkey" FOREIGN KEY ("reward_set_id") REFERENCES "reward_set"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capsule_items" ADD CONSTRAINT "capsule_items_capsule_id_fkey" FOREIGN KEY ("capsule_id") REFERENCES "capsules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capsule_items" ADD CONSTRAINT "capsule_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rewards" ADD CONSTRAINT "rewards_reward_set_id_fkey" FOREIGN KEY ("reward_set_id") REFERENCES "reward_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
