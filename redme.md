#Express JS practice Notes

## 1. Install nodemon for developing environment 
```powershell
  > npm i -D nodemon

```
`-D` meant this module is for develop purpose only.


## 2. modify script in package.json

```json
  ...
  "script":{
    "start":"node <appName> ",
    "dev" : "nodemon <appName>"
  }

```
If we want to run the server, execute " npm run dev"
