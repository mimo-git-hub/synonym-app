import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-synonym-footer',
  templateUrl: './synonym-footer.component.html'
})
export class SynonymFooterComponent {
  today: number = Date.now();
}
