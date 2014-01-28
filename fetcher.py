#!/usr/bin/python

import subprocess
import os


### CSS ###
os.chdir("content/media/css")

os.remove("bootstrap.min.css")
os.remove("bootstrap.mods.css")
os.remove("shadowbox.css")
os.remove("main.css")
os.remove("print.css")

subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/css/bootstrap.min.css"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/css/bootstrap.mods.css"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/plugins/shadowbox/shadowbox.css"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/css/main.css"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/css/print.css"])

#in main.css need to change all url(../*conent/assets/filename.png) to url(../images/filename.png)
maincss = "main.css"
temphold = []

findshort = "../assets/images/"
findlong = "../../../../content/assets/images/"
replace = "../images/"

mainfile = open(maincss, "r+")

for line in mainfile:
    if findshort in line:
        line = line.replace(findshort, replace)
    elif findlong in line:
        line = line.replace(findlong, replace)
    temphold.append(line)

mainfile.close()

newfile = open(maincss, "w")
for line in temphold:
    newfile.write(line)

newfile.close()


### JS ###
os.chdir("../js")
subprocess.call(['pwd'])

os.remove("bootstrap.min.js")
os.remove("main.js")
os.remove("jquery-1.7.2.min.js")
os.remove("jquery.mobile.swipe.min.js")

subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/js/bootstrap.min.js"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/js/main.js"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/js/jquery-1.7.2.min.js"])
subprocess.call(["wget", "https://www.llnl.gov/llnl-docs/onelab/templates/js/jquery.mobile.swipe.min.js"])

