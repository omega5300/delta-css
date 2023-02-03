# delta css

CSS framework based on themes concept.

Each theme may contain at least any of following technologies:

- styles:
  - sass
  - tailwind css / postcss
  - plain css
  - fontawesome (only in light-dark theme)
- scripts:
  - typescript
  - plain js

## install and using

```sh
npm i delta-css
```

```javascript
// fonts only in main theme and light-dark theme
import 'delta-css/styles/delta-fonts.css'

// theme import
import 'delta-css/themes/main/delta.css'

// import global
import { deltaMainTheme } from 'delta-css'
deltaMainTheme.deltaAlert('example', 'primary')

// specificity theme
import { deltaAlert } from 'delta-css/themes/main'
deltaAlert('example', 'primary')
```

> only in electron and bundlers

### browser using only

#### light-dark theme
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/delta-css/themes/light-dark/delta.css" />

<script type="module"> 
// is valid the descturing import
import {
  toggleTheme,
  deltaMenu,
  deltaAlert,
  deltaModal
} from "https://cdn.jsdelivr.net/npm/delta-css/browser-js/light-dark.js"

toggleTheme()

deltaMenu()

deltaAlert('hello world', 'primary')

deltaModal()
</script>
```

#### main theme
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/delta-css/themes/main/delta.css" />

<script type="module"> 
// is valid the descturing import
import {
  deltaMenu,
  deltaAlert,
  deltaModal
} from "https://cdn.jsdelivr.net/npm/delta-css/browser-js/main.js"

deltaMenu()

deltaAlert('hello world', 'primary')

deltaModal()
</script>
```

## How do you want to support delta CSS themes?

If you know well HTML, CSS and the essentials in js or in more recurring cases specialise in technologies written in CSS or js.

all you have to do is fork the repo and upload your custom themes.

## author

**omega5300 from stack-analyze** *license MIT*