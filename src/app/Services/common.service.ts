import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Grade } from '../data/grade';
import { SurfaceType } from '../data/surface-type';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public GetSurfaceTypes(): Observable<SurfaceType[]> {
    //let payload = JSON.stringify(student);
   // let url = environment.schoolPath.student + '/api/student/register';
    return this.httpClient.get<SurfaceType[]>("assets/surfacetypes.json");

    //this.http.get<Array<SurfaceType>>("assets/surfacetypes.json").subscribe((surfaceTypes: Array<SurfaceType>) => {
      //this.surfaceTypes = surfaceTypes;

  }

  public GetGradeTypes(): Observable<Grade[]> {    
    return this.httpClient.get<Grade[]>("assets/grades.json");
  }


}
