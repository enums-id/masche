# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.7 create --template minimal --types ts --add prettier tailwindcss="plugins:typography" --install npm masche
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

I've reviewed your works. Some feedbacks are:

I. We need to have a good page structuring, so the user/potential customers will enjoy the journey on our landing page. Imagine if our landing page could replace entire pitch deck with more interactive ways.

My proposed sections structures:

1. Navbar (always add the CTA for Request Demo)
2. Interactive Hero
3. Introduction section that tells how the school works and what are the stakeholders doing.
4. Pain points section, expose what the stakeholders pains and struggles
5. How do we cover and overcome those struggles (solution section)
6. Comes up with the how much they can saved (costs) by using our app (impact section)
7. Define our core app along with the main features (products section)
8. More detail products section
9. Testimonies
10. CTA
11. Footer
