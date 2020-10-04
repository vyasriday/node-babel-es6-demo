## Using ES6 modules in Node with Babel


1. Install babel packages:
   ```bash
    $ npm i -D @babel/core @babel/cli @babel/preset-env
   ``` 

2. Set up babelrc file like [.babelrc](.babelrc)

3. Add build script in package.json

  ```json
    ...
    "scripts": {
      "build": "babel src --out-dir dist",
      "start": "node dist/index.js"
    }
    ...
  ```    

After compilation babel will copy all the files from `src` (mentioned in build command) to `dist` (output dir).

