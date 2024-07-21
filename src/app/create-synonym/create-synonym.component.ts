import { Component, OnInit } from '@angular/core';
import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-synonym',
  templateUrl: './create-synonym.component.html'
})
export class CreateSynonymComponent implements OnInit {

  synonymEnter: Synonym = new Synonym();
  syononyms!: Synonym[];
  message! : any;

  constructor(private synonymService: SynonymService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.synonymEnter.synonym1 == this.synonymEnter.synonym2){
      this.message = " There are same words!"
    } else {
      this.synonymService.createEmployee(this.synonymEnter).subscribe( data =>{
        if(data){
          this.message = "Syononym " + this.synonymEnter.synonym1 + " ~ " + this.synonymEnter.synonym2 + " successfully created!";
        } else {
          this.message = "This synonym combination already exists!"
        }
      }, 
      error => console.log(error));
    }
    
  }

}
