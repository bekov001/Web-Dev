import { Component, OnInit } from '@angular/core';
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
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.loading = false;
    });
  }

  onDelete(album: Album, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(album.id).subscribe(() => {
      this.albums = this.albums.filter((a) => a.id !== album.id);
    });
  }
}
