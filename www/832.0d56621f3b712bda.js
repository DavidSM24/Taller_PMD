"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[832,922],{922:(T,E,l)=>{l.d(E,{y:()=>m});var x=l(4762),Z=l(8260),s=l(865),_=l(4522);let m=(()=>{class y{constructor(n){this.http=n,this.endpoint="/exchangeGifts",this.URLDatabase=Z.N.herokuConfig.url}getListData(n){return(0,x.mG)(this,void 0,void 0,function*(){let c=[];return new Promise(g=>{this.http.get(n).subscribe(h=>{if(null!=h&&h.length>0)for(let p of h)c.push({id:p.id,dateExchange:p.dateExchange,observations:p.observations,delivered:p.delivered,agency:p.agency,gift:p.gift});console.log(h),g(c)},h=>{console.log(h)})})})}getAllPaged(n,c){return this.getListData(this.URLDatabase+this.endpoint+"/element/"+n+"/page/"+c)}getAll(){return this.getListData(this.URLDatabase+this.endpoint)}getByDateFilter(n){return this.getListData(this.URLDatabase+this.endpoint+"/date/"+n)}getByPoints(n){return this.getListData(this.URLDatabase+this.endpoint+"/points/"+n)}getByAgencyUsername(n){return this.getListData(this.URLDatabase+this.endpoint+"/auname/"+n)}getById(n){return(0,x.mG)(this,void 0,void 0,function*(){let c=null;return new Promise(g=>{this.http.get(this.URLDatabase+this.endpoint+"/id/"+n).subscribe(h=>{h.id&&(c={id:h.id,dateExchange:h.dateExchange,observations:h.observations,delivered:h.delivered,agency:h.agency,gift:h.gift}),console.log(c),g(c)},h=>{console.log(h),console.log(c),g(c)})})})}getByDeliveredPaged(n,c,g){return this.getListData(this.URLDatabase+this.endpoint+"/delivered/"+n+"/element/"+c+"/paged/"+g)}getByGiftName(n){return this.getListData(this.URLDatabase+this.endpoint+"/gname/"+n)}getByAgencyPaged(n,c,g){if(null!=n)return this.getListData(this.URLDatabase+this.endpoint+"/id_agency/"+n.id+"/element/"+c+"/paged/"+g);{let h;return h}}createOrUpdate(n){return(0,x.mG)(this,void 0,void 0,function*(){if(console.log(n),null!=n){const c={id:n.id,dateExchange:n.dateExchange,observations:n.observations,delivered:n.delivered,agency:{id:n.agency.id},gift:{id:n.gift.id}};return new Promise(g=>{this.http.post(this.URLDatabase+this.endpoint,c).subscribe(h=>{n.id=h.id,g(n)},h=>{console.log(h),g(null)})})}})}delete(n){return(0,x.mG)(this,void 0,void 0,function*(){if(null!=n){const c={id:n.id};return new Promise(g=>{this.http.delete(this.URLDatabase+this.endpoint,{body:c}).subscribe(()=>{g(!0)},h=>{console.log(h),g(!1)})})}})}}return y.\u0275fac=function(n){return new(n||y)(s.LFG(_.eN))},y.\u0275prov=s.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},832:(T,E,l)=>{l.r(E),l.d(E,{ExchangeGiftListPageModule:()=>G});var x=l(6019),Z=l(9010),s=l(2651),_=l(8725),m=l(4762),y=l(8015),e=l(865),n=l(922),c=l(371),g=l(9311);function h(r,f){1&r&&e._UZ(0,"ion-icon",31)}function p(r,f){if(1&r){const i=e.EpF();e.TgZ(0,"ion-row",23),e.NdJ("click",function(){const d=e.CHM(i).$implicit;return e.oxw(2).show(d)}),e.TgZ(1,"ion-col",24),e.TgZ(2,"div",25),e.YNc(3,h,1,0,"ion-icon",26),e.qZA(),e.qZA(),e.TgZ(4,"ion-col",27),e.TgZ(5,"ion-text",28),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"ion-col",29),e.TgZ(8,"ion-text",28),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"ion-col",30),e.TgZ(11,"ion-text",28),e._uU(12),e.qZA(),e.qZA(),e.qZA()}if(2&r){const i=f.$implicit;e.xp6(3),e.Q6J("ngIf",i.delivered),e.xp6(3),e.hij(" ",i.gift.name," "),e.xp6(3),e.hij(" ",i.gift.points," "),e.xp6(3),e.hij(" ",i.dateExchange," ")}}function b(r,f){if(1&r&&(e.TgZ(0,"ion-grid",21),e.YNc(1,p,13,4,"ion-row",22),e.qZA()),2&r){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.exchanges)}}const P=[{path:"",component:(()=>{class r{constructor(i,t,o,d,u,v){this.exs=i,this.AlertCtrl=t,this.pt=o,this.uts=d,this.authS=u,this.modalCtrl=v,this.exchanges=[],this.oldExchanges=[],this.searchStr=""}ngOnInit(){}ionViewWillEnter(){return(0,m.mG)(this,void 0,void 0,function*(){this.niTems=Math.ceil(this.pt.height()/20+10),yield this.loadExchanges(),console.log(this.exchanges)})}loadExchanges(i){return(0,m.mG)(this,void 0,void 0,function*(){let t=[];0==this.exchanges.length&&(yield this.uts.presentLoading(),console.log(this.authS.agency),t=yield this.exs.getByAgencyPaged(this.authS.agency,this.niTems,0),this.exchanges=this.exchanges.concat(t),this.exchanges=this.sortList(this.exchanges),this.oldExchanges=[],this.oldExchanges=this.oldExchanges.concat(t)),t.length<this.niTems&&(this.infinite.disabled=!0,this.oldInfinite=!0),i&&i.target.complete(),yield this.uts.hideLoading()})}infiniteLoad(i){return(0,m.mG)(this,void 0,void 0,function*(){let t=[];this.infinite.disabled||(t=yield this.exs.getByAgencyPaged(this.authS.agency,this.niTems,this.exchanges.length),t=this.sortList(t),this.exchanges=this.exchanges.concat(t),this.oldExchanges=this.oldExchanges.concat(t),t.length<30&&(this.infinite.disabled=!0,this.oldInfinite=!0)),this.infinite.complete()})}reset(i){return(0,m.mG)(this,void 0,void 0,function*(){this.infinite.disabled=!1,this.oldInfinite=!1,this.exchanges=[],this.oldExchanges=[],this.loadExchanges(i)})}searchChange(){return(0,m.mG)(this,void 0,void 0,function*(){try{this.searchStr=this.sb.value;let i=new RegExp("^[ ]");if(this.searchStr.match(i))this.uts.presentToast("La b\xfasqueda no puede comenzar por espacios en blanco.","danger","ban");else{console.log("entro en searchbar");let t=[],o=[],d=this.select.value,u=[];this.exchanges=[];let v=this.searchStr.length;v>0?(yield this.uts.presentLoading(),u=yield this.exs.getByDateFilter(this.searchStr),u.forEach(a=>{t.includes(a)||a.agency.id==this.authS.agency.id&&t.push(a)}),+this.searchStr>=0&&(u=yield this.exs.getByPoints(this.searchStr),u.forEach(a=>{t.includes(a)||a.agency.id==this.authS.agency.id&&t.push(a)})),u=yield this.exs.getByGiftName(this.searchStr),u.forEach(a=>{let L=!0;t.forEach(C=>{(C.id=a.id)&&(L=!1)}),L&&a.agency.id==this.authS.agency.id&&t.push(a)}),u=yield this.exs.getByAgencyUsername(this.searchStr),u.forEach(a=>{t.includes(a)||a.agency.id==this.authS.agency.id&&t.push(a)}),"true"==d?(t.forEach(a=>{a.delivered&&o.push(a)}),this.exchanges=o):"false"==d?(t.forEach(a=>{a.delivered||o.push(a)}),this.exchanges=o):this.exchanges=t,this.infinite.disabled=!0,yield this.uts.hideLoading()):v<1&&(yield this.uts.presentLoading(),"true"==d?(t=yield this.exs.getByDeliveredPaged(!0,9999,0),t.forEach(a=>{a.delivered&&a.agency.id==this.authS.agency.id&&o.push(a)}),this.exchanges=o,this.infinite.disabled=!0):"false"==d?(t=yield this.exs.getByDeliveredPaged(!1,9999,0),t.forEach(a=>{!a.delivered&&a.agency.id==this.authS.agency.id&&o.push(a)}),this.exchanges=o,this.infinite.disabled=!0):(this.exchanges=this.oldExchanges,this.infinite.disabled=this.oldInfinite),yield this.uts.hideLoading()),this.exchanges=this.sortList(this.exchanges)}}catch(i){this.uts.presentToast("Ha habido un error en su b\xfasqueda. Int\xe9ntelo m\xe1s tarde.","danger","ban"),this.uts.hideLoading()}})}show(i){return(0,m.mG)(this,void 0,void 0,function*(){try{const t=yield this.modalCtrl.create({component:y.C,componentProps:{exchangesaw:i}});if(yield t.present(),null!=(yield t.onDidDismiss()).data){let d=this.exchanges.indexOf(i),u=this.oldExchanges.indexOf(i);yield this.uts.presentLoading(),this.exchanges.splice(d,1),this.oldExchanges.splice(u,1),yield this.uts.hideLoading()}}catch(t){console.log(t)}})}sortList(i){return null!=i&&i.length>1&&(i=i.sort((t,o)=>t.dateExchange>o.dateExchange?1:t.dateExchange<o.dateExchange?-1:t.id>o.id?1:t.id<o.id?-1:0)),i}logout(){this.authS.logout()}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(n.y),e.Y36(s.Br),e.Y36(s.t4),e.Y36(c.f),e.Y36(g.e),e.Y36(s.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-exchange-gift-list"]],viewQuery:function(i,t){if(1&i&&(e.Gf(s.ju,5),e.Gf(s.t9,5),e.Gf(s.VI,5)),2&i){let o;e.iGM(o=e.CRH())&&(t.infinite=o.first),e.iGM(o=e.CRH())&&(t.select=o.first),e.iGM(o=e.CRH())&&(t.sb=o.first)}},decls:39,vars:2,consts:[[3,"translucent"],["color","medium"],["slot","end","title","Cerrar Sesi\xf3n",2,"margin-right","1%","cursor","pointer",3,"click"],["slot","end","name","log-out-outline",2,"color","rgb(255, 255, 255)","zoom","1.7","cursor","pointer"],["size","9"],["placeholder","Encuentra el canjeo que est\xe1s buscando...","inputmode","text","type","text","debounce","1000","showCancelButton","always",3,"ionChange"],["sizeSm","3","sizeLg","3",1,"selector"],[2,"height","85%","margin-top","1.1%"],["interface","popover","multiple","false",3,"ionChange"],["value","true"],["value","false"],["value","all"],[1,"header-row"],["size","1",2,"border","0px !important"],["size","4",2,"border","0px !important"],["size","3",2,"border","0px !important"],["slot","fixed",3,"ionRefresh"],[1,"body"],["class","ion-text-center",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],[1,"ion-text-center"],["let","","class","row",3,"click",4,"ngFor","ngForOf"],["let","",1,"row",3,"click"],["size","1"],["title","Entregado"],["class","icon-c","style","color:blueviolet","name","gift",4,"ngIf"],["ize","4"],[1,"pointer"],["size","3"],["size","4"],["name","gift",1,"icon-c",2,"color","blueviolet"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-title"),e._uU(3,"Lista de Canjees"),e.qZA(),e.TgZ(4,"ion-buttons",2),e.NdJ("click",function(){return t.logout()}),e._UZ(5,"ion-icon",3),e.qZA(),e.qZA(),e.TgZ(6,"ion-toolbar",1),e.TgZ(7,"ion-row"),e.TgZ(8,"ion-col",4),e.TgZ(9,"ion-searchbar",5),e.NdJ("ionChange",function(){return t.searchChange()}),e.qZA(),e.qZA(),e.TgZ(10,"ion-col",6),e.TgZ(11,"ion-item",7),e.TgZ(12,"ion-label"),e._uU(13,"Entregado:"),e.qZA(),e.TgZ(14,"ion-select",8),e.NdJ("ionChange",function(){return t.searchChange()}),e.TgZ(15,"ion-select-option",9),e._uU(16,"Si"),e.qZA(),e.TgZ(17,"ion-select-option",10),e._uU(18,"No"),e.qZA(),e.TgZ(19,"ion-select-option",11),e._uU(20,"Todos"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"ion-row",12),e._UZ(22,"ion-col",13),e.TgZ(23,"ion-col",14),e.TgZ(24,"ion-text"),e._uU(25,"Regalo"),e.qZA(),e.qZA(),e.TgZ(26,"ion-col",15),e.TgZ(27,"ion-text"),e._uU(28,"Puntos"),e.qZA(),e.qZA(),e.TgZ(29,"ion-col",14),e.TgZ(30,"ion-text"),e._uU(31,"Fecha del pedido"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"ion-content"),e.TgZ(33,"ion-refresher",16),e.NdJ("ionRefresh",function(d){return t.reset(d)}),e._UZ(34,"ion-refresher-content"),e.qZA(),e.TgZ(35,"div",17),e.YNc(36,b,2,1,"ion-grid",18),e.TgZ(37,"ion-infinite-scroll",19),e.NdJ("ionInfinite",function(d){return t.infiniteLoad(d)}),e._UZ(38,"ion-infinite-scroll-content",20),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.Q6J("translucent",!1),e.xp6(36),e.Q6J("ngIf",t.exchanges.length>0))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.gu,s.Nd,s.wI,s.VI,s.j9,s.Ie,s.Q$,s.t9,s.QI,s.n0,s.yW,s.W2,s.nJ,s.Wo,x.O5,s.ju,s.MB,s.jY,x.sg],styles:['ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#4b4b4d!important}.header-row[_ngcontent-%COMP%]{border-radius:0%;border:0px}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.header-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{color:#fff!important;font-size:1.2rem;text-align:center}.row[_ngcontent-%COMP%]{color:#fff;font-size:1.1rem;background-color:#fff!important;border:1px solid #b3b3b3;border-radius:25px;margin:.6% 1%;cursor:pointer}.body[_ngcontent-%COMP%]{background:#d0e5f0!important;font-family:"Roboto",sans-serif;color:#4b4b4d;min-height:100%}ion-icon[_ngcontent-%COMP%]{pointer-events:none}']}),r})()}];let A=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[_.Bz.forChild(P)],_.Bz]}),r})(),G=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[],imports:[[x.ez,Z.u5,s.Pc,A]]}),r})()}}]);