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
  modeIndex = 0;
  // trick to force reload TwicImg
  show = true;

  constructor() {}

  ngOnInit(): void {
  }

  onChangeMode = () => {
    setTimeout(() => (this.show = false));
    this.modeIndex = (this.modeIndex + 1) % this.modeValues.length;
    setTimeout(() => (this.show = true));
  };
}
