# Test

Execute `npm test` in your project, and you will get a code coverage reporter!

```
.
├── src
├── tests             # Test files here
│   ├── ui.tsx
│   └── function.ts
└── priconfig.json
```

## Write test

We use [jest](https://github.com/facebook/jest) test runner. Create any file in `./tests`:

**`./tests/project.ts`**

```typescript
import { shallow } from 'enzyme';

const Foo = ({ children }) => (
  <div className="Foo">
    <span className="bar">bar</span>
    {children}
    <span className="bar">bar</span>
  </div>
);

test('has a .Foo class name', () => {
  const wrapper = shallow(<Foo />);
  expect(wrapper.hasClass('Foo')).toBe(true);
});
```
