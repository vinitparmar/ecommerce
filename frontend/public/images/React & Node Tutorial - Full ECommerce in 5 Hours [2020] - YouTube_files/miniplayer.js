(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.O().ia("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.H=a;this.na("click",this.onClick,this);this.ma("title",g.rO(a,e,"i"));g.Le(this,g.dP(b.wb(),this.element))},P5=function(a){g.U.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.kl=!1;this.player=a;this.L(a,"minimized",this.Jh);this.L(a,"onStateChange",this.cP)},Q5=function(a){g.KN.call(this,a);
this.o=new P5(this.player);this.o.hide();g.wN(this.player,this.o.element,4);a.app.I.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(O5,g.U);O5.prototype.onClick=function(){this.H.ra("onExpandMiniplayer")};g.t(P5,g.U);g.k=P5.prototype;
g.k.show=function(){this.Fc=new g.xn(this.Jn,null,this);this.Fc.start();if(!this.kl){this.tooltip=new g.pS(this.player,this);g.C(this,this.tooltip);g.wN(this.player,this.tooltip.element,4);this.tooltip.Ud=.6;this.tb=new g.XO(this.player);g.C(this,this.tb);this.Xi=new g.U({D:"div",J:"ytp-miniplayer-scrim"});g.C(this,this.Xi);this.Xi.ca(this.element);this.L(this.Xi.element,"click",this.tC);var a=new g.U({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.sM()]});
g.C(this,a);a.ca(this.Xi.element);this.L(a.element,"click",this.Gl);a=new O5(this.player,this);g.C(this,a);a.ca(this.Xi.element);this.rj=new g.U({D:"div",J:"ytp-miniplayer-controls"});g.C(this,this.rj);this.rj.ca(this.Xi.element);this.L(this.rj.element,"click",this.tC);var b=new g.U({D:"div",J:"ytp-miniplayer-button-container"});g.C(this,b);b.ca(this.rj.element);a=new g.U({D:"div",J:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ca(this.rj.element);var c=new g.U({D:"div",J:"ytp-miniplayer-button-container"});
g.C(this,c);c.ca(this.rj.element);this.PC=new g.QQ(this.player,this,!1);g.C(this,this.PC);this.PC.ca(b.element);b=new g.MQ(this.player,this);g.C(this,b);b.ca(a.element);this.nextButton=new g.QQ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ca(c.element);this.fg=new g.$R(this.player,this);g.C(this,this.fg);this.fg.ca(this.Xi.element);this.jc=new g.ZQ(this.player,this);g.C(this,this.jc);g.wN(this.player,this.jc.element,4);this.Fq=new g.U({D:"div",J:"ytp-miniplayer-buttons"});g.C(this,
this.Fq);g.wN(this.player,this.Fq.element,4);a=new g.U({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.sM()]});g.C(this,a);a.ca(this.Fq.element);this.L(a.element,"click",this.Gl);a=new g.U({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.HM()]});g.C(this,a);a.ca(this.Fq.element);this.L(a.element,"click",this.eN);this.L(this.player,"presentingplayerstatechange",this.Ub);this.L(this.player,"appresize",this.Pa);this.L(this.player,
"fullscreentoggled",this.Pa);this.Pa();this.kl=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Fc&&(this.Fc.dispose(),this.Fc=void 0);g.U.prototype.hide.call(this);this.player.app.I.o||(this.kl&&this.jc.hide(),this.player.loadModule("annotations_module"))};
g.k.X=function(){this.Fc&&(this.Fc.dispose(),this.Fc=void 0);g.U.prototype.X.call(this)};
g.k.Gl=function(){this.player.stopVideo();this.player.ra("onCloseMiniplayer")};
g.k.eN=function(){this.player.playVideo()};
g.k.tC=function(a){if(a.target===this.Xi.element||a.target===this.rj.element)g.P(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.kH(g.jM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ra("onExpandMiniplayer")};
g.k.Jh=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.I.o)};
g.k.Xc=function(){this.jc.Wb();this.fg.Wb()};
g.k.Jn=function(){this.Xc();this.Fc&&this.Fc.start()};
g.k.Ub=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Pa=function(){this.jc.setPosition(0,g.fN(this.player).getPlayerSize().width,!1);this.jc.Rw()};
g.k.cP=function(a){this.player.app.I.o&&(0===a?this.hide():this.show())};
g.k.wb=function(){return this.tooltip};
g.k.Jc=function(){return!1};
g.k.me=function(){return!1};
g.k.Kf=function(){return!1};
g.k.ow=function(){};
g.k.tj=function(){};
g.k.Em=function(){};
g.k.Ej=function(){return null};
g.k.al=function(){return new g.wh(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Jl=function(a,b,c,d,e){var f=0,h=d=0,l=g.Sh(a);if(b){c=g.En(b,"ytp-prev-button")||g.En(b,"ytp-next-button");var m=g.En(b,"ytp-play-button"),n=g.En(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ph(b,this.element),h=b.x,f=b.y-12):n&&(h=g.En(b,"ytp-miniplayer-button-top-left"),f=g.Ph(b,this.element),b=g.Sh(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.fN(this.player).getPlayerSize().width;e=f+(e||0);l=g.Td(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Nh=function(){};
g.k.mh=function(){return!1};g.t(Q5,g.KN);Q5.prototype.create=function(){};
Q5.prototype.Zf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.VN.miniplayer=Q5;})(_yt_player);
