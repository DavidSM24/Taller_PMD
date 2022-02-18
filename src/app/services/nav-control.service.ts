import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavControlService {

  private _isEnable4thButton=false;

  constructor() { }

  public enable4thButton(){
    this._isEnable4thButton=true;
  }
  public disable4thButton(){
    this._isEnable4thButton=false;
  }
  public get isEnable4thButton(){
    return this._isEnable4thButton;
  }
}
