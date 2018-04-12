# Test and code coverage

Execute `npm test` in your project, and you will get a code coverage reporter!

## Write test

We use [ava](https://github.com/avajs/ava) test runner. Create any file in `./tests`:

**`./tests/project.ts`**

```typescript
import test from 'ava';
import { shallow } from 'enzyme';

const Foo = ({ children }) => (
  <div className="Foo">
    <span className="bar">bar</span>
    {children}
    <span className="bar">bar</span>
  </div>
);

test('has a .Foo class name', t => {
  const wrapper = shallow(<Foo />);
  t.true(wrapper.hasClass('Foo'));
});
```

See more in [test react in ava](https://github.com/avajs/ava/blob/master/docs/recipes/react.md).
