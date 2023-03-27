import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Grade } from "../data/grade";
import { SurfaceType } from "../data/surface-type";
import { Record } from "../records/record";
import { CommonService } from "../Services/common.service";

@Component({
    selector: "app-root",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
  })
export class HomeComponent implements OnInit {
    records: Array<Record>;
    surfaceTypes: Array<SurfaceType>;
    grades: Array<Grade>;

    constructor(private readonly http: HttpClient, private commonService: CommonService) {
     
    }
    
    ngOnChanges(): void
    {

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
          this.records = new Array<Record>(new Record(1,4532,1), new Record(2,4536,3));          
        }
      }, err => console.log(err), () => console.log('GradeType fetching completed.'));

    //   this.http.get<Array<SurfaceType>>("assets/surfacetypes.json").subscribe((surfaceTypes: Array<SurfaceType>) => {
    //     this.surfaceTypes = surfaceTypes;
    // });
    
    // this.http.get<Array<Grade>>("assets/grades.json").subscribe((grades: Array<Grade>) => {
    //     this.grades = grades;
    //     this.records = new Array<Record>(new Record(1,4532,1), new Record(2,4536,3));
    // });

    //this.records = new Array<Record>(new Record(1,4532,1), new Record(2,4536,3));
    }

    emptyList(): void {
      if(confirm("Are you sure to empty the list")) {
        this.records = new Array<Record>();
      }
    }

    add(newrecord:Record):void
    { 
      this.records.push(newrecord);

    }
    getSurfaceTypeName(surfaceTypeId: any): string {
       
      return this.surfaceTypes.find(x=>x.id == surfaceTypeId).name;
     // return "TODO: Show SurfaceType name";
    }

    getGradeNameAndDescription(gradeId: any): string {
      return this.grades.find(x=>x.id == gradeId).name;
      //return "TODO: Show Grade name and description";
    }

    deleteRecord(id: number): void{
      this.records.forEach((value,index)=>{
        if(value.id==id) 
        {
          if(confirm("Are you sure to delete this record "+id)) {
            this.records.splice(index,1);
          }
          
        }
    });
      //this.grades.splice(this.grades.indexOf(id),1);

    }
}