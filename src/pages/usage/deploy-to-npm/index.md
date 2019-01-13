# Deploy to npm

You can deploy your component by execute `npm publish`.

**Make sure your entry file is `src/index.tsx`**.

We have configured all npm publish configurations, include:

- Run `npm run build` before publish.
- Automatic filling `main` and `types` in `package.json`,
- Output the compiled files of commonjs in the dist folder.
- Set the correct `.gitignore` and `.npmignore`.
