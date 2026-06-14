# 妙媽媽果園 Backend

FastAPI + SQLAlchemy(async)+ PostgreSQL，三層架構。詳見
`docs/superpowers/specs/2026-06-11-backend-architecture-design.md`。

## 開發環境

```bash
cd backend
cp .env.example .env          # 視需要調整連線/密鑰
uv sync                       # 安裝相依
```

啟動本專案專屬 PostgreSQL dev DB:

```bash
docker compose up -d db
```

Compose 會建立 `miao-fruit-shop-db` container，並把 container 內的 `5432`
映射到本機 `55432`，避免誤連到其他專案的 PostgreSQL。

建立測試資料庫(一次性):
```bash
docker compose exec db createdb -U miao miao_test   # 用 compose 時
# 或從 host 連線:createdb -h localhost -p 55432 -U miao miao_test
```

## 跑起來

```bash
uv run uvicorn app.main:app --reload --port 8000
curl localhost:8000/health      # {"status":"ok"}
```

## 測試 / 品質

```bash
uv run pytest -v       # 測試
uv run ruff check .    # lint
uv run mypy app        # 型別檢查
```

## 資料庫遷移(Alembic)

```bash
uv run alembic revision --autogenerate -m "描述"   # 產生遷移(Phase 2 起)
uv run alembic upgrade head                         # 套用
```

## 全棧容器

```bash
docker compose up -d --build    # db + api
```
