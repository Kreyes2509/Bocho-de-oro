import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MisComponentes/login/login.component';
import { RegistrarComponent } from './MisComponentes/registrar/registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashAdminComponent } from './MisComponentes/dash-admin/dash-admin.component';
import { DashEmpleadoComponent } from './MisComponentes/dash-empleado/dash-empleado.component';
import { DashClienteComponent } from './MisComponentes/dash-cliente/dash-cliente.component';
import { SucursalesComponent } from './MisComponetes/sucursales/sucursales.component';
import { ProveedoresComponent } from './MisComponetes/proveedores/proveedores.component';
import { AutomovilesComponent } from './MisComponetes/automoviles/automoviles.component';
import { LotesComponent } from './MisComponetes/lotes/lotes.component';
import { ClientesComponent } from './MisComponetes/clientes/clientes.component';
import { VentasComponent } from './MisComponetes/ventas/ventas.component';
import { DetalleAutoComponent } from './MisComponetes/detalle-auto/detalle-auto.component';
import { FormCompraComponent } from './MisComponetes/form-compra/form-compra.component';
import { AutoClienteComponent } from './MisComponetes/auto-cliente/auto-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    DashAdminComponent,
    DashEmpleadoComponent,
    DashClienteComponent,
    SucursalesComponent,
    ProveedoresComponent,
    AutomovilesComponent,
    LotesComponent,
    ClientesComponent,
    VentasComponent,
    DetalleAutoComponent,
    FormCompraComponent,
    AutoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
