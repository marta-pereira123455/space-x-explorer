# SpaceX Explorer

An Angular application for exploring SpaceX past launches.

This project was developed as part of an Angular & NgRx technical assessment.

## Features

* Browse SpaceX past launches
* Search launches by mission name
* View launch details
* Add and remove launches from favorites
* Persist favorite state while navigating between the list and details views
* Loading and error state handling

## Technologies

* Angular 21
* TypeScript
* NgRx
* RxJS
* Angular Material
* SCSS

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/marta-pereira123455/space-x-explorer.git
cd space-x-explorer
npm install
```

## Development server

Run the application locally with:

```bash
ng serve
```

Then open `http://localhost:4200/`.

## Production build

To create a production build:

```bash
ng build
```

The generated files will be available in the `dist/` directory.

## Data source

The SpaceX public API is temporarily unavailable, so the application uses the provided `launches.json` local mock data instead.