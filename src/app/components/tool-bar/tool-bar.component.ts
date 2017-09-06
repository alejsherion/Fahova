import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { APP_VERSION } from '../../core/globals'

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

    @ViewChild("calcButtonTooltip") private _calcButtonTooltip: NgbTooltip;
    @ViewChild("mailButtonTooltip") private _mailButtonTooltip: NgbTooltip;
    @ViewChild("copyButtonTooltip") private _copyButtonTooltip: NgbTooltip;
    @ViewChild("pasteButtonTooltip") private _pasteButtonTooltip: NgbTooltip;
    @ViewChild("printButtonTooltip") private _printButtonTooltip: NgbTooltip;
    @ViewChild("previewButtonTooltip") private _previewButtonTooltip: NgbTooltip;
    @ViewChild("firstButtonTooltip") private _firstButtonTooltip: NgbTooltip;
    @ViewChild("backButtonTooltip") private _backButtonTooltip: NgbTooltip;
    @ViewChild("lastButtonTooltip") private _lastButtonTooltip: NgbTooltip;
    @ViewChild("forwardButtonTooltip") private _forwardButtonTooltip: NgbTooltip;
    @ViewChild("newButtonTooltip") private _newButtonTooltip: NgbTooltip;
    @ViewChild("editButtonTooltip") private _editButtonTooltip: NgbTooltip;
    @ViewChild("removeButtonTooltip") private _removeButtonTooltip: NgbTooltip;
    @ViewChild("saveButtonTooltip") private _saveButtonTooltip: NgbTooltip;
    @ViewChild("cancelButtonTooltip") private _cancelButtonTooltip: NgbTooltip;
    @ViewChild("qbeButtonTooltip") private _qbeButtonTooltip: NgbTooltip;
    @ViewChild("listButtonTooltip") private _listButtonTooltip: NgbTooltip;
    @ViewChild("viewButtonTooltip") private _viewButtonTooltip: NgbTooltip;
    @ViewChild("refreshButtonTooltip") private _refreshButtonTooltip: NgbTooltip;

    @Input() initialStatus: number = PrepareToolbarStates.START;
    @Input() config: ConfigToolbar = {
        calcButton: true, mailButton: true, copyButton: true, pasteButton: true,
        printButton: true, previewButton: true,
        firstButton: true, backButton: true, forwardButton: true, lastButton: true,
        newButton: true, editButton: true, saveButton: true, removeButton: true, cancelButton: true,
        qbeButton: true, listButton: true, refreshButton: true, viewButton: true,
    };

    @Output() onCalcButtonClick = new EventEmitter();
    @Output() onMailButtonClick = new EventEmitter();
    @Output() onCopyButtonClick = new EventEmitter();
    @Output() onPasteButtonClick = new EventEmitter();
    @Output() onPrintButtonClick = new EventEmitter();
    @Output() onPreviewButtonClick = new EventEmitter();
    @Output() onFirstButtonClick = new EventEmitter();
    @Output() onBackButtonClick = new EventEmitter();
    @Output() onForwardButtonClick = new EventEmitter();
    @Output() onLastButtonClick = new EventEmitter();
    @Output() onNewButtonClick = new EventEmitter();
    @Output() onEditButtonClick = new EventEmitter();
    @Output() onSaveButtonClick = new EventEmitter();
    @Output() onRemoveButtonClick = new EventEmitter();
    @Output() onCancelButtonClick = new EventEmitter();
    @Output() onQBEButtonClick = new EventEmitter();
    @Output() onListButtonClick = new EventEmitter();
    @Output() onViewButtonClick = new EventEmitter();
    @Output() onRefreshButtonClick = new EventEmitter();

    calcEnabled: boolean;
    mailEnabled: boolean;
    copyEnabled: boolean;
    pasteEnabled: boolean;
    printEnabled: boolean;
    previewEnabled: boolean;
    firstEnabled: boolean;
    backEnabled: boolean;
    forwardEnabled: boolean;
    lastEnabled: boolean;
    newEnabled: boolean;
    removeEnabled: boolean;
    editEnabled: boolean;
    saveEnabled: boolean;
    cancelEnabled: boolean;
    refreshEnabled: boolean;
    viewEnabled: boolean;
    listEnabled: boolean;
    qbeEnabled: boolean;

    constructor() {
        this.calcEnabled = false;
        this.mailEnabled = false;
        this.copyEnabled = false;
        this.pasteEnabled = false;
        this.printEnabled = false;
        this.previewEnabled = false;
        this.firstEnabled = false;
        this.backEnabled = false;
        this.forwardEnabled = false;
        this.lastEnabled = false;
        this.newEnabled = false;
        this.removeEnabled = false;
        this.editEnabled = false;
        this.saveEnabled = false;
        this.cancelEnabled = false;
        this.refreshEnabled = false;
        this.viewEnabled = false;
        this.listEnabled = false;
        this.qbeEnabled = false;
    }

    //COMPONENT STATUS===============
    ngOnInit() {
        this.prepareToolbar(this.initialStatus);
    }
    //===============================

    //HANDLERS=======================
    calcButtonClick() {
        this._calcButtonTooltip.close();        
        this.onCalcButtonClick.emit();
    }
    mailButtonClick() {
        this._mailButtonTooltip.close();
        this.onMailButtonClick.emit();
    }
    copyButtonClick() {
        this._copyButtonTooltip.close();
        this.onCopyButtonClick.emit();
    }
    pasteButtonClick() {
        this._pasteButtonTooltip.close();
        this.onPasteButtonClick.emit();
    }
    printButtonClick() {
        this._printButtonTooltip.close();
        this.onPrintButtonClick.emit();
    }
    previewButtonClic() {
        this._previewButtonTooltip.close();
        this.onPreviewButtonClick.emit();
    }
    firstButtonClick() {
        this._firstButtonTooltip.close();
        this.onFirstButtonClick.emit();
    }
    backButtonClick() {
        this._backButtonTooltip.close();
        this.onBackButtonClick.emit();
    }
    forwardButtonClick() {
        this._forwardButtonTooltip.close();
        this.onForwardButtonClick.emit();
    }
    lastButtonClick() {
        this._lastButtonTooltip.close();
        this.onLastButtonClick.emit();
    }

    newButtonClick() {
        this._newButtonTooltip.close();
        this.onNewButtonClick.emit();
    }
    removeButtonClick() {
        this._removeButtonTooltip.close();
        this.onRemoveButtonClick.emit();
    }
    editButtonClick() {
        this._editButtonTooltip.close();
        this.onEditButtonClick.emit();
    }
    saveButtonClick() {
        this._saveButtonTooltip.close();
        this.onSaveButtonClick.emit();
    }
    cancelButtonClick() {
        this._cancelButtonTooltip.close();
        this.onCancelButtonClick.emit();
    }

    refreshButtonClick() {
        this._refreshButtonTooltip.close();
        this.onRefreshButtonClick.emit();
    }
    viewButtonClick() {
        this._viewButtonTooltip.close();
        this.onViewButtonClick.emit();
    }
    listButtonClick() {
        this._listButtonTooltip.close();
        this.onListButtonClick.emit();
    }
    qbeButtonClick() {
        this._qbeButtonTooltip.close();
        this.onQBEButtonClick.emit();
    }
    //===============================

    //METHOS=========================
    prepareToolbar(option: number) {
        this.qbeEnabled = true;
        this.refreshEnabled = true;

        switch (option) {
            case 0:
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = true;
                this.removeEnabled = false;
                this.editEnabled = false;
                this.saveEnabled = false;
                this.cancelEnabled = false;
                this.listEnabled = true;
                this.viewEnabled = false;
                break;
            case 1: //NEW_MODE
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = false;
                this.backEnabled = false;
                this.forwardEnabled = false;
                this.lastEnabled = false;
                this.newEnabled = false;
                this.removeEnabled = false;
                this.editEnabled = false;
                this.saveEnabled = true;
                this.cancelEnabled = true;
                this.listEnabled = false;
                this.viewEnabled = false;
                break;
            case 2: // MODIFY_MODE
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = false;
                this.removeEnabled = true;
                this.editEnabled = false;
                this.saveEnabled = true;
                this.cancelEnabled = true;
                this.listEnabled = false;
                this.viewEnabled = false;
                break;
            case 3: // SELECTED_GRID_MODE
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = false;
                this.removeEnabled = true;
                this.editEnabled = true;
                this.saveEnabled = false;
                this.cancelEnabled = true;
                this.listEnabled = false;
                this.viewEnabled = false;
                break;
            case 4: // MODIFY_GRID_MODE
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = false;
                this.backEnabled = false;
                this.forwardEnabled = false;
                this.lastEnabled = false;
                this.newEnabled = false;
                this.removeEnabled = false;
                this.editEnabled = false;
                this.saveEnabled = true;
                this.cancelEnabled = true;
                this.listEnabled = true;
                this.viewEnabled = false;
                break;
            case 5: //START_DETAIL
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = true;
                this.removeEnabled = false;
                this.editEnabled = false;
                this.saveEnabled = false;
                this.cancelEnabled = false;
                this.listEnabled = true;
                this.viewEnabled = false;
                break;
            case 6: //START_DETAIL_NOLIST
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = true;
                this.removeEnabled = false;
                this.editEnabled = false;
                this.saveEnabled = false;
                this.cancelEnabled = false;
                this.listEnabled = false;
                this.viewEnabled = false;
                break;
            case 7: //ROWS_DEL_DISC
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = false;
                this.removeEnabled = true;
                this.editEnabled = false;
                this.saveEnabled = false;
                this.cancelEnabled = true;
                this.listEnabled = false;
                this.viewEnabled = false;
                break;
            case 100: //ALL ON
                this.calcEnabled = true;
                this.mailEnabled = true;
                this.copyEnabled = true;
                this.pasteEnabled = true;
                this.printEnabled = true;
                this.previewEnabled = true;
                this.firstEnabled = true;
                this.backEnabled = true;
                this.forwardEnabled = true;
                this.lastEnabled = true;
                this.newEnabled = true;
                this.removeEnabled = true;
                this.editEnabled = true;
                this.saveEnabled = true;
                this.cancelEnabled = true;
                this.listEnabled = true;
                this.viewEnabled = true;
                break;
            default:
                this.calcEnabled = false;
                this.mailEnabled = false;
                this.copyEnabled = false;
                this.pasteEnabled = false;
                this.printEnabled = false;
                this.previewEnabled = false;
                this.firstEnabled = false;
                this.backEnabled = false;
                this.forwardEnabled = false;
                this.lastEnabled = false;
                this.newEnabled = false;
                this.removeEnabled = false;
                this.editEnabled = false;
                this.saveEnabled = false;
                this.cancelEnabled = false;
                this.listEnabled = false;
                this.viewEnabled = false;
                break;
        }
    }
    //===============================

}

export interface ConfigToolbar {
    calcButton: boolean;
    mailButton: boolean;
    copyButton: boolean;
    pasteButton: boolean;
    printButton: boolean;
    previewButton: boolean;
    firstButton: boolean;
    backButton: boolean;
    forwardButton: boolean
    lastButton: boolean;
    newButton: boolean;
    editButton: boolean;
    saveButton: boolean;
    removeButton: boolean;
    cancelButton: boolean;
    qbeButton: boolean;
    listButton: boolean;
    viewButton: boolean;
    refreshButton: boolean;
}

export class PrepareToolbarStates {
    public static readonly START: number = 0;
    public static readonly NEW_MODE: number = 1;
    public static readonly MODIFY_MODE: number = 2;
    public static readonly SELECTED_GRID_MODE: number = 3;
    public static readonly MODIFY_GRID_MODE: number = 4;
    public static readonly START_DETAIL: number = 5;
    public static readonly START_DETAIL_NOLIST: number = 6;
    public static readonly ROWS_DEL_DISC: number = 7;

    public static readonly ALL_ON: number = 100;
}