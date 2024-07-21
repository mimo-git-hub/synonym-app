import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synonym-footer',
  templateUrl: './synonym-footer.component.html'
})
export class SynonymFooterComponent {
  today: number = Date.now();
}
