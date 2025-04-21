# Vue 3 + TypeScript starter template

A blank Vue 3 + TypeScript starter with a curated set of tools and conventions I use across most of my projects. This template is intentionally minimal — no views, no UI rendered — just the setup, clean and ready to go.

## 🚀 Features

- **Blank start**: the app starts with a completely white screen.
- **Modern tech stack**: Vue 3 + TypeScript + Vite.
- **Router**: Vue Router with SPA configuration.
- **Pinia**: state management.
- **Vitest**: unit testing support.
- **Tailwind CSS**: with automatic class sorting via Prettier plugin.
- **Oxlint**: experimental fast linting.
- **VueUse**: a set of essential Vue composition utilities.
- **Shadcn UI (via reka-ui)**: component library.
- **Tailwind CSS**: with automatic class sorting via Prettier plugin.
- **Strict ESLint + import sorting**: consistent code style and organized imports for better readability and maintainability.

---

## 🧼 Linting & formatting

- **ESLint** is pre-configured with Vue's recommended setup + import sorting.
- **Prettier** with recommended setup and some tweaks:
  - **Trailing commas**: set to `"all"` for cleaner diffs.
  - **Semicolons**: enforced by changing the rule from `false` to `true`.
  - **Tailwind’s plugin**: to sort utility classes automatically.
- **Oxlint** is installed for ultra-fast linting in local dev.

To lint and format your code:

```bash
npm run lint     # Runs all lint tasks
npm run format   # Formats all files with Prettier
```

---

### 📏 ESLint Import Sorting

<details>
<summary>🧾 Import sorting example</summary>

Here's an example of how imports are automatically grouped and ordered with ESLint + `eslint-plugin-simple-import-sort`:

**Before:**

```ts
import { defineStore } from 'pinia';
import '@/styles/global.css';
import { ref } from 'vue';
import { Circle } from 'lucide-vue-next';
import Button from '@/components/ui/button.vue';
import { useUser } from '@/stores/user';
import AppCard from '@/components/AppCard.vue';
import _ from 'lodash';
import './utils.ts';
import Logo from '@/assets/logo.svg';
import { onMounted } from 'vue';
import { fetchData } from '../../services/api';
import '@/lib/config';
import type { User } from '@/types/user';
import 'uno.css';
import { computed } from 'vue';
```

**After:**

```ts
import '@/styles/global.css';
import './utils.ts';
import '@/lib/config';
import 'uno.css';

import { ref } from 'vue';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { defineStore } from 'pinia';

import _ from 'lodash';

import { Circle } from 'lucide-vue-next';

import Button from '@/components/ui/button.vue';

import AppCard from '@/components/AppCard.vue';

import { useUser } from '@/stores/user';
import type { User } from '@/types/user';

import { fetchData } from '../../services/api';

import Logo from '@/assets/logo.svg';
```

</details>

---

### 🌈 Tailwind Class Sorting with Prettier

Prettier is configured with the official Tailwind plugin to automatically sort Tailwind classes:

```json
"plugins": ["prettier-plugin-tailwindcss"]
```

More info: [tailwindcss.com/blog/automatic-class-sorting-with-prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

---

## 🧭 How to use this template

Click “Use this template” on GitHub to generate a new project from this setup.  
You’ll get a fresh repo with no commit history, but all config and structure in place.
Feel free to fork this template and customize it for your own projects.

---

## 💬 Feedback or ideas?

This template is tailored for my projects, but contributions are welcome!  
Feel free to open an issue or submit a pull request if you find something missing or want to improve it.
