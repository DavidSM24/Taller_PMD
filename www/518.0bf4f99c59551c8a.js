"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[518],{518:(C,f,l)=>{l.r(f),l.d(f,{UserListPageModule:()=>y});var u=l(6019),d=l(9010),n=l(2651),g=l(8725),c=l(4762),Z=l(9101),e=l(865),p=l(7524),T=l(9311),m=l(8816);function _(o,a){1&o&&e._UZ(0,"ion-icon",36)}function U(o,a){1&o&&e._UZ(0,"ion-icon",37)}function v(o,a){if(1&o){const i=e.EpF();e.TgZ(0,"ion-row",27),e.TgZ(1,"ion-col",28),e.TgZ(2,"ion-text",29),e.NdJ("click",function(){const s=e.CHM(i).$implicit;return e.oxw().edit(s)}),e._UZ(3,"ion-icon",30),e.qZA(),e.qZA(),e.TgZ(4,"ion-col",31),e.TgZ(5,"ion-text"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"ion-col",31),e.TgZ(8,"ion-text"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"ion-col",31),e.TgZ(11,"ion-text"),e._uU(12),e.qZA(),e.qZA(),e.TgZ(13,"ion-col",31),e.YNc(14,_,1,0,"ion-icon",32),e.YNc(15,U,1,0,"ion-icon",33),e.qZA(),e.TgZ(16,"ion-col",28),e.TgZ(17,"ion-text",34),e.NdJ("click",function(){const s=e.CHM(i).$implicit;return e.oxw().mensagealerta(s)}),e._UZ(18,"ion-icon",35),e.qZA(),e.qZA(),e.qZA()}if(2&o){const i=a.$implicit;e.xp6(6),e.hij(" ",i.code," "),e.xp6(3),e.hij(" ",i.email," "),e.xp6(3),e.hij(" ",i.name," "),e.xp6(2),e.Q6J("ngIf",i.administrator),e.xp6(1),e.Q6J("ngIf",!i.administrator)}}const A=[{path:"",component:(()=>{class o{constructor(i,t,r,s,h,L,P){this.usser=i,this.loading=t,this.toast=r,this.pt=s,this.modalCtrl=h,this.alerta=L,this.authS=P,this.users=[],this.usersx=[]}ionViewDidEnter(){return(0,c.mG)(this,void 0,void 0,function*(){this.niTems=Math.ceil(this.pt.height()/20+10),yield this.cargaUsers()})}cargaUsers(i){return(0,c.mG)(this,void 0,void 0,function*(){this.infinite&&(this.infinite.disabled=!1),i||(yield this.presentLoading()),this.users=[];try{this.users=yield this.usser.getAllPaged(this.niTems,0),this.usersx=this.users}catch(t){console.error(t),yield this.presentToast("Error cargando datos","danger")}finally{i?i.target.complete():yield this.miLoading.dismiss()}})}presentLoading(){return(0,c.mG)(this,void 0,void 0,function*(){this.miLoading=yield this.loading.create({message:""}),yield this.miLoading.present()})}borra(i){return(0,c.mG)(this,void 0,void 0,function*(){yield this.presentLoading(),yield this.usser.delete(i);let t=this.users.indexOf(i,0);t>-1&&this.users.splice(t,1),yield this.miLoading.dismiss()})}presentToast(i,t){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:i,duration:2e3,color:t})).present()})}edit(i){return(0,c.mG)(this,void 0,void 0,function*(){try{const t=yield this.modalCtrl.create({component:Z.F,cssClass:"fullscreen",componentProps:{user:i}});yield t.present();const r=yield t.onDidDismiss();if(null!=r.data){let s=this.users.indexOf(i);this.users[s]=r.data.newUser}}catch(t){console.log(t)}})}setbyUserRol(i){return(0,c.mG)(this,void 0,void 0,function*(){let t=[];const r=i.detail.value;"false".match(r)?(this.usersx.forEach(s=>{s.administrator||t.push(s)}),this.users=t):"true".match(r)?(this.usersx.forEach(s=>{s.administrator&&t.push(s)}),this.users=t):"all".match(r)&&this.reset()})}mensagealerta(i){return(0,c.mG)(this,void 0,void 0,function*(){yield(yield this.alerta.create({header:"Eliminar",message:"\xbfDesea eliminar Este Regalo Intercambiado?",buttons:[{text:"Eliminar",cssClass:"rojo",handler:()=>{this.borra(i)}},{text:"Cancelar",cssClass:"secondary",handler:r=>{}}]})).present()})}reset(i){return(0,c.mG)(this,void 0,void 0,function*(){this.infinite.disabled=!1,this.users=[],this.cargaUsers(i)})}infiniteLoad(i){return(0,c.mG)(this,void 0,void 0,function*(){let t=[];this.infinite.disabled||(t=yield this.usser.getAllPaged(this.niTems,this.users.length),this.users=this.users.concat(t),t.length<30&&(this.infinite.disabled=!0))})}logout(){this.authS.logout()}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(p.K),e.Y36(n.HT),e.Y36(n.yF),e.Y36(n.t4),e.Y36(n.IN),e.Y36(n.Br),e.Y36(T.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-list"]],viewQuery:function(i,t){if(1&i&&e.Gf(n.ju,5),2&i){let r;e.iGM(r=e.CRH())&&(t.infinite=r.first)}},decls:52,vars:7,consts:[[3,"translucent"],["color","primary"],["slot","end",1,"icon-div-container",2,"margin-right","1%"],["title","Nuevo","routerLink","/tab-administrator/user/create"],["slot","end",1,"icon-logout",2,"pointer-events","none","zoom","1.5","cursor","pointer","content","url(../../../../assets/icon/add-circle-outline.png)"],["title","Lista de Usuarios","routerLink","/tab-administrator/agency/list"],["slot","end",1,"icon-logout",2,"pointer-events","none","zoom","1.3","cursor","pointer","content","url( ../../../../assets/icon/agency_list.png)"],["title","Cerrar Sesi\xf3n",3,"click"],["slot","end","name","log-out-outline",1,"icon-logout",2,"pointer-events","none","zoom","1.7","cursor","pointer"],[1,"ion-align-items-center"],["sizeSm","9.5","sizeLg","9.5"],["placeholder","Encuentra el Usuario que est\xe1s buscando...","inputmode","text","type","text","showCancelButton","always",3,"ngModel","ngModelChange"],["sizeSm","2.5","sizeLg","2.5",1,"selector"],["interface","popover","multiple","false",3,"ionChange"],["value","true"],["value","false"],["value","all"],[1,"header-row"],["size","1",2,"border","0px !important"],["size","2.5",2,"border","0px !important"],[2,"background-color","white",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"body"],[1,"ion-text-center"],["let","","class","row",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["let","",1,"row"],["size","1"],["title","Editar",1,"icon-div-container",3,"click"],["name","pencil",2,"color","#22388c","pointer-events","none"],["size","2.5"],["name","checkmark-circle","style","color: #39ff14;",4,"ngIf"],["name","close-circle","style","color: red;",4,"ngIf"],["title","Eliminar",1,"icon-div-container",3,"click"],["name","trash","color","danger",2,"pointer-events","none"],["name","checkmark-circle",2,"color","#39ff14"],["name","close-circle",2,"color","red"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title"),e._uU(3,"Lista de Usuarios"),e.qZA(),e.TgZ(4,"ion-buttons",2),e.TgZ(5,"div",3),e._UZ(6,"ion-icon",4),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"ion-icon",6),e.qZA(),e.TgZ(9,"div",7),e.NdJ("click",function(){return t.logout()}),e._UZ(10,"ion-icon",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"ion-toolbar",1),e.TgZ(12,"ion-row",9),e.TgZ(13,"ion-col",10),e.TgZ(14,"ion-searchbar",11),e.NdJ("ngModelChange",function(s){return t.searchTerm=s}),e.qZA(),e.qZA(),e.TgZ(15,"ion-col",12),e.TgZ(16,"ion-item"),e.TgZ(17,"ion-label"),e._uU(18,"Tipo De Usuario"),e.qZA(),e.TgZ(19,"ion-select",13),e.NdJ("ionChange",function(s){return t.setbyUserRol(s)}),e.TgZ(20,"ion-select-option",14),e._uU(21,"Administrador"),e.qZA(),e.TgZ(22,"ion-select-option",15),e._uU(23,"Cliente"),e.qZA(),e.TgZ(24,"ion-select-option",16),e._uU(25,"Todos"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"ion-row",17),e.TgZ(27,"ion-col",18),e._UZ(28,"ion-text"),e.qZA(),e.TgZ(29,"ion-col",19),e.TgZ(30,"ion-text"),e._uU(31,"Codigo"),e.qZA(),e.qZA(),e.TgZ(32,"ion-col",19),e.TgZ(33,"ion-text"),e._uU(34,"Email"),e.qZA(),e.qZA(),e.TgZ(35,"ion-col",19),e.TgZ(36,"ion-text"),e._uU(37,"Nombre"),e.qZA(),e.qZA(),e.TgZ(38,"ion-col",19),e.TgZ(39,"ion-text"),e._uU(40,"Administrador"),e.qZA(),e.qZA(),e.TgZ(41,"ion-col",18),e._UZ(42,"ion-text"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"ion-content",20),e.TgZ(44,"ion-refresher",21),e.NdJ("ionRefresh",function(s){return t.reset(s)}),e._UZ(45,"ion-refresher-content"),e.qZA(),e.TgZ(46,"div",22),e.TgZ(47,"ion-grid",23),e.YNc(48,v,19,5,"ion-row",24),e.ALo(49,"filter"),e.qZA(),e.TgZ(50,"ion-infinite-scroll",25),e.NdJ("ionInfinite",function(s){return t.infiniteLoad(s)}),e._UZ(51,"ion-infinite-scroll-content",26),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.Q6J("translucent",!1),e.xp6(14),e.Q6J("ngModel",t.searchTerm),e.xp6(29),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngForOf",e.xi3(49,4,t.users,t.searchTerm)))},directives:[n.Gu,n.sr,n.wd,n.Sm,n.YI,g.rH,n.gu,n.Nd,n.wI,n.VI,n.j9,d.JJ,d.On,n.Ie,n.Q$,n.t9,n.QI,n.n0,n.yW,n.W2,n.nJ,n.Wo,n.jY,u.sg,n.ju,n.MB,u.O5],pipes:[m.Z],styles:['ion-col[_ngcontent-%COMP%]{border-bottom:1px solid #4b4b4d}ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#4b4b4d!important}.header-row[_ngcontent-%COMP%]{border-radius:0%;border:0px}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#fff!important;font-size:1.2rem;text-align:center}.row[_ngcontent-%COMP%]{color:#fff;font-size:1.1rem}.body[_ngcontent-%COMP%]{background-color:#fff;font-family:"Roboto",sans-serif;color:#4b4b4d}']}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(A)],g.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.ez,d.u5,n.Pc,x,d.UX,m.h]]}),o})()}}]);