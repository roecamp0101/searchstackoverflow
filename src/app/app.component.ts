import { Component, OnInit } from '@angular/core';
import { GetinfoService } from './getinfo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

infos: any[];
datas: any[];


constructor(private getInfos: GetinfoService){}



getInfo() {
  this.getInfos.getInfoFromServer().subscribe(
               (datas: any) => {

                 const myArray = [];
                 for (let key in datas) {
                   myArray.push(datas[key]);
                 }
                console.log(this.infos = myArray[0]);
        });

    }

ngOnInit(){
/*
  this.getInfos.getInfoFromServer().subscribe(
               (datas: any) => {

                 const myArray = [];
                 for (let key in datas) {
                   myArray.push(datas[key]);
                 }
                 console.log(this.infos = myArray[0]);
        });

  */

}
  title = 'stackoverflow';
}
