import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innner-html-binding',
  templateUrl: './innner-html-binding.component.html',
  styleUrls: ['./innner-html-binding.component.css']
})
export class InnnerHtmlBindingComponent implements OnInit {
  htmlsnippet = 'Template: <script>alert("danger")</script> <b>syntax</b>';

  constructor() { }

  ngOnInit(): void {
  }

}
