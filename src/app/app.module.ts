import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { transferenciaComponent } from './components/transferencia/transferencia.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes =  [
  //{ path: '', component: },
  { path: 'transferencia', component: transferenciaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    transferenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
