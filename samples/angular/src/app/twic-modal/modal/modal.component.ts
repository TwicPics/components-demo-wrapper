import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() image!: {url: string, caption: string};
  @Input() show!: boolean;
  @Input() onClose!: () => void;

  constructor() { }

  ngOnInit(): void {}
}
