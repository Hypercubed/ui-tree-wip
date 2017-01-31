import { Component, Input, ContentChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-tree',
  template: `
    <span [ngSwitch]="nodeType">
        <ngx-section *ngSwitchCase="'object'"
            class="object shadow"
            [sectionTitle]="nodeName">
            <div *ngFor="let key of nodeKeys">
                <ngx-tree
                    [node]="node[key]"
                    [name]="key">
                </ngx-tree>
            </div>
        </ngx-section>
        <code *ngSwitchDefault>{{nodeName}}: {{node}}</code>
    </span>
  `,
  host: {
    class: 'ngx-tree'
  },
  encapsulation: ViewEncapsulation.None,
  // styleUrls: ['./section.component.scss'],
})
export class TreeComponent {

  @Input() node: any;
  @Input() name: string;

  get nodeType(): string {
    return typeof this.node;
  }

  get nodeName(): string {
    return this.name || typeof this.node;
  }

  get nodeKeys(): string[] {
    return Object.keys(this.node);
  }

  onSectionClicked(): void {

  }

}
