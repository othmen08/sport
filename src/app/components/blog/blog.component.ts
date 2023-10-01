import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTable:any =  [
    {date: "20/05/2023", title: "big match", description: "bjvdbvkjbdbvkbdskksbdv",  img: ""},
    {date: "20/05/2023", title: "big match", description: "bjvdbvkjbdbvkbdskksbdv",  img: ""},
    {date: "20/05/2023", title: "big match", description: "bjvdbvkjbdbvkbdskksbdv",  img: ""},
    {date: "20/05/2023", title: "big match", description: "bjvdbvkjbdbvkbdskksbdv",  img: ""},
    ];

  constructor() { }

  ngOnInit() {
  }

}
