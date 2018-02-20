export class Todo {
    id: string = '';
    title: string = '';
    priority: number = 0;
    done: boolean = false;
    constructor(fields: Object) {
        Object.assign(this, fields)        
    }
}
