import { Component, OnInit, RootRenderer } from "@angular/core";
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';
import { UserInfoModel } from 'src/app/models/user-info';

@Component ({
    selector: "cmail-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css","./header-search.css"],
})

export class HeaderComponent implements OnInit {

    isMenuOpen = false;
    tituloDaPagina = 'Cmail';
    userInfo: UserInfoModel;

    constructor(
        private pageService: PageService,
        private headerService: HeaderService,
        private roteador: Router,

    ) {
        this.pageService
            .titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    ngOnInit() {
        this.userInfo = JSON.parse(localStorage.getItem('user-info'));
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; 
        console.log(this.isMenuOpen);
    }

    handleBuscaChange( {target} ) {
        console.log(target.value);
        this.headerService.atualizaTermoDeFiltro(target.value);
    }

    handleLogout() {
        localStorage.clear();
        this.roteador.navigate(['/login']);
    }

}

