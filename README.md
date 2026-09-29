# @stackline/angular-multiselect-dropdown Angular 22 Playground

This live playground installs `@stackline/angular-multiselect-dropdown@22.1.2` against Angular `22.1.3`.

The running app is bootstrapped by `src/main.ts` and `src/app/app.module.ts`. All live examples, data and handlers are in `src/app/app.component.ts`, with the shared template and styles in `app.component.html` and `app.component.scss`. The historical `src/app/examples` components are not part of the active app.

Every code panel loads the complete, unmodified source files copied directly by Angular's asset configuration. HTML, TypeScript, package.json, SCSS, the app module and the entry point therefore match the files used for the build. Changing a control changes the live example; it does not fabricate a different source listing.

Features include settings-only skin switching; classic, material, dark, custom and brand skins; keyboard and ARIA controls; custom badge and option templates; headless state helpers; body overlays; search, grouping, selection limits, forms, lazy loading and events.

## Routes

The app uses hash routes so the same URLs work on static hosting and in StackBlitz.

| Example | Route |
| --- | --- |
| Basic usage | `/#/classic` |
| Keyboard and async coverage | `/#/coverage` |
| Skin switcher | `/#/skin-switcher` |
| Dialog overlay | `/#/dialog-overlay` |
| Material skin | `/#/material` |
| Forms, methods, lazy loading and events | `/#/extra` |
| Headless + ARIA | `/#/headless-aria` |

## Run

```bash
npm ci
npm start
```

`npm start` runs the Angular CLI when Node supports Angular 22. Older WebContainer runtimes serve the committed `stackblitz-static` preview. To run the Angular CLI explicitly, use `npm run dev`.

Angular 22 CLI requires Node `22.22.3+`, `24.15.0+`, or `26.0.0+`.

## Build and verify

```bash
npm run test:server
npm run build:preview
npm run test:source
npm run test:source -- stackblitz-static
npm audit --audit-level=low
```

The source check compares all six published source assets byte-for-byte with the checkout and verifies the installed library version. Commit the refreshed `stackblitz-static` files whenever source or dependencies change. `dist/stackline-angular-multiselect-angular-22/browser` is the production output for deployment under `/docs/angular/multiselect/angular-22/live/`.

## StackBlitz

[Open the live app in StackBlitz](https://stackblitz.com/github/alexandroit/stackline-angular-multiselect-angular-22?file=src%2Fapp%2Fapp.component.ts&startScript=start&initialpath=%2F%23%2Fclassic).

The link opens the actual app source and uses the existing `start` script and hash route. For another example, change `initialpath` to one of the URI-encoded routes above. The app's own StackBlitz link follows the current route.

## License

The playground source is available under the [MIT License](LICENSE), including the retained attribution for the original Cuppa Labs project. Dependencies retain their respective licenses.
