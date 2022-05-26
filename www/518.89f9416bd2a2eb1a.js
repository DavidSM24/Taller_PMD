"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[518],{518:(P,Z,a)=>{a.r(Z),a.d(Z,{UserListPageModule:()=>b});var f=a(6019),p=a(9010),s=a(2651),m=a(8725),u=a(4762),U=a(9101),e=a(865),_=a(7524),A=a(9311),T=a(8816);function v(n,c){1&n&&e._UZ(0,"ion-icon",36)}function y(n,c){1&n&&e._UZ(0,"ion-icon",37)}function x(n,c){if(1&n){const i=e.EpF();e.TgZ(0,"ion-row",27),e.TgZ(1,"ion-col",28),e.TgZ(2,"ion-text",29),e.NdJ("click",function(){const l=e.CHM(i).$implicit;return e.oxw().edit(l)}),e._UZ(3,"ion-icon",30),e.qZA(),e.qZA(),e.TgZ(4,"ion-col",31),e.TgZ(5,"ion-text"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"ion-col",31),e.TgZ(8,"ion-text"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"ion-col",31),e.TgZ(11,"ion-text"),e._uU(12),e.qZA(),e.qZA(),e.TgZ(13,"ion-col",31),e.YNc(14,v,1,0,"ion-icon",32),e.YNc(15,y,1,0,"ion-icon",33),e.qZA(),e.TgZ(16,"ion-col",28),e.TgZ(17,"ion-text",34),e.NdJ("click",function(){const l=e.CHM(i).$implicit;return e.oxw().mensagealerta(l)}),e._UZ(18,"ion-icon",35),e.qZA(),e.qZA(),e.qZA()}if(2&n){const i=c.$implicit;e.xp6(6),e.hij(" ",i.code," "),e.xp6(3),e.hij(" ",i.email," "),e.xp6(3),e.hij(" ",i.name," "),e.xp6(2),e.Q6J("ngIf",i.administrator),e.xp6(1),e.Q6J("ngIf",!i.administrator)}}const L=[{path:"",component:(()=>{class n{constructor(i,t,o,l,d,r,h){this.usser=i,this.loading=t,this.toast=o,this.pt=l,this.modalCtrl=d,this.alerta=r,this.authS=h,this.users=[],this.oldUsers=[]}ionViewDidEnter(){return(0,u.mG)(this,void 0,void 0,function*(){this.niTems=Math.ceil(this.pt.height()/20+10),yield this.cargaUsers()})}cargaUsers(i){return(0,u.mG)(this,void 0,void 0,function*(){this.infinite&&(this.infinite.disabled=!1,this.oldInfinite=!1),i||(yield this.presentLoading()),this.users=[],this.oldUsers=[];try{this.users=yield this.usser.getAllPaged(this.niTems,0),this.oldUsers=this.oldUsers.concat(this.users)}catch(t){console.error(t),yield this.presentToast("Error cargando datos","danger","ban")}finally{i?i.target.complete():yield this.miLoading.dismiss()}})}presentLoading(){return(0,u.mG)(this,void 0,void 0,function*(){this.miLoading=yield this.loading.create({message:""}),yield this.miLoading.present()})}borra(i){return(0,u.mG)(this,void 0,void 0,function*(){if(yield this.presentLoading(),yield this.usser.delete(i)){let o=this.users.indexOf(i,0);o>-1&&this.users.splice(o,1),this.oldUsers.forEach(l=>{if(l.id==i.id){let d=this.oldUsers.indexOf(l);this.oldUsers.splice(d,1)}}),this.presentToast("Usuario eliminado correctamente.","success","checkmark-circle-outline")}else this.presentToast("No se ha podido eliminar el usuario. Compruebe que no est\xe1 asociado a ninguna agencia con datos.","danger","ban");yield this.miLoading.dismiss()})}presentToast(i,t,o){return(0,u.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:i,duration:2e3,color:t,icon:o})).present()})}edit(i){return(0,u.mG)(this,void 0,void 0,function*(){try{const t=yield this.modalCtrl.create({component:U.F,cssClass:"fullscreen",componentProps:{user:i}});yield t.present();const o=yield t.onDidDismiss();if(null!=o.data){let l=this.users.indexOf(i);this.users[l]=o.data.newUser,this.oldUsers.forEach(d=>{if(d.id==o.data.newUser.id){let r=this.oldUsers.indexOf(d);this.oldUsers[r]=this.users[l]}}),this.presentToast("Usuario modificado correctamente.","success","checkmark-circle-outline")}}catch(t){console.log(t)}})}mensagealerta(i){return(0,u.mG)(this,void 0,void 0,function*(){yield(yield this.alerta.create({header:"Eliminar",message:"\xbfDesea eliminar Este Regalo Intercambiado?",buttons:[{text:"Eliminar",cssClass:"rojo",handler:()=>{this.borra(i)}},{text:"Cancelar",cssClass:"secondary",handler:o=>{}}]})).present()})}reset(i){return(0,u.mG)(this,void 0,void 0,function*(){this.infinite.disabled=!1,this.oldInfinite=!1,this.users=[],this.cargaUsers(i)})}infiniteLoad(i){return(0,u.mG)(this,void 0,void 0,function*(){let t=[];this.infinite.disabled||(t=yield this.usser.getAllPaged(this.niTems,this.users.length),this.users=this.users.concat(t),this.oldUsers.concat(t),t.length<30&&(this.infinite.disabled=!0,this.oldInfinite=!0))})}logout(){this.authS.logout()}searchAction(){return(0,u.mG)(this,void 0,void 0,function*(){let i=[],t=[],o=this.select.value;this.searchStr=this.sb.value;let l=[];this.users=[];let d=this.searchStr.length;d>0?(yield this.presentLoading(),l=yield this.usser.getByName(this.searchStr),l.forEach(r=>{let h=!0;i.forEach(g=>{g.id==r.id&&(h=!1)}),h&&i.push(r)}),+this.searchStr>=0&&(l=yield this.usser.getFilterCode(this.searchStr),l.forEach(r=>{let h=!0;i.forEach(g=>{g.id==r.id&&(h=!1)}),h&&i.push(r)})),l=yield this.usser.getByMail(this.searchStr),l.forEach(r=>{let h=!0;i.forEach(g=>{g.id==r.id&&(h=!1)}),h&&i.push(r)}),"true"==o?(i.forEach(r=>{r.administrator&&t.push(r)}),this.users=t):"false"==o?i.forEach(r=>{r.administrator||t.push(r)}):this.users=i,this.infinite.disabled=!1,yield this.miLoading.dismiss()):d<1&&(i=i.concat(this.oldUsers),this.infinite.disabled=this.oldInfinite,"true"==o?(i.forEach(r=>{r.administrator&&t.push(r)}),this.users=t):"false"==o?(i.forEach(r=>{r.administrator||t.push(r)}),this.users=t):this.users=i,this.infinite.disabled=this.oldInfinite,yield this.miLoading.dismiss())})}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(_.K),e.Y36(s.HT),e.Y36(s.yF),e.Y36(s.t4),e.Y36(s.IN),e.Y36(s.Br),e.Y36(A.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-list"]],viewQuery:function(i,t){if(1&i&&(e.Gf(s.ju,5),e.Gf(s.t9,5),e.Gf(s.VI,5)),2&i){let o;e.iGM(o=e.CRH())&&(t.infinite=o.first),e.iGM(o=e.CRH())&&(t.select=o.first),e.iGM(o=e.CRH())&&(t.sb=o.first)}},decls:52,vars:6,consts:[[3,"translucent"],["color","primary"],["slot","end",1,"icon-div-container",2,"margin-right","1%"],["title","Nuevo","routerLink","/tab-administrator/user/create"],["slot","end",1,"icon-logout",2,"pointer-events","none","zoom","1.5","cursor","pointer","content","url(../../../../assets/icon/add-circle-outline.png)"],["title","Lista de Agencias","routerLink","/tab-administrator/agency/list"],["slot","end",1,"icon-logout",2,"pointer-events","none","zoom","1.3","cursor","pointer","content","url( ../../../../assets/icon/agency_list.png)"],["title","Cerrar Sesi\xf3n",3,"click"],["slot","end","name","log-out-outline",1,"icon-logout",2,"pointer-events","none","zoom","1.7","cursor","pointer"],[1,"ion-align-items-center"],["sizeSm","9.5","sizeLg","9.5"],["placeholder","Encuentra el usuario que est\xe1s buscando...","inputmode","text","type","text","debounce","1000","showCancelButton","always",3,"ionChange"],["sizeSm","2.5","sizeLg","2.5",1,"selector"],["interface","popover","multiple","false",3,"ionChange"],["value","true"],["value","false"],["value","all"],[1,"header-row"],["size","1",2,"border","0px !important"],["size","2.5",2,"border","0px !important"],[2,"background-color","white",3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"body"],[1,"ion-text-center"],["let","","class","row",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["let","",1,"row"],["size","1"],["title","Editar",1,"icon-div-container",3,"click"],["name","pencil",2,"color","#22388c","pointer-events","none"],["size","2.5"],["name","checkmark-circle","style","color: #39ff14;",4,"ngIf"],["name","close-circle","style","color: red;",4,"ngIf"],["title","Eliminar",1,"icon-div-container",3,"click"],["name","trash","color","danger",2,"pointer-events","none"],["name","checkmark-circle",2,"color","#39ff14"],["name","close-circle",2,"color","red"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title"),e._uU(3,"Lista de Usuarios"),e.qZA(),e.TgZ(4,"ion-buttons",2),e.TgZ(5,"div",3),e._UZ(6,"ion-icon",4),e.qZA(),e.TgZ(7,"div",5),e._UZ(8,"ion-icon",6),e.qZA(),e.TgZ(9,"div",7),e.NdJ("click",function(){return t.logout()}),e._UZ(10,"ion-icon",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"ion-toolbar",1),e.TgZ(12,"ion-row",9),e.TgZ(13,"ion-col",10),e.TgZ(14,"ion-searchbar",11),e.NdJ("ionChange",function(){return t.searchAction()}),e.qZA(),e.qZA(),e.TgZ(15,"ion-col",12),e.TgZ(16,"ion-item"),e.TgZ(17,"ion-label"),e._uU(18,"Tipo De Usuario"),e.qZA(),e.TgZ(19,"ion-select",13),e.NdJ("ionChange",function(){return t.searchAction()}),e.TgZ(20,"ion-select-option",14),e._uU(21,"Administrador"),e.qZA(),e.TgZ(22,"ion-select-option",15),e._uU(23,"Cliente"),e.qZA(),e.TgZ(24,"ion-select-option",16),e._uU(25,"Todos"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"ion-row",17),e.TgZ(27,"ion-col",18),e._UZ(28,"ion-text"),e.qZA(),e.TgZ(29,"ion-col",19),e.TgZ(30,"ion-text"),e._uU(31,"Codigo"),e.qZA(),e.qZA(),e.TgZ(32,"ion-col",19),e.TgZ(33,"ion-text"),e._uU(34,"Email"),e.qZA(),e.qZA(),e.TgZ(35,"ion-col",19),e.TgZ(36,"ion-text"),e._uU(37,"Nombre"),e.qZA(),e.qZA(),e.TgZ(38,"ion-col",19),e.TgZ(39,"ion-text"),e._uU(40,"Administrador"),e.qZA(),e.qZA(),e.TgZ(41,"ion-col",18),e._UZ(42,"ion-text"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"ion-content",20),e.TgZ(44,"ion-refresher",21),e.NdJ("ionRefresh",function(l){return t.reset(l)}),e._UZ(45,"ion-refresher-content"),e.qZA(),e.TgZ(46,"div",22),e.TgZ(47,"ion-grid",23),e.YNc(48,x,19,5,"ion-row",24),e.ALo(49,"filter"),e.qZA(),e.TgZ(50,"ion-infinite-scroll",25),e.NdJ("ionInfinite",function(l){return t.infiniteLoad(l)}),e._UZ(51,"ion-infinite-scroll-content",26),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.Q6J("translucent",!1),e.xp6(43),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngForOf",e.xi3(49,3,t.users,t.searchTerm)))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.YI,m.rH,s.gu,s.Nd,s.wI,s.VI,s.j9,s.Ie,s.Q$,s.t9,s.QI,s.n0,s.yW,s.W2,s.nJ,s.Wo,s.jY,f.sg,s.ju,s.MB,f.O5],pipes:[T.Z],styles:['ion-col[_ngcontent-%COMP%]{border-bottom:1px solid #4b4b4d}ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#4b4b4d!important}.header-row[_ngcontent-%COMP%]{border-radius:0%;border:0px}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#fff!important;font-size:1.2rem;text-align:center}.row[_ngcontent-%COMP%]{color:#fff;font-size:1.1rem}.body[_ngcontent-%COMP%]{background-color:#fff;font-family:"Roboto",sans-serif;color:#4b4b4d}']}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.Bz.forChild(L)],m.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,p.u5,s.Pc,C,p.UX,T.h]]}),n})()}}]);