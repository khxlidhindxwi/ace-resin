# Ace Resin — Asset slots

This folder is where real photography and video go. The site is fully usable
with the bundled placeholders, but the brand will look its best once you swap
these in.

## What to drop in

| File                                  | Used by                                 | Notes                                            |
|---------------------------------------|------------------------------------------|--------------------------------------------------|
| `hero-pour.svg` (already here)        | OG/share image, video poster             | High-fidelity SVG. Replace with a 1600×900 JPG.  |
| `ace-resin-reel.mp4`                  | "The Pour" film section                  | **Drop in Higgsfield render here** (16:9, MP4).  |

Once `ace-resin-reel.mp4` is dropped in, the inline `<video>` tag will pick it up
automatically — no code changes needed.

## Higgsfield workflow

1. In Higgsfield, render a 1080p or 4K MP4 of an epoxy ocean-pour at 16:9.
2. Export with H.264 / AAC and a target bitrate of 8–12 Mbps.
3. Rename to `ace-resin-reel.mp4` and place in this folder.
4. (Optional) Export the same clip's first frame as `hero-pour.jpg` for the poster.

## Image replacements (later, optional)

If you want photo-real imagery for the gallery and cards, replace the CSS
gradients in `../styles.css` (the `.img-ocean`, `.img-marble`, `.img-galaxy`,
`.art-floor`, `.art-counter`, `.art-art`, `.art-comm`, and `.gx-N .gx-art`
blocks) with `background-image: url('./your-photo.jpg')` declarations.
