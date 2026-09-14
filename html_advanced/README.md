# SmileSchool - Master the Art of Smiling

<div align="center">
  <img src="./hero.png" alt="SmileSchool Hero" width="100%" style="border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.15);" />
</div>

> "Life is short. Smile while you still have teeth." Some wise person, probably

Welcome to **SmileSchool**, the most ridiculously over-engineered smile tutorial website this side of the internet. Why pay $10k for dental school when you can learn perfect smiles from the comfort of your own browser? We've got the vibe, the purple accents, and definitely the Source Sans Pro font to make your smiling dreams come true.

---

## Design Specs (Figma Approved)

This project is based on a pixel-perfect Figma design that we're going to recreate in pure HTML/CSS (no JS frameworks here, we keepin' it old school like your grandma's recipe book).

**Figma File:** [Homepage](https://www.figma.com/design/VKdgzh9dcRUNN9htYUMTGn/Homepage--Copy-?node-id=0-1&t=0WAYEVjXz6vuALqT-1)

### The Vibe Board

| Color           | Hex Code               | Purpose                                 |
| --------------- | ---------------------- | --------------------------------------- |
| Royal Purple    | `#C271FF`              | Buttons, highlights, "look at me" stuff |
| Deep Night      | `#071629`              | Backgrounds, dark mode vibes, mystery   |
| Ghost White     | `#FFFFFF`              | Text, backgrounds, the usual            |
| Mysterious Gray | `rgba(7, 22, 41, 0.5)` | When you need gray but can't commit     |

### Fonts We're Obsessed With

- **Source Sans Pro** - Our main character. Does all the heavy lifting. Comes in Light (300), Regular (400), Semibold (600), Bold (700), and Black (900) basically the whole family.
- **Coiny** - The cool cousin who only shows up for the logo and dips. Icon behavior.

### Canvas Size

- **1440px wide** - We're not messing around with 1280px peasants
- **3718px tall** - Your scroll wheel is gonna get a workout. You're welcome.

## Page Structure (From Top to Bottom, Like a Stack of Pancakes)

### 1. Hero Section (The First Impression)

The big sexy opener that makes visitors go "WHOA, a smile school? I need this in my life." Features the signature SmileSchool aesthetic with that juicy purple accent we all know and love.

### 2. Part 2 - Most Popular Tutorials

Four perfectly-crafted tutorial cards, each with:

- A sick preview image with a play button overlay (we get it, you love YouTube)
- A snappy title like "Diagonal Smile" or "Sad Smile" (for when life hits different)
- A creator avatar (shoutout to Phillip Massey, our GOAT instructor)
- Star ratings (because validation is everything)
- Duration (8 min? I can binge that while waiting for my coffee)

Each card comes with a subtle `box-shadow: 0px 2px 4px 0px rgba(7, 22, 41, 0.18)` so they float like butterflies, sting like bees.

### 3. Part 3 - Free Membership

IT'S FREE! REAL ESTATE! Okay, it's free membership, but same energy. This section is on the dark navy background (`#071629`) for maximum contrast, and features:

- The headline "Free membership" (with "Free" in purple, obviously)
- Four glorious feature points, each topped with a smiley icon (because we're on-brand)
- A big fat purple button: **REGISTER FOR FREE**
  - Border radius: 22px (we don't do sharp corners here, we're not monsters)
  - Drop shadow: `0px 2px 20px 0px rgba(0, 0, 0, 0.5)` this button casts a longer shadow than your ex's apology

### 4. Part 4 - F.A.Q. (For When You Start Overthinking)

Four FAQ boxes arranged in a 2x2 grid, each answering the burning questions like:

- "How does this work?" (tl;dr: you practice smiling. Duh.)
- Lorem ipsum dolor sit amet... (we'll fill this in with real jokes later, don't @ me)

### 5. Part 5 - Footer (The Bottom of the Barrel... in a Good Way)

The classic dark navy footer featuring:

- SmileSchool logo (Coiny font + a little smiley SVG we eat branding for breakfast)
- Social icons (Follow us! Please! We need the clout!)
- The timeless classic: `©smileschool 2020` faded out 35% so it's there, but not _too_ there. We respect privacy.

## How to Build This Bad Boy

### Tech Stack

- **HTML5** - The backbone. Semantic tags? We barely know her (but we'll use them anyway).
- **CSS3** - The outfit. Flexbox? Grid? We use whatever gets the pixel-perfect Figma match.
- **No JavaScript** - That's right, ZERO JS. We're doing this like it's 2005, but make it fashion.

### Goals for Implementation

1. **Pixel Perfect or GTFO** - Every padding, margin, and border radius must match the Figma exactly. We measure twice, cut once, then measure again because we definitely messed up.
2. **Reusable Everything** - Classes, variables, your mom make it reusable. (Okay not your mom, but you get the idea.)
3. **No Ugly Code** - Self-explanatory. If your CSS looks like spaghetti, go to therapy.

### Project Checklist

- [ ] Hero section with hero vibes
- [ ] Tutorial cards ×4 (with play button overlays)
- [ ] Membership section with purple CTA button
- [ ] FAQ grid (2 columns, 2 rows)
- [ ] Footer with logo, socials, copyright
- [ ] All colors match the hex codes above (NO "close enough")
- [ ] Font weights match Figma (300, 400, 600, 700, 900 we see every pixel)
- [ ] Border radii are correct (buttons = 22px, cards = 5px don't mix them up)
- [ ] Shadows are on point (both the tutorial card shadow and the button shadow)

## Why a Smile School?

Why NOT a smile school? Have you SEEN the average person's resting face? We're here to fix that. From "I just stubbed my toe" to "I just won the lottery" we've got a smile for every occasion.

Plus, purple is a very sophisticated color. You know who wore purple? Royalty. That's right. We're basically training you to be the king/queen of smiling.

## Contributing

If you want to add more smiles, fix a typo, or just tell us we're pretty open a PR. We accept all smile-related contributions. Just no sad faces in the commit messages, thanks.

## License

SmileSchool is © 2020 (yes, we're time travelers, deal with it). Made with 🍟 and way too much attention to 2px border radius differences.
