import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';

@Component({
  selector: 'collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss'],
})
export class CollectionItemComponent {
  @Input() collectionItem: {title: string, state: string};
  @Output() removeItem: EventEmitter<void> = new EventEmitter<void>();

  onRemoveClick() {
    this.removeItem.emit();
  }
}
