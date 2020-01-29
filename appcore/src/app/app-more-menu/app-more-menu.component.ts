import { Component, InjectionToken, OnInit } from "@angular/core";
import { AppRoutesModel } from "../shared/models/app-routes.model";
import { AboutDialogComponent } from "../about-dialog/about-dialog.component";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { ElectronService } from "../shared/services/electron/electron.service";

export const APP_MORE_MENU_COMPONENT_TOKEN = new InjectionToken<AppMoreMenuComponent>("APP_MORE_MENU_COMPONENT_TOKEN");

@Component({template: ""})
export class AppMoreMenuComponent implements OnInit {

	constructor(public router: Router, public dialog: MatDialog) {
	}

	public ngOnInit(): void {
	}

	public onShowReleaseNotes(): void {
		this.router.navigate([AppRoutesModel.releasesNotes]);
	}

	public onShowShare(): void {
		this.router.navigate([AppRoutesModel.share]);
	}

	public onShowReport(): void {
		this.router.navigate([AppRoutesModel.report]);
	}

	public onShowFaq(): void {
		this.router.navigate([AppRoutesModel.frequentlyAskedQuestions]);
	}

	public onShowAbout(): void {
		this.dialog.open(AboutDialogComponent, {
			minWidth: AboutDialogComponent.MIN_WIDTH,
			maxWidth: AboutDialogComponent.MAX_WIDTH,
		});
	}

	public onAdvanceMenu(): void {
		this.router.navigate([AppRoutesModel.advancedMenu]);
	}

	public onOpenLink(url: string) {

	}
}

@Component({
	selector: "app-desktop-app-more-menu",
	template: `
        <button mat-icon-button [matMenuTriggerFor]="moreMenu">
            <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #moreMenu="matMenu">

            <button mat-menu-item
                    (click)="onOpenLink('https://twitter.com/champagnethomas')">
                <mat-icon>announcement</mat-icon>
                App updates
            </button>

            <button mat-menu-item (click)="onShowReleaseNotes()">
                <mat-icon>system_update</mat-icon>
                Release notes
            </button>

            <button mat-menu-item (click)="onShowShare()">
                <mat-icon>share</mat-icon>
                Share app
            </button>

            <button mat-menu-item (click)="onOpenLink('https://www.strava.com/clubs/elevatestrava')">
                <mat-icon>group</mat-icon>
                Strava Club
            </button>

            <button mat-menu-item (click)="onOpenLink('https://thomaschampagne.github.io/elevate/')">
                <mat-icon>public</mat-icon>
                App page
            </button>

            <button mat-menu-item (click)="onShowReport()">
                <mat-icon>bug_report</mat-icon>
                Report a bug
            </button>

            <button mat-menu-item (click)="onShowFaq()">
                <mat-icon>help</mat-icon>
                FAQ
            </button>
            <button mat-menu-item (click)="onAdvanceMenu()">
                <mat-icon>build</mat-icon>
                Advanced
            </button>
            <button mat-menu-item (click)="onShowAbout()">
                <mat-icon>info</mat-icon>
                About
            </button>
        </mat-menu>
	`
})
export class DesktopAppMoreMenuComponent extends AppMoreMenuComponent {

	constructor(public electronService: ElectronService,
				public router: Router,
				public dialog: MatDialog) {
		super(router, dialog);
	}

	public onOpenLink(url: string): void {
		this.electronService.openExternalUrl(url);
	}
}

@Component({
	selector: "app-extension-app-more-menu",
	template: `
        <button mat-icon-button [matMenuTriggerFor]="moreMenu">
            <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #moreMenu="matMenu">

            <button mat-menu-item (click)="onOpenLink('https://twitter.com/champagnethomas')">
                <mat-icon>announcement</mat-icon>
                Plugin updates
            </button>

            <button mat-menu-item (click)="onShowReleaseNotes()">
                <mat-icon>system_update</mat-icon>
                Release notes
            </button>

            <button mat-menu-item (click)="onShowShare()">
                <mat-icon>share</mat-icon>
                Share plugin
            </button>

            <button mat-menu-item (click)="onOpenLink('https://www.strava.com/clubs/elevatestrava')">
                <mat-icon>group</mat-icon>
                Strava club
            </button>

            <button mat-menu-item (click)="onOpenLink('https://thomaschampagne.github.io/elevate/')">
                <mat-icon>public</mat-icon>
                Plugin page
            </button>

            <button mat-menu-item (click)="onShowReport()">
                <mat-icon>bug_report</mat-icon>
                Report a bug
            </button>

            <button mat-menu-item (click)="onShowFaq()">
                <mat-icon>help</mat-icon>
                FAQ
            </button>
            <button mat-menu-item (click)="onAdvanceMenu()">
                <mat-icon>build</mat-icon>
                Advanced
            </button>
            <button mat-menu-item (click)="onShowAbout()">
                <mat-icon>info</mat-icon>
                About
            </button>
        </mat-menu>
	`
})
export class ExtensionAppMoreMenuComponent extends AppMoreMenuComponent {

	constructor(public router: Router,
				public dialog: MatDialog) {
		super(router, dialog);
	}

	public onOpenLink(url: string): void {
		window.open(url, "_blank");
	}
}