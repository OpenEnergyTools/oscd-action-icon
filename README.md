# \<oscd-action-icon>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @openscd/oscd-action-icon
```

## Usage

```html
<script type="module">
  import '@openscd/oscd-action-icon';
</script>

<oscd-action-icon></oscd-action-icon>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

### Icon font

Material Icons are being used for the icons. This font needs to be added in the html first.
You can add it like so:

```html
<link
  href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
  rel="stylesheet"
/>
```

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`




&copy; 2023 Alliander N.V.
