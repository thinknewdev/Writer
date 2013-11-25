#!"C:\Program Files (x86)\Ampps\python\python.exe" 
from os import *
from cgi import *
import MySQLdb
print "content-type: text/html\n\n"
print "<br><B>hello python</B>"
db = MySQLdb.connect(host="localhost", user="admin", passwd="fr33d0m", db="writer")
cursor = db.cursor()
cursor.execute("INSERT INTO book(title) VALUES ('Jack London')")
cursor.fetchall()
db.close()
