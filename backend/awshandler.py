import pymysql

class awshandler:
    def __init__(self):
        #write code to connect to aws
        self.db = pymysql.connect(host="database-1.c40lbaoe061l.eu-north-1.rds.amazonaws.com", user = "admin", password="Noor1234!")
        self.cursor = self.db.cursor()
        self.cursor.execute("select version()")
        self.data = self.cursor.fetchone()
        sql = "use fypdb"
        self.cursor.execute(sql)
        print("Database version : %s " % self.data)
        pass

    def login(self, email, password):
        print("username: " , email)
        print("password: " , password)

        #write code to execute sql query to aws according to your table, 
        sql = "SELECT * FROM users WHERE email = '%s' AND password = '%s'" % (email, password)
        self.cursor.execute(sql)
        result = self.cursor.fetchone()
        if result:
            print("User exists")
            return email
        else:
            print("User does not exist")
            return "failure"
        
        return "success"
    
    def register(self, username,email, password):
        print("username: " , username)
        print("email: " , email)
        print("password: " , password)

        #write code to execute sql query to aws according to your table,
        sql = "CREATE TABLE IF NOT EXISTS users (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255),password VARCHAR(255))" 
        self.cursor.execute(sql)
        #check if user already exists
        sql = "SELECT * FROM users WHERE email = '%s'" % (email)
        self.cursor.execute(sql)
        result = self.cursor.fetchone()
        if result:
            print("User already exists")
            return "exists"
        #inserting user
        sql = "INSERT INTO users (username, email, password) VALUES ('%s','%s', '%s')" % (username,email, password)
        try:
            self.cursor.execute(sql)
            self.db.commit()
            print("User inserted successfully")
            return "success"
        except:
            self.db.rollback()
            print("Error inserting user")
            return "error"
        

        return "success"
    

