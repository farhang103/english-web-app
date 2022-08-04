-- CreateTable
CREATE TABLE "Editor" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Editor_id_key" ON "Editor"("id");
