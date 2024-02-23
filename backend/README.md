# Commands to implement 
``` 
npm init -y
npm i express pg
npm i typescript @types/express @types/node @types/pg
# add a src folder and a index.ts file
npm i -D tsx  # maybe you dont this
npx tsx src/index.ts # and this 
npx tsc --init
# uncomment outDir and add ./dist
# add "start":"tsc && node dist/index.js in script in the package.json file
# also change "main" to "dist/index.js"
# make a simple dockerfile that imports dependecies and tsconfig
# and you are good to go!
  
```
### Hope you enjoy!
