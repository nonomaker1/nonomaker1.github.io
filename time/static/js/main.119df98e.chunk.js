(this.webpackJsonpreset=this.webpackJsonpreset||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(9),s=n.n(r),o=(n(15),n(7)),i=n(4),l=n(1),u=n(3),d=n(10),j=n.p+"static/media/math.57451d0c.svg";function b(e){return e?parseFloat(e,10).toFixed(3):0}var h=n.p+"static/media/literature.ad8faa2b.svg",m=[{type:"math",icon:j,isUnlocked:function(){return!0}},{type:"science",icon:n.p+"static/media/atom.e5a95f42.svg",isUnlocked:function(e){return e.knowledge.math>100},unlockExplanation:"Reach 100 Math Knowledge to unlock"},{type:"history",icon:n.p+"static/media/history.e804b387.svg",isUnlocked:function(e){return e.knowledge.science>150},unlockExplanation:"Reach 150 Science Knowledge to unlock"},{type:"literature",icon:h,isUnlocked:function(e){return e.knowledge.history>500},unlockExplanation:"Reach 500 History Knowledge to unlock"}].map((function(e){var t=e.type;return Object(l.a)(Object(l.a)({},e),{},{explanation:"Study ".concat(t,".\n    Earn Knowledge: (1 + wisdom ^ .5)/s\n    Earn Wisdom: 1/s"),act:function(e,n){return{knowledge:Object(l.a)(Object(l.a)({},e.knowledge),{},Object(u.a)({},t,(e.knowledge[t]||0)+n*(1+Math.pow(e.wisdom[t]||0,.5)))),wisdom:Object(l.a)(Object(l.a)({},e.wisdom),{},Object(u.a)({},t,(e.wisdom[t]||0)+n))}},showCumulativeEffects:function(e,n){var a=(null===e||void 0===e?void 0:e.knowledge)||{},c=(null===n||void 0===n?void 0:n.knowledge)||{},r=(null===e||void 0===e?void 0:e.wisdom)||{},s=(null===n||void 0===n?void 0:n.wisdom)||{};return"".concat(t," knowledge: ").concat(b(a[t])," -> ").concat(b(c[t]),"\n").concat(t," wisdom: ").concat(b(r[t])," -> ").concat(b(s[t]))}})})),p=n.p+"static/media/shield.6f1c88ce.svg",f=[{type:"attack",icon:n.p+"static/media/swords.70ba0c4f.svg",unlockExplanation:"Buy a sword to unlock.",isUnlocked:function(e){return e.equipment.sword>0},requires:"sword"},{type:"defense",icon:p,unlockExplanation:"Buy a shield to unlock.",isUnlocked:function(e){return e.equipment.shield>0},requires:"shield"}].map((function(e){var t=e.type;return Object(l.a)(Object(l.a)({},e),{},{explanation:"Train ".concat(t,".\n    Earn Attributes: ((1 + skill) ^ .5)/s\n    Earn Skill: .1/s\n    Requires ").concat(e.requires),act:function(n,a){return n.equipment[e.requires]?{success:!0,attributes:Object(l.a)(Object(l.a)({},n.attributes),{},Object(u.a)({},t,(n.attributes[t]||0)+a*Math.pow(1+(n.skills[t]||0),.5))),skills:Object(l.a)(Object(l.a)({},n.skills),{},Object(u.a)({},t,(n.skills[t]||0)+a/10))}:{success:!1}},showCumulativeEffects:function(e,n){if(!e)return"";if(!e.success)return"Need to purchase a sword first";var a=((null===e||void 0===e?void 0:e.attributes)||{})[t],c=((null===n||void 0===n?void 0:n.attributes)||{})[t],r=((null===e||void 0===e?void 0:e.skills)||{})[t],s=((null===n||void 0===n?void 0:n.skills)||{})[t];return"".concat(t,": ").concat(a," -> ").concat(c,"\nSkill: ").concat(r," -> ").concat(s)}})})),v=[{type:"Research Time",name:"Time",icon:n.p+"static/media/hourglass.baa3c0e6.svg",explanation:"Study Time.\n  Every level unlocked add 1s to initial time.\n  Progress (Science Knowledge / (10 ^ level))%/s",unlockExplanation:"Reach 50 science knowledge to unlock",isUnlocked:function(e){return e.knowledge.science>50}},{type:"Research Memory",name:"Memory",icon:n.p+"static/media/brain.5fc1c4e4.svg",explanation:"Study Memory.\n  Every level unlocked saves 1% of knowledge at the end of the day.\n  Progress ((Science Knowledge + History Knowledge) / 5) / (10 ^ nextLevel)%/s",unlockExplanation:"Reach 250 science and 100 history to unlock",isUnlocked:function(e){return e.knowledge.science>=100&&e.knowledge.history>=50}}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{act:function(t,n){var a=(t.researchProgress[e.name]||0)+n*(t.knowledge.science||0)/Math.pow(10,(t.researchTotals[e.name]||0)+1),c=Math.floor(a)-Math.floor(t.researchProgress[e.name]||0);return{researchProgress:Object(l.a)(Object(l.a)({},t.researchProgress),{},Object(u.a)({},e.name,a)),researchTotals:Object(l.a)(Object(l.a)({},t.researchTotals),{},Object(u.a)({},e.name,(t.researchTotals[e.name]||0)+c))}},showCumulativeEffects:function(t,n){var a=((null===t||void 0===t?void 0:t.researchTotals)||{})[e.name]||0,c=((null===n||void 0===n?void 0:n.researchTotals)||{})[e.name]||0,r=((null===n||void 0===n?void 0:n.researchProgress)||{})[e.name]||0;return"Levels Gained: ".concat(c-a,"\n      Level Progress: ").concat(100*r,"%")}})})),O=n.p+"static/media/money.d39c5061.svg",y=n.p+"static/media/coffee.de84535d.svg",g=n.p+"static/media/stocks.037f2274.svg",k=[{type:"intern",icon:y,explanation:"Get coffee for important people.\n  Earn $(salary)/s",unlockExplanation:"Reach 25 Math Knowledge to unlock",isUnlocked:function(e){return e.knowledge.math>25},act:function(e,t){return{career:Object(l.a)(Object(l.a)({},e.career),{},{money:e.career.money+t*e.career.salary})}},showCumulativeEffects:function(e,t){var n,a,c=(null===e||void 0===e||null===(n=e.career)||void 0===n?void 0:n.money)||0,r=(null===t||void 0===t||null===(a=t.career)||void 0===a?void 0:a.money)||0;return"$".concat(b(c)," -> $").concat(b(r))}},{type:"job search",explanation:"Look around for something better.\n  Raise Salary: $((history knowledge ^ .1) / 2.5)/s",icon:n.p+"static/media/cv.bb9a49fe.svg",unlockExplanation:"Reach 150 History Knowledge to unlock",isUnlocked:function(e){return e.knowledge.history>150},act:function(e,t){return{career:Object(l.a)(Object(l.a)({},e.career),{},{salary:e.career.salary+t*(Math.pow(e.knowledge.history||0,.1)/2.5)})}},showCumulativeEffects:function(e,t){var n,a,c=null===e||void 0===e||null===(n=e.career)||void 0===n?void 0:n.salary,r=null===t||void 0===t||null===(a=t.career)||void 0===a?void 0:a.salary;return"$".concat(b(c),"/s -> $").concat(b(r),"/s")}},{type:"invest",explanation:"Put your money in a fund, earn passive income.",icon:g,unlockExplanation:"Reach 500 History Knowledge to unlock",isUnlocked:function(e){return e.knowledge.history>500},instant:!0,act:function(e,t){return{spent:e.career.money,career:Object(l.a)(Object(l.a)({},e.career),{},{invested:(e.career.invested||0)+e.career.money,money:0})}},showCumulativeEffects:function(e){var t=(null===e||void 0===e?void 0:e.spent)||0;return"Invested $".concat(t)}},{type:"divest",explanation:"Take your investment money back",icon:O,unlockExplanation:"Reach 500 History Knowledge to unlock",isUnlocked:function(e){return e.knowledge.history>500},instant:!0,act:function(e,t){return{earned:e.career.invested,career:Object(l.a)(Object(l.a)({},e.career),{},{invested:0,money:(e.career.money||0)+(e.career.invested||0)})}},showCumulativeEffects:function(e){return"Withdrew $".concat((null===e||void 0===e?void 0:e.earned)||0)}}],x=[{type:"Buy Time",instant:!0,icon:n.p+"static/media/time_backwards.2cd04d1b.svg",explanation:"Spend all your money to get some time back.\n  Gain (1 + (math knowledge ^ .2))/$1\n  Only usable once per life per life",max:1,unlockExplanation:"Earn $3 to unlock",isUnlocked:function(e){return e.career.money>3},act:function(e,t){return{spent:e.career.money,timeLeft:e.timeLeft+e.career.money*Math.pow(Math.max(e.knowledge.math||0,1),.2),career:Object(l.a)(Object(l.a)({},e.career),{},{money:0}),startTime:e.timeLeft}},showCumulativeEffects:function(e,t){var n=(null===e||void 0===e?void 0:e.startTime)||0,a=(null===e||void 0===e?void 0:e.timeLeft)||0,c=(null===e||void 0===e?void 0:e.spent)||0;return"$".concat(b(c)," -> $0\n    ").concat(b(n),"s -> ").concat(b(a),"s")}},{type:"Buy Sword",instant:!0,explanation:"Buy a cheap sword.\n  Spend $10, gain a sword. (attack + 8)",max:1,icon:n.p+"static/media/sword.0e7b1eb8.svg",unlockExplanation:"Reach $10 to unlock",isUnlocked:function(e){return e.career.money>10},act:function(e,t){return e.career.money<10?{success:!1}:{success:!0,unlocks:Object(l.a)(Object(l.a)({},e.unlocks),{},{sword:!0}),career:Object(l.a)(Object(l.a)({},e.career),{},{money:e.career.money-10}),equipment:Object(l.a)(Object(l.a)({},e.equipment),{},{sword:1}),attributes:Object(l.a)(Object(l.a)({},e.attributes),{},{attack:(e.attributes.attack||0)+8})}},showCumulativeEffects:function(e,t){return e?e.success?"Spent $10, bought a sword":"Not enough $":""}},{type:"Buy Shield",instant:!0,explanation:"Buy a cheap shield.\n  Spend $25, gain a shield. (defense + 15)",max:1,icon:p,unlockExplanation:"Reach $25 to unlock",isUnlocked:function(e){return e.career.money>25},act:function(e,t){return e.career.money<25?{success:!1}:{success:!0,unlocks:Object(l.a)(Object(l.a)({},e.unlocks),{},{shield:!0}),career:Object(l.a)(Object(l.a)({},e.career),{},{money:e.career.money-25}),equipment:Object(l.a)(Object(l.a)({},e.equipment),{},{shield:1}),attributes:Object(l.a)(Object(l.a)({},e.attributes),{},{defense:(e.attributes.defense||0)+8})}},showCumulativeEffects:function(e,t){return e?e.success?"Spent $25, bought a shield":"Not enough $":""}}],w=n.p+"static/media/down.13cae114.svg",E=n.p+"static/media/left.48618941.svg",T=n.p+"static/media/up.571e14ce.svg",N=n.p+"static/media/right.0b846007.svg",M={none:{type:"none",getEffects:function(e){return{}}},enemy:{type:"enemy",getEffects:function(e,t){var n=Math.max(0,t.attack-(e.attributes.defense||0)),a=Math.max(0,e.attributes.health-n),c=Math.max(0,(e.attributes.attack||0)-t.defense),r=a>0?Math.max(0,t.health-c):t.health;return{state:Object(l.a)(Object(l.a)({},e),{},{attributes:Object(l.a)(Object(l.a)({},e.attributes),{},{health:a})}),stats:{health:r}}}},special:{type:"special",getEffects:function(e,t){var n=Object(l.a)({},e.knowledge);return Object.keys(t.knowledge).forEach((function(e){console.log("Adding: "+e),console.log(n[e]+" "+t.knowledge[e]),n[e]=(n[e]||0)+t.knowledge[e],console.log(n[e])})),console.log(n),{state:{knowledge:Object(l.a)(Object(l.a)({},e.knowledge),n)},stats:{}}}},health:{type:"health",getEffects:function(e,t){var n=Math.min(e.skills.health,e.attributes.health+t.health),a=n-e.attributes.health,c=t.health-a;return{state:Object(l.a)(Object(l.a)({},e),{},{attributes:Object(l.a)(Object(l.a)({},e.attributes),{},{health:n})}),stats:{health:c}}}},treasure:{type:"treasure",getEffects:function(e,t){return{state:Object(l.a)(Object(l.a)({},e),{},{timeLeft:e.timeLeft+t.time,career:Object(l.a)(Object(l.a)({},e.career),{},{money:e.career.money+(t.money||0)})}),stats:{money:0}}}}};var S=[["n","e","t","s","e","n","e","n","e","t"],["e","s","e","e","n","e","t","e","n","e"],["n","h","t","e","n","n","e","n","n","e"],["t","n","s","n","n","e","h","e","n","n"],["n","n","e","h","n","s","n","e","n","n"],["h","e","t","e","e","e","h","n","n","n"],["e","n","n","t","e","n","n","n","t","e"],["n","e","h","n","n","s","h","e","e","e"],["n","e","n","n","e","e","n","n","n","n"],["e","e","e","e","s","e","e","e","h","t"]];function L(e,t){switch(S[e][t]){default:return{type:"none",getEffects:function(e,t){return{}}};case"e":return function(e,t,n){return{type:"enemy",stats:{attack:e,defense:t,health:n}}}(e+t,e+t,3*e+t);case"t":var n=0,a=0;return e%2===0?n=(e+1)*(t+1)*2:a=(e+1)*(t+1)*3,function(e,t){return{type:"treasure",stats:{money:e,time:t}}}(n,a);case"h":return function(e){return{type:"health",stats:{health:e}}}(1+2*t);case"s":return function(e,t){return t<2?{type:"special",stats:{knowledge:{math:100}}}:t<5?{type:"special",stats:{knowledge:{science:200}}}:t<8?{type:"special",stats:{knowledge:{history:450}}}:{type:"special",stats:{knowledge:{math:875}}}}(0,t)}}function R(){for(var e=[],t=0;t<10;t++){for(var n=[],a=0;a<10;a++)n.push(L(t,a));e.push(n)}return e}var C=[{name:"School",actions:m},{name:"Business",actions:k},{name:"Store",actions:x},{name:"Research Lab",actions:v},{name:"Training Gym",actions:f},{name:"Adventure",actions:[{name:"Right",move:function(e){return{x:e.x+1,y:e.y}},icon:N},{name:"Down",move:function(e){return{x:e.x,y:e.y-1}},icon:w},{name:"Left",move:function(e){return{x:e.x-1,y:e.y}},icon:E},{name:"Up",move:function(e){return{x:e.x,y:e.y+1}},icon:T}].map((function(e){return{type:"Move ".concat(e.name),explanation:"Move ".concat(e.name,".\n  Take 1 step/s."),icon:e.icon,unlockExplanation:"Reach attack of 10 to unlock.",isUnlocked:function(e){return e.attributes.attack>10},act:function(t,n){for(var a=t.adventure.steps+n/1,c=Math.floor(a)-Math.floor(t.adventure.steps),r=t.adventure.position,s={},o=t.adventure.board,i=function(){var n,a=t.adventure.board[r.y][r.x],i=function(e,t,n){return M[e].getEffects(t,n)}(a.type,t,a.stats);s=Object(l.a)(Object(l.a)({},s),i.state);var u=r;if((null===(n=i.stats)||void 0===n?void 0:n.health)&&"enemy"===a.type);else{var d=e.move(r);d.x<0||d.x>=10||d.y<0||d.y>=10||(u=d)}c-=1;var j=t.boardTracker.map((function(e,t){return e.map((function(e,n){return n===u.x&&t===u.y||e}))})),b=r;o=t.adventure.board.map((function(e,t){return e.map((function(e,n){return e.stats&&n===b.x&&t===b.y?Object(l.a)(Object(l.a)({},e),{},{stats:Object(l.a)(Object(l.a)({},e.stats),i.stats)}):e}))})),r=u,s=Object(l.a)(Object(l.a)({},s),{},{boardTracker:j,board:o})};c>0;)i();return Object(l.a)(Object(l.a)({},s),{},{adventure:Object(l.a)(Object(l.a)(Object(l.a)({},t.adventure),s.adventure),{},{position:r,steps:a,board:o})})}}}))}],D=C.map((function(e){return e.actions})).flat(),$=new Map,U=new Map,I=new Map;function q(e,t,n){return $.get(e.type)(t,n)}function F(e){var t=I.get(e.type);return t?t(e.initEffects,e.endEffects):""}D.forEach((function(e){$.set(e.type,e.act),I.set(e.type,e.showCumulativeEffects),e.isUnlocked&&U.set(e.type,e.isUnlocked)}));var P={timeLeft:5,actionIndex:0,knowledge:{math:0},career:{money:0,salary:1},researchProgress:{Time:0,Memory:0},adventure:{steps:0,position:{x:0,y:0},board:R()},equipment:{},attributes:{}},A=localStorage.getItem("save-game"),B=A?JSON.parse(A):Object(l.a)({day:0,currentDay:[],plan:[],settings:{repeatLast:!0,paused:!1},wisdom:{math:0},researchTotals:{Time:0},skills:{attack:0,defense:0,health:5},unlocks:{math:!0},boardTracker:function(){for(var e=[],t=0;t<10;t++){for(var n=[],a=0;a<10;a++)n.push(0===t&&0===a);e.push(n)}return e}()},P);function K(e){var t={};Object.keys(e.knowledge).forEach((function(n){t[n]=.01*e.knowledge[n]*(e.researchTotals.Memory||0)}));var n=Object(l.a)(Object(l.a)(Object(l.a)({},e),{},{day:e.day+1,actionIndex:0,currentDay:e.plan.map((function(e){return{type:e.type,timeLeft:e.time,totalTime:e.time,startState:null,endState:null}}))},P),{},{attributes:Object(l.a)(Object(l.a)({},P.attributes),{},{health:e.skills.health}),knowledge:t,timeLeft:P.timeLeft+e.researchTotals.Time});return n.adventure.board=R(),n}function H(e,t){if(0===e.currentDay.length&&0===e.plan.length)return e;var n=Math.max(0,e.timeLeft-t),a=e.currentDay[e.actionIndex],c=a?Math.max(0,a.timeLeft-t):0,r=e.actionIndex;if(n<=0||!e.settings.repeatLast&&!a||0===e.currentDay.length)return K(e);if(e.settings.repeatLast&&!a){if(0===(a=e.currentDay[e.actionIndex-1]).totalTime)return K(e);r-=1}if(e.attributes.health<=0)return K(e);var s=q(a,e,t),o=(e.career.invested||0)*t*.05,i=s.career?Object(l.a)({},s.career):Object(l.a)({},e.career);return i.invested=(i.invested||0)+o,function(e){var t,n={},a=Object(d.a)(U.keys());try{for(a.s();!(t=a.n()).done;){var c=t.value;n=Object(l.a)(Object(l.a)({},n),{},Object(u.a)({},c,e.unlocks[c]||U.get(c)(e)))}}catch(r){a.e(r)}finally{a.f()}return Object(l.a)(Object(l.a)({},e),{},{unlocks:Object(l.a)(Object(l.a)({},e.unlocks),n)})}(Object(l.a)(Object(l.a)(Object(l.a)({},e),{},{timeLeft:e.timeLeft-t},s),{},{career:i,currentDay:e.currentDay.map((function(t,n){return n===r?Object(l.a)(Object(l.a)({},t),{},{timeLeft:c,initEffects:t.initEffects||q(a,e,0),endEffects:Object(l.a)({},s)}):t})),actionIndex:c>0?e.actionIndex:r+1}))}var G=n(0);function J(e){var t=e.amt,n=e.total,a=e.label,c=e.showNumber;return Object(G.jsxs)("div",{style:{position:"relative",height:"100%"},children:[Object(G.jsx)("span",{style:{backgroundColor:"red",width:"".concat(t/n*100,"%"),height:"100%",display:"block",float:"right"}}),Object(G.jsx)("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,textAlign:"center"},children:"".concat(c?b(t):""," ").concat(a)})]})}function X(e){var t=e.state;return Object(G.jsx)("div",{className:"header",children:Object(G.jsx)(J,{amt:t.timeLeft,total:t.researchTotals.Time+P.timeLeft,showNumber:!0,label:"s"})})}n(17);function W(e){var t=e.name;return Object(G.jsx)("h4",{className:"title",children:t})}n(18);function _(e){var t=e.state,n=function(e,n){var a="";if(!t.boardTracker[e][n])return a;var c=t.adventure.board[e][n];return c.stats&&(c.stats.attack&&(a+="A: ".concat(c.stats.attack,", D: ").concat(c.stats.defense,", H: ").concat(c.stats.health)),c.stats.money&&(a+="$".concat(c.stats.money)),c.stats.health&&!c.stats.attack&&(a+="".concat(c.stats.health," H")),"special"===c.type&&c.stats.knowledge&&Object.keys(c.stats.knowledge).forEach((function(e){a+="".concat(c.stats.knowledge[e]," ").concat(e)})),c.stats.time&&(a+="".concat(c.stats.time," s"))),a},a=function(e,n){return e===t.adventure.position.y&&n===t.adventure.position.x?"X":""};return Object(G.jsx)("div",{className:"adventure",children:t.unlocks["Move Up"]?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(W,{name:"Adventure Map"}),Object(G.jsx)("div",{style:{height:20},children:Object(G.jsx)(J,{amt:t.adventure.steps%1,total:1,label:"% Steps"})}),Object(G.jsx)("div",{className:"adventure-map",children:t.adventure.board.slice().reverse().map((function(e,c){return e.map((function(e,r){var s=t.adventure.board.length-c-1;return Object(G.jsxs)("div",{className:"".concat(e.type," ").concat(t.boardTracker[s][r]?"":"unexplored"),children:[Object(G.jsx)("div",{children:n(s,r)}),Object(G.jsx)("div",{children:a(s,r)})]},"".concat(s,",").concat(r))}))}))})]}):""})}function z(e){var t=e.state;return Object(G.jsx)("div",{className:"training",children:t.unlocks.attack?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(W,{name:"Attributes"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:"Attack Rank: ".concat(b(t.attributes.attack||0))}),Object(G.jsx)("div",{children:"Attack Skills: ".concat(b(t.skills.attack||0))})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:"Defense Rank: ".concat(b(t.attributes.defense||0))}),Object(G.jsx)("div",{children:"Defense Skills: ".concat(b(t.skills.defense||0))})]}),Object(G.jsx)("div",{style:{height:20},children:Object(G.jsx)(J,{showNumber:!0,amt:t.attributes.health,total:t.skills.health,label:"Health"})})]}):""})}function Q(e){var t=e.state;return Object(G.jsx)("div",{className:"research",children:t.unlocks["Research Time"]?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(W,{name:"Research"}),Object.keys(t.researchTotals).map((function(e,n){return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:e}),Object(G.jsx)("div",{children:"Level: ".concat(t.researchTotals[e])}),Object(G.jsx)("div",{style:{backgroundColor:"white",height:20},children:Object(G.jsx)("span",{style:{backgroundColor:"blue",width:"".concat(100*t.researchProgress[e]%100,"%"),height:20,display:"block",float:"right"}})})]},n)}))]}):""})}function V(e){var t=e.state;return Object(G.jsx)("div",{className:"equipment",children:t.unlocks.sword>0?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(W,{name:"Equipment"}),Object.keys(t.equipment).map((function(e,n){return Object(G.jsx)("div",{children:"".concat(e,": ").concat(t.equipment[e])},n)}))]}):""})}function Y(e){var t=e.state;return Object(G.jsx)("div",{className:"business",children:t.unlocks.intern?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(W,{name:"Business"}),Object(G.jsx)("div",{children:"Money: $".concat(b(t.career.money))}),Object(G.jsx)("div",{children:"Salary: $".concat(b(t.career.salary),"/s")}),Object(G.jsx)("div",{children:"Invested: $".concat(b(t.career.invested))})]}):""})}function Z(e){return Math.pow(10,Math.floor(Math.log10(e))+1)}function ee(e){var t=e.state;return Object(G.jsxs)("div",{className:"schooling",children:[Object(G.jsx)(W,{name:"Schooling"}),Object.keys(t.wisdom).map((function(e,n){var a=t.knowledge[e]||0,c=Z(a),r=t.wisdom[e]||0,s=Z(r);return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:e}),Object(G.jsx)("div",{style:{height:20},children:Object(G.jsx)(J,{showNumber:!0,amt:a,total:c,label:""})}),Object(G.jsx)("div",{style:{height:20},children:Object(G.jsx)(J,{showNumber:!0,amt:r,total:s,label:""})})]},n)}))]})}n(19);function te(e){var t=e.state,n=e.dispatch,a=t.currentDay,c=t.settings,r=t.actionIndex;return Object(G.jsx)("div",{className:"current",children:Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)(W,{name:"Current Day"}),Object(G.jsx)("div",{className:"day-container",children:a.map((function(e,t){var n=r===t||r===a.length&&t+1===r;return Object(G.jsxs)("div",{className:"progress-container ".concat(n?"active":""),children:[Object(G.jsx)(J,{amt:e.timeLeft,total:e.totalTime,label:"".concat(e.type," (").concat(e.totalTime,")")}),Object(G.jsx)("span",{className:"effects-tooltip",children:F(e)})]},t)}))}),Object(G.jsxs)("div",{className:"day-actions",children:[Object(G.jsx)("input",{onChange:function(e){n({type:"set-repeat-last",repeat:e.target.checked})},checked:c.repeatLast,type:"checkbox",id:"repeat",name:"repeat",value:"repeat"}),Object(G.jsx)("label",{htmlFor:"repeat",children:"Repeat Last Action"}),Object(G.jsx)("button",{onClick:function(){n({type:"reset-day"})},children:"Start New Day"}),Object(G.jsx)("button",{onClick:function(){n({type:"pause-resume",paused:!c.paused})},children:c.paused?"Resume":"Pause"})]})]})})}n(20);function ne(e){var t=e.category,n=e.dispatch,a=e.state,c=a.unlocks[t.actions[0].type];return Object(G.jsx)("div",{className:"super-container",children:Object(G.jsxs)("div",{className:"action-container ".concat(c?"cat-unlocked":"cat-locked"),children:[Object(G.jsx)("div",{className:"action-title",children:t.name}),t.actions.map((function(e,t){var c=a.unlocks[e.type];return Object(G.jsx)("div",{className:"button-container ".concat(c?"unlocked":"locked"),children:Object(G.jsxs)("button",{disabled:!c,className:"action-button",onClick:function(){return function(e){n({type:"add-action-to-plan",action:e})}(e)},children:[Object(G.jsx)("img",{className:"action-image",src:e.icon,alt:e.type}),Object(G.jsx)("span",{className:"action-tooltip unlocked-tooltip",children:e.explanation}),Object(G.jsx)("span",{className:"action-tooltip locked-tooltip",children:e.unlockExplanation})]},t)},t)})),Object(G.jsx)("span",{className:"action-tooltip category-tooltip",children:t.actions[0].unlockExplanation})]})})}function ae(e){var t=e.dispatch,n=e.state;return Object(G.jsxs)("div",{className:"actions",children:[Object(G.jsx)(W,{name:"Action Bank"}),Object(G.jsx)("div",{style:{display:"flex"},children:C.map((function(e,a){return Object(G.jsx)(ne,{category:e,dispatch:t,state:n},a)}))})]})}n(21);function ce(e){var t=e.activity,n=e.setItemTime,a=e.dispatch,c=e.index;return Object(G.jsxs)("div",{className:"planning-item-container",children:[Object(G.jsx)("div",{className:"close",children:Object(G.jsx)("button",{className:"close-button",onClick:function(){a({type:"delete-action",index:c})},children:"X"})}),Object(G.jsx)(W,{name:t.type}),Object(G.jsx)("img",{src:t.icon,alt:t.type}),t.instant?"":Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{style:{width:"2.5em"},min:"0",max:"99",type:"number",value:t.time,onChange:function(e){return n(e.target.value)}}),"s"]})]})}n(22);var re={draggedFrom:null,draggedTo:null,isDragging:!1,originalOrder:[],updatedOrder:[]};function se(e){var t=e.dispatch,n=e.plan,c=Object(a.useState)(re),r=Object(o.a)(c,2),s=r[0],u=r[1],d=function(e){var t=Number(e.currentTarget.dataset.position);u(Object(l.a)(Object(l.a)({},s),{},{draggedFrom:t,isDragging:!0,originalOrder:n}))},j=function(e){e.preventDefault();var t=s.originalOrder,n=s.draggedFrom,a=Number(e.currentTarget.dataset.position),c=t[n],r=t.filter((function(e,t){return t!==n}));t=[].concat(Object(i.a)(r.slice(0,a)),[c],Object(i.a)(r.slice(a))),a!==s.draggedTo&&u(Object(l.a)(Object(l.a)({},s),{},{updatedOrder:t,draggedTo:a}))},b=function(e){t({type:"set-plan",plan:s.updatedOrder}),u(Object(l.a)(Object(l.a)({},s),{},{draggedFrom:null,draggedTo:null,isDragging:!1}))},h=function(){u(Object(l.a)(Object(l.a)({},s),{},{draggedTo:null}))};return Object(G.jsxs)("div",{className:"planning",children:[Object(G.jsx)(W,{name:"Planning"}),Object(G.jsx)("div",{style:{display:"flex",overflowX:"scroll",flexGrow:1,paddingTop:10},children:n.map((function(e,a){return Object(G.jsx)("div",{className:"activity",draggable:!0,"data-position":a,onDragStart:d,onDragOver:j,onDrop:b,onDragLeave:h,children:Object(G.jsx)(ce,{index:a,dispatch:t,activity:e,setItemTime:function(e){return function(e,a){var c=Object(i.a)(n);c[a].time=e,t({type:"set-plan",plan:c})}(e,a)}})},a)}))})]})}n(23);var oe=function(e,t){switch(t.type){case"save":try{localStorage.setItem("save-game",JSON.stringify(e)),console.log("Game Saved")}catch(a){console.log("ERROR: "),console.log(a)}return e;case"set-repeat-last":return Object(l.a)(Object(l.a)({},e),{},{settings:Object(l.a)(Object(l.a)({},e.settings),{},{repeatLast:t.repeat})});case"reset-day":return K(e);case"update":return H(e,t.elapsed);case"pause-resume":return Object(l.a)(Object(l.a)({},e),{},{settings:Object(l.a)(Object(l.a)({},e.settings),{},{paused:t.paused})});case"set-plan":return Object(l.a)(Object(l.a)({},e),{},{plan:t.plan});case"add-action-to-plan":var n=e.plan.reduce((function(e,n){return e+Number(n.type===t.action.type)}),0);return!t.action.max||n<t.action.max?Object(l.a)(Object(l.a)({},e),{},{plan:[].concat(Object(i.a)(e.plan),[Object(l.a)(Object(l.a)({},t.action),{},{time:t.action.instant?0:1})])}):e;case"delete-action":return Object(l.a)(Object(l.a)({},e),{},{plan:[].concat(Object(i.a)(e.plan.slice(0,t.index)),Object(i.a)(e.plan.slice(t.index+1)))});default:return e}};function ie(e,t){var n=Object(a.useRef)(e);Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])}function le(){var e=Object(a.useReducer)(oe,B),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)(performance.now());return ie((function(){var e=performance.now(),t=e-r.current;r.current=e,n.settings.paused||c({type:"update",elapsed:t/1e3})}),33.333333333333336),ie((function(){c({type:"save"})}),1e4),Object(G.jsxs)("div",{className:"root",children:[Object(G.jsx)(X,{state:n}),Object(G.jsx)(ee,{state:n}),Object(G.jsx)(Q,{state:n}),Object(G.jsx)(Y,{state:n}),Object(G.jsx)(V,{state:n}),Object(G.jsx)(z,{state:n}),Object(G.jsx)(_,{state:n}),Object(G.jsx)(te,{dispatch:c,state:n}),Object(G.jsx)(se,{plan:n.plan,dispatch:c}),Object(G.jsx)(ae,{state:n,dispatch:c})]})}n(24);var ue=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(le,{})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(ue,{})}),document.getElementById("root")),de()}],[[25,1,2]]]);
//# sourceMappingURL=main.119df98e.chunk.js.map