"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[577],{577:(f,c,a)=>{a.r(c),a.d(c,{CompanyCreatePageModule:()=>h});var l=a(6019),i=a(9010),o=a(2651),u=a(8725),d=a(4762),e=a(865),p=a(7639),g=a(371);const C=[{path:"",component:(()=>{class t{constructor(n,r,m,Z){this.cs=n,this.fb=r,this.uts=m,this.modalCtrl=Z}ngOnInit(){this.formCompany=this.fb.group({name:["",i.kI.required]})}create(){return(0,d.mG)(this,void 0,void 0,function*(){yield this.uts.presentLoading();let n=yield this.cs.getByCiaName(this.formCompany.get("name").value);if(yield this.uts.hideLoading(),n.length>0)this.uts.presentToast("Ya existe una compa\xf1ia con este nombre, prueba con otro diferente.","danger","ban");else{yield this.uts.presentLoading();let r={cia_Name:this.formCompany.get("name").value};r=yield this.cs.createOrUpdate(r),r?(this.formCompany.reset(),this.cs.added=!0,this.uts.presentToast("La compa\xf1\xeda se ha creado correctamente.","success","checkmark-circle-outline")):(this.uts.presentToast("Un error ha surgido al intentar crear la compa\xf1\xeda.","danger","ban"),r=null),yield this.uts.hideLoading()}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.r),e.Y36(i.qu),e.Y36(g.f),e.Y36(o.IN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-company-create"]],decls:22,vars:4,consts:[[3,"translucent"],["color","primary"],[3,"fullscreen"],[1,"body"],[1,"ion-padding",3,"formGroup"],[1,"formulario"],[1,"ion-align-items-center"],["sizeSm","2","sizeLg","2"],["sizeSm","10","sizeLg","10"],["type","text","formControlName","name",1,"customInput"],["size","6"],["expand","block","shape","round","routerLink","/tab-administrator/company/list",1,"button",2,"margin-top","2% !important"],["expand","block","shape","round",1,"button",2,"margin-top","2% !important",3,"disabled","click"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title"),e._uU(3," Crear Compa\xf1\xeda de Usuarios "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",2),e.TgZ(5,"div",3),e.TgZ(6,"form",4),e.TgZ(7,"div",5),e.TgZ(8,"ion-grid"),e.TgZ(9,"ion-row",6),e.TgZ(10,"ion-col",7),e.TgZ(11,"ion-label"),e._uU(12,"Nombre CIA:"),e.qZA(),e.qZA(),e.TgZ(13,"ion-col",8),e._UZ(14,"ion-input",9),e.qZA(),e.qZA(),e.TgZ(15,"ion-row",6),e.TgZ(16,"ion-col",10),e.TgZ(17,"ion-button",11),e._uU(18," Volver "),e.qZA(),e.qZA(),e.TgZ(19,"ion-col",10),e.TgZ(20,"ion-button",12),e.NdJ("click",function(){return r.create()}),e._uU(21," Crear "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("formGroup",r.formCompany),e.xp6(14),e.Q6J("disabled",r.formCompany.invalid))},directives:[o.Gu,o.sr,o.wd,o.W2,i._Y,i.JL,i.sg,o.jY,o.Nd,o.wI,o.Q$,o.pK,o.j9,i.JJ,i.u,o.YG,o.YI,u.rH],styles:[".body[_ngcontent-%COMP%]{background:#717499;background-size:cover;min-height:100%}.button[_ngcontent-%COMP%]{--background: #22388c}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(C)],u.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,i.u5,o.Pc,y,i.UX]]}),t})()}}]);