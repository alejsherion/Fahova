import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  tabs: Tab[] = [
    {
      id: 0,
      text: "Perfil",
      icon: "user",
      content: "Perfil"
    },
    {
      id: 1,
      text: "Contactos",
      icon: "group",
      content: "Contactos"
    },
    {
      id: 2,
      text: "Preferencias",
      icon: "toolbox",
      content: "Preferencias"
    },
    {
      id: 3,
      text: "Buscar",
      icon: "find",
      content: "Buscar"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Tab {
  id: number;
  text: string;
  icon: string;
  content: string;
}