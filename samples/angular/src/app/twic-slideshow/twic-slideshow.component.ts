import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-twic-slideshow",
  templateUrl: "./twic-slideshow.component.html",
  styleUrls: ["./twic-slideshow.component.scss"],
})
export class TwicSlideshowComponent implements OnInit {
  images = [
    {
      url: `components/slideshow/space-1.jpg`,
      focus: ``,
    },
    {
      url: `components/slideshow/space-2.jpg`,
      focus: `50px100p`,
    },
    {
      url: `components/slideshow/space-3.jpg`,
      focus: `50px100p`,
    },
    {
      url: `components/slideshow/space-4.jpg`,
      focus: `50px100p`,
    },
    {
      url: `components/slideshow/space-5.jpg`,
      focus: `50px100p`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
