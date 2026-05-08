import{B as e,E as t,It as n,Ot as r,Vt as i,c as a,gn as o,hn as s,j as c,m as l,mn as u,pn as d,st as f,v as p,w as m,x as h,z as g}from"./mermaid-b5860b54-BTYT2s63.js";import{t as _}from"./channel-CQMgEw0k.js";import{t as v}from"./graphlib-CCc-l8ip.js";import{t as y}from"./index-3862675e-BEiaDZIK.js";function b(e){return typeof e==`string`?new u([document.querySelectorAll(e)],[document.documentElement]):new u([o(e)],s)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var n=t.graph();if(f(n)){var i=n.transition;if(r(i))return i(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,n,r,i,o,s){let u=i.select(`[id="${r}"]`),d=Object.keys(e);for(let r of d){let i=e[r],d=`default`;i.classes.length>0&&(d=i.classes.join(` `)),d+=` flowchart-label`;let f=h(i.styles),m=i.text===void 0?i.id:i.text,g;if(t.info(`vertex`,i,i.labelType),i.labelType===`markdown`)t.info(`vertex`,i,i.labelType);else if(l(p().flowchart.htmlLabels))g=O(u,{label:m}).node(),g.parentNode.removeChild(g);else{let e=o.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,f.labelStyle.replace(`color:`,`fill:`));let t=m.split(a.lineBreakRegex);for(let n of t){let t=o.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(i.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await c(m,p());n.setNode(i.id,{labelStyle:f.labelStyle,shape:v,labelText:y,labelType:i.labelType,rx:_,ry:_,class:d,style:f.style,id:i.id,link:i.link,linkTarget:i.linkTarget,tooltip:s.db.getTooltip(i.id)||``,domId:s.db.lookUpDomId(i.id),haveCallback:i.haveCallback,width:i.type===`group`?500:void 0,dir:i.dir,type:i.type,props:i.props,padding:p().flowchart.padding}),t.info(`setNode`,{labelStyle:f.labelStyle,labelType:i.labelType,shape:v,labelText:y,rx:_,ry:_,class:d,style:f.style,id:i.id,domId:s.db.lookUpDomId(i.id),width:i.type===`group`?500:void 0,type:i.type,dir:i.dir,props:i.props,padding:p().flowchart.padding})}},M=async function(e,n,r){t.info(`abc78 edges = `,e);let o=0,s={},l,u;if(e.defaultStyle!==void 0){let t=h(e.defaultStyle);l=t.style,u=t.labelStyle}for(let r of e){o++;let d=`L-`+r.start+`-`+r.end;s[d]===void 0?(s[d]=0,t.info(`abc78 new entry`,d,s[d])):(s[d]++,t.info(`abc78 new entry`,d,s[d]));let f=d+`-`+s[d];t.info(`abc78 new link id to be used is`,d,f,s[d]);let g=`LS-`+r.start,_=`LE-`+r.end,v={style:``,labelStyle:``};switch(v.minlen=r.length||1,r.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,r.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(r.stroke){case`normal`:y=`fill:none;`,l!==void 0&&(y=l),u!==void 0&&(b=u),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(r.style!==void 0){let e=h(r.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,r.interpolate===void 0?e.defaultInterpolate===void 0?v.curve=m(k.curve,i):v.curve=m(e.defaultInterpolate,i):v.curve=m(r.interpolate,i),r.text===void 0?r.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=r.labelType,v.label=await c(r.text.replace(a.lineBreakRegex,`
`),p()),r.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=f,v.classes=`flowchart-link `+g+` `+_,n.setEdge(r.start,r.end,v,o)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(n,r,i,a){t.info(`Drawing flowchart`);let o=a.db.getDirection();o===void 0&&(o=`TD`);let{securityLevel:s,flowchart:c}=p(),l=c.nodeSpacing||50,u=c.rankSpacing||50,f;s===`sandbox`&&(f=d(`#i`+r));let m=d(s===`sandbox`?f.nodes()[0].contentDocument.body:`body`),h=s===`sandbox`?f.nodes()[0].contentDocument:document,_=new v({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:l,ranksep:u,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=a.db.getSubGraphs();t.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],t.info(`Subgraph - `,x),a.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=a.db.getVertices(),w=a.db.getEdges();t.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)t.info(`Setting up subgraphs`,x.nodes[e],x.id),_.setParent(x.nodes[e],x.id)}await j(C,_,r,m,h,a),await M(w,_);let E=m.select(`[id="${r}"]`);if(await y(m.select(`#`+r+` g`),_,[`point`,`circle`,`cross`],`flowchart`,r),e.insertTitle(E,`flowchartTitleText`,c.titleTopMargin,a.db.getDiagramTitle()),g(_,E,c.diagramPadding,c.useMaxWidth),a.db.indexNodes(`subGraph`+T),!c.htmlLabels){let e=h.querySelectorAll(`[id="`+r+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=h.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let t=C[e];if(t.link){let n=d(`#`+r+` [id="`+e+`"]`);if(n){let e=h.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,t.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,t.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),s===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):t.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,t.linkTarget);let r=n.insert(function(){return e},`:first-child`),i=n.select(`.label-container`);i&&r.append(function(){return i.node()});let a=n.select(`.label`);a&&r.append(function(){return a.node()})}}})}},P=(e,t)=>{let r=_;return n(r(e,`r`),r(e,`g`),r(e,`b`),t)},F=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${P(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{T as a,x as c,E as i,b as l,F as n,D as o,O as r,S as s,N as t};