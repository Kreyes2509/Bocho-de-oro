import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAdminComponent } from './MisComponentes/dash-admin/dash-admin.component';
import { DashClienteComponent } from './MisComponentes/dash-cliente/dash-cliente.component';
import { DashEmpleadoComponent } from './MisComponentes/dash-empleado/dash-empleado.component';
import { LoginComponent } from './MisComponentes/login/login.component';
import { RegistrarComponent } from './MisComponentes/registrar/registrar.component';
import { AutoClienteComponent } from './MisComponetes/auto-cliente/auto-cliente.component';
import { AutomovilesComponent } from './MisComponetes/automoviles/automoviles.component';
import { ClientesComponent } from './MisComponetes/clientes/clientes.component';
import { DetalleAutoComponent } from './MisComponetes/detalle-auto/detalle-auto.component';
import { FormCompraComponent } from './MisComponetes/form-compra/form-compra.component';
import { LotesComponent } from './MisComponetes/lotes/lotes.component';
import { ProveedoresComponent } from './MisComponetes/proveedores/proveedores.component';
import { SucursalesComponent } from './MisComponetes/sucursales/sucursales.component';
import { VentasComponent } from './MisComponetes/ventas/ventas.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"registrar",component:RegistrarComponent},
  {path:"dashAdmin",component:DashAdminComponent},
  {path:"dashEmpleado",component:DashEmpleadoComponent},
  {path:"dashCliente",component:DashClienteComponent},

  {path:"sucursal",component:SucursalesComponent},
  {path:"proveedores",component:ProveedoresComponent},
  {path:"automoviles",component:AutomovilesComponent},
  {path:"lotes",component:LotesComponent},
  {path:"clientes",component:ClientesComponent},
  {path:"ventas",component:VentasComponent},


  {path:"detalle",component:DetalleAutoComponent},
  {path:"compra",component:FormCompraComponent},
  {path:"misautos",component:AutoClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
