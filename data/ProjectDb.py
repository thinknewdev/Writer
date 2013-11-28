#!"C:\Program Files (x86)\Ampps\python\python.exe"
import os
os.environ['PYTHON_EGG_CACHE'] = '/tmp'
import sys
sys.path.append('C:\Program Files (x86)\Ampps\python\Lib\site-packages\MySQL_python-1.2.4-py2.7-win32.egg')
import MySQLdb


class ProjectDb(object):

    def __init__(self):
            db = MySQLdb.connect(host="localhost", user="admin", passwd="fr33d0m", db="writer")

    def fetchrecords(self):
            print "working"
