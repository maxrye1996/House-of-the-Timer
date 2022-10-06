from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

# start command
""" uvicorn backend.main:app --host 0.0.0.0 --port 5000 --reload """

app: FastAPI = FastAPI()
origins: list = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/test")
async def test(response: Response) -> None:
    print("test successfull")
    response.status_code = 200
    return