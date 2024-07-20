import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SynonymService } from '../synonym.service';

@Component({
  selector: 'app-search-synonym',
  templateUrl: './search-synonym.component.html',
  styleUrls: ['./search-synonym.component.css']
})
export class SearchSynonymComponent implements OnInit {

  syononyms!: string[];
  word!: string;
  visible: boolean = false;

  constructor(private synonymService: SynonymService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.word) this.visible = true;
    else this.visible = false;
    
    this.synonymService.getSynonym(this.word).subscribe( data =>{
      this.syononyms = data;
    }, 
    error => console.log(error));
  }

}
