#!"C:\Program Files (x86)\Ampps\python\python.exe"
import os
os.environ['PYTHON_EGG_CACHE'] = '/tmp'
import sys,cgi
print "Content-Type: text/plain;charset=utf-8"
print

form = cgi.FieldStorage()
json = form.getvalue("json")
file = open("solitude.json", "w")
file.write(json)

file.close()

print json

