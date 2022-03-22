import { Component, OnInit } from "@angular/core";

@Component({
  selector: `app-twic-focus`,
  templateUrl: `./twic-focus.component.html`,
  styleUrls: [`./twic-focus.component.scss`],
})
export class TwicFocusComponent implements OnInit {
  imgUrl = `components/puppy.jpg`;
  focusArray = [``, `1920x1282`, `auto`];
  focusIndex = 0;
  // trick to force reload TwicImg
  show = true;

  constructor() {}

  ngOnInit() {}

  onChangeFocus = () => {
    setTimeout(() => (this.show = false));
    this.focusIndex = (this.focusIndex + 1) % this.focusArray.length;
    setTimeout(() => (this.show = true));
  };
}
