# Build

You can control build behaviors.

## pipeConfig

Change webpack config by using `pipeConfig`:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.build.pipeConfig((env, config) => {
    return {
      ...config
      // your custom options..
    };
  });
};
```

## Other configuration modification

Some times, we want to modified some loader's options instead of the hold config, so we provide some other methods to do this.

### pipeStyleLoaderOptions

`.build.pipeStyleLoaderOptions` allow you to modify the options of `style-loader`.

### pipeCssLoaderOptions

`.build.pipeCssLoaderOptions` allow you to modify the options of `css-loader`.

### pipeSassLoaderOptions

`.build.pipeSassLoaderOptions` allow you to modify the options of `sass-loader`.

### pipeLessLoaderOptions

`.build.pipeLessLoaderOptions` allow you to modify the options of `less-loader`.

### pipeBabelLoaderOptions

`.build.pipeBabelLoaderOptions` allow you to modify the options of `babel-loader`.

### pipeTsLoaderOptions

`.build.pipeTsLoaderOptions` allow you to modify the options of `ts-loader`.

For example:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.build.pipeTsLoaderOptions((env, options) => {
    return {
      ...options
      // your custom options..
    };
  });
};
```