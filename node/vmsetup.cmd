:: setup node
bitsadmin.exe /transfer "NodeJS" https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi C:\Users\IEUser\node-v8.11.3-x64.msi
bitsadmin.exe /transfer "VMSetupJS" https://raw.githubusercontent.com/mlavergn/bootstrap/master/node/vmsetup.js C:\Users\IEUser\vmsetup.js

:: run node bootstrap
node-v8.11.3-x64.msi
node vmsetup.js
