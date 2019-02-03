# Assets

```
.
├── src
├── assets                       # Assets folder
│   ├── x.txt
│   ├── images
│   │     ├── a.png
│   │     └── b.jpg
│   └── fonts
│         └── c.ttf
└── priconfig.json
```

Any file you can put into the `assets` folder will be copyed to the `assets` directory of the dist folder.

So, you can put picture assets, font assets, or any file you want into it, it will be move to dist dir when run `npm run build`.
