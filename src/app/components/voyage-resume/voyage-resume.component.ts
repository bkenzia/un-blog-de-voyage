import { Component, Input } from '@angular/core';
import { IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-voyage-resume',
  templateUrl: './voyage-resume.component.html',
  styleUrls: ['./voyage-resume.component.css'],
})
export class VoyageResumeComponent {
  @Input() voyage?: string;
  @Input() title?: string;
}
