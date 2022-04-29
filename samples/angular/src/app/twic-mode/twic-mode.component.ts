import { Component, OnInit } from "@angular/core";

type Mode = `contain` | `cover`;

@Component({
  selector: "app-twic-mode",
  templateUrl: "./twic-mode.component.html",
  styleUrls: ["./twic-mode.component.scss"],
})
export class TwicModeComponent implements OnInit {
  imgUrl = `components/fox.jpg`;
  modeValues:Array< Mode > = [`cover`, `contain`];
  urlValues:Array< string > = [`components/fox.jpg?0`, `components/fox.jpg?1`];
  modeIndex = 0;
  constructor() {}

  ngOnInit(): void {
  }


  onChangeMode = () => {
    this.modeIndex = (this.modeIndex + 1) % this.modeValues.length;
  };
}
