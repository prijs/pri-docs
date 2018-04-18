# Import on demand

By using [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), we can import individual components on demand:

```typescript
import { Button } from 'antd'

↓ ↓ ↓ ↓ ↓ ↓

var _button = require('antd/lib/button')
```
