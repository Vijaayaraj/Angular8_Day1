import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { ModelComponent } from './components/model/model.component';
import { ListviewComponent } from './components/listview/listview.component';

@NgModule({
  declarations: [
    AppComponent,    
    ModelComponent,
    ClassComponent,
    ListviewComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
