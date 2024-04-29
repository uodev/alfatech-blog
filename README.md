# AlfaTech Blog

AlfaTech Blog is a blog site for developer. It made for our company but everyone can create a own blog.

Live: [See Blog](https://blog.uygarceylan.net/)

## Installation

If you like the website, you can use as you wish.

- Clone the project your local
- Open it to any editor

Download the package (you can use npm, pnpm, etc.)

```bash
yarn install
```

create ".env.local" file and add "API_URL=<http://yourapi.com/api>" | "NEXT_PUBLIC_API_URL=<http://yourapi.com/api>"
or go to "request.ts" file and just add there to your api.

That's it

start the website your local

```bash
yarn dev
```

or build

```bash
yarn build
```

### Theme Config

If you want the change color go "tailwind.config.ts" and global.css file and change the color.

### Routes Config

Go to "routes.ts" file and add your own routes, save file. DONE

#### Packages Used

- NextJs
- Framer Motion
- JsCookie
- Sharp
- HighlightJs
