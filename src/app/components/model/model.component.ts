import { Component, OnInit } from '@angular/core';

class TvChannel {
  id: number;
  name: string;
  programName: string;
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {

  title = 'Popular TV Channel';

  chan: TvChannel = {
    id: 507,
    name: 'Times NOW is super' ,
    programName: 'News Hour'
  };

}
