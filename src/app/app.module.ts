import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { appReducer } from './STATE/app.state';
import { authSelector } from './STATE/auth/auth.selectors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(
  private store: Store,
){
this.store.select(authSelector).subscribe((auth)=>{
  console.log(auth);
})
}


 }
