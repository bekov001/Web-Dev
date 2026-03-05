import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album = signal<Album | null>(null);
  editTitle = signal('');
  loading = signal(true);
  saved = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album.set(album);
      this.editTitle.set(album.title);
      this.loading.set(false);
    });
  }

  onTitleChange(event: Event): void {
    this.editTitle.set((event.target as HTMLInputElement).value);
  }

  onSave(): void {
    const current = this.album();
    if (!current) return;
    const updated: Album = { ...current, title: this.editTitle() };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album.set(updated);
      this.saved.set(true);
      setTimeout(() => this.saved.set(false), 2000);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
