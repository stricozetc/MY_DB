import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public links: { caption: string, link: string }[] = [
    { caption: 'Сотрудники', link: '/' },
    { caption: 'Сварочные аппараты', link: '/weldings' },
    { caption: 'Объекты', link: '/objects' },
  ];
}
