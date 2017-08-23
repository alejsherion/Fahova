import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DxDataGridComponent, DxTextBoxComponent } from "devextreme-angular";
import { LocalStorageService } from "../../services/local-storage.service";
import { HISTORY_QBE_NAME } from '../../core/globals';

@Component({
    selector: 'app-qbe',
    templateUrl: './qbe.component.html',
    styleUrls: ['./qbe.component.css']
})
export class QBEComponent implements OnInit {

    @ViewChild("gridQBE") private _gridQBE: DxDataGridComponent;
    @ViewChild("txtFilter") private _txtFilter: DxTextBoxComponent;
    @ViewChild("gridOrderQBE") private _gridOrderQBE: DxDataGridComponent;

    @Input() qbeEntity: InitialEntity[] = [];
    @Input() tableName: string = "";
    @Input() qbeVisible: boolean = false;

    @Output() onAceptButtonClick = new EventEmitter<object>();

    criteria: Criteria[];
    orderMenu: Criteria[];
    orderSelected: Ordenal[] = [];
    historical: Historical;

    gridSelected: boolean = false;
    gridOrderSelected: boolean = false;
    rowSelected: number = -1;
    rowOrderSelected: number = -1;
    fieldSelected: string = "";
    filterText: string = "";
    visibleField: string = "";
    qbeQuery: string = "";

    constructor(private _localStorage: LocalStorageService) {

        this.criteria = [
            {
                value: "criteria", description: "Criterios", icon: "dx-icon-filter", items: [
                    { value: "*x*", description: "Contenga" },
                    { value: "x=y", description: "Igual" },
                    { value: "x<>y", description: "No igual" },
                    { value: "x>y", description: "Mayor que" },
                    { value: "x>=y", description: "Mayor o igual que" },
                    { value: "x<y", description: "Menor que" },
                    { value: "x<=y", description: "Menor o igual que" },
                    { value: "IS NULL", description: "Nulo" },
                    { value: "IS NOT NULL", description: "No nulo" },
                    { value: "x IN(a,b,c)", description: "Incluido en" },
                    { value: "x NOT IN(a,b,c)", description: "No incluido en" },
                    { value: "x BETWEEN a AND b", description: "Entre" },
                    { value: "x NOT BETWEEN a AND b", description: "No este entre" },
                    { value: "x=y OR x=z", description: "O" },
                    { value: "x=y AND x=z", description: "Y" }
                ]
            },
            {
                value: "order", description: "Ordenamiento", icon: "dx-icon-menu", items: [
                    { value: "ASC", description: "Ascendente" },
                    { value: "DESC", description: "Descendente" }
                ]
            },

        ];
        this.orderMenu = [
            { value: "UP", description: "Subir", icon: "dx-icon-arrowup" },
            { value: "DOWN", description: "Bajar", icon: "dx-icon-arrowdown" },
            { value: "DEL", description: "Eliminar", icon: "dx-icon-remove" },
        ];

        this.loadHistorical = this.loadHistorical.bind(this);
        this.setHistorical = this.setHistorical.bind(this);
    }

    ngOnInit() {
        this.loadHistorical();
    }

    loadHistorical() {
        this.historical = this._localStorage.getItemObject(HISTORY_QBE_NAME + `${this.tableName}`);
        if (this.historical == undefined || this.historical == null)
            this.historical = { list: [] };
    }

    setHistorical(newValue: string) {
        if (this.historical.list.length == 5)
            this.historical.list.pop();

        this.historical.list.unshift({ query: newValue });
        this._localStorage.setItemObject(HISTORY_QBE_NAME + `${this.tableName}`, this.historical);
    }

    FillExpresion(expresion: string): string {
        let newExpresion: string = "";

        if (expresion.startsWith("&")) {
            let re = /&/gi;
            newExpresion = `LIKE '${expresion.replace(re, '%')}'`;
        }
        else if (!this.ContainsCriteria(expresion))
            newExpresion = `= ${expresion}`;
        else
            newExpresion = expresion;

        return newExpresion;
    }

    ContainsCriteria(expresion: string): boolean {
        let criteria = ["*", "=", "<", ">", "IS NULL", "IS NOT NULL", "IN", "NOT IN", "BETWEEN", " OR ", " AND "];
        for (let i in criteria) {
            if (expresion.indexOf(criteria[i]) >= 0)
                return true;
        }
        return false;
    }

    //-- Buttons Events --//
    AceptButtonClick() {
        this.qbeQuery = "";
        this.visibleField = "";
        this._gridQBE.instance.saveEditData();

        for (let qE in this.qbeEntity) {
            if (this.qbeEntity[qE].expresion != "") {
                if (this.qbeQuery != "")
                    this.qbeQuery += " AND ";

                this.qbeQuery += this.qbeEntity[qE].field + " " + this.FillExpresion(this.qbeEntity[qE].expresion);;
            }

            if (this.qbeEntity[qE].visible) {
                if (this.visibleField != "")
                    this.visibleField += ",";
                this.visibleField += this.qbeEntity[qE].field;
            }
        }
        if (this.orderSelected.length > 0) {
            this.qbeQuery += " ORDER BY ";
            for (let oS in this.orderSelected) {
                this.qbeQuery += this.orderSelected[oS].name + " " + this.orderSelected[oS].type;
                if (+oS < this.orderSelected.length - 1)
                    this.qbeQuery += ",";
            }
        }


        this.qbeVisible = false;
        this.qbeEntity = [];
        //Almacenar el historial
        this.setHistorical(this.qbeQuery);
        this.onAceptButtonClick.emit({ query: this.qbeQuery, fields: this.visibleField });
    }
    CancelButtonClick() {
        this.qbeVisible = false;
        this.gridSelected = false;
        this.rowSelected = -1;

        this.CleanButtonClick();
    }
    CleanButtonClick() {
        for (let qE in this.qbeEntity) {
            this.qbeEntity[qE].expresion = "";
        }
        this.orderSelected = [];
        this.filterText = "";
    }
    HelpButtonClick() { }
    //-- Buttons Events --//

    onGridCellHoverChanged(e) {
        if (e.rowIndex == undefined) {
            this.rowSelected = -1;
            this.gridSelected = false;
        }
        else {
            this.rowSelected = e.rowIndex;
            this.fieldSelected = e.values[3];
            this.gridSelected = true;
        }
    }

    onGridOrderCellHoverChanged(e) {
        if (e.rowIndex == this.rowOrderSelected)
            this.gridOrderSelected = true;
        else
            this.gridOrderSelected = false;
    }

    onOrderRowClick(e) {
        this.rowOrderSelected = e.rowIndex;
        this.gridOrderSelected = true;
    }

    itemMenuClick(e) {
        if (e.itemIndex == 0 || e.itemIndex == 16)
            return;
        else if (e.itemIndex > 16) { // Order
            //this.orderSelected.push({ name: this.qbeEntity[this.rowSelected].field, type: e.itemData.value });
            this.orderSelected.push({ name: this.fieldSelected, type: e.itemData.value });
        }
        else { // Criteria
            for (let qe of this.qbeEntity) {
                if (qe.field == this.fieldSelected) {
                    qe.expresion = e.itemData.value.replace("x", "")
                    return;
                }
            }
            //this.qbeEntity[this.rowSelected].expresion = e.itemData.value.replace("x", "");
        }
    }

    orderMenuClick(e) {
        switch (e.itemData.value) {
            case "UP": {
                this.orderSelected.sort((x, y) => {
                    return x.name == this.orderSelected[this.rowOrderSelected].name ? -1 : y.name == this.orderSelected[this.rowOrderSelected].name ? 1 : 0;;
                });
                break;
            }
            case "DOWN": {
                this.orderSelected.sort((x, y) => {
                    return y.name == this.orderSelected[this.rowOrderSelected].name ? -1 : x.name == this.orderSelected[this.rowOrderSelected].name ? 1 : 0;;
                });
                break;
            }
            case "DEL": {
                this.orderSelected = this.orderSelected.filter(os => os.name != this.orderSelected[this.rowOrderSelected].name);
                //statements; 
                break;
            }
        }
    }

    onHistoryRowClick(e) {
        this.CleanButtonClick();

        let historicalSelected: string = this.historical.list[e.dataIndex].query;
        let tmpQuery: string = "";
        let tmpOrder: string = "";
        if (historicalSelected.startsWith("ORDER BY")) {
            tmpOrder = historicalSelected;
        } else {
            tmpQuery = historicalSelected.split(" ORDER BY ")[0];
            if (historicalSelected.split(" ORDER BY ").length > 1)
                tmpOrder = historicalSelected.split(" ORDER BY ")[1];
        }

        this.setHistoryQuery(tmpQuery);
        this.setHistoryOrder(tmpOrder);
    }

    setHistoryQuery(value: string) {
        if (value == "")
            return;

        let querys: string[] = value.split(" AND ");
        for (let i in querys) {
            let field: string = querys[i].split(" ")[0];
            let fieldValue: string = querys[i].replace(field, "").trim();
            for (let u in this.qbeEntity) {
                if (this.qbeEntity[u].field == field) {
                    this.qbeEntity[u].expresion = fieldValue;
                }
            }
        }
    }

    setHistoryOrder(value: string) {
        if (value == "")
            return;



        let values: string[] = value.split(",");
        for (let i in values) {
            this.orderSelected.push({ name: values[i].split(" ")[0], type: values[i].split(" ")[1] })
        }
    }
    
}

export interface InitialEntity {
    description: string,
    expresion: string,
    type: string,
    field: string,
    visible: boolean
}

interface Criteria {
    value: string,
    description: string,
    icon?: string,
    items?: Criteria[]
}

interface Ordenal {
    name: string,
    type: string
}

interface Historical {
    list: History[];
}

interface History {
    query: string;
}