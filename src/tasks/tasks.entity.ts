export enum TaskStatus{
    PENDING = 'PENDING',
    PROGRESS = 'PROGRESS',
    DONE = 'DONE',
}

export class task{
    id: string
    title: string
    description: string
    status: TaskStatus
}
