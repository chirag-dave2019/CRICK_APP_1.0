import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { MatchCardComponent } from './components/match-card/match-card.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveComponent,
    HistoryComponent,
    MatchCardComponent,
    PointTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
