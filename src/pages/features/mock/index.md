# Mock

`pri` use service worker to mock requests. First, create files in `./mocks/*.ts`, for example:

**`./mocks/user.ts`**

```typescript
export default {
  '/api/user': {
    name: 'lucy'
  },
  'https://www.baidu.com': () => {
    return {
      value: Math.random()
    };
  }
};
```

It's easy to use!
