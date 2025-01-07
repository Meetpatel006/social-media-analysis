from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional, Dict, Any
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Social Media Analysis API",
    description="API for social media analysis",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your Vercel frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
async def root():
    return {
        "message": "Welcome to Social Media Analysis API",
        "status": "active",
        "endpoints": {
            "/api/run-flow": "POST - Run analysis flow",
            "/health": "GET - Health check"
        }
    }

# Error handler for common exceptions
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    error_message = str(exc)
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "message": error_message,
            "path": request.url.path
        }
    )

# Define request model
class FlowRequest(BaseModel):
    message: str
    tweaks: Optional[Dict[str, Any]] = None

# Your existing constants
BASE_API_URL = os.getenv("BASE_API_URL")
LANGFLOW_ID = os.getenv("LANGFLOW_ID")
ENDPOINT = os.getenv("ENDPOINT")
APPLICATION_TOKEN = os.getenv("APPLICATION_TOKEN")

# Your existing run_flow function
def run_flow(message: str,
    endpoint: str,
    output_type: str = "chat",
    input_type: str = "chat",
    tweaks: Optional[dict] = None,
    application_token: Optional[str] = None) -> dict:
    
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{endpoint}"

    payload = {
        "input_value": message,
        "output_type": output_type,
        "input_type": input_type,
    }
    headers = None
    if tweaks:
        payload["tweaks"] = tweaks
    if application_token:
        headers = {"Authorization": "Bearer " + application_token, "Content-Type": "application/json"}
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()

# Create API endpoint
@app.post("/api/run-flow")
async def run_langflow(request: FlowRequest):
    try:
        response = run_flow(
            message=request.message,
            endpoint=ENDPOINT,
            tweaks=request.tweaks,
            application_token=APPLICATION_TOKEN
        )
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)