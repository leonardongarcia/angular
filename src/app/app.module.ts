import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPrimeiroComponente } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPrimeiroComponente,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
