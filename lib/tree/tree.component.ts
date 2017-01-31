import {
    Component,
    Input,
    ContentChild,
    Output,
    EventEmitter,
    ViewEncapsulation,
    TemplateRef,
    Directive,
    ViewChild,
    OnInit,
    ViewContainerRef
} from '@angular/core';

@Directive({ selector: '[ngx-node]' })
export class TreeNodeDirective {
    constructor(private templateRef: TemplateRef) { // throws an error
        console.log(this);
    }
}

/* @Directive({ selector: '[ngx-node-template]' })
export class TreeNodeTemplateComponent {
    constructor(public template: TemplateRef) {
        console.log(this);
    }
} */

@Component({
  selector: 'ngx-tree',
  /* using ngx-section for now, will replace */
  template: `
    <div>
        <ngx-section *ngIf="node.children"
            class="object">
            <ngx-section-header
                [tooltipPlacement]="'left'"
                [tooltipType]="'tooltip'"
                ngx-tooltip
                [tooltipTitle]="node.type">
                    <h1>{{node.name}}</h1>
            </ngx-section-header>
            <div *ngFor="let child of node.children">
                <ngx-tree
                    [node]="child">
                </ngx-tree>
            </div>
        </ngx-section>
        <span
            *ngIf="!node.children"
            [tooltipPlacement]="'left'"
            [tooltipType]="'tooltip'"
            ngx-tooltip
            [tooltipTitle]="node.type">
            <ng-container *ngTemplateOutlet="greet"></ng-container>
            <code [class]="node.type">{{node.name}}: {{node.value | json}}</code>
        </span>
    </div>
  `,
  host: {
    class: 'ngx-tree'
  },
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./lib/tree/tree.component.scss'],
  directives: [TreeNodeDirective]
})
export class TreeComponent implements OnInit {

  @Input() node: any;

  @ViewChild('nodeTemplate')       /* was trying many thins here */
  cellTemplate: TemplateRef<any>;

  constructor() {
      // console.log(this);
  }

  ngOnInit() {
    // console.log(this);
  }

  onSectionClicked(): void {

  }

}



