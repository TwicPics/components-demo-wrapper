import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "TwicWrapper",
  templateUrl: "./twic-wrapper.component.html",
  styleUrls: ["./twic-wrapper.component.css"],
})
export class TwicWrapperComponent implements OnInit {
  @Input() tags = [`@twicpics-components`];
  @Input()
  redirect = `https://github.com/TwicPics/components/tree/main/documentation#twicpics-components`;

  constructor() {}

  ngOnInit(): void {}
}
