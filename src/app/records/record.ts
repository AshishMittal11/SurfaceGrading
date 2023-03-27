export class Record {
    id: number;
    surfaceTypeId: number;
    gradeId: number;

    constructor(id: number, surfaceTypeId: number, gradeId: number){
        this.id = id;
        this.surfaceTypeId = surfaceTypeId;
        this.gradeId = gradeId;
    }
}