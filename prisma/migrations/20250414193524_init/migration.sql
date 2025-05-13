-- CreateTable
CREATE TABLE "Equipamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "temperatura" REAL NOT NULL,
    "uso_cpu" REAL NOT NULL,
    "uso_memoria" REAL NOT NULL,
    "uso_disco" REAL NOT NULL,
    "ultimaAtualizacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
