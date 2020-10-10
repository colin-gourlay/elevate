import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutesModel } from "../../models/app-routes.model";
import { ActivitiesComponent } from "../../../activities/activities.component";
import { GlobalSettingsComponent } from "../../../global-settings/global-settings.component";
import { ZonesSettingsComponent } from "../../../zones-settings/zones-settings.component";
import { DonateComponent } from "../../../donate/donate.component";
import { ShareComponent } from "../../../share/share.component";
import { ReportComponent } from "../../../report/report.component";
import { FaqComponent } from "../../../faq/faq.component";
import { ExtensionAdvancedMenuComponent } from "../../../advanced-menu/extension/extension-advanced-menu.component";

@NgModule({
  imports: [RouterModule.forRoot(ExtensionRoutingModule.provideRoutes(), { enableTracing: false, useHash: true })],
  exports: [RouterModule],
})
export class ExtensionRoutingModule {
  public static routes: Routes = [
    {
      path: AppRoutesModel.activities,
      component: ActivitiesComponent,
    },
    {
      path: AppRoutesModel.fitnessTrend,
      loadChildren: () =>
        import("../../../fitness-trend/fitness-trend.module").then(module => module.FitnessTrendModule),
    },
    {
      path: AppRoutesModel.yearProgressions,
      loadChildren: () =>
        import("../../../year-progress/year-progress.module").then(module => module.YearProgressModule),
    },
    {
      path: AppRoutesModel.globalSettings,
      component: GlobalSettingsComponent,
    },
    {
      path: AppRoutesModel.athleteSettings,
      loadChildren: () =>
        import("../../../athlete-settings/athlete-settings.module").then(module => module.AthleteSettingsModule),
    },
    {
      path: AppRoutesModel.zonesSettings,
      component: ZonesSettingsComponent,
    },
    {
      path: AppRoutesModel.zonesSettings + "/:zoneValue",
      component: ZonesSettingsComponent,
    },
    {
      path: AppRoutesModel.connectors,
      loadChildren: () => import("../../../connectors/connectors.module").then(module => module.ConnectorsModule),
    },
    {
      path: AppRoutesModel.donate,
      component: DonateComponent,
    },
    {
      path: AppRoutesModel.releasesNotes,
      loadChildren: () =>
        import("../../../releases-notes/releases-notes.module").then(module => module.ReleasesNotesModule),
    },
    {
      path: AppRoutesModel.share,
      component: ShareComponent,
    },
    {
      path: AppRoutesModel.report,
      component: ReportComponent,
    },
    {
      path: AppRoutesModel.advancedMenu,
      component: ExtensionAdvancedMenuComponent,
    },
    {
      path: AppRoutesModel.frequentlyAskedQuestions,
      component: FaqComponent,
    },
    {
      path: "",
      redirectTo: AppRoutesModel.activities,
      pathMatch: "full",
    },
  ];

  public static provideRoutes(): Routes {
    return ExtensionRoutingModule.routes;
  }
}