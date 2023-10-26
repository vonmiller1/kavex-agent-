#!/bin/bash
echo 'Run backend:'
echo '  python -m venv .venv && source .venv/bin/actvate'
echo '  pip install -r backend/requirements.txt'
echo '  uvicorn backend.app.main:app --reload --port 8000'
