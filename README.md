📌 Rick and Morty Character List
📝 Descripción
Esta es una aplicación en Angular que muestra una lista de personajes de Rick and Morty consumiendo una API pública. Permite buscar personajes por nombre o ID, ver detalles de cada personaje y exportar la información en PDF.

🚀 Características
✔️ Listado de personajes con imágenes y detalles básicos.
✔️ Búsqueda en tiempo real por nombre o ID.
✔️ Exportación de datos en PDF para cada personaje.
✔️ Diseño responsivo y dinámico con efectos al pasar el mouse.

📂 Estructura del Proyecto
rick-morty-app/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── character-list/
│   │   │   │   ├── character-list.component.ts
│   │   │   │   ├── character-list.component.html
│   │   │   │   ├── character-list.component.css
│   │   │   ├── character-detail/
│   │   │   │   ├── character-detail.component.ts
│   │   │   │   ├── character-detail.component.html
│   │   │   │   ├── character-detail.component.css
│   │   ├── services/
│   │   │   ├── character.service.ts
│   │   ├── app.config.ts
│   ├── assets/
│   ├── main.ts
│── README.md
│── package.json
│── angular.json

# RickMortyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



