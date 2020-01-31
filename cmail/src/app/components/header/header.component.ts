import { Component } from "@angular/core";
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component ({
    selector: "cmail-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css","./header-search.css"],
})

export class HeaderComponent {

    isMenuOpen = false;
    tituloDaPagina = 'Cmail';

    constructor(
        private pageService: PageService,
        private headerService: HeaderService
    ) {
        this.pageService
            .titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; 
        console.log(this.isMenuOpen);
    }

    handleBuscaChange( {target} ) {
        console.log(target.value);
        this.headerService.atualizaTermoDeFiltro(target.value);
    }

}

