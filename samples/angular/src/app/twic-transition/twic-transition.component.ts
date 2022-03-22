import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-twic-transition",
  templateUrl: "./twic-transition.component.html",
  styleUrls: ["./twic-transition.component.scss"],
})
export class TwicTransitionComponent implements OnInit {
  imgUrl = `components/peacock.jpg`;
  showPlaceholder = false;
  togglePlaceholderBtnText = `Click to reveal the transitions`;

  constructor() {}

  ngOnInit(): void {}

  togglePlaceholder() {
    this.showPlaceholder = !this.showPlaceholder;
    if (this.showPlaceholder) {
      this.togglePlaceholderBtnText = `Click to show the images`;
    } else {
      this.togglePlaceholderBtnText = `Click to reveal the transitions`;
    }
  }
}
