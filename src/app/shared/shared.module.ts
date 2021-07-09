import { NgModule } from '@angular/core';

import {ArraySortPipe} from './sortBy.pipe';
import {SearchPipe} from './filterBy.pipe';

@NgModule({
    declarations: [ ArraySortPipe, SearchPipe ],
    exports: [ ArraySortPipe, SearchPipe ]
})
export class SharedModule { }
