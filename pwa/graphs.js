/* All figure labels, ticks and paths are generated locally for offline study. */
const studyFigures = (() => {
  const ink = "#19334b", muted = "#4f6271", axis = "#73838c";
  const blue = "#1768a1", orange = "#a54117", grid = "#dde5e9";
  let serial = 0;

  const shapes = {
    1: {
      bounds: [-3, 7, -3, 4], labels: ["y = √x", "y = √(x + 1) − 2"],
      curves: [Math.sqrt, x => Math.sqrt(x + 1) - 2], starts: [0, -1],
      anchors: [[[0,0],[1,1],[4,2]], [[-1,-2],[0,-1],[3,0]]],
      caption: ["Перенос на 1 влево и на 2 вниз. Начальная точка (0, 0) переходит в (−1, −2).", "Pomeranje za 1 ulevo i 2 naniže. Početna tačka (0, 0) prelazi u (−1, −2)."]
    },
    2: {
      bounds: [-4, 3, -2, 19], yTick: 2, labels: ["y = eˣ", "y = eˣ + 10"],
      curves: [Math.exp, x => Math.exp(x) + 10], asymptote: 10,
      anchors: [[[0,1]],[[0,11]]],
      caption: ["При x = 0 значения равны 1 и 11. После переноса на 10 вверх асимптота y = 0 переходит в y = 10.", "Za x = 0 vrednosti su 1 i 11. Pomeranjem za 10 naviše asimptota y = 0 prelazi u y = 10."]
    },
    3: {
      bounds: [-6, 4, -4, 9], yTick: 2, labels: ["y = x²", "y = (x + 2)² − 3"],
      curves: [x => x*x, x => (x+2)**2 - 3],
      anchors: [[[0,0]], [[-2,-3],[-3,-2],[-1,-2]]],
      caption: ["Обе параболы направлены вверх. Вершина смещается из (0, 0) в (−2, −3).", "Obe parabole su otvorene nagore. Teme se pomera iz (0, 0) u (−2, −3)."]
    },
    4: {
      bounds: [-4, 5, -5, 6], labels: ["y = x²", "y = −(x − 1)² + 4"],
      curves: [x => x*x, x => 4 - (x-1)**2],
      anchors: [[[0,0]], [[1,4],[-1,0],[3,0]]],
      caption: ["Вершина второй параболы (1, 4), ветви направлены вниз. Нули функции: −1 и 3.", "Teme druge parabole je (1, 4), a grane su otvorene nadole. Nule funkcije su −1 i 3."]
    },
    6: {
      bounds: [-2, 8, -1, 5], labels: ["y = √x", "y = √(x − 2) + 1"],
      curves: [Math.sqrt, x => Math.sqrt(x-2)+1], starts:[0,2],
      anchors: [[[0,0],[1,1],[4,2]],[[2,1],[3,2],[6,3]]],
      caption: ["Начальная точка переходит из (0, 0) в (2, 1). Все точки смещаются на 2 вправо и на 1 вверх.", "Početna tačka prelazi iz (0, 0) u (2, 1). Sve tačke se pomeraju za 2 udesno i 1 naviše."]
    },
    7: {
      bounds: [-6, 4, -5, 7], yTick:2, labels: ["y = x²", "y = 3 − (x + 2)²"],
      curves: [x=>x*x,x=>3-(x+2)**2], anchors:[[[0,0]],[[-2,3],[-3,2],[-1,2]]],
      caption: ["Вершина (−2, 3) лежит на оси симметрии x = −2. При удалении в любую сторону от вершины значение функции убывает.", "Teme (−2, 3) leži na osi simetrije x = −2. Vrednost funkcije opada pri udaljavanju od temena na bilo koju stranu."]
    },
    8: {
      bounds: [-3, 3, -5, 8], yTick:2, labels:["y = eˣ","y = eˣ − 4"],
      curves:[Math.exp,x=>Math.exp(x)-4], anchors:[[[0,1]],[[0,-3]]], asymptote:-4,
      caption: ["Горизонтальная асимптота смещается вниз до y = −4. Точка (0, 1) переходит в (0, −3).","Horizontalna asimptota se pomera naniže do y = −4. Tačka (0, 1) prelazi u (0, −3)."]
    },
    9: {
      bounds: [-4, 6, -4, 7], labels:["y = 1/x","y = 2 + 1/(x − 1)"],
      curves:[x=>1/x,x=>2+1/(x-1)], poles:[0,1], anchors:[[[-1,-1],[1,1]],[[0,1],[2,3]]], asymptote:2,
      caption: ["Пересечение асимптот смещается из (0, 0) в (1, 2). Вертикальная асимптота новой гиперболы x = 1, горизонтальная y = 2.","Presek asimptota se pomera iz (0, 0) u (1, 2). Vertikalna asimptota nove hiperbole je x = 1, a horizontalna y = 2."]
    },
    10: {
      bounds: [-3, 8, -3, 5], labels:["y = |x|","y = |x − 3| − 2"],
      curves:[Math.abs,x=>Math.abs(x-3)-2], anchors:[[[0,0]],[[3,-2],[1,0],[5,0]]],
      caption: ["Вершина ломаной смещается в (3, −2). Точки (1, 0) и (5, 0) расположены симметрично относительно x = 3.", "Vrh izlomljene linije prelazi u (3, −2). Tačke (1, 0) i (5, 0) leže simetrično u odnosu na x = 3."]
    }
  };
  const line = (x1, y1, x2, y2, attrs) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${attrs}/>`;
  const txt = (x,y,s,attrs="") => `<text x="${x}" y="${y}" ${attrs}>${s}</text>`;
  function frame(heading, svg, caption, legend = "") {
    return `<figure style="margin:1rem 0;padding:.65rem .65rem .8rem;background:#fff;color:${ink};border:1px solid #d7e1e7;border-radius:12px">${svg}${legend}<figcaption style="margin:.45rem .25rem 0;color:${muted};font:normal .875rem/1.5 system-ui,sans-serif"><strong>${heading}.</strong> ${caption}</figcaption></figure>`;
  }
  function curveFigure(spec, ru) {
    const id = "curve" + (++serial), [xmin, xmax, ymin, ymax] = spec.bounds;
    const left=30, right=332, top=12, bottom=191;
    const X = x => left+(x-xmin)*(right-left)/(xmax-xmin);
    const Y = y => bottom-(y-ymin)*(bottom-top)/(ymax-ymin);
    const heading=ru?"Графики функций":"Grafici funkcija", caption=spec.caption[ru?0:1];
    let svg=`<svg viewBox="0 0 350 215" role="img" aria-labelledby="${id}t ${id}d" style="display:block;width:100%;max-width:42rem;margin:auto;font:12px system-ui,sans-serif;fill:${ink}"><title id="${id}t">${spec.labels.join("; ")}</title><desc id="${id}d">${caption}</desc><defs><clipPath id="${id}"><rect x="${left}" y="${top}" width="${right-left}" height="${bottom-top}"/></clipPath></defs>`;
    const xt=spec.xTick||1, yt=spec.yTick||1;
    for(let x=Math.ceil(xmin/xt)*xt;x<=xmax;x+=xt) {
      svg+=line(X(x),top,X(x),bottom,`stroke="${grid}"`);
      svg+=txt(X(x),bottom+15,String(x).replace("-","−"),'text-anchor="middle"');
    }
    for(let y=Math.ceil(ymin/yt)*yt;y<=ymax;y+=yt) {
      svg+=line(left,Y(y),right,Y(y),`stroke="${grid}"`);
      svg+=txt(left-5,Y(y)+4,String(y).replace("-","−"),'text-anchor="end"');
    }
    svg+=line(left,Y(0),right+4,Y(0),`stroke="${axis}" stroke-width="1.5"`);
    svg+=line(X(0),bottom,X(0),top-4,`stroke="${axis}" stroke-width="1.5"`);
    svg+=`<path fill="${axis}" d="M${right+5},${Y(0)}l-5,-3v6z M${X(0)},${top-5}l-3,5h6z"/>`;
    svg+=txt(right+7,Y(0)-5,"x")+txt(X(0)+6,top+4,"y");
    svg+=`<g clip-path="url(#${id})">`;
    if(spec.asymptote!==undefined) svg+=line(left,Y(spec.asymptote),right,Y(spec.asymptote),`stroke="${orange}" stroke-dasharray="2 5" opacity=".72"`);
    if(spec.poles) svg+=line(X(spec.poles[1]),top,X(spec.poles[1]),bottom,`stroke="${orange}" stroke-dasharray="2 5" opacity=".72"`);
    spec.curves.forEach((f, j) => {
      let path="", previousX=null;
      const a=spec.starts?Math.max(xmin,spec.starts[j]):xmin;
      for(let i=0;i<=420;i++) {
        const t=i/420, x=a+(xmax-a)*(spec.starts?t*t:t), y=f(x);
        if(!Number.isFinite(y)) {previousX=null;continue;}
        const crosses=spec.poles && previousX!==null && previousX<spec.poles[j] && x>spec.poles[j];
        path+=(previousX===null||crosses?"M":"L")+X(x).toFixed(2)+","+Y(y).toFixed(2);
        previousX=x;
      }
      const color=j?orange:blue;
      svg+=`<path d="${path}" fill="none" stroke="${color}" stroke-width="2.6" ${j?"":'stroke-dasharray="7 4"'}/>`;
      for(const [x,y] of (spec.anchors?.[j]||[])) svg+=`<circle cx="${X(x)}" cy="${Y(y)}" r="3.4" fill="${j?color:"white"}" stroke="${color}" stroke-width="1.7"/>`;
    });
    svg+="</g></svg>";
    const legend='<div style="display:flex;flex-wrap:wrap;gap:.3rem 1.1rem;margin:.15rem .25rem;font:normal .9rem/1.5 system-ui,sans-serif">'+spec.labels.map((label,j)=>`<span><span aria-hidden="true" style="display:inline-block;width:1.3rem;vertical-align:middle;margin-right:.3rem;border-top:3px ${j?"solid":"dashed"} ${j?orange:blue}"></span>${label}</span>`).join("")+"</div>";
    return frame(heading,svg,caption,legend);
  }

  function relations(n,ru) {
    const order=n===3, id="rel"+(++serial);
    const pos=[40,128,216,304], cy=90, r=14;
    const title=ru?"Ориентированный граф отношения":"Usmereni graf relacije";
    const cap=order
      ? (ru?"Из большего числа стрелка идёт к каждому меньшему. Петли соответствуют равенству.":"Iz većeg broja strelica vodi u svaki manji. Petlje odgovaraju jednakosti.")
      : (ru?"Каждое число связано с собой и с соседями. У каждой пары соседей есть обе стрелки.":"Svaki broj je povezan sa sobom i sa susedima. Svaki par suseda ima strelice u oba smera.");
    const y=order?cy:55;
    let svg=`<svg viewBox="0 0 344 ${order?146:113}" role="img" aria-labelledby="${id}t ${id}d" style="display:block;width:100%;max-width:42rem;margin:auto;font:600 15px system-ui,sans-serif;fill:${ink}"><title id="${id}t">${title}</title><desc id="${id}d">${cap}</desc><defs><marker id="${id}" viewBox="0 0 10 10" refX="9.4" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="${blue}"/></marker></defs>`;
    const arrow=d=>`<path d="${d}" fill="none" stroke="${blue}" stroke-width="2" marker-end="url(#${id})"/>`;
    pos.forEach((x,i)=>{
      svg+=arrow(`M${x+8},${y+12} C${x+31},${y+51} ${x-31},${y+51} ${x-8},${y+12}`);
      if(order) {
        for(let j=0;j<i;j++){
          const dest=pos[j], span=i-j;
          if(span===1)svg+=arrow(`M${x-r},${y} H${dest+r}`);
          else {
            const h=span===2?53:91, offset=span===2?10:5;
            svg+=arrow(`M${x-offset},${y-12} C${x-35},${y-h} ${dest+35},${y-h} ${dest+offset},${y-12}`);
          }
        }
      } else if(i>0){
        const dest=pos[i-1], mid=(x+dest)/2;
        svg+=arrow(`M${dest+r-1},${y-5} Q${mid},${y-24} ${x-r+1},${y-5}`);
        svg+=arrow(`M${x-r+1},${y+5} Q${mid},${y+24} ${dest+r-1},${y+5}`);
      }
    });
    pos.forEach((x,i)=>{svg+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#f3f7f9" stroke="${ink}" stroke-width="1.5"/>`+txt(x,y+5,i+1,'text-anchor="middle"');});
    return frame(title,svg+"</svg>",cap);
  }
  function extraRelations(n,ru) {
    const id="exrel"+(++serial), div=n===7;
    const title=ru?"Ориентированный граф отношения":"Usmereni graf relacije";
    const caps={
      6:["Стрелки соединяют числа одной чётности. У каждой вершины есть петля.", "Strelice povezuju brojeve iste parnosti. Svaki čvor ima petlju."],
      7:["Стрелка идёт от делителя к кратному. Единица делит все четыре числа, а двойка делит также четвёрку.", "Strelica vodi od delioca do njegovog umnoška. Jedinica deli sva četiri broja, a dvojka deli i četvorku."],
      10:["Пары (1, 4) и (2, 3) дают сумму 5 в обоих направлениях. Петель нет, поскольку 2x = 5 не имеет решения в A.", "Parovi (1, 4) i (2, 3) daju zbir 5 u oba smera. Nema petlji jer jednačina 2x = 5 nema rešenja u A."]
    };
    const cap=caps[n][ru?0:1], labels=n===10?[1,4,2,3]:[1,3,2,4];
    const pos=div?[[30,64],[172,17],[172,109],[314,64]]:[[25,39],[115,39],[225,39],[315,39]];
    let svg=`<svg viewBox="0 0 344 ${div?157:94}" role="img" aria-labelledby="${id}t ${id}d" style="display:block;width:100%;max-width:42rem;margin:auto;font:600 15px system-ui,sans-serif;fill:${ink}"><title id="${id}t">${title}</title><desc id="${id}d">${cap}</desc><defs><marker id="${id}" viewBox="0 0 10 10" refX="9.4" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="${blue}"/></marker></defs>`;
    const arrow=d=>`<path d="${d}" fill="none" stroke="${blue}" stroke-width="2" marker-end="url(#${id})"/>`;
    if(div){
      for(const [a,b] of [[0,1],[0,2],[0,3],[1,3]]){
        const [x,y]=pos[a],[xx,yy]=pos[b], d=Math.hypot(xx-x,yy-y), ux=(xx-x)/d,uy=(yy-y)/d;
        svg+=arrow(`M${x+15*ux},${y+15*uy} L${xx-15*ux},${yy-15*uy}`);
      }
    }else{
      for(const a of [0,2]) {
        const [x,y]=pos[a],[xx]=pos[a+1], mid=(x+xx)/2;
        svg+=arrow(`M${x+13},${y-5} Q${mid},${y-26} ${xx-13},${y-5}`);
        svg+=arrow(`M${xx-13},${y+5} Q${mid},${y+26} ${x+13},${y+5}`);
      }
    }
    pos.forEach(([x,y],i)=>{
      if(n!==10)svg+=arrow(`M${x+8},${y+12} C${x+30},${y+48} ${x-30},${y+48} ${x-8},${y+12}`);
      svg+=`<circle cx="${x}" cy="${y}" r="14" fill="#f3f7f9" stroke="${ink}" stroke-width="1.5"/>`+txt(x,y+5,div?i+1:labels[i],'text-anchor="middle"');
    });
    return frame(title,svg+"</svg>",cap);
  }
  return {shapes, curveFigure, relations, extraRelations};
})();

function diagram(variantNumber, zeroBasedTaskIndex, lang) {
  const n=Number(variantNumber), i=Number(zeroBasedTaskIndex), ru=lang==="ru";
  if(i===0 && (n===3 || n===4)) return studyFigures.relations(n,ru);
  if(i===0 && (n===8 || n===9)) return studyFigures.relations(n===8?4:3,ru);
  if(i===0 && [6,7,10].includes(n)) return studyFigures.extraRelations(n,ru);
  if(i===1 && studyFigures.shapes[n]) return studyFigures.curveFigure(studyFigures.shapes[n],ru);
  return "";
}
