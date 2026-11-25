function lessonId(n,i){return (n===5 && i===2)?10:i+1}
function guideTitle(){return t('Мини-учебник','Mini-priručnik')}
function lessonTitle(id){return chapters[id-1][lang==='ru'?0:1]}
function lessonText(id){
 const c=chapters[id-1],start=lang==='ru'?2:6;
 const sections=[t('С чего начать','Odakle početi'),t('Как действовать','Postupak'),t('Пример с решением','Rešen primer'),t('Как проверить себя','Kako proveriti rezultat')];
 return sections.map((s,i)=>'<h3>'+s+'</h3><p>'+mathText(c[start+i])+'</p>').join('')+
 '<p><a href="'+c[11]+'" target="_blank" rel="noopener noreferrer">'+esc(c[10])+' (EN)</a></p>';
}
function guideLink(n,i){
 const id=lessonId(n,i);
 return '<p class="guide"><a href="#guide/'+id+'/'+n+'/'+i+'">'+guideTitle()+' · '+esc(lessonTitle(id))+'</a></p>';
}
function guideDownload(){
 return '<p><a href="./Kolokvijum_Mini_Uchebnik_RU_SR.pdf" target="_blank" rel="noopener">'+
 t('Открыть мини-учебник в PDF','Otvori mini-priručnik u PDF-u')+'</a></p>';
}
function guideIndex(){
 return '<section class="sheet guideindex"><h2>'+guideTitle()+'</h2><nav>'+chapters.map((_,i)=>'<a href="#guide/'+(i+1)+'">'+esc(lessonTitle(i+1))+'</a>').join('')+'</nav>'+guideDownload()+'</section>';
}
function guidePage(id){
 const [, , variant, task] = location.hash.slice(1).split('/');
 const back = /^(?:[1-9]|10)$/.test(variant) && /^[0-8]$/.test(task)
  ? '<a class="back" href="#study/'+variant+'/'+task+'">'+t('К заданию','Nazad na zadatak')+'</a>'
  : rootBack();
 return back+'<article class="sheet guidepage"><div class="eyebrow">'+guideTitle()+'</div><h1 class="title">'+esc(lessonTitle(id))+'</h1>'+lessonText(id)+'</article>'+guideIndex();
}
