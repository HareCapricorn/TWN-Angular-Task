import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarStateService } from 'src/app/services/sidebar-state/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  menuOpen: boolean = false;
  constructor(private sidebarService: SidebarStateService) { }

  ngOnInit(): void {
    this.sidebarService.sidebarMenuOpen.subscribe(state => this.menuOpen = state);
  }

  ngOnDestroy(): void {
    this.sidebarService.sidebarMenuOpen.unsubscribe();
  }

}
