BANK[1] = [
q("На A = {1,2,3,4,5} задано ρ = {(1,1),(1,2),(1,4),(2,2),(2,4),(3,3),(4,4),(5,5)}. Является ли ρ отношением порядка?",
"Na skupu A = {1,2,3,4,5} data je relacija ρ = {(1,1),(1,2),(1,4),(2,2),(2,4),(3,3),(4,4),(5,5)}. Ispitati da li je ρ relacija poretka.",
`1. Проверяем три свойства частичного порядка. Рефлексивность есть: каждая из пяти пар (x,x) принадлежит ρ.
2. Антисимметричность есть: у пар (1,2), (1,4), (2,4) нет обратных. Поэтому xρy и yρx одновременно возможны лишь при x=y.
3. Для транзитивности проверяем цепочки xρyρz. Петля в цепочке повторяет уже имеющуюся пару. Единственная цепочка из двух непетель — 1→2→4, и пара (1,4) есть.
Ответ: частичный порядок. Линейности нет: например, 1 и 3 несравнимы.`,
`1. Proveravamo tri svojstva parcijalnog poretka. Relacija je refleksivna jer joj pripada svih pet parova (x,x).
2. Antisimetrična je: nijedan od parova (1,2), (1,4), (2,4) nema obrnuti par. Dakle, iz xρy i yρx sledi x=y.
3. Za tranzitivnost posmatramo lance xρyρz. Ako je jedan korak petlja, traženi par već postoji. Jedini lanac od dva koraka bez petlje je 1→2→4, a (1,4) pripada relaciji.
Odgovor: parcijalni poredak. Nije linearan jer su, recimo, 1 i 3 neuporedivi.`),
q("В одной системе координат постройте графики исходной элементарной функции и f(x)=√(x+1)−2.",
"U istom koordinatnom sistemu skicirati grafike polazne elementarne funkcije i funkcije f(x)=√(x+1)−2.",
`1. Исходный график y=√x проходит через (0,0), (1,1), (4,2), (9,3). Удобно брать квадраты целых чисел.
2. Чтобы под корнем осталось то же число, заменяем координату x каждой точки на x−1. Вычитание 2 снаружи уменьшает координату y на 2.
3. Новые точки: (−1,−2), (0,−1), (3,0), (8,1). Соединяем их возрастающей кривой, которая постепенно становится более пологой. Область определения [−1,+∞), множество значений [−2,+∞).`,
`1. Polazni grafik y=√x prolazi kroz (0,0), (1,1), (4,2), (9,3). Kvadrati celih brojeva daju jednostavne koordinate.
2. Da bi izraz ispod korena ostao isti, svaku tačku pomeramo ulevo za 1. Oduzimanje 2 izvan korena pomera je naniže za 2.
3. Dobijamo (−1,−2), (0,−1), (3,0), (8,1). Kroz njih povlačimo rastuću krivu sa sve manjim nagibom. Domen je [−1,+∞), a skup vrednosti [−2,+∞).`),
q("Вычислите lim(x→0) (√(x+4)−2)/x.","Izračunati lim(x→0) (√(x+4)−2)/x.",
`1. Подстановка даёт 0/0. Умножаем числитель и знаменатель на сопряжённое выражение √(x+4)+2, чтобы убрать корень из числителя.
2. По разности квадратов (√(x+4)−2)(√(x+4)+2)=x+4−4=x. Для x≠0 дробь равна 1/(√(x+4)+2).
3. Последнее выражение непрерывно при x=0. Подстановка даёт 1/(2+2)=1/4.`,
`1. Direktna zamena daje 0/0. Brojilac i imenilac množimo konjugovanim izrazom √(x+4)+2 da uklonimo koren iz brojioca.
2. Razlika kvadrata daje (√(x+4)−2)(√(x+4)+2)=x+4−4=x. Za x≠0 količnik je 1/(√(x+4)+2).
3. Ovaj izraz je neprekidan za x=0. Zamenom dobijamo 1/(2+2)=1/4.`),
q("Найдите первую производную f(x)=ln(3x²+1).","Odrediti prvi izvod funkcije f(x)=ln(3x²+1).",
`1. Аргумент логарифма 3x²+1 положителен при любом действительном x.
2. По правилу цепочки (ln u)′=u′/u. Здесь u=3x²+1 и u′=6x.
Ответ: f′(x)=6x/(3x²+1), x∈ℝ.`,
`1. Argument logaritma 3x²+1 je pozitivan za svako realno x.
2. Po pravilu za složenu funkciju važi (ln u)′=u′/u. Ovde je u=3x²+1, pa je u′=6x.
Odgovor: f′(x)=6x/(3x²+1), x∈ℝ.`),
q("Для A = [[2,1],[1,3]] проверьте равенство A²−5A+5I=0.","Za A = [[2,1],[1,3]] proveriti jednakost A²−5A+5I=0.",
`1. Перемножаем строки A со столбцами A. Элементы первой строки: 2·2+1·1=5 и 2·1+1·3=5. Во второй строке получаем 1·2+3·1=5 и 1·1+3·3=10.
2. Итак, A²=[[5,5],[5,10]], а 5A=[[10,5],[5,15]]. Разность A²−5A=[[-5,0],[0,−5]]=−5I.
3. Прибавление 5I даёт нулевую матрицу. Равенство верно.`,
`1. Množimo vrste matrice A kolonama iste matrice. U prvoj vrsti dobijamo 2·2+1·1=5 i 2·1+1·3=5, a u drugoj 1·2+3·1=5 i 1·1+3·3=10.
2. Dakle, A²=[[5,5],[5,10]], a 5A=[[10,5],[5,15]]. Razlika je A²−5A=[[-5,0],[0,−5]]=−5I.
3. Dodavanjem 5I dobijamo nula-matricu. Jednakost važi.`),
q("Исследуйте и решите при всех a∈ℝ систему\nx+y+z=3\n2x+ay+z=6\nx+y+2z=4.",
"Diskutovati i rešiti za sve a∈ℝ sistem\nx+y+z=3\n2x+ay+z=6\nx+y+2z=4.",
`1. Вычитание первой строки из третьей сразу даёт z=1. Из первой получаем x+y=2, из второй 2x+ay=5.
2. Вычитаем удвоенное уравнение x+y=2 из 2x+ay=5. Остаётся (a−2)y=1. До деления проверяем, может ли множитель слева обратиться в ноль.
3. При a≠2 решение единственно: y=1/(a−2), x=(2a−5)/(a−2), z=1.
4. При a=2 уравнение принимает вид 0=1. Система несовместна.`,
`1. Oduzimanjem prve jednačine od treće dobijamo z=1. Prva zatim daje x+y=2, a druga 2x+ay=5.
2. Od jednačine 2x+ay=5 oduzimamo dvostruku jednačinu x+y=2. Ostaje (a−2)y=1. Pre deljenja proveravamo kada je činilac uz y jednak nuli.
3. Za a≠2 rešenje je jedinstveno: y=1/(a−2), x=(2a−5)/(a−2), z=1.
4. Za a=2 sledi 0=1, pa sistem nema rešenja.`),
q("Определите ранг матрицы коэффициентов системы 4а в зависимости от a.","Izračunati rang matrice koeficijenata sistema iz 4a u zavisnosti od a.",
`1. В матрице коэффициентов выполняем R₂←R₂−2R₁ и R₃←R₃−R₁. Строки становятся (1,1,1), (0,a−2,−1), (0,0,1). Эти операции сохраняют ранг.
2. При a≠2 все три диагональных элемента ненулевые: ранг 3.
3. При a=2 вторая и третья строки противоположны, а первая и третья независимы: ранг 2. Здесь спрашивается только о матрице коэффициентов.`,
`1. U matrici koeficijenata primenjujemo R₂←R₂−2R₁ i R₃←R₃−R₁. Vrste su sada (1,1,1), (0,a−2,−1), (0,0,1). Ove operacije čuvaju rang.
2. Za a≠2 sva tri dijagonalna elementa su različita od nule: rang je 3.
3. Za a=2 druga i treća vrsta su suprotne, dok su prva i treća nezavisne: rang je 2. Ovde se traži rang matrice koeficijenata.`),
q("Решите yₜ₊₂−5yₜ₊₁+6yₜ=3 при y₀=1, y₁=3. Опишите поведение при t→∞.","Rešiti yₜ₊₂−5yₜ₊₁+6yₜ=3 za y₀=1, y₁=3. Opisati ponašanje kada t→∞.",
`1. Для однородного уравнения подставляем yₜ=rᵗ. Получаем r²−5r+6=(r−2)(r−3)=0. Значит, однородная часть имеет вид C·2ᵗ+D·3ᵗ.
2. Правая часть постоянна. Ищем постоянное частное решение k: (1−5+6)k=3, откуда k=3/2.
3. Начальные условия дают C+D=−1/2 и 2C+3D=3/2. Вычитая удвоенное первое равенство из второго, получаем D=5/2, затем C=−3.
Ответ: yₜ=3/2−3·2ᵗ+(5/2)·3ᵗ. При t→∞ старший член (5/2)·3ᵗ доминирует, поэтому yₜ→+∞.`,
`1. Za homogenu jednačinu stavimo yₜ=rᵗ. Dobijamo r²−5r+6=(r−2)(r−3)=0. Homogeno rešenje je C·2ᵗ+D·3ᵗ.
2. Desna strana je konstantna. Tražimo konstantno partikularno rešenje k: (1−5+6)k=3, odakle je k=3/2.
3. Početni uslovi daju C+D=−1/2 i 2C+3D=3/2. Oduzimanjem dvostruke prve jednakosti od druge dobijamo D=5/2, zatim C=−3.
Odgovor: yₜ=3/2−3·2ᵗ+(5/2)·3ᵗ. Kada t→∞, dominira član (5/2)·3ᵗ, pa yₜ→+∞.`),
q("Исследуйте сходимость ряда Σ (n+2)/(n³+1), n=1,…,∞.","Ispitati konvergenciju reda Σ (n+2)/(n³+1), n=1,…,∞.",
`1. Все члены положительны. По старшим степеням дробь ведёт себя как n/n³=1/n², поэтому применяем предельное сравнение с p-рядом.
2. Отношение к 1/n² равно (n³+2n²)/(n³+1) и стремится к 1.
3. Предел положителен и конечен, значит, оба ряда сходятся или расходятся одновременно. Ряд Σ1/n² сходится (p=2>1), следовательно, данный ряд сходится.`,
`1. Članovi su pozitivni. Prema vodećim stepenima razlomak se ponaša kao n/n³=1/n². Zato primenjujemo granični kriterijum poređenja sa p-redom.
2. Količnik opšteg člana i 1/n² je (n³+2n²)/(n³+1) i teži jedinici.
3. Granica je pozitivna i konačna, pa oba reda imaju isto ponašanje. Red Σ1/n² konvergira (p=2>1), te konvergira i dati red.`)
];

BANK[2] = [
q("На A={a,b,c,d} задано ρ={(a,a),(a,b),(a,c),(c,c),(c,d)}. Проверьте рефлексивность, симметричность, антисимметричность, транзитивность и сравнимость любых двух различных элементов.",
"Na A={a,b,c,d} data je relacija ρ={(a,a),(a,b),(a,c),(c,c),(c,d)}. Ispitati da li je refleksivna, simetrična, antisimetrična, tranzitivna i linearna.",
`1. Рефлексивность требует всех петель. Нет (b,b) и (d,d), поэтому свойство не выполняется.
2. Симметричности нет: (a,b) есть, (b,a) отсутствует. Антисимметричность есть: ни одна пара различных элементов не входит одновременно в обоих направлениях.
3. Транзитивность нарушена: aρc и cρd, однако (a,d) отсутствует.
4. Линейности нет: b и c несравнимы, так как отсутствуют и (b,c), и (c,b).`,
`1. Refleksivnost zahteva sve petlje. Nedostaju (b,b) i (d,d), pa relacija nije refleksivna.
2. Nije simetrična: sadrži (a,b), ali ne sadrži (b,a). Antisimetrična je jer nijedan par različitih elemenata nije prisutan u oba smera.
3. Nije tranzitivna: važe aρc i cρd, a par (a,d) nedostaje.
4. Nije linearna: b i c su neuporedivi jer nedostaju i (b,c) i (c,b).`),
q("Постройте в одних осях графики y=eˣ и f(x)=eˣ+10. Определите B, чтобы f:ℝ→B была сюръективной.",
"U istom koordinatnom sistemu skicirati y=eˣ i f(x)=eˣ+10. Odrediti B tako da f:ℝ→B bude „na“.",
`1. На графике y=eˣ отметим (−1,1/e), (0,1), (1,e). Он возрастает, при x→−∞ приближаясь к горизонтальной асимптоте y=0.
2. Прибавление 10 поднимает каждую точку на 10: (−1,10+1/e), (0,11), (1,10+e). Новая асимптота — y=10.
3. Всегда eˣ>0, значит f(x)>10. И наоборот: для любого b>10 можно взять x=ln(b−10), тогда f(x)=b. Поэтому множество значений и требуемое B равны (10,+∞).`,
`1. Na grafiku y=eˣ označimo (−1,1/e), (0,1), (1,e). Funkcija raste, a kada x→−∞, približava se horizontalnoj asimptoti y=0.
2. Dodavanje broja 10 pomera svaku tačku naviše za 10: (−1,10+1/e), (0,11), (1,10+e). Nova asimptota je y=10.
3. Uvek važi eˣ>0, pa je f(x)>10. Obrnuto, za svako b>10 možemo uzeti x=ln(b−10) i tada je f(x)=b. Skup vrednosti, a time i traženi skup B, jeste (10,+∞).`),
q("Вычислите lim(x→+∞) (2x+e^(1/x))/(3−x).","Izračunati lim(x→+∞) (2x+e^(1/x))/(3−x).",
`1. Делим числитель и знаменатель на x, чтобы выделить линейные члены. Получаем (2+e^(1/x)/x)/(3/x−1).
2. При x→+∞ имеем 1/x→0. По непрерывности экспоненты e^(1/x)→e⁰=1, поэтому e^(1/x)/x→0.
3. Знаменатель стремится к −1. Предел дроби равен 2/(−1)=−2.`,
`1. Brojilac i imenilac delimo sa x da izdvojimo linearne članove. Dobijamo (2+e^(1/x)/x)/(3/x−1).
2. Kada x→+∞, važi 1/x→0. Zbog neprekidnosti eksponencijalne funkcije e^(1/x)→e⁰=1, pa e^(1/x)/x→0.
3. Imenilac teži ka −1. Granica količnika je 2/(−1)=−2.`),
q("Найдите первую производную f(x)=((x−1)/(4x+2))³.","Naći prvi izvod funkcije f(x)=((x−1)/(4x+2))³.",
`1. Знаменатель требует x≠−1/2. Обозначим u=(x−1)/(4x+2). Производная куба по правилу цепочки равна 3u²u′.
2. По правилу частного u′=[(4x+2)−4(x−1)]/(4x+2)²=6/(4x+2)².
3. Подставляем и собираем степени: f′(x)=18(x−1)²/(4x+2)⁴.`,
`1. Imenilac zahteva x≠−1/2. Neka je u=(x−1)/(4x+2). Po pravilu za složenu funkciju, izvod kuba je 3u²u′.
2. Prema pravilu za izvod količnika, u′=[(4x+2)−4(x−1)]/(4x+2)²=6/(4x+2)².
3. Zamenom i sređivanjem stepena dobijamo f′(x)=18(x−1)²/(4x+2)⁴.`),
q("Даны A=[[1,0,1],[3,4,0],[0,−1,1]], B=[[1,0],[−1,2],[3,1]], C=[[2,3,−1],[0,2,1]]. Вычислите A⁻¹+BC.",
"Date su A=[[1,0,1],[3,4,0],[0,−1,1]], B=[[1,0],[−1,2],[3,1]], C=[[2,3,−1],[0,2,1]]. Izračunati A⁻¹+BC.",
`1. Чтобы найти A⁻¹, решаем A(x,y,z)ᵀ=(p,q,r)ᵀ для произвольной правой части. Из x+z=p и −y+z=r имеем z=r+y и x=p−r−y. Тогда 3x+4y=q даёт y=q−3p+3r.
2. Подставляя назад, получаем x=4p−q−4r, z=−3p+q+4r. Коэффициенты при p,q,r составляют строки A⁻¹: [[4,−1,−4],[−3,1,3],[−3,1,4]].
3. Каждая строка BC — комбинация строк C с коэффициентами из строки B. Например, вторая равна −(2,3,−1)+2(0,2,1)=(−2,1,3). Итак BC=[[2,3,−1],[−2,1,3],[6,11,−2]].
4. Складываем поэлементно. Ответ: [[6,2,−5],[−5,2,6],[3,12,2]].`,
`1. Za nalaženje A⁻¹ rešimo A(x,y,z)ᵀ=(p,q,r)ᵀ sa proizvoljnom desnom stranom. Iz x+z=p i −y+z=r sledi z=r+y i x=p−r−y. Jednačina 3x+4y=q sada daje y=q−3p+3r.
2. Vraćanjem dobijamo x=4p−q−4r i z=−3p+q+4r. Koeficijenti uz p,q,r čine vrste A⁻¹: [[4,−1,−4],[−3,1,3],[−3,1,4]].
3. Svaka vrsta BC je kombinacija vrsta matrice C sa koeficijentima iz odgovarajuće vrste matrice B. Na primer, druga je −(2,3,−1)+2(0,2,1)=(−2,1,3). Zato BC=[[2,3,−1],[−2,1,3],[6,11,−2]].
4. Sabiranjem odgovarajućih elemenata dobijamo [[6,2,−5],[−5,2,6],[3,12,2]].`),
q("Исследуйте и решите в зависимости от a,b∈ℝ систему\nx+y−z=2\n2x+4y−3z=5\nax+y+2z=b.",
"U zavisnosti od a,b∈ℝ diskutovati i rešiti sistem\nx+y−z=2\n2x+4y−3z=5\nax+y+2z=b.",
`1. Вычитаем удвоенное первое уравнение из второго: 2y−z=1. Отсюда z=2y−1, а первое уравнение даёт x=y+1.
2. Подставляем в третье: a(y+1)+y+2(2y−1)=b, то есть (a+5)y=b−a+2.
3. При a≠−5 обозначим t=(b−a+2)/(a+5). Единственное решение (x,y,z)=(1+t,t,2t−1).
4. При a=−5 остаётся 0=b+7. Если b≠−7, решений нет. Если b=−7, годится любое y=t∈ℝ: все решения имеют вид (1+t,t,2t−1).`,
`1. Od druge jednačine oduzmemo dvostruku prvu: 2y−z=1. Sledi z=2y−1, a prva jednačina daje x=y+1.
2. Uvrštavanjem u treću dobijamo a(y+1)+y+2(2y−1)=b, odnosno (a+5)y=b−a+2.
3. Za a≠−5 neka je t=(b−a+2)/(a+5). Jedinstveno rešenje je (x,y,z)=(1+t,t,2t−1).
4. Za a=−5 ostaje 0=b+7. Ako je b≠−7, nema rešenja. Ako je b=−7, svako y=t∈ℝ je dozvoljeno: sva rešenja su (1+t,t,2t−1).`),
q("При a=−5, b=−7 найдите ранг расширенной матрицы системы 4а.",
"Za a=−5, b=−7 izračunati rang proširene matrice sistema iz 4a.",
`1. Берём строки со столбцом правых частей. После R₂←R₂−2R₁ и R₃←R₃+5R₁ имеем (1,1,−1 | 2), (0,2,−1 | 1), (0,6,−3 | 3).
2. Третья строка равна утроенной второй, включая правую часть. Первые две строки независимы: ведущие элементы находятся в разных столбцах.
Ответ: ранг расширенной матрицы равен 2.`,
`1. Zadržavamo i kolonu slobodnih članova. Posle R₂←R₂−2R₁ i R₃←R₃+5R₁ vrste su (1,1,−1 | 2), (0,2,−1 | 1), (0,6,−3 | 3).
2. Treća vrsta jednaka je trostrukoj drugoj, uključujući slobodni član. Prve dve vrste su nezavisne jer su im vodeći elementi u različitim kolonama.
Odgovor: rang proširene matrice je 2.`),
q("Решите 9yₜ₊₂+3yₜ₊₁−2yₜ=10 при y₀=1, y₁=3. Опишите поведение при t→+∞.",
"Rešiti 9yₜ₊₂+3yₜ₊₁−2yₜ=10 za y₀=1, y₁=3. Opisati ponašanje kada t→+∞.",
`1. Постоянное частное решение k удовлетворяет (9+3−2)k=10, поэтому k=1. Для отклонения yₜ−1 уравнение однородно.
2. Характеристический многочлен 9r²+3r−2=(3r−1)(3r+2) даёт корни 1/3 и −2/3. Значит, yₜ=1+C(1/3)ᵗ+D(−2/3)ᵗ.
3. Из y₀=1 и y₁=3 получаем C+D=0 и C/3−2D/3=2. Отсюда C=2, D=−2.
Ответ: yₜ=1+2(1/3)ᵗ−2(−2/3)ᵗ. Оба основания по модулю меньше 1, поэтому yₜ→1. При нечётном t значение выше 1, при чётном t≥2 — ниже 1.`,
`1. Konstantno partikularno rešenje k zadovoljava (9+3−2)k=10, pa je k=1. Za odstupanje yₜ−1 jednačina je homogena.
2. Karakteristični polinom 9r²+3r−2=(3r−1)(3r+2) daje korene 1/3 i −2/3. Odatle yₜ=1+C(1/3)ᵗ+D(−2/3)ᵗ.
3. Iz y₀=1 i y₁=3 sledi C+D=0 i C/3−2D/3=2. Dobijamo C=2, D=−2.
Odgovor: yₜ=1+2(1/3)ᵗ−2(−2/3)ᵗ. Apsolutne vrednosti obe baze su manje od 1, pa yₜ→1. Za neparno t vrednost je iznad 1, a za parno t≥2 ispod 1.`),
q("Исследуйте сходимость ряда Σ ((2+n)/(4+2n))²ⁿ, n=1,…,∞.","Ispitati konvergenciju reda Σ ((2+n)/(4+2n))²ⁿ, n=1,…,∞.",
`1. Замечаем точное равенство 4+2n=2(n+2). Дробь равна 1/2 для всех n≥1.
2. Общий член (1/2)²ⁿ=(1/4)ⁿ. Это геометрический ряд со знаменателем 1/4, по модулю меньшим 1, поэтому ряд сходится.
3. Проверка: его сумма с n=1 равна (1/4)/(1−1/4)=1/3.`,
`1. Uočimo da je 4+2n=2(n+2). Razlomak je tačno 1/2 za svako n≥1.
2. Opšti član je (1/2)²ⁿ=(1/4)ⁿ. Dobijeni geometrijski red ima količnik 1/4 čija je apsolutna vrednost manja od 1, pa konvergira.
3. Provera: zbir počev od n=1 iznosi (1/4)/(1−1/4)=1/3.`)
];

BANK[1][8].ru.prompt += '\nПримечание к фото: мелкий фрагмент прочитан как n³+1.';
BANK[1][8].sr.prompt += '\nNapomena uz fotografiju: sitan zapis pročitan je kao n³+1.';

