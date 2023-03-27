import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Grade } from "../data/grade";
import { SurfaceType } from "../data/surface-type";
import { CommonService } from "../Services/common.service";
import { Record } from "./record";

@Component({
    selector: "app-create-record",
    templateUrl: "./create-record.component.html"
})
export class CreateRecordComponent {
    nextId = 3;
    isAdding = false;
    newRecord: Record;
    surfaceTypes: Array<SurfaceType>;
    grades: Array<Grade>;
    @Input() existingContact:Array<Record>;
   // @Input() existingontact:Record = {} as MyContact;
    //@Output() contactChange:EventEmitter<Array<Record>> =new EventEmitter<Array<Record>>();
    //@Output() addcontact:EventEmitter<Array<Record>> =new EventEmitter<Array<Record>>();
    @Output() addcontact:EventEmitter<Record> =new EventEmitter<Record>();

    constructor(private readonly http: HttpClient, private commonService: CommonService) {
    }

    ngOnInit(): void {    
        this.commonService.GetSurfaceTypes().subscribe(response => {
          if (response) {
            this.surfaceTypes = response;
          }
        }, err => console.log(err), () => console.log('SurfaceType  fetching completed.'));
  
        this.commonService.GetGradeTypes().subscribe(response => {
          if (response) {
            this.grades = response;        
            
          }
        }, err => console.log(err), () => console.log('GradeType fetching completed.'));
  
     
      }
  
    showAddForm(): void {
        this.isAdding = true;
        this.newRecord = new Record(this.nextId, 0, 0);

        // this.http.get<Array<SurfaceType>>("assets/surfacetypes.json").subscribe((surfaceTypes: Array<SurfaceType>) => {
        //     this.surfaceTypes = surfaceTypes;
        // });
        
        // this.http.get<Array<Grade>>("assets/grades.json").subscribe((grades: Array<Grade>) => {
        //     this.grades = grades;
        // });
    }

    getMaxId():number
    {

        const ids = this.existingContact.map(object => {
            return object.id;
          });

          return Math.max(...ids);
    }
    submit(): void {            
       
        this.nextId++;
        this.newRecord.surfaceTypeId=this.newRecord.surfaceTypeId;
        this.newRecord.gradeId=this.newRecord.gradeId;
        this.newRecord.id=this.getMaxId()+1;

        this.addcontact.emit(this.newRecord);

        // TODO: Submit new record to the list
    }

    canSubmit(): boolean {
        if (this.newRecord.surfaceTypeId === 0) {
            return false;
        }

        return true;
    }
}