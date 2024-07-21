import { Component, Input, OnInit } from '@angular/core';
import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';

@Component({
  selector: 'app-synonym-list',
  templateUrl: './synonym-list.component.html'
})
export class SynonymListComponent implements OnInit {

   @Input() syononyms!: Synonym[];

  constructor(private synonymService: SynonymService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.synonymService.getsynonymsList().subscribe(data => {
      this.syononyms = data;
    });
  }

}
