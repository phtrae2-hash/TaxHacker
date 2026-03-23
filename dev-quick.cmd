@echo off
echo Iniciando Postgres...
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=taxhacker --name taxhacker-pg postgres:17-alpine 2>nul || docker start taxhacker-pg 2>nul
timeout /t 3 /nobreak >nul
echo Migrando DB...
call npx prisma migrate deploy 2>nul
call npx prisma generate
echo.
echo Rodando em http://localhost:7331
call npm run dev
