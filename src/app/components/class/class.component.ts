import { Component } from '@angular/core';

export class TvChannel {  
    id: number;
    name: string;
}

@Component({
    selector: 'app-class',
    styles: [`aside {border: 1px solid darkred; width: 20em;}`],
    template: `<h3>{{title}}</h3> <h4>{{chan.name }}</h4><br>
             See on ch.: {{chan.id}}. <br>
             Breaking news... now
             <br />  <br />

             <aside> {{chan | json | uppercase }} </aside>    
             <app-listview>  </app-listview>                 
              `


})

export class ClassComponent {
    public title = 'Popular TV Channel';

    public chan: TvChannel = {
        id: 507,
        name: 'Times NOW'
    };
}
