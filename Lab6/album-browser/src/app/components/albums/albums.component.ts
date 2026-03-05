import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  albums = signal<Album[]>([]);
  loading = signal(true);

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums.set(data);
      this.loading.set(false);
    });
  }

  onDelete(album: Album, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(album.id).subscribe(() => {
      this.albums.update((list) => list.filter((a) => a.id !== album.id));
    });
  }
}
