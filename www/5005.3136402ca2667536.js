"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5005],{5005:(U,p,s)=>{s.r(p),s.d(p,{CarRepairListPageModule:()=>L});var h=s(6019),u=s(9010),n=s(2651),g=s(8725),c=s(4762),f=s(9600),m=s(5744),e=s(865),_=s(7928),Z=s(371),C=s(9574),y=s(9311);function R(a,d){1&a&&e._UZ(0,"ion-icon",30)}function T(a,d){1&a&&e._UZ(0,"ion-icon",31)}function v(a,d){if(1&a){const i=e.EpF();e.TgZ(0,"ion-row",22),e.TgZ(1,"ion-col",23),e.TgZ(2,"ion-text"),e.TgZ(3,"ion-icon",24),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().edit(o)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-col",25),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().saw(o)}),e.TgZ(5,"ion-text",26),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"ion-col",25),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().saw(o)}),e.TgZ(8,"ion-text",26),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"ion-col",25),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().saw(o)}),e.TgZ(11,"ion-text",26),e._uU(12),e.qZA(),e.qZA(),e.TgZ(13,"ion-col",25),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().saw(o)}),e.YNc(14,R,1,0,"ion-icon",27),e.YNc(15,T,1,0,"ion-icon",28),e.qZA(),e.TgZ(16,"ion-col",23),e.TgZ(17,"ion-text"),e.TgZ(18,"ion-icon",29),e.NdJ("click",function(){const o=e.CHM(i).$implicit;return e.oxw().showDeleteMenu(o)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const i=d.$implicit;e.xp6(6),e.hij(" ",i.operation," "),e.xp6(3),e.hij(" ",i.carPlate," "),e.xp6(3),e.hij(" ",i.myAgency.myUser.name," "),e.xp6(2),e.Q6J("ngIf",i.repaired),e.xp6(1),e.Q6J("ngIf",!i.repaired)}}const x=[{path:"",component:(()=>{class a{constructor(i,t,r,o,l,S,w,M,q,b){this.cS=i,this.toast=t,this.alertCtrl=r,this.modalCtrl=o,this.loading=l,this.utilService=S,this.agencyService=w,this.routes=M,this.pt=q,this.authService=b,this.n=0,this.carRepairs=[],this.carRepairsStore=[],this.searchStr=""}ngOnInit(){}ionViewWillEnter(){return(0,c.mG)(this,void 0,void 0,function*(){})}ionViewDidEnter(){return(0,c.mG)(this,void 0,void 0,function*(){if(this.cS.added)this.reset(null),this.cS.added=!1;else try{yield this.getMyAgency(),this.nItems=Math.ceil(this.pt.height()/20+10),yield this.loadCarRepair(),this.n=this.carRepairs.length}catch(i){}})}loadCarRepair(i){return(0,c.mG)(this,void 0,void 0,function*(){let t=[];if(0==this.carRepairs.length){i||this.presentLoading(),this.infinite.disabled=!1;try{t=yield this.cS.getByAgencyPaged(this.myAgency.id,this.nItems,0),console.log(t),this.carRepairs=this.carRepairs.concat(t),this.storageCarRepairs(),t.length<this.nItems&&(this.infinite.disabled=!0)}catch(r){console.log(r),this.presentToast("Error de carga","danger","ban")}finally{i?i.target.complete():this.loading.dismiss()}}})}edit(i){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.modalCtrl.create({component:m.K,cssClass:"fullscreen",componentProps:{carRepair:i}});yield t.present();const r=yield t.onDidDismiss();if(null!=r.data){let o=this.carRepairs.indexOf(i);this.carRepairs[o]=r.data.newCarRepair}})}delete(i){return(0,c.mG)(this,void 0,void 0,function*(){try{yield this.presentLoading();const t=yield this.cS.delete(i);let r=this.carRepairs.indexOf(i,0);t?(r>-1&&this.carRepairs.splice(r,1),this.presentToast("La reparaci\xf3n ha sido eliminada correctamente.","success","checkmark-circle-outline")):this.presentToast("Error al borrar la reparaci\xf3n","danger","ban")}catch(t){this.presentToast("Nose ha podido borrar la reparaci\xf3n, intentelo m\xe1s tarde","danger","ban")}finally{try{yield this.miLoading.dismiss()}catch(t){}}})}showDeleteMenu(i){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.alertCtrl.create({header:"Confirmaci\xf3n",message:"\xbfDesea eliminar la reparaci\xf3n?",buttons:[{text:"Eliminar",cssClass:"rojo",handler:()=>{this.delete(i)}},{text:"Cancelar",cssClass:"secundary",role:"cancel"}]});try{yield t.present()}catch(r){console.log(r)}})}saw(i){return(0,c.mG)(this,void 0,void 0,function*(){return yield(yield this.modalCtrl.create({component:f.T,cssClass:"my-modal-class",componentProps:{carRepair:i}})).present()})}setCarByStatus(i){return(0,c.mG)(this,void 0,void 0,function*(){let t=[];const r=i.detail.value;"false".match(r)?(this.carRepairsStore.forEach(o=>{o.repaired||t.push(o)}),this.carRepairs=t):"true".match(r)?(this.carRepairsStore.forEach(o=>{o.repaired&&t.push(o)}),console.log(t),this.carRepairs=t):"all".match(r)&&this.reset()})}onSearchChange(i){return(0,c.mG)(this,void 0,void 0,function*(){this.searchStr=i.detail.value,console.log(this.searchStr);let t=[];const r=i.detail.value,o=this.searchStr.length;if(o>1)this.carRepairsStore.forEach(l=>{(l.brandCar.includes(r)||l.clienteName.includes(r)||l.operation.toLocaleString().includes(r)||l.myAgency.myUser.name.includes(r))&&t.push(l)}),this.carRepairs=t;else if(o<1)try{yield this.reset()}catch(l){}})}reset(i){return(0,c.mG)(this,void 0,void 0,function*(){this.n=0,this.infinite.disabled=!1,this.carRepairs=[],this.loadCarRepair(i)})}storageCarRepairs(){this.carRepairsStore=this.carRepairs}logout(){this.authService.logout()}getMyAgency(){return(0,c.mG)(this,void 0,void 0,function*(){let i;try{this.utilService.presentLoading(),i=yield this.agencyService.getByUserNamePaged(this.authService.user.name,100,0),i.length>0&&i.forEach(t=>{t.myUser.id==this.authService.user.id&&(this.myAgency=t,this.idAgency=t.id,console.log("id--\x3e"+this.idAgency),this.utilService.hideLoading())})}catch(t){this.utilService.presentToast("Fallo al cargar","danger","ban")}})}infiniteLoad(i){return(0,c.mG)(this,void 0,void 0,function*(){let t=[];if(!this.infinite.disabled)try{t=yield this.cS.getByAgencyPaged(this.myAgency.id,this.nItems,this.carRepairs.length),this.carRepairs=this.carRepairs.concat(t),t.length<30&&(this.infinite.disabled=!0)}catch(r){console.log(r)}})}presentLoading(){return(0,c.mG)(this,void 0,void 0,function*(){this.miLoading=yield this.loading.create({message:""}),yield this.miLoading.present()})}presentToast(i,t,r){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:i,duration:2e3,color:t,icon:r})).present()})}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(_.K),e.Y36(n.yF),e.Y36(n.Br),e.Y36(n.IN),e.Y36(n.HT),e.Y36(Z.f),e.Y36(C.Y),e.Y36(g.F0),e.Y36(n.t4),e.Y36(y.e))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-car-repair-list"]],viewQuery:function(i,t){if(1&i&&e.Gf(n.ju,5),2&i){let r;e.iGM(r=e.CRH())&&(t.infinite=r.first)}},decls:47,vars:2,consts:[["color","primary"],["slot","end",2,"margin-right","1%"],["slot","end","name","add-circle","routerLink","/tab-user/car-repair/create",1,"icon-logout",2,"zoom","1.5","cursor","pointer"],["slot","end","name","log-out-outline",1,"icon-logout",2,"zoom","1.7","cursor","pointer",3,"click"],[1,"ion-align-items-center"],["sizeSm","9.5","sizeLg","9.5"],["placeholder","Encuentra la reparaci\xf3n que est\xe1s buscando...","inputmode","text","type","text","debounce","1000","showCancelButton","always",3,"ionChange"],["sizeSm","2.5","sizeLg","2.5",1,"selector"],["interface","popover","multiple","false",3,"ionChange"],["value","true"],["value","false"],["value","all"],[1,"header-row"],["size","1",2,"border","0px !important"],["size","2.5",2,"border","0px !important"],[2,"background-color","white",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"body"],[1,"ion-text-center"],["let","","class","row",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["let","",1,"row"],["size","1"],["name","pencil",2,"color","#22388c","cursor","pointer",3,"click"],["size","2.5",3,"click"],[1,"pointerText"],["name","checkmark-circle","style","color: #39ff14;",4,"ngIf"],["name","close-circle","style","color: red;",4,"ngIf"],["name","trash","color","danger",2,"cursor","pointer",3,"click"],["name","checkmark-circle",2,"color","#39ff14"],["name","close-circle",2,"color","red"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.TgZ(2,"ion-title"),e._uU(3,"Lista de Reparaciones"),e.qZA(),e.TgZ(4,"ion-buttons",1),e._UZ(5,"ion-icon",2),e.TgZ(6,"ion-icon",3),e.NdJ("click",function(){return t.logout()}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-toolbar",0),e.TgZ(8,"ion-row",4),e.TgZ(9,"ion-col",5),e.TgZ(10,"ion-searchbar",6),e.NdJ("ionChange",function(o){return t.onSearchChange(o)}),e.qZA(),e.qZA(),e.TgZ(11,"ion-col",7),e.TgZ(12,"ion-item"),e.TgZ(13,"ion-label"),e._uU(14,"Estado del veh\xedculo"),e.qZA(),e.TgZ(15,"ion-select",8),e.NdJ("ionChange",function(o){return t.setCarByStatus(o)}),e.TgZ(16,"ion-select-option",9),e._uU(17,"Reparado"),e.qZA(),e.TgZ(18,"ion-select-option",10),e._uU(19,"Sin reparar"),e.qZA(),e.TgZ(20,"ion-select-option",11),e._uU(21,"Todos"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"ion-row",12),e.TgZ(23,"ion-col",13),e._UZ(24,"ion-text"),e.qZA(),e.TgZ(25,"ion-col",14),e.TgZ(26,"ion-text"),e._uU(27,"Operaci\xf3n"),e.qZA(),e.qZA(),e.TgZ(28,"ion-col",14),e.TgZ(29,"ion-text"),e._uU(30,"Matr\xedcula"),e.qZA(),e.qZA(),e.TgZ(31,"ion-col",14),e.TgZ(32,"ion-text"),e._uU(33,"Agencia"),e.qZA(),e.qZA(),e.TgZ(34,"ion-col",14),e.TgZ(35,"ion-text"),e._uU(36,"Reparado"),e.qZA(),e.qZA(),e.TgZ(37,"ion-col",13),e._UZ(38,"ion-text"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(39,"ion-content",15),e.TgZ(40,"ion-refresher",16),e.NdJ("ionRefresh",function(o){return t.reset(o)}),e._UZ(41,"ion-refresher-content"),e.qZA(),e.TgZ(42,"div",17),e.TgZ(43,"ion-grid",18),e.YNc(44,v,19,5,"ion-row",19),e.qZA(),e.TgZ(45,"ion-infinite-scroll",20),e.NdJ("ionInfinite",function(o){return t.infiniteLoad(o)}),e._UZ(46,"ion-infinite-scroll-content",21),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(39),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngForOf",t.carRepairs))},directives:[n.Gu,n.sr,n.wd,n.Sm,n.gu,n.YI,g.rH,n.Nd,n.wI,n.VI,n.j9,n.Ie,n.Q$,n.t9,n.QI,n.n0,n.yW,n.W2,n.nJ,n.Wo,n.jY,h.sg,n.ju,n.MB,h.O5],styles:['ion-col[_ngcontent-%COMP%]{border-bottom:1px solid #4b4b4d}ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#4b4b4d!important}.header-row[_ngcontent-%COMP%]{border-radius:0%;border:0px}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#fff!important;font-size:1.2rem;text-align:center}.row[_ngcontent-%COMP%]{color:#fff;font-size:1.1rem}.selector[_ngcontent-%COMP%]{float:right!important}.body[_ngcontent-%COMP%]{background-color:#fff;font-family:"Roboto",sans-serif;color:#4b4b4d}.pointerText[_ngcontent-%COMP%]{cursor:pointer}']}),a})()}];let A=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[g.Bz.forChild(x)],g.Bz]}),a})();var P=s(8816);let L=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[h.ez,u.u5,n.Pc,A,P.h,u.UX]]}),a})()}}]);