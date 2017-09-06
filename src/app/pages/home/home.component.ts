import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ToolBarComponent)
  private _tool: ToolBarComponent;

  constructor() { }

  ngOnInit() {
  }

  onFirstButtonClick(e){
    this._tool.firstEnabled = !this._tool.firstEnabled;
    console.log(e);
  }

}
