//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxUIModule} from '@swimlane/ngx-ui';
import {single, multi} from './data.ts';

import {TreeComponent, TreeNodeDirective} from './tree/tree.component.ts';

import '@swimlane/ngx-ui/release/index.css!';

@Component({
  selector: 'my-app',
  template: `
  <div style="width: 500px; margin-left: 100px;">
    <ngx-tree
        [node]="treeObject">
        <template let-node="treeObject" *ngx-node>
            <code>{{node.name}}</code>
        </template>
    </ngx-tree>
  </div>
  `,
})
export class App {
  jsonString = `{
    "stringProperty": "This is a string",
    "dateProperty": "2017-01-30T22:18:40.674Z",
    "numberProperty": 10000,
    "booleanProperty": true,
    "numberArray": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "objectArray": [
        {},
        {}
    ],
    "longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy": "got truncated",
    "emptyObject": {},
    "emptyArray": []
    }`;
  jsonObject = JSON.parse(this.jsonString);
  treeObject = jsonToTree('root', this.jsonObject);
  greet: any;
  
  constructor() {

  }
  
  onSelect(event) {
    console.log(event);
  }
}

@NgModule({
  imports: [ BrowserModule, NgxChartsModule, NgxUIModule ],
  declarations: [ App, TreeComponent /*, TreeNodeDirective */ ],
  bootstrap: [ App ]
})
export class AppModule {}

function jsonToTree(name: string, node: any): any {
    const type = typeof node;
    switch (type) {
        case 'object':
            return {
                name: name || type,
                type,
                children: Object.keys(node).map((key) => jsonToTree(key, node[key]))
            }
        default:
            return {
                name: name || type,
                type,
                value: node
            }
    }
}