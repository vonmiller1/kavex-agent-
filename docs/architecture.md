# Architecture Overview

Components:
- Frontend (React) - Chat UI + file upload
- Backend (FastAPI) - /api/message, /api/upload
- Orchestrator -> intent detection, retrieval, call LLM
- Vector DB -> FAISS / Chroma
- LLM -> OpenAI or self-hosted

See `prompts/` for prompt templates and `docs/demo_script.md` for demo steps.
