import {NgModule} from '@angular/core';
import {MianLibService} from './services/lib.service';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [MianLibService]
})
export class MianLibModule {}
