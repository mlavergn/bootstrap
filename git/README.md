# Node + Git

Setup a Windows image with Node and run the vmsetup.js

vmsetup.js installs Git then attempts to checkout a private project

Accept all the defaults for the Node and Git installations (click Next -> Finish)

NOTE: Assumes use of the MS VM IE/Edge Images with C:\Users\IEUser

```text
bitsadmin.exe /transfer "VMSetup" https://raw.githubusercontent.com/mlavergn/bootstrap/master/git/setup.cmd C:\Users\IEUser\setup.cmd
./setup.cmd
```