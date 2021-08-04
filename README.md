## Project name

Motion

## Description

Note app where user could add image, video, note and todo.

<img src="https://github.com/Jongwoop/motion/blob/main/assets/screenshot.gif" alt="screenshot" width="800px" />

## Stack

HTML, CSS, TypeScript

## Main Function

- When user clicks one of the buttons(image, button, note, todo), popup appears to add title and contents, and it's added in the document.
- Enable to change the order by dragging.

## Folder structure

```
Motion
├── index.html
│
├── style/
│   └── style.css
│
└── src/
    ├── Components/
    │     ├── common/
    │     │     └── type.ts
    │     │
    │     ├── dialog/
    │     │     ├── input/
    │     │     │     ├── media-input.ts
    │     │     │     └── text-input.ts
    │     │     └──dialog.ts
    │     │
    │     ├──  page/
    │     │     ├── item/
    │     │     │     ├── image.ts
    │     │     │     ├── note.ts
    │     │     │     ├── todo.ts
    │     │     │     └── video.ts
    │     │     └── page.ts
    │     │
    │     └── component.ts
    │
    ├── Decorators/
    │     ├── draggable.ts
    │     └── log.ts
    │
    └── app.ts
```

## Class structure
