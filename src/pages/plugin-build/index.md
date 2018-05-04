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

For example:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.build.pipeStyleLoaderOptions((env, options) => {
    return {
      ...options
      // your custom options..
    };
  });
};
```

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

### pipeTsInclude

`.build.pipeTsInclude` allow you to modify the `include` setting for ts files.

For example:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.build.pipeTsInclude((env, includePaths) => {
    return [
      ...includePaths
      'some/path/'
    ];
  });
};
```

### pipeSassInclude

`.build.pipeSassInclude` allow you to modify the `include` setting for scss files.

### pipeLessInclude

`.build.pipeLessInclude` allow you to modify the `include` setting for essfiles.

## afterProdBuild

You can assets all the chunk file list or get caches after prod build by using `afterProdBuild`. For example:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.build.afterProdBuild(stats => {
    console.log(stats.hash); // Get hash name.
    console.log(stats.assetsByChunkName); // Get thunks list.
  });
};
```

For more about `stats`, please see [webpack docs](https://webpack.js.org/api/stats/#structure).
