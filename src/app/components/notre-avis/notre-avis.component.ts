import { Component, Input } from '@angular/core';
import { IDonnesArticle } from 'src/app/mocks/donneesArticle.mock';

@Component({
  selector: 'app-notre-avis',
  templateUrl: './notre-avis.component.html',
  styleUrls: ['./notre-avis.component.css'],
})
export class NotreAvisComponent {
  @Input() avis?: IDonnesArticle;
}
