(this.webpackJsonpgigue=this.webpackJsonpgigue||[]).push([[0],{188:function(e,t,a){},189:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),s=a(79),l=a.n(s),i=(a(54),a(8)),c=a(7),o=a(10),u=a(9),m=a(6),h=a(11),p=(a(91),a(20),a(14)),d=a(80),g=a.n(d),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.onZipChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:g.a})),r.a.createElement("div",{className:"main-link"},r.a.createElement(p.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"header-title"},"Gigue"))),r.a.createElement("div",{className:"help-link"},r.a.createElement(p.b,{to:"/Help",style:{textDecoration:"none"}},r.a.createElement("div",{className:"help"},"Help")))))}}]),t}(r.a.Component),b=a(21),v=(a(57),a(197)),y=a(198),f=a(199),A=a(200),N=a(201),j=a(202),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={artist:"",result:[]},a.setQuery=a.setQuery.bind(Object(m.a)(a)),a.setArtist=a.setArtist.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setQuery",value:function(e){this.setState((function(t){return{query:e}}))}},{key:"setArtist",value:function(e){this.setState((function(t){return console.log("artist is: ",e),{artist:e}}))}},{key:"render",value:function(){var e=this,t=this.props;t.eventsData,t.tmEventsData,t.toArtistPage;return console.log("props.eventsData: ",this.props.eventsData),r.a.createElement("div",null,r.a.createElement("h2",{className:"section-title"},"Upcoming Shows"),r.a.createElement("div",{className:"tabs"},r.a.createElement(v.a,null,this.props.eventsData.map((function(t){return r.a.createElement(y.a,{sm:"6",key:t.EventName},r.a.createElement(f.a,{className:"media-body"},r.a.createElement(f.a,{body:!0,className:"cards-body"},r.a.createElement(A.a,null,r.a.createElement(N.a,null,t.EventName),r.a.createElement(j.a,null,t.Venue," | ",t.StartDate," | ",t.Location," |"," "),r.a.createElement("div",{className:"test"},r.a.createElement("button",{className:"btn-primary mr-3"},r.a.createElement("a",{href:t.Uri,className:"card-link"},"Purchase Tickets")),r.a.createElement("div",{className:"right-btn"},r.a.createElement("button",{className:"btn-primary mr-3",onClick:function(){return e.props.toArtistPage(t.Headliners[0],t.Location)}},"Explore Artist")))))))})))),r.a.createElement("div",null,r.a.createElement("h2",{className:"section-title-2"},"Stats in your city")))}}]),t}(r.a.Component),C=a(83),O=a.n(C),S=a(52),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={events:[],chartDataVenues:{labels:[],datasets:[{label:"Amounts",data:[]}]},chartDataArtist:{labels:["Solo Headliner","Headliner with One Support","Headliners with Multiple Supports","More than one Headliner","More than one Headliner, more than one Support"],datasets:[{data:[],backgroundColor:["red","blue","green","orange","purple"]}]}},a.toArtistPage=function(e,t){return a.props.history.push({pathname:"/ArtistPage",state:{artist:e,location:t}})},a.state={done:void 0,error:!1,errorMsg:void 0},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.toArtistPage=a.toArtistPage.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t="https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:"+this.props.zip+"&key=AIzaSyBNWms-eVzSQmo6leT8Re4yBrpmC9tx-h0";fetch(t).then((function(e){return e.json()})).then((function(e){if(0==e.results.length)throw"Invalid Zipcode!";return console.log(e),e.results})).then((function(e){return e[0].geometry.location})).then((function(e){var t="https://api.songkick.com/api/3.0/search/locations.json?location=geo:"+e.lat.toFixed(2)+","+e.lng.toFixed(2)+"&apikey=nD4GefUecMO1Dzwh";return console.log(t),t})).then((function(t){fetch(t).then((function(e){return e.json()})).then((function(e){if(console.log(e),"0"==e.resultsPage.totalEntries)throw"Area out of range";return e.resultsPage.results})).then((function(e){var t="https://api.songkick.com/api/3.0/metro_areas/"+e.location[0].metroArea.id+"/calendar.json?apikey=nD4GefUecMO1Dzwh";return console.log(t),t})).then((function(t){fetch(t).then((function(e){return e.json()})).then((function(e){if(console.log(e),console.log(e.resultsPage.results.event),0==e.resultsPage.totalEntries)throw"No Concerts in this Area!";return e.resultsPage.results.event})).then((function(t){var a=[],n=[],r=[0,0,0,0,0];console.log("data (important one): ",t);var s=t.map((function(e){var t={};t.EventName=e.displayName,t.Uri=e.uri,t.Venue=e.venue.displayName,t.StartDate=e.start.date,t.Location=e.location.city,t.Headliners=e.performance.filter((function(e){if("headline"==e.billing)return e})).map((function(e){return e.displayName})),t.SupportArtists=e.performance.filter((function(e){if("headline"!=e.billing)return e})).map((function(e){return e.displayName}));var s=a.indexOf(e.venue.displayName);return-1==s?(a.push(e.venue.displayName),n.push(1)):n[s]+=1,1==t.Headliners.length&&t[0=="SupportArtists".length]?r[0]+=1:1==t.Headliners.length&&1==t.SupportArtists.length?r[1]+=1:1==t.Headliners.length&&t.SupportArtists.length>1?r[2]+=1:t.Headliners.length>1&&0==t.SupportArtists.length?r[3]+=1:t.Headliners.length>1&&t.SupportArtists.length>1&&(r[4]+=1),t}));return console.log(s),e.setState({chartDataVenues:{labels:a,datasets:[{label:"Amounts",data:n,backgroundColor:"red"}]},chartDataArtist:{labels:["Solo Headliner","Headliner with One Support","Headliners with Multiple Supports","More than one Headliner","More than one Headliner, more than one Support"],datasets:[{data:r,backgroundColor:["red","blue","green","orange","purple"]}]}}),console.log(e.state.chartDataArtist),s})).then((function(t){e.setState({events:t,done:!0})})).catch((function(t){console.log(t),e.setState({error:!0,errorMsg:t})}))})).catch((function(t){console.log(t),e.setState({error:!0,errorMsg:t})}))})).catch((function(t){console.log(t),e.setState({error:!0,errorMsg:t})}))}}]),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.onZipChange(e.target.value)}},{key:"render",value:function(){var e=this.props.zip,t=this.state.events;return console.log("events: ",t),console.log("number of TM api calls: ",this.state.counter),""==e?(alert("No Zip is inputted - redirecting to main page"),r.a.createElement(b.a,{to:"/"})):r.a.createElement("div",null,this.state.error?r.a.createElement("div",{className:"error-msg"},r.a.createElement("h1",null,this.state.errorMsg)):this.state.done?r.a.createElement("div",{className:"LoadedInfo"},r.a.createElement(k,{eventsData:t,toArtistPage:this.toArtistPage}),r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",{className:"chart-area"},r.a.createElement(S.a,{data:this.state.chartDataVenues,options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1}}]}}})),r.a.createElement("div",{className:"chart-area chart-right"},r.a.createElement(S.b,{data:this.state.chartDataArtist,options:{responsive:!0}})))):r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{type:"bars",color:"white"})),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")))))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={value:"",toEvents:!1},a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.handleChangeZip=a.handleChangeZip.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChangeZip",value:function(e){this.props.onZipChange(e.target.value)}},{key:"handleSubmit",value:function(e){this.setState((function(){return{toEvents:!0}})),e.preventDefault()}},{key:"render",value:function(){return!0===this.state.toEvents?r.a.createElement(b.a,{to:"/Events"}):r.a.createElement("div",null,r.a.createElement("div",{className:"main-body"},r.a.createElement("div",{className:"main-question",id:"thisfontonly"},"What zip are you looking for?"),r.a.createElement("div",{className:"textbar-and-button"},r.a.createElement("input",{onChange:this.handleChangeZip,value:this.props.zip,type:"text",name:"city",id:"citylabel",style:{fontSize:"24pt"},className:"rcorners"}),r.a.createElement("div",{className:"buttons"},r.a.createElement("input",{onClick:this.handleSubmit,type:"submit",name:"submit",value:"Go!",id:"submit",className:"button"})))))}}]),t}(r.a.Component),x=(a(188),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card help-card"},r.a.createElement("div",{clasName:"card-body"},r.a.createElement("h2",{className:"section-title-3"},"About Gigue"),r.a.createElement("p",{className:"help-text"},"Gigue was designed to help put you in touch with local shows in your area."),r.a.createElement("p",{className:"help-text"},"Enter a zip code to see a chronological list of upcoming music shows, including the date and venue."),r.a.createElement("p",{className:"help-text"},'To purchase tickets, select the "Purchase Tickets" button under any given show.'),r.a.createElement("p",{className:"help-text"},'To explore top music by an artist, select the "Explore Artist" button under any show.'))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")))))}}]),t}(r.a.Component)),D=(a(189),a(203)),q=a(204),H=a(205),P=(a(190),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={artist:"",location:"",query:[]},a.setQuery=a.setQuery.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setQuery",value:function(e){this.setState((function(t){return{query:e}}))}},{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount");var t=this.props.location.state.artist.replace(/\s/g,"+");fetch("https://itunes.apple.com/search?term="+t+"&media=music&entity=song&limit=3").then((function(e){return e.json()})).then((function(t){e.setQuery(t)}))}},{key:"render",value:function(){console.log("this.state.query: ",this.state.query);var e,t,a,n,s,l,i,c,o,u,m,h,p="../images/icon.png",d="../images/icon.png",g="../images/icon.png",E="";return null!=this.state.query.results&&(p=(p=this.state.query.results[0].artworkUrl100).replace("100","600").replace("100","600"),d=(d=this.state.query.results[1].artworkUrl100).replace("100","600").replace("100","600"),g=(g=this.state.query.results[2].artworkUrl100).replace("100","600").replace("100","600"),e=this.state.query.results[0].collectionName,t=this.state.query.results[1].collectionName,a=this.state.query.results[2].collectionName,n=this.state.query.results[0].trackName,s=this.state.query.results[1].trackName,l=this.state.query.results[2].trackName,i=(i=(i=this.state.query.results[0].releaseDate).split("T"))[0],c=(c=(c=c=this.state.query.results[1].releaseDate).split("T"))[0],o=(o=(o=this.state.query.results[2].releaseDate).split("T"))[0],u=this.state.query.results[0].primaryGenreName,this.state.query.results[1].primaryGenreName,this.state.query.results[2].primaryGenreName,m=this.state.query.results[0].previewUrl,console.log("track1: ",m),h=this.state.query.results[1].previewUrl,E=this.state.query.results[2].previewUrl),r.a.createElement("div",null,r.a.createElement("div",{className:"artist-header"},r.a.createElement("h2",{className:"artist-header-text"},this.props.location.state.artist)),r.a.createElement("div",{className:"card-body"},r.a.createElement(D.a,null,r.a.createElement(A.a,{className:"song-card"},r.a.createElement(q.a,{top:!0,width:"100%",src:p}),r.a.createElement(H.a,{className:"song-card"},r.a.createElement(N.a,null,"Track: ",n),r.a.createElement("audio",{className:"player",src:m,controls:!0}),r.a.createElement(j.a,null,"Album: ",e),r.a.createElement(j.a,null,"Release Date: ",i),r.a.createElement(j.a,null,"Genre: ",u))),r.a.createElement(A.a,{className:"song-card"},r.a.createElement(q.a,{top:!0,width:"100%",src:d}),r.a.createElement(H.a,{className:"song-card"},r.a.createElement(N.a,null,"Track: ",s),r.a.createElement("audio",{className:"player",src:h,controls:!0}),r.a.createElement(j.a,null,"Album: ",t),r.a.createElement(j.a,null,"Release Date: ",c),r.a.createElement(j.a,null,"Genre: ",u))),r.a.createElement(A.a,{className:"song-card"},r.a.createElement(q.a,{top:!0,width:"100%",src:g}),r.a.createElement(H.a,{className:"song-card"},r.a.createElement(N.a,null,"Track: ",l),r.a.createElement("audio",{className:"player",src:E,controls:!0}),r.a.createElement(j.a,null,"Album: ",a),r.a.createElement(j.a,null,"Release Date: ",o),r.a.createElement(j.a,null,"Genre: ",u))))))}}]),t}(r.a.Component)),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleZipChange=function(e){a.setState({zip:e})},a.state={zip:""},a.handleZipChange=a.handleZipChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.zip;return r.a.createElement("div",{className:"App"},r.a.createElement(E,{zip:t}),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",render:function(a){return r.a.createElement(w,Object.assign({},a,{zip:t,onZipChange:e.handleZipChange}))}}),r.a.createElement(b.b,{exact:!0,path:"/Events",render:function(a){return r.a.createElement(M,Object.assign({},a,{zip:t,onZipChange:e.handleZipChange}))}}),r.a.createElement(b.b,{exact:!0,path:"/Help",component:x}),r.a.createElement(b.b,{exact:!0,path:"/ArtistPage",render:function(e){return r.a.createElement(P,e)}})))}}]),t}(n.Component);l.a.render(r.a.createElement(p.a,null,r.a.createElement(G,null)),document.getElementById("root"))},20:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},80:function(e,t){e.exports="data:image/png;base64,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"},86:function(e,t,a){e.exports=a(196)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.f40ef89d.chunk.js.map