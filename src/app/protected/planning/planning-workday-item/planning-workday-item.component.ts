import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'al-planning-workday-item',
  templateUrl: './planning-workday-item.component.html',
  styles: []
})
export class PlanningWorkdayItemComponent implements OnChanges {
  @Input() workday;
  @Input() dueDate;
  @Input() doneTasks;
  @Input() remainingTasks;
  @Output() removeWorkDay = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for(const prop in changes) {
      this.update(prop, changes[prop].currentValue)
    }
  }

  ngOnInit() {
  }

  remove(dueDate) {
    this.removeWorkDay.emit(dueDate);
  }

  update(propName, propValue) {
    switch (propName) {
      case 'dueDate': {
       if ('Lundi' === propValue) { this.dueDate += ' (Aujourd\'hui)'; }
       break;
      }
      case 'doneTasks': {
       if (0 === propValue) { this.doneTasks = 'Aucune tâche terminé.'; }
       break;
      }
      case 'remainingTasks': {
       if (0 === propValue) { 
        this.remainingTasks = 'Journée de travail terminée !';
       } 
       break;
      }
      default: {
       break;
      }
     }
  }

}
