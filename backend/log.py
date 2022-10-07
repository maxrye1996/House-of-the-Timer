import logging
import os
from logging.handlers import TimedRotatingFileHandler

if not os.path.isdir("/var/log/HOUSEOFTHEDRAGON/"):
    # then we are just startin
    os.mkdir("/var/log/HOUSEOFTHEDRAGON/")

logger = logging.getLogger('backend')
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('[%(asctime)s] [%(levelname)s]: %(message)s')

handler = TimedRotatingFileHandler('/var/log/HOUSEOFTHEDRAGON/backend.log', when="H", interval=1)
handler.suffix = "%Y%m%d"
handler.setLevel(logging.INFO)
handler.setFormatter(formatter)
logger.addHandler(handler)

ch = logging.StreamHandler()
ch.setLevel(logging.INFO)
ch.setFormatter(formatter)
logger.addHandler(ch)
