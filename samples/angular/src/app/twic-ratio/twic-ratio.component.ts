import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-twic-ratio",
  templateUrl: "./twic-ratio.component.html",
  styleUrls: ["./twic-ratio.component.scss"],
})
export class TwicRatioComponent implements OnInit {
  imgUrl = `components/woman-and-winter.jpg`;
  ratioValues = [`2.39`, `16/9`, `4/3`, ``, `0.75`];
  ratioIndex = 0;
  fullWidthAera = true;

  constructor() {}

  ngOnInit(): void {}

  onChangeRatio() {
    this.ratioIndex = (this.ratioIndex + 1) % this.ratioValues.length;
  }

  onChangeAreaWidth() {
    this.fullWidthAera = !this.fullWidthAera;
  }
}
