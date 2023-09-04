# KAVEX - Kyvex-Style Intelligent Assistant (Capstone)

**Short:** Modular AI agnet for summarization, MCQ generation, multilingual support (Hindi/English), and safe automations.

## Contents
- `backend/` - FastAPI prototype for agent orchestration, upload, and actions.
- `frontend/` - Minimal React chat UI prototype.
- `prompts/` - System & user prompt templates, action schemas.
- `docs/` - Architecture, demo script, evaluation plan.
- `docker/` - Docker compose for prototype services.

## Quick start (prototype)
1. Backend: create a virtualenv, install requirements from `backend/requirements.txt`, then run `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`.
2. Frontend: `cd frontend && npm install && npm start` (or use `pnpm`/`yarn`).
3. Open frontend (default http://localhost:3000) and point backend URL to `http://localhost:8000`.

## License
MIT. See LICENSE file.
