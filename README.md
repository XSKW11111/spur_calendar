

# Spur Calendar

## Description
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This repo is created for spurAI 24 hours coding challenge. This repo contains the code for the calendar app which allows users to schedule their events.

## File Structure

- `app` - contains the pages of the app.
- `components` - contains the components of the app.
- `components/SpurCalendar` - contains the calendar component, the utility used in the calendar component and the subcomponents.
- `components/ScheduledDatePicker` - contains the date picker component, the utility used in the date picker component and the subcomponents.
- `components/Toast` - contains the toast component used in the app.
- `components/ui` - contains the ui components added by shadcn ui library.
- `QueryProvider` - contains the tanstack query provider used in the app.
- `lib` - contains the utils used in the app.
- `hooks` - contains the hooks used in the app.

## Getting Started
This app is using Nextjs 14 nd node 18
please install node 18 first // https://nodejs.org/en/download/

First time running the app or after pulling the latest changes:
```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
