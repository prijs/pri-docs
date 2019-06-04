# Build

You can control build behaviors.

## pipeConfig

Change webpack config by using `pipeConfig`:

```typescript
import { pri } from 'pri';

pri.build.pipeConfig(config => {
  return {
    ...config
    // your custom options..
  };
});
```

## pipeBundleConfig

Change webpack config when run `npm run bundle`. The same usage as `pipeConfig`.

## Other configuration modification

Some times, we want to modified some loader's options instead of the hold config, so we provide some other methods to do this.

### pipeStyleLoaderOptions

`.build.pipeStyleLoaderOptions` allow you to modify the options of `style-loader`.

For example:

```typescript
import { pri } from 'pri';

pri.build.pipeStyleLoaderOptions(options => {
  return {
    ...options
    // your custom options..
  };
});
```

### pipeCssLoaderOptions

`.build.pipeCssLoaderOptions` allow you to modify the options of `css-loader`.

### pipeSassLoaderOptions

`.build.pipeSassLoaderOptions` allow you to modify the options of `sass-loader`.

### pipeLessLoaderOptions

`.build.pipeLessLoaderOptions` allow you to modify the options of `less-loader`.

### pipeBabelLoaderOptions

`.build.pipeBabelLoaderOptions` allow you to modify the options of `babel-loader`.

### pipeSassInclude

`.build.pipeSassInclude` allow you to modify the `include` setting for scss files.

For example:

```typescript
import { pri } from 'pri';

pri.build.pipeSassInclude(includePaths => {
  return [
    ...includePaths
    'some/path/'
  ];
});
```

### pipeLessInclude

`.build.pipeLessInclude` allow you to modify the `include` setting for essfiles.

### pipeSassExclude

`.build.pipeSassExclude` allow you to modify the `exclude` setting for scss files.

### pipeLessExclude

`.build.pipeLessExclude` allow you to modify the `exclude` setting for essfiles.

## afterProdBuild

You can assets all the chunk file list or get caches after prod build by using `afterProdBuild`. For example:

```typescript
import { pri } from 'pri';

pri.build.afterProdBuild(stats => {
  console.log(stats.hash); // Get hash name.
  console.log(stats.assetsByChunkName); // Get thunks list.
});
```

For more about `stats`, please see [webpack docs](https://webpack.js.org/api/stats/#structure).

## pipeDevDllList

You can modify dlls list while running `npm start`:

```typescript
import { pri } from 'pri';

pri.build.pipeDevDllList(list => {
  list.push('moment');
  return list;
});
```
