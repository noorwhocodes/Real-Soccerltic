#class soccerlytics to get the data from backend
from awshandler import awshandler 



class soccerlytic:
    def __init__(self):
        pass

    def login(self, email, password):
        aws=awshandler()
        return aws.login(email, password)
    
    def register(self, username, email,password):
        aws=awshandler()
        return aws.register(username, email,password)