import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() header: string;
  @Input() body: string;
  @Input() buttons: string;
  @Input() btnBodyLength: string;
  @Input() btnBodyClass: string;

  constructor() {}

  ngOnInit() {}
}
