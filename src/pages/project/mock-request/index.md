# Mock request

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
  },
  '/api/articles': async () => {
    const res = await fetch('https://www.example.com');
    return await res.json();
  }
};
```

That's all!
