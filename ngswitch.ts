<ul [ngSwitch]="so">
     <li *ngSwitchCase="'Windows'">El que usan todos</li>
     <li *ngSwitchCase="'Mac'">Los que les gusta lo bonito, tienen pasta</li>
     <li *ngSwitchCase="'Linux'">Programador de siempre</li>
     <li *ngSwitchDefault>Indica un S.O.</li>
   </ul>
 
   <input type="text" [(ngModel)]="so"/>
