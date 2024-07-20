import { Component, OnInit } from '@angular/core';
import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-synonym',
  templateUrl: './create-synonym.component.html',
  styleUrls: ['./create-synonym.component.css']
})
export class CreateSynonymComponent implements OnInit {

  synonymEnter: Synonym = new Synonym();
  syononyms!: Synonym[];
  message! : any;

  constructor(private synonymService: SynonymService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.synonymService.createEmployee(this.synonymEnter).subscribe( data =>{
      this.message = "Syononym " + this.synonymEnter.synonym1 + " ~ " + this.synonymEnter.synonym2 + " successfully created!";
    }, 
    error => console.log(error));
  }

}
