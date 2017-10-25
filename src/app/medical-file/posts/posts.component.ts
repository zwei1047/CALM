import { Component, OnInit } from '@angular/core';
import {MedicalFileService} from "../../shared/services/medical-file.service";
import {Post} from "../../shared/models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private medicalService : MedicalFileService) { }
  ngOnInit() {
  }
}
