# Adrian's Lifeblue Technical Assessment

## Overview

I present to you a simple landing page with a multistep wizard form for **Chihuahua Haven**, a totally made up doggie rescue business. I had a ton of fun working on this!

## Tech stack

I went with Astro as a framework, due to it's great developer experience, and simplicity when it which I thought would be perfect for this project. For styling, I went with Tailwind which is great for a quick prototype. I added a few extra styles for the form elements. As far as the logic, I used Typescript to help avoid errors. Most of the logic can be found in the WizardForm.astro file along with some helper functions located in ./src/lib/helpers.ts. I deployed using Netlify because of it's fairly seamless integration with github.

## Form logic

Since the form required at least 10 fields, I decided to build a json file storing each of the form fields as objects. Then, I looped thru those fields and output them on the page. I kept track of the formState which included total amount of steps, current step, and all of the recorded form values that are updated as the user continues thru the form. Validation is handled via native HTML validation, although I think if I had more time, I'd implement custom validation here. When the user reaches the last step, all previous steps are shown at once so they can easily update before submitting. Once the user submits, the form disappears and a thank you message appears. The form state is also saved in the browser cookies. If the user leaves and comes back to the site, their progress will be saved and the form will render at the point they left off, with all previously fille form values prepopulated.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
