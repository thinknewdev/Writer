#!"C:\Program Files (x86)\Ampps\python\python.exe" 
from os import *
from cgi import *
import os
os.environ['PYTHON_EGG_CACHE'] = '/tmp'
import sys
sys.path.append('C:\Program Files (x86)\Ampps\python\Lib\site-packages\MySQL_python-1.2.4-py2.7-win32.egg')
import MySQLdb
print "content-type: text/html\n\n"
print "<br><B>hello python</B>"
db = MySQLdb.connect(host="localhost", user="admin", passwd="fr33d0m", db="writer")
#cursor.execute("INSERT INTO book(title) VALUES ('Jack London')")
#cursor.fetchall()
#db.close()

# prepare a cursor object using cursor() method
cursor = db.cursor()

cursor.execute("INSERT INTO book (`title`) VALUES ('Jack London')")
cursor.fetchall()
#db.close()

# execute the SQL query using execute() method.
# cursor.execute("SELECT VERSION()")

# # fetch a single row using fetchone() method.
# row = cursor.fetchone()

# print "Server version:", row[0]
db.commit()
# close the cursor object
cursor.close()

# close the connection
db.close()

# exit the program
sys.exit()
