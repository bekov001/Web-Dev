import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album = album;
      this.editTitle = album.title;
      this.loading = false;
    });
  }

  onSave(): void {
    if (!this.album) return;
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe((result) => {
      this.album = result;
      this.saved = true;
      setTimeout(() => (this.saved = false), 2000);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
