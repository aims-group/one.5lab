#!/usr/bin/env python3

import subprocess
import os

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
