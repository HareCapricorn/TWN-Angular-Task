import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {
  sidebarMenuOpen = new BehaviorSubject<boolean>(false);
  
  toggleSidebar(): void {
    this.sidebarMenuOpen.next(!this.sidebarMenuOpen.value);
  }
}
