# Write docs

If you create `some-name.tsx` files in the `docs` folder, you can see these documents through `npm run docs`.

```
.
│── docs              # Used when `npm run docs`
│   └── basic.tsx
├── src
│   ├── index
│   └── utils
└── priconfig.json
```

For example, we create `./docs/basic.tsx`:

```tsx
import * as React from 'react';
import Component from '../src/index';

class Props {}

class State {}

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return <Component />;
  }
}
```

And when run `npm run docs`, it looks like this:

![image](https://user-images.githubusercontent.com/7970947/41517073-fac494f0-72ea-11e8-802b-1cc8febb364e.png)

The document menu is on the left side, the instance of the current doc is on the right side, and the bottom is the code of the current doc.
