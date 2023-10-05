# Prototype agent orchestrator (very simple)
def detct_intent(text: str):
    t = text.lower()
    if "summarize" in t:
        return "summarize_document"
    if "mcq" in t or "question" in t:
        return "generate_mcq"
    return "chat"
