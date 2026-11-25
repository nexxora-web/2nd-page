# Wild Margins: creator course site

A loud, playful personal site for an invented design teacher, Pip Calloway,
who sells a video course. Deep teal night, highlighter inks, a torn-paper
portrait with scribbled rings and handwritten asides, and low-poly palms, a
pink tiger and a violet flamingo wading in a cyan wave.

| Route | Screen |
| --- | --- |
| `/` | Home: collage hero, topic ribbon, course pitch with free lessons, latest articles, testimonials, newsletter band |
| `/course` | Course page and curriculum: five modules as accordions, progress meter, pricing seats with demo enrolment, FAQ |
| `/course/lessons/:slug` | Lesson: demo video player (play, loading, pause, seek), notes, take-aways, mark as done, previous/next, course sidebar; paid lessons are locked until enrolled |
| `/articles` | Article list with topic chips and search (kept in the URL), empty state |
| `/articles/:slug` | Article with reading progress bar, handwritten margin notes, love and copy-link buttons, inline signup, related reads |
| `/about` | About Pip: story, timeline, facts, contact |
| `/newsletter` | Newsletter signup with name, topic picks, validation, success and error states; past issues |
| `/styleguide` | The design system, rendered by the real components |

Anything else shows the 404 page. The style guide is linked from the footer.

## Where things live

- **Copy and seed data**: `src/content.ts` (every string, the curriculum,
  articles, plans, FAQ, newsletter, style guide tokens).
- **Tokens and keyframes**: `src/styles.css` (`@theme static`): colours,
  radii, sticker shadows, easing, durations, and the `logo-type`, `marker` and
  `prose-wild` utilities.
- **Components**: `src/components/` (Button, Badge, Chip, Field, Checkbox,
  Accordion, Modal, EnrolModal, Toast, EmptyState, Skeleton, ProgressBar,
  Card, ArticleCard, LessonRow, NewsletterForm, TornPortrait, Jungle/Wave,
  Annotation, Scribble, NavIcon, Nav, Footer, Marquee).
- **Screens**: `src/pages/`.
- **Images**: every image goes through `IMAGES` in `src/lib/images.ts`. The
  files in `public/images/` are generated placeholders (the portrait is an
  invented, illustrated person); replace them with your own photography or
  illustration (same file names) or point the keys at new URLs. The palms,
  tiger and flamingo are transparent cut-outs.
- **Visitor state**: `src/lib/store.tsx` keeps the enrolment, finished
  lessons, loved articles and newsletter address in `localStorage`
  (`wild-margins:v1`).

## Worker routes

`src/worker/index.ts`, validated with the same rules as the forms
(`src/shared/validation.ts`):

| Route | Body | Returns |
| --- | --- | --- |
| `GET /api/health` | | `{ ok: true }` |
| `POST /api/subscribe` | email, name?, topics? | 201 `{ ok, email }` or 422 field errors |
| `POST /api/enrol` | name, email, plan (`solo` or `studio`) | 201 `{ ok, ref, plan }` or 422 field errors |

Bad JSON returns 400 and unknown `/api/*` a JSON 404. Nothing is stored
server-side: connect `/api/subscribe` to your email provider and `/api/enrol`
to your payment provider or a D1 table. The video player is a demo; swap in
your video host's embed.

## Develop

```sh
bun install
bun run dev        # http://localhost:5360
bun run typecheck
bun run build
```
