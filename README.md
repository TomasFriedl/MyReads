# MyReads Project - a book app

To get started developing:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## structure

├── README.md - This file.
├── package.json
├── node_modules/
├── public/
│   ├── ├─ favicon.ico
│   └── └─ index.html
└── src/
    ├── components/
    │   ├── SearchPage.js
    │   ├── BooksList.js
    │   └── BookItem.js
    ├── icons/
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    ├── App.js
    ├── BooksAPI.js
    ├── App.css
    └── index.js

## Backend Server

The the most important functions:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Usage:

```js
getAll();
```

### `update`

Usage:

```js
update(book, shelf);
```

### `search`

Usage:

```js
search(query);
```