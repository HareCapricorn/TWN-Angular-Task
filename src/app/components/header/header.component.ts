import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarStateService } from 'src/app/services/sidebar-state/sidebar-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuOpen: boolean = false;
  constructor(private sidebarService: SidebarStateService) { }

  ngOnInit(): void {
    this.sidebarService.sidebarMenuOpen.subscribe(state => this.menuOpen = state);
  }

  ngOnDestroy(): void {
    this.sidebarService.sidebarMenuOpen.unsubscribe();
  }

  toggleSidebarMenu() {
    this.sidebarService.toggleSidebar();
  }
}
