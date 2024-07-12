import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductTradeComponent } from './pages/product-trade/product-trade.component';
import { ProductSalesRecordComponent } from './pages/product-sales-record/product-sales-record.component';
import { ProductBuyRecordComponent } from './pages/product-buy-record/product-buy-record.component';

export const routes: Routes = [
    {path:'register', component: SignUpComponent},
    {path:'login', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[authGuard]},
    {path:'register-product', component: ProductListingComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'trade-list', component: ProductTradeComponent},
    {path: 'trade-sales-list', component: ProductSalesRecordComponent},
    {path: 'purchase', component:ProductBuyRecordComponent}

];
