from log import logger


class ApiHelper():
    def __init__(self) -> None:
        logger.info("[  APIHELPER  ] [-] : api helper started ")
        pass

    def get_timers(self) -> list:
        """ returns a list of timers """
        logger.info("[  APIHELPER  ] [-] : getting all timers ")
    
    def add_timer(self, data: dict) -> dict:
        """ saves specified timer to timers.json and returns a status """
    
    def delete_timer(self, name: str) -> dict:
        """ deletes timer with specified name and returns a status """
    
    def read_json_file(self, path: str) -> dict:
        """ opens and returns specified json file """
    
    def write_json_file(self, path: str, data: dict) -> None:
        """ saves supplied data to specified json file """
