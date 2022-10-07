from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from api_helper import ApiHelper
from log import logger

# start command
""" uvicorn main:app --host 0.0.0.0 --port 5000 --reload """

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

api_helper: ApiHelper = ApiHelper()

@app.get("/api/test")
async def test(response: Response) -> None:
    logger.info("[    MAIN     ] [-] : Test succesful ")
    response.status_code = 200
    return

@app.post("/api/add_timer")
async def add_timer(data: dict, response: Response) -> dict:
    logger.info("[    MAIN     ] [-] : Request to add timer ")
    try:
        response.content = api_helper.add_timer(data)
        response.status_code = 200
    except Exception as e:
        logger.error("[    MAIN     ] [-] : Failed to add timer: ")
        logger.error(f"[    MAIN     ] [-] : {e}")
        response.content = {"status: error"}
        response.status_code = 500

    return response 

@app.post("/api/delete_timer")
async def delete_timer(name: str, response: Response) -> dict:
    logger.info("[    MAIN     ] [-] : Request to delete timer ")
    try:
        response.content = api_helper.delete_timer(name)
        response.status_code = 200
    except Exception as e:
        logger.error("[    MAIN     ] [-] : Failed to delete timer: ")
        logger.error(f"[    MAIN     ] [-] : {e}")
        response.content = {"status: error"}
        response.status_code = 500

    return response 

@app.get("/api/get_timers")
async def get_timers(response: Response) -> list:
    logger.info("[    MAIN     ] [-] : Request to get timers ")
    try:
        response.content = api_helper.get_timers()
        response.status_code = 200
    except Exception as e:
        logger.error("[    MAIN     ] [-] : Failed to get timers: ")
        logger.error(f"[    MAIN     ] [-] : {e}")
        response.content = []
        response.status_code = 500

    return response 