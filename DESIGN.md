---
name: Stride
description: A compact, energetic training companion for the road to 10K.
colors:
  blue: "#183be9"
  blue-hover: "#1230c8"
  paper: "#f6f6f1"
  ink: "#101810"
  muted: "#535d51"
  line: "#d3d8ce"
  soft-blue: "#e7ecff"
  lime: "#efff91"
  white: "#fff"
  skipped-bg: "#f4ead8"
  skipped-text: "#78501b"
typography:
  display:
    fontFamily: "Programme, Arial, sans-serif"
    fontSize: "58px"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Programme, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Programme, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 650
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Programme, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Programme, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
rounded:
  compact: "3px"
  control: "4px"
  default: "5px"
  dialog: "8px"
spacing:
  small: "8px"
  control-gap: "10px"
  medium: "12px"
  section: "24px"
  desktop-gutter: "32px"
  mobile-gutter: "22px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.default}"
    padding: "12px 17px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-log:
    backgroundColor: "{colors.lime}"
    textColor: "#17230d"
    rounded: "{rounded.control}"
    padding: "14px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.default}"
    padding: "11px 14px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 12px"
  day:
    backgroundColor: "transparent"
    textColor: "#3e4938"
    rounded: "{rounded.control}"
    padding: "10px 4px"
  status:
    backgroundColor: "#e9ede3"
    textColor: "#525d4b"
    rounded: "{rounded.compact}"
    padding: "5px 8px"
---

# Design System: Stride

## Overview

**Creative North Star: "Race programme"**

A compact, energetic training companion. Strong cobalt fields, warm paper, confident Albert Sans and a pale lime action give the interface the directness of a race programme. Information stays compact and readable; crisp rules separate supporting records.

**Key Characteristics:**
- Cobalt fields with a lime logging action.
- Compact typography with large, tightly spaced workout titles.
- Flat surfaces, small corners and clear state changes.

## Colors

The palette balances saturated cobalt with warm, slightly green neutrals.

### Primary
- **Cobalt** (`blue`): header, workout field, primary buttons, selected navigation and next-session state. `blue-hover` deepens primary buttons on hover.
- **Pale Lime** (`lime`): logging action and focus outlines against cobalt.

### Neutral
- **Warm Paper** (`paper`): page, navigation and dialog surface.
- **Near-black** (`ink`): primary text; **Muted Olive** (`muted`): supporting copy.
- **Pale Rule** (`line`): dividers and session outlines; **White** (`white`): fields and text against cobalt.
- **Soft Cobalt** (`soft-blue`): completed-session fill.
- **Warm Sand** (`skipped-bg`, `skipped-text`): skipped-session state.

**The State Has Words Rule.** Pair status color with a visible status label or an accessible session description.

## Typography

**Display Font:** Albert Sans, embedded under the local CSS alias `Programme`, with Arial and sans-serif fallbacks.
**Body Font:** the same family. No separate mono face is used.

The variable family supplies both emphatic workout titles and compact supporting text. The Stride wordmark uses an italic treatment of the same face.

### Hierarchy
- **Display:** the frontmatter display role sets desktop workout titles; it becomes (53px) at the mobile breakpoint and (46px) on narrow phones.
- **Headline:** page titles use the headline role, becoming (30px) on mobile. Section titles use (24px), then (23px).
- **Title:** session headings use the title role, becoming (20px) on mobile.
- **Body:** descriptive copy uses the body role and a maximum line length of (65ch); workout instructions use (16px), then (15px), with the same line height.
- **Label:** compact controls use the label role. Navigation and status labels use (11px). Numeric summaries and recorded metrics use tabular numerals.

## Layout

A centered shell caps header and workout content at (1000px), including desktop gutters; supporting content caps at (936px). Below (1000px), supporting content receives desktop gutters. At (600px), gutters switch to the mobile token and the two-column workout layout stacks. Below (350px), gutters tighten to (18px).

Progress remains three columns and the week preview remains five columns on phones. Programme week tabs scroll horizontally. Session rows switch from a content/actions grid to a vertical stack at the mobile breakpoint. The three-item navigation stays fixed at the bottom, includes safe-area padding, and is balanced by bottom content clearance. Dialogs cap at (480px) wide and (90dvh) high with internal scrolling.

**The Compact Week Rule.** Keep the five-session preview on one row, using concise labels and authored SVG marks.

## Elevation & Depth

The page uses flat color fields, thin dividers and state fills. A day tile adds only an inset outline on hover. Shadows are reserved for the modal dialog and temporary toast; exact values live in the sidecar. The modal uses a translucent blue scrim.

## Shapes

Small corners distinguish status labels, controls and containers; the dialog receives the largest radius. Session records are divided rows rather than raised cards. Authored outline SVGs use rounded stroke caps and joins, normally at (20px) with a stroke width of (1.8).

## Components

### Buttons

Primary actions use cobalt and white. The prominent logging action uses lime, a wide layout and a trailing arrow; hover brightens it to yellow-green. Secondary actions retain a thin outline and gain a soft neutral hover fill. All buttons have a minimum target height of (44px); the logging action has (54px). Focus uses a (3px) outline with a (4px) offset, cobalt on paper and lime on cobalt.

### Cards / Containers

The compact day tile uses a thin border, the control radius and centered icon/text. Completed days use soft cobalt, the next day uses solid cobalt, and skipped days use sand. Session records use horizontal dividers and place status beside their actions on desktop.

### Inputs / Fields

White fields use an olive-gray stroke, control corners, (16px) input text and a minimum height of (46px). Notes resize vertically. Labels sit above fields. Inputs share the visible focus outline; native validity supports date and numeric constraints.

### Navigation

Bottom navigation places an authored SVG above each label. The current destination uses cobalt and a short underline. Programme tabs show both the week and its completion count; selected tabs use solid cobalt and light text.

### Status and Workout Guides

Small status labels name planned, completed or skipped states. Guides use a segmented duration bar and time-stamped rows; run, walk and easy phases have distinct colors and words. Inside the cobalt workout field, guide text becomes light and run emphasis becomes lime.

### Dialog and Feedback

The paper dialog sits over a blue scrim. Opening it focuses the first field, traps keyboard focus and makes the app inert; Escape closes it and restores focus. Toasts appear above navigation and transition opacity and vertical position over (0.18s), using ease. Reduced-motion preference removes transitions.

## Do's and Don'ts

### Do:
- **Do** use the embedded Albert Sans family through its Programme alias.
- **Do** keep supporting surfaces flat and separate records with crisp rules.
- **Do** retain visible keyboard focus and textual status information.
- **Do** preserve mobile target sizes and clearance above bottom navigation.

### Don't:
- **Don't** treat a completed fill as the only indication of session status.
- **Don't** add raised card shadows to ordinary session records.
