# Lab 6 — Album Browser (Routing & HTTP)

Angular SPA that fetches albums and photos from JSONPlaceholder API. Features routing, HttpClient, services, and CRUD operations.

## How to run

```bash
cd Lab6/album-browser
npm install
ng serve
```

Open http://localhost:4200 in your browser.

## Routes

- `/home` — welcome page
- `/about` — about the app
- `/albums` — list of all albums (with delete)
- `/albums/:id` — album detail (with edit title)
- `/albums/:id/photos` — photo grid for album

## Components

- **HomeComponent** — static welcome page with link to albums
- **AboutComponent** — info about the app and student
- **AlbumsComponent** — fetches and displays album list, supports delete
- **AlbumDetailComponent** — album detail with editable title and save
- **AlbumPhotosComponent** — photo grid with thumbnails

## Service

**AlbumService** centralizes all API calls (getAlbums, getAlbum, getAlbumPhotos, updateAlbum, deleteAlbum).
