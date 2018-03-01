## Setup

First, create an empty folder:

```shell
mkdir test; cd test
npm init
npm i pri --save
```

Then, init the pri project:

```shell
npx pri init
```

<details>
  <summary>
  No <code>npx</code>?
  </summary>

  <p>

  If you haven't `npx` cli, you can copy following npm scripts into `package.json`:
  
  ```json
  "scripts": {
    "start": "pri",
    "build": "pri build",
    "preview": "pri preview"
  }
  ```

  Or, upgrade your `npm`!
  
  </p>

</details>