import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-twic-placeholder",
  templateUrl: "./twic-placeholder.component.html",
  styleUrls: ["./twic-placeholder.component.scss"],
})
export class TwicPlaceholderComponent implements OnInit {
  imgUrl = `components/cat.jpg`;
  showPlaceholders = false;
  togglePlaceholderBtnText = `Click to reveal the placeholders`;

  constructor() {}

  ngOnInit(): void {}

  togglePlaceholder() {
    this.showPlaceholders = !this.showPlaceholders;
    if (this.showPlaceholders) {
      this.togglePlaceholderBtnText = `Click to show the images`;
    } else {
      this.togglePlaceholderBtnText = `Click to reveal the placeholders`;
    }
  }
}
