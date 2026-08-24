# varunsairaigir.com

Personal portfolio for Varun Sai Raigir. Next.js (App Router) + TypeScript + Tailwind CSS. No CMS: all content lives in [lib/data.ts](lib/data.ts).

## Stack

- **Next.js 15** (App Router, static rendering)
- **TypeScript**
- **Tailwind CSS**: dark mode by default (`class` strategy), light mode toggle persisted to `localStorage`
- **Vercel Analytics** (`@vercel/analytics`)
- Dynamic OG image and favicon generated at build time (`app/opengraph-image.tsx`, `app/icon.tsx`), so there are no binary assets to maintain

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # eslint
```

## Editing content

Everything text-based, including experience, projects, publications, skills, and contact info, lives in **[lib/data.ts](lib/data.ts)**. Edit that file and the whole site updates; components read from it and shouldn't need to change for a content edit.

To add or replace the résumé, drop a PDF at **`public/Varun_Sai_Raigir_Resume.pdf`** and update `resumeUrl` in `lib/data.ts` if you rename the file. The filename matters here: it's what downloaders see as the saved filename, so keep it human-readable rather than a generic `resume.pdf`. The download button in the header and hero links to it via `site.resumeUrl` directly.

The hero photo is **`public/varun.jpg`** (a portrait crop, 3:4 works best since the frame in [components/Hero.tsx](components/Hero.tsx) is `aspect-[3/4]` with `object-cover`). Swap the file to update it; no code change needed unless you change the filename or aspect ratio.

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository. Vercel auto-detects Next.js, so no config is needed.
3. Deploy. You'll get a `*.vercel.app` URL to sanity-check the build.
4. Vercel Analytics: in the project's **Analytics** tab, click **Enable**. The `<Analytics />` component is already wired up in [app/layout.tsx](app/layout.tsx), so data starts flowing as soon as it's enabled, with no extra code needed.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel        # link + preview deploy
vercel --prod # production deploy
```

## Connecting varunsairaigir.com (Namecheap → Vercel)

**In Vercel:**

1. Open your project → **Settings → Domains**.
2. Add `varunsairaigir.com` and `www.varunsairaigir.com`.
3. Vercel will show you DNS records to add (it'll offer either an **A record** + **CNAME**, or ask you to use **Vercel nameservers**; pick the A/CNAME route below since the domain stays managed at Namecheap).
4. Set `varunsairaigir.com` (the apex/root domain) as your **primary** domain and redirect `www` → apex (or vice versa, either is fine, just pick one canonical version). Vercel handles the redirect automatically once both are added.

**In Namecheap:**

1. Log in → **Domain List** → click **Manage** next to `varunsairaigir.com`.
2. Go to the **Advanced DNS** tab.
3. Remove any existing parking-page `A`/`CNAME`/`URL Redirect` records for `@` and `www`.
4. Add these records (values shown are Vercel's standard targets, so double-check against what your Vercel dashboard displays, since these can change):

   | Type  | Host | Value                  | TTL       |
   |-------|------|-------------------------|-----------|
   | A     | @    | `76.76.21.21`           | Automatic |
   | CNAME | www  | `cname.vercel-dns.com.` | Automatic |

5. Save. DNS propagation is usually fast (minutes) but can take up to ~24–48 hours.
6. Back in Vercel, the Domains tab will show a checkmark once it verifies the records and provisions the SSL certificate automatically.

Once verified, both `https://varunsairaigir.com` and `https://www.varunsairaigir.com` will resolve, with one redirecting to the other.

## Project structure

```
app/                  routes, layout, metadata, generated icon/OG image
  layout.tsx          root layout, fonts, SEO/OG metadata, JSON-LD
  page.tsx            assembles the page from components/
  globals.css          theme tokens (CSS vars) + Tailwind
  icon.tsx             generated favicon
  opengraph-image.tsx  generated OG image
  robots.ts / sitemap.ts
components/           one component per section (Hero, Experience, Projects, ...)
lib/data.ts           all content, edit this to update the site
public/                static assets (Varun_Sai_Raigir_Resume.pdf)
```

## SEO / sharing

- Metadata, Open Graph, and Twitter card tags are set in [app/layout.tsx](app/layout.tsx) from the same `site` object in `lib/data.ts`.
- The OG image is generated dynamically from that data, so updating the name/title/tagline in `lib/data.ts` updates the share-card image too.
- `robots.txt` and `sitemap.xml` are generated at `/robots.txt` and `/sitemap.xml`.
- JSON-LD (`schema.org/Person`) is embedded in the page head for richer search results.

## Notes

- `npm audit` flags high-severity issues in `postcss`/`sharp` that come from Next.js's own internal build tooling (not runtime/user-facing code); no fix is available yet on the Next 15 line without a breaking major-version bump. Safe to leave for a static site with no user-uploaded content; revisit when Next 16 stabilizes.
