import { Component, OnInit, NgModule } from "@angular/core";
import { PeopleService } from "./shared/people.service";
import { People } from "./shared/people.model";
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.scss"],
  providers: [PeopleService, NgbPaginationConfig]
})
export class PeopleListComponent implements OnInit {
  protected peoples: People[];
  protected page: number = 1;

  constructor(
    private peopleService: PeopleService,
    config: NgbPaginationConfig
  ) {
    config.size = "sm";
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.getAllPeoples();
  }

  getAllPeoples(): any {
    this.peopleService.getAllPeoples().subscribe((result: People[]) => {
      this.peoples = result;
    }),
      (erro: Error) => {
        this.handleError(erro);
      };
  }

  getPeoplesPagination(): any {
    this.peopleService.getPeoplesPagination(this.page).subscribe(
      (result: []) => {
        this.peoples = result;
      },
      (error: Error) => {
        this.handleError(error);
      }
    );
  }

  btnIsValid(count: any): any {
    if (count !== 0) {
      return "btn btn-outline-primary mr-2";
    } else {
      return "btn btn-outline-secondary mr-2";
    }
  }

  handleError(err: Error): any {
    console.log("Erro na requisição: " + err);
  }
}
