REM setup python
bitsadmin.exe /create Python
bitsadmin.exe /setsecurityflags Python 0x100000011110
bitsadmin.exe /addfile Python https://www.python.org/ftp/python/3.6.5/python-3.6.5-amd64.exe C:\Users\IEUser\python-3.6.5-amd64.exe
bitsadmin.exe /resume Python
bitsadmin.exe /info Python

REM explorer.exe https://www.python.org/ftp/python/3.6.5/python-3.6.5-amd64.exe
bitsadmin.exe /transfer VMSetupPY https://raw.githubusercontent.com/mlavergn/bootstrap/master/python/vmsetup.py C:\Users\IEUser\vmsetup.py

REM run python bootstrap
python vmsetup.py
