import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SynonymListComponent } from './synonym-list/synonym-list.component';
import { CreateSynonymComponent } from './create-synonym/create-synonym.component';
import { FormsModule} from '@angular/forms';
import { SearchSynonymComponent } from './search-synonym/search-synonym.component';
import { SynonymFooterComponent } from './layout/synonym-footer.component';
import { SynonymHeaderComponent } from './layout/synonym-header.component';


@NgModule({
  declarations: [
    AppComponent,
    SynonymListComponent,
    CreateSynonymComponent,
    SearchSynonymComponent,
    SynonymFooterComponent,
    SynonymHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
