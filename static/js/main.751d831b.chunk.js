(this.webpackJsonpredventures=this.webpackJsonpredventures||[]).push([[0],[,,function(e,t){e.exports={robotTasks:[{description:"Do the Dishes",eta:4},{description:"Sweep the House",eta:5},{description:"Do the Laundry",eta:10},{description:"Take out the Recycling",eta:6},{description:"Make a Sammich",eta:7},{description:"Mow the Lawn",eta:20},{description:"Rake the Leaves",eta:18},{description:"Give the Dog a Bath",eta:13},{description:"Bake some Cookies",eta:8},{description:"Wash the Car",eta:5}],robotTypes:[{UNIPEDAL:"Unipedal",BIPEDAL:"Bipedal",QUADRUPEDAL:"Quadrupedal",ARACHNID:"Arachnid",RADIAL:"Radial",AERONAUTICAL:"Aeronautical"}],imageLoc:{UNIPEDAL:"https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/unipedal.PNG?raw=true",BIPEDAL:"https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/bipedal.PNG?raw=true",QUADRUPEDAL:"https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/quad.PNG?raw=true",ARACHNID:"https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/arachnid.PNG?raw=true",RADIAL:"https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/air.PNG?raw=true",AERONAUTICAL:"https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/radial.PNG?raw=true"}}},,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(10),s=a.n(n),i=(a(18),a(19),a(20),a(11)),l=a(3),c=a(4),m=a(1),d=a(6),p=a(5),u=a(12),b=a(2),h=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={time:r.props.value},r.startTimer=r.startTimer.bind(Object(m.a)(r)),r}return Object(c.a)(a,[{key:"startTimer",value:function(e){var t=this;e.target.classList.add("d-none");var a="robot".concat(this.props.num,"task").concat(this.props.description),r=document.getElementById(a);r.style.backgroundColor="yellow",r.style.fontWeight="bold",r.style.borderLeft="4px solid blue",this.timer=setInterval((function(){0===t.state.time?(clearInterval(t.timer),r.style.backgroundColor="#56f58e",r.style.borderLeft="4px solid gold",r.innerHTML=t.props.description.split("task")[1]+" - Complete!"):t.setState({time:t.state.time-1})}),1e3)}},{key:"render",value:function(){return o.a.createElement("button",{key:this.props.index,value:this.props.value,id:"robot".concat(this.props.num,"task").concat(this.props.description),className:"list-group-item",style:{borderLeft:"4px solid green",textAlign:"left"}},this.props.description.split("task")[1]," - (",this.state.time,") seconds",o.a.createElement("button",{className:"ml-1 btn btn-sm",onClick:this.startTimer,style:{backgroundColor:"#b545de",color:"white"}},"Start!"))}}]),a}(o.a.Component),g=function e(t,a,r){Object(l.a)(this,e),this.name=t,this.type=a,this.indexArray=r},f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={progress:{}},r.getCard=r.getCard.bind(Object(m.a)(r)),r}return Object(c.a)(a,[{key:"getCard",value:function(e){var t=String(e.target.id),a=parseInt(e.target.value);e.target.classList.add("d-none");var r=this.state.progress;r[t]=a,this.setState({progress:r})}},{key:"renderState",value:function(){var e=this.state.progress;return Object.keys(e).map((function(t){return[t,e[t]]}))}},{key:"render",value:function(){var e=this,t=[],a=this.renderState();console.log(a);for(var r=this.props.randArray,n=0;n<r.length;n++)t.push(b.robotTasks[r[n]]);var s=a.map((function(t,a){var r=Object(u.a)(t,2),n=r[0],s=r[1];return o.a.createElement(h,{description:n,key:a,value:s,index:a,num:e.props.num})})),i=t.map((function(t,a){return o.a.createElement("button",{key:a,value:t.eta,onClick:e.getCard,id:"robot".concat(e.props.num,"task").concat(t.description),className:"list-group-item",style:{textAlign:"left",borderLeft:"4px solid green"}},t.description," - (",t.eta,") seconds")}));return o.a.createElement("div",{className:"col-md-auto"},o.a.createElement("div",{className:"card ml-2 mr-2 mt-3 mb-3",id:"robot".concat(this.props.num),style:{borderRadius:"12px",border:"5px solid #b545de"}},o.a.createElement("div",{className:"card-header",style:{backgroundColor:"#b545de"}}),o.a.createElement("h4",{className:"card-title ml-3 mt-2",style:{textAlign:"left",marginBottom:"6px",fontSize:"13px"}},this.props.type),o.a.createElement("h4",{className:"card-title ml-3",style:{textAlign:"left",fontWeight:"bold"}},this.props.name),o.a.createElement("p",{style:{borderTop:"2px solid gold"},className:"mr-3 ml-3"}),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("img",{className:"card-img-top",src:b.imageLoc[this.props.type.toUpperCase()],alt:"robot-img",style:{maxHeight:"8rem",maxWidth:"10rem"}})),o.a.createElement("p",{style:{borderTop:"2px solid gold"},className:"mr-3 ml-3"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("ul",{className:"list-group list-group-flush"},s,i))))}}]),a}(o.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).sendData=r.sendData.bind(Object(m.a)(r)),r}return Object(c.a)(a,[{key:"sendData",value:function(e){e.preventDefault();var t=document.getElementById("name").value,a=document.getElementById("robot-select").value;if(t&&a){var r=new g(t,a,this.getRandom());this.props.addNames(r)}else alert("Please give your robot a name and a type!")}},{key:"getRandom",value:function(){for(var e=[],t=0;t<b.robotTasks.length;t++)e.push(t);for(t=0;t<b.robotTasks.length;t++){var a=Math.floor(Math.random()*b.robotTasks.length),r=e[t];e[t]=e[a],e[a]=r}return e.length>4?e.slice(6):e}},{key:"render",value:function(){var e=Object.keys(b.robotTypes[0]).map((function(e,t){return o.a.createElement("option",{value:b.robotTypes[0][e],key:"type".concat(t)},b.robotTypes[0][e])}));return o.a.createElement("div",{className:"container mt-5 mb-5 d-flex justify-content-center",style:{border:"5px solid #b545de",borderRadius:"12px"}},o.a.createElement("form",{onSubmit:this.sendData,id:"robot-form"},o.a.createElement("div",{className:"form-row mt-3"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"name",style:{fontWeight:"bold"}},"Robot Name"),o.a.createElement("input",{type:"text",placeholder:"Enter Name",id:"name",className:"form-control"})),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"robot-select",style:{fontWeight:"bold"}},"Robot Type"),o.a.createElement("select",{form:"robot-form",id:"robot-select",className:"form-control"},e))),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("button",{type:"submit",className:" btn btn-primary mb-3 btn-block",style:{backgroundColor:"#b545de",color:"white",border:"none"}},"Submit"))))}}]),a}(o.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={names:[]},r.addNames=r.addNames.bind(Object(m.a)(r)),r}return Object(c.a)(a,[{key:"addNames",value:function(e){this.setState({names:[].concat(Object(i.a)(this.state.names),[e])})}},{key:"renderRobot",value:function(){for(var e=[],t=0;t<this.state.names.length;t++){var a=this.state.names[t];e.push(o.a.createElement(f,{name:a.name,type:a.type,key:t,num:t,randArray:a.indexArray}))}return e}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{class:"navbar d-flex justify-content-center",style:{backgroundColor:"#b545de"}},o.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold",fontSize:"50px",display:"block",color:"white"},className:"m-2"},"Bot-O-Mat")),o.a.createElement(y,{addNames:this.addNames}),o.a.createElement("div",{className:"container-fluid col-sm-12 col-lg-9"},o.a.createElement("div",{className:"row d-flex justify-content-center mx-auto"},this.renderRobot())))}}]),a}(o.a.Component);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.751d831b.chunk.js.map