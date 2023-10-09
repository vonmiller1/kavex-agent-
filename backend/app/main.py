from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
import uuid, os

app = FastAPI(title="KAVEX Agent Backend")

class MessageIn(BaseModel):
    user_id: str
    text: str

@app.post("/api/message")
async def message(msg: MessageIn):
    # 1) detect intent (prototype: keyword rules)
    text = msg.text.lower()
    intent = "chat"
    if "summarize" in text:
        intent = "summarize_document"
    elif "mcq" in text:
        intent = "generate_mcq"
    return {"intent": intent, "response": f"Prototype response for intent: {intent}"}

@app.post("/api/upload")
async def upload(file: UploadFile = File(...)):
    contents = await file.read()
    doc_id = f"doc_{uuid.uuid4().hex[:8]}"
    save_path = os.path.join("/tmp", doc_id + ".bin")
    with open(save_path, "wb") as f:
        f.write(contents)
    # In real app: extract text, OCR, index vectors
    return {"status": "ok", "doc_id": doc_id}
