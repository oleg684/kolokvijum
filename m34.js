BANK[3] = [
  q('На A = {1, 2, 3, 4} задано xρy ⇔ x² ≥ y². Нарисуйте граф. Исследуйте рефлексивность, симметричность, антисимметричность и транзитивность. К какому типу относится ρ?',
    'Na A = {1, 2, 3, 4} data je relacija xρy ⇔ x² ≥ y². Nacrtajte graf. Ispitajte refleksivnost, simetričnost, antisimetričnost i tranzitivnost. Kojoj vrsti pripada ρ?',
    `Все элементы положительны, поэтому x² ≥ y² равносильно x ≥ y. Стрелка идёт от большего или равного к меньшему или равному.
На каждой вершине поставьте петлю. Остальные стрелки: 4→3, 4→2, 4→1, 3→2, 3→1, 2→1. Это полный граф отношения.
Рефлексивность: x ≥ x. Симметричности нет: 2 ≥ 1, но 1 ≥ 2 ложно. Антисимметричность: из x ≥ y и y ≥ x следует x = y.
Транзитивность: x ≥ y ≥ z влечёт x ≥ z. Итак, это отношение порядка. Любые два числа сравнимы, поэтому порядок линейный. Эквивалентности мешает отсутствие симметричности.`,
    `Svi elementi su pozitivni, pa x² ≥ y² važi tačno kada je x ≥ y. Strelica vodi od većeg ili jednakog ka manjem ili jednakom broju.
Nacrtajte petlju u svakom čvoru. Ostale strelice su 4→3, 4→2, 4→1, 3→2, 3→1, 2→1. Time je graf potpun.
Refleksivnost: x ≥ x. Simetričnost ne važi: 2 ≥ 1, dok je 1 ≥ 2 netačno. Antisimetričnost: iz x ≥ y i y ≥ x sledi x = y.
Tranzitivnost: iz x ≥ y ≥ z sledi x ≥ z. To je relacija poretka. Svaka dva broja su uporediva, pa je poredak linearan. Uslov simetričnosti potreban za ekvivalenciju nije ispunjen.`),
  q('В одних координатах постройте исходную элементарную функцию и f(x) = (x + 2)² − 3.',
    'U istom koordinatnom sistemu skicirajte polaznu elementarnu funkciju i f(x) = (x + 2)² − 3.',
    `Исходная парабола y = x² имеет вершину (0, 0) и проходит через (−2, 4), (−1, 1), (1, 1), (2, 4).
Чтобы квадрат имел прежний аргумент u, нужно x + 2 = u, то есть x = u − 2. Поэтому каждая точка сдвигается на 2 влево, затем на 3 вниз из-за слагаемого −3.
Вершина (−2, −3), ось x = −2. Симметричные точки (−3, −2), (−1, −2) и (−4, 1), (0, 1) позволяют провести обе ветви вверх. Нули при x = −2 ± √3.`,
    `Polazna parabola y = x² ima teme (0, 0) i prolazi kroz (−2, 4), (−1, 1), (1, 1), (2, 4).
Da bi argument kvadrata bio stari argument u, tražimo x + 2 = u, odnosno x = u − 2. Zato svaku tačku pomeramo za 2 ulevo i, zbog sabirka −3, za 3 naniže.
Teme je (−2, −3), a osa simetrije x = −2. Obeležite simetrične tačke (−3, −2), (−1, −2) i (−4, 1), (0, 1). Grane se otvaraju nagore. Nule su x = −2 ± √3.`),
  q('Вычислите lim(x→+∞) (1 + 5/(x² − 1))^(4x² − 1).',
    'Izračunajte lim(x→+∞) (1 + 5/(x² − 1))^(4x² − 1).',
    `Основание стремится к 1, а показатель растёт. Используем ln(1 + u)/u → 1 при u → 0, чтобы раскрыть неопределённость.
Положим u = 5/(x² − 1). Логарифм выражения равен [(4x² − 1)·5/(x² − 1)]·[ln(1 + u)/u].
Первый множитель стремится к 20 по старшим коэффициентам, второй к 1. Логарифм стремится к 20. По непрерывности экспоненты ответ e²⁰.`,
    `Osnova teži jedinici, a izložilac raste. Koristimo ln(1 + u)/u → 1 kada u → 0 da bismo razrešili neodređeni oblik.
Neka je u = 5/(x² − 1). Logaritam izraza jednak je [(4x² − 1)·5/(x² − 1)]·[ln(1 + u)/u].
Prvi činilac teži broju 20 po vodećim koeficijentima, a drugi jedinici. Logaritam teži broju 20. Neprekidnost eksponencijalne funkcije daje rezultat e²⁰.`),
  q('Найдите первую производную f(x) = arctg(3x² + 5x + 6).',
    'Nađite prvi izvod funkcije f(x) = arctg(3x² + 5x + 6).',
    `Функция сложная. При u = 3x² + 5x + 6 внешняя функция arctg(u) имеет производную 1/(1 + u²).
По правилу цепочки умножаем её на производную внутреннего выражения u′ = 6x + 5.
f′(x) = (6x + 5)/(1 + (3x² + 5x + 6)²). Знаменатель положителен при всех действительных x.`,
    `Funkcija je složena. Za u = 3x² + 5x + 6 izvod spoljašnje funkcije arctg(u) je 1/(1 + u²).
Po pravilu lanca množimo izvodom unutrašnje funkcije u′ = 6x + 5.
f′(x) = (6x + 5)/(1 + (3x² + 5x + 6)²). Imenilac je pozitivan za svako realno x.`),
  q('Даны A = [[1, −2, 2], [−3, 2, −1], [−2, 3, −2]], B = [[−2, −1, 0], [1, −3, 2], [3, 0, −1]]. Вычислите 2A + AB.',
    'Date su A = [[1, −2, 2], [−3, 2, −1], [−2, 3, −2]], B = [[−2, −1, 0], [1, −3, 2], [3, 0, −1]]. Izračunajte 2A + AB.',
    `Элемент (AB)ᵢⱼ — скалярное произведение строки i матрицы A и столбца j матрицы B. Например, (AB)₁₁ = 1·(−2) + (−2)·1 + 2·3 = 2.
Аналогично AB = [[2, 5, −6], [5, −3, 5], [1, −7, 8]].
Удваиваем каждый элемент A: 2A = [[2, −4, 4], [−6, 4, −2], [−4, 6, −4]]. Складываем поэлементно.
2A + AB = [[4, 1, −2], [−1, 1, 3], [−3, −1, 4]].`,
    `Element (AB)ᵢⱼ je skalarni proizvod i-te vrste matrice A i j-te kolone matrice B. Na primer, (AB)₁₁ = 1·(−2) + (−2)·1 + 2·3 = 2.
Na isti način dobijamo AB = [[2, 5, −6], [5, −3, 5], [1, −7, 8]].
Svaki element matrice A množimo sa 2: 2A = [[2, −4, 4], [−6, 4, −2], [−4, 6, −4]]. Sabiramo odgovarajuće elemente.
2A + AB = [[4, 1, −2], [−1, 1, 3], [−3, −1, 4]].`),
  q('Исследуйте и решите систему при всех a ∈ ℝ.\nx + y + z = 6\nax + 4y + z = 5\n6x − y + 2z = 13',
    'Diskutujte i rešite sistem za sve a ∈ ℝ.\nx + y + z = 6\nax + 4y + z = 5\n6x − y + 2z = 13',
    `Исключаем z: из второго уравнения вычитаем первое, из третьего — удвоенное первое. Получаем (a − 1)x + 3y = −1 и 4x − 3y = 1.
Складываем их: (a + 3)x = 0. Прежде чем делить на a + 3, проверяем, может ли этот множитель равняться нулю.
При a ≠ −3 имеем x = 0. Затем 4x − 3y = 1 даёт y = −1/3. Из первого уравнения z = 19/3. Это единственное решение.
При a = −3 два полученных уравнения эквивалентны. Положим x = s. Тогда y = (4s − 1)/3, z = 6 − s − y = (19 − 7s)/3. Любое s ∈ ℝ даёт решение.`,
    `Eliminišemo z: od druge jednačine oduzmemo prvu, a od treće dvostruku prvu. Dobijamo (a − 1)x + 3y = −1 i 4x − 3y = 1.
Sabiranjem sledi (a + 3)x = 0. Pre deljenja izrazom a + 3 proveravamo kada je on nula.
Za a ≠ −3 sledi x = 0. Zatim iz 4x − 3y = 1 dobijamo y = −1/3, a iz prve jednačine z = 19/3. Rešenje je jedinstveno.
Za a = −3 preostale dve jednačine su ekvivalentne. Stavimo x = s. Tada je y = (4s − 1)/3 i z = 6 − s − y = (19 − 7s)/3. Svako s ∈ ℝ daje jedno rešenje.`),
  q('При a = −3 найдите ранг расширенной матрицы системы из 4а.',
    'Za a = −3 nađite rang proširene matrice sistema iz 4a.',
    `Вычитая первую строку из второй и удвоенную первую из третьей, получаем строки (1, 1, 1 | 6), (−4, 3, 0 | −1), (4, −3, 0 | 1).
Последние две строки противоположны, поэтому одна из них после сложения обнуляется, включая правую часть. Первые две независимы: только у первой ненулевой коэффициент при z. Ранг расширенной матрицы равен 2.`,
    `Kada od druge vrste oduzmemo prvu, a od treće dvostruku prvu, vrste su (1, 1, 1 | 6), (−4, 3, 0 | −1), (4, −3, 0 | 1).
Poslednje dve vrste su suprotne. Sabiranjem nastaje nulta vrsta, uključujući i proširenu kolonu. Prve dve su nezavisne jer samo prva ima nenulti koeficijent uz z. Rang proširene matrice je 2.`),
  q('Решите yₜ₊₂ − 4yₜ₊₁ + 3yₜ = −4t + 2 при y₀ = 3, y₁ = 7. Опишите поведение при t → +∞.',
    'Rešite yₜ₊₂ − 4yₜ₊₁ + 3yₜ = −4t + 2 za y₀ = 3, y₁ = 7. Opišite ponašanje kada t → +∞.',
    `Подстановка rᵗ в однородную часть даёт r² − 4r + 3 = (r − 1)(r − 3) = 0. Поэтому yₜʰ = C + D·3ᵗ.
Правая часть линейна, но константа уже входит в однородное решение. Умножаем линейную пробную форму на t и ищем частное решение At² + Bt.
Оператор слева переводит t² в −4t, а t в −2. Значит, −4At − 2B = −4t + 2, откуда A = 1, B = −1.
Получаем yₜ = C + D·3ᵗ + t² − t. Начальные условия дают C + D = 3, C + 3D = 7. Отсюда D = 2, C = 1.
Ответ: yₜ = 1 + 2·3ᵗ + t² − t. При больших t главный член 2·3ᵗ, поэтому yₜ → +∞.`,
    `Smenom rᵗ u homogenom delu dobijamo r² − 4r + 3 = (r − 1)(r − 3) = 0. Zato je yₜʰ = C + D·3ᵗ.
Desna strana je linearna, a konstanta je već homogeno rešenje. Probni linearni polinom množimo sa t i tražimo partikularno rešenje At² + Bt.
Operator leve strane preslikava t² u −4t, a t u −2. Zato je −4At − 2B = −4t + 2, odakle A = 1, B = −1.
Sledi yₜ = C + D·3ᵗ + t² − t. Početni uslovi daju C + D = 3 i C + 3D = 7, pa je D = 2 i C = 1.
Rešenje je yₜ = 1 + 2·3ᵗ + t² − t. Za velike t dominira 2·3ᵗ, pa yₜ → +∞.`),
  q('Исследуйте сходимость ряда ∑ (n! / 2ⁿ), n от 1 до ∞.',
    'Ispitajte konvergenciju reda ∑ (n! / 2ⁿ), od n = 1 do ∞.',
    `Для aₙ = n!/2ⁿ отношение соседних членов равно aₙ₊₁/aₙ = (n + 1)/2.
При n ≥ 3 это отношение не меньше 2. Значит, начиная с a₃ члены растут по меньшей мере вдвое и не стремятся к нулю. Необходимое условие сходимости нарушено. Поскольку члены положительны, частичные суммы стремятся к +∞.`,
    `Za aₙ = n!/2ⁿ količnik uzastopnih članova je aₙ₊₁/aₙ = (n + 1)/2.
Za n ≥ 3 količnik je najmanje 2. Od a₃ nadalje članovi rastu barem dvostruko i ne teže nuli. Potreban uslov za konvergenciju nije ispunjen. Pošto su svi članovi pozitivni, parcijalne sume teže ka +∞.`)
];

BANK[4] = [
  q('На A = {1, 2, 3, 4} задано xρy ⇔ |x − y| ≤ 1. Нарисуйте стрелочный граф. Исследуйте рефлексивность, симметричность, антисимметричность и транзитивность. Это эквивалентность или порядок?',
    'Na A = {1, 2, 3, 4} data je relacija xρy ⇔ |x − y| ≤ 1. Nacrtajte strelasti dijagram. Ispitajte refleksivnost, simetričnost, antisimetričnost i tranzitivnost. Da li je to relacija ekvivalencije ili poretka?',
    `Условие выполняется для равных чисел и соседних целых. Нарисуйте петли на всех вершинах и пары стрелок 1↔2, 2↔3, 3↔4.
Рефлексивность есть: |x − x| = 0 ≤ 1. Симметричность есть: |x − y| = |y − x|.
Антисимметричности нет: 1ρ2 и 2ρ1, хотя 1 ≠ 2. Транзитивности тоже нет: 1ρ2 и 2ρ3 верны, но 1ρ3 ложно, поскольку |1 − 3| = 2.
Без транзитивности отношение не может быть ни эквивалентностью, ни порядком.`,
    `Uslov ispunjavaju jednaki i susedni celi brojevi. Nacrtajte petlju kod svake od četiri tačke i parove strelica 1↔2, 2↔3, 3↔4.
Refleksivnost važi jer je |x − x| = 0 ≤ 1. Simetričnost važi jer je |x − y| = |y − x|.
Antisimetričnost ne važi: 1ρ2 i 2ρ1, a 1 ≠ 2. Nema ni tranzitivnosti: važe 1ρ2 i 2ρ3, ali 1ρ3 ne važi jer je |1 − 3| = 2.
Bez tranzitivnosti relacija ne može biti ni relacija ekvivalencije ni relacija poretka.`),
  q('В одних координатах постройте исходную элементарную функцию и f(x) = −(x − 1)² + 4.',
    'U istom koordinatnom sistemu skicirajte polaznu elementarnu funkciju i f(x) = −(x − 1)² + 4.',
    `Постройте y = x² по вершине (0, 0) и точкам (−2, 4), (−1, 1), (1, 1), (2, 4).
Замена x на x − 1 сдвигает график на 1 вправо: нуль под квадратом теперь при x = 1. Минус перед квадратом отражает параболу относительно горизонтальной оси, а +4 сдвигает её на 4 вверх.
Вершина (1, 4), ось симметрии x = 1, ветви направлены вниз. Отметьте (0, 3), (2, 3). Пересечения с осью x: (x − 1)² = 4, следовательно, (−1, 0) и (3, 0).`,
    `Nacrtajte y = x² pomoću temena (0, 0) i tačaka (−2, 4), (−1, 1), (1, 1), (2, 4).
Zamenom x sa x − 1 graf se pomera za 1 udesno: izraz pod kvadratom nestaje za x = 1. Minus ispred kvadrata preslikava parabolu simetrično u odnosu na x-osu, a +4 pomera graf za 4 nagore.
Teme je (1, 4), osa simetrije x = 1, a grane su okrenute nadole. Ucrtajte (0, 3) i (2, 3). Iz (x − 1)² = 4 dobijamo preseke sa x-osom (−1, 0) i (3, 0).`),
  q('Без правила Лопиталя вычислите lim(x→0) (e^(4x) − 1)/sin(3x).',
    'Bez primene Lopitalove teoreme izračunajte lim(x→0) (e^(4x) − 1)/sin(3x).',
    `При подстановке x = 0 получаем 0/0. Приведём выражение к двум стандартным пределам, используя тот же аргумент в числителе и знаменателе.
Для x в проколотой окрестности нуля дробь равна [(e^(4x) − 1)/(4x)]·[3x/sin(3x)]·4/3.
При u → 0 имеем (eᵘ − 1)/u → 1 и sin(u)/u → 1 (углы в радианах). Оба множителя в квадратных скобках стремятся к 1. Получаем 4/3.`,
    `Direktna zamena x = 0 daje oblik 0/0. Pripremamo dva standardna limesa tako što u svakom izdvojimo isti argument.
Za x dovoljno blisko nuli, x ≠ 0, izraz je [(e^(4x) − 1)/(4x)]·[3x/sin(3x)]·4/3.
Za u → 0 važi (eᵘ − 1)/u → 1 i sin(u)/u → 1 (ugao je u radijanima). Oba činioca u uglastim zagradama teže jedinici. Rezultat je 4/3.`),
  q('Найдите первую производную f(x) = ln((x² + 2)/(x + 3)).',
    'Nađite prvi izvod funkcije f(x) = ln((x² + 2)/(x + 3)).',
    `Условие для логарифма: (x² + 2)/(x + 3) > 0. Числитель всегда положителен, поэтому x > −3.
На этой области f(x) = ln(x² + 2) − ln(x + 3). По правилу (ln u)′ = u′/u получаем f′(x) = 2x/(x² + 2) − 1/(x + 3).
После приведения к общему знаменателю f′(x) = (x² + 6x − 2)/((x² + 2)(x + 3)), x > −3.`,
    `Logaritam zahteva (x² + 2)/(x + 3) > 0. Brojilac je uvek pozitivan, pa je domen x > −3.
Na tom domenu je f(x) = ln(x² + 2) − ln(x + 3). Pravilom (ln u)′ = u′/u dobijamo f′(x) = 2x/(x² + 2) − 1/(x + 3).
Svođenjem na zajednički imenilac dobijamo f′(x) = (x² + 6x − 2)/((x² + 2)(x + 3)), x > −3.`),
  q('Даны A = [[1, 1, 0], [0, 1, 1], [0, 0, 1]], B = [[1, 0, 1], [1, 1, 0], [0, 1, 1]]. Вычислите AB − 2A.',
    'Date su A = [[1, 1, 0], [0, 1, 1], [0, 0, 1]], B = [[1, 0, 1], [1, 1, 0], [0, 1, 1]]. Izračunajte AB − 2A.',
    `Чтобы получить строку AB, берём линейную комбинацию строк B с коэффициентами из соответствующей строки A.
Первая строка A равна (1, 1, 0), поэтому первая строка AB — сумма первых двух строк B: (2, 1, 1). Вторая — сумма второй и третьей: (1, 2, 1). Последняя совпадает с третьей строкой B: (0, 1, 1).
2A = [[2, 2, 0], [0, 2, 2], [0, 0, 2]]. Поэлементное вычитание даёт AB − 2A = [[0, −1, 1], [1, 0, −1], [0, 1, −1]].`,
    `Da bismo dobili vrstu proizvoda AB, uzimamo linearnu kombinaciju vrsta matrice B sa koeficijentima iz odgovarajuće vrste matrice A.
Prva vrsta A je (1, 1, 0), pa je prva vrsta AB zbir prve dve vrste B: (2, 1, 1). Druga je zbir druge i treće: (1, 2, 1). Poslednja je jednaka trećoj vrsti B: (0, 1, 1).
2A = [[2, 2, 0], [0, 2, 2], [0, 0, 2]]. Oduzimanjem odgovarajućih elemenata dobijamo AB − 2A = [[0, −1, 1], [1, 0, −1], [0, 1, −1]].`),
  q('Исследуйте и решите систему при всех a ∈ ℝ.\nx + y + z = 2\n2x + ay + z = 3\nx + y + az = 1\nНа фото правая часть третьего уравнения прочитана как 1.',
    'Diskutujte i rešite sistem za sve a ∈ ℝ.\nx + y + z = 2\n2x + ay + z = 3\nx + y + az = 1\nNa fotografiji je desna strana treće jednačine pročitana kao 1.',
    `Вычитаем первое уравнение из третьего, чтобы исключить x и y. Получаем (a − 1)z = −1. При a = 1 это противоречие, поэтому решений нет.
При a ≠ 1 имеем z = −1/(a − 1). Вычитаем удвоенное первое уравнение из второго: (a − 2)y − z = −1. При a = 2 отсюда z = 1, а предыдущее уравнение даёт z = −1. Решений снова нет.
При a ≠ 1, 2 находим y = (z − 1)/(a − 2) = −a/((a − 1)(a − 2)). Затем из первого уравнения получаем x = 2 − y − z = 2 + 2/(a − 2) = (2a − 2)/(a − 2). Все три координаты определены однозначно.`,
    `Od treće jednačine oduzmemo prvu da eliminišemo x i y. Dobijamo (a − 1)z = −1. Za a = 1 dobijamo protivrečnost, pa sistem nema rešenja.
Za a ≠ 1 je z = −1/(a − 1). Od druge jednačine oduzmemo dvostruku prvu: (a − 2)y − z = −1. Za a = 2 odatle je z = 1, dok prethodna jednačina daje z = −1. Sistem opet nema rešenja.
Za a ≠ 1, 2 dobijamo y = (z − 1)/(a − 2) = −a/((a − 1)(a − 2)). Iz prve jednačine sledi x = 2 − y − z = 2 + 2/(a − 2) = (2a − 2)/(a − 2). Sve tri koordinate određene su jednoznačno.`),
  q('При a = 1 найдите ранг расширенной матрицы системы из 4а.',
    'Za a = 1 odredite rang proširene matrice sistema iz 4a.',
    `Запишем строки вместе с правой частью: (1, 1, 1 | 2), (2, 1, 1 | 3), (1, 1, 1 | 1).
Вычитая первую строку из второй и из третьей, получаем соответственно (1, 0, 0 | 1) и (0, 0, 0 | −1). Последняя строка ненулевая именно в расширенной матрице.
Все три строки независимы: ненулевой столбец y выделяет первую, затем столбец x — вторую, затем правая часть — третью. Ранг равен 3. У матрицы коэффициентов ранг 2, что согласуется с несовместностью системы.`,
    `Vrste sa kolonom slobodnih članova su (1, 1, 1 | 2), (2, 1, 1 | 3), (1, 1, 1 | 1).
Oduzimamo prvu vrstu od druge i od treće. Dobijamo (1, 0, 0 | 1) i (0, 0, 0 | −1). Poslednja vrsta je nenulta upravo zahvaljujući proširenoj koloni.
Sve tri vrste su nezavisne: kolona y izdvaja prvu, zatim kolona x drugu, pa proširena kolona treću. Rang je 3. Matrica koeficijenata ima rang 2, u skladu sa činjenicom da je sistem nesaglasan.`),
  q('Найдите общее решение yₜ₊₂ − 4yₜ₊₁ + 3yₜ = 2 и решение с y₀ = 2, y₁ = 3. Опишите поведение этого решения при t → +∞.',
    'Odredite opšte rešenje jednačine yₜ₊₂ − 4yₜ₊₁ + 3yₜ = 2 i ono koje zadovoljava y₀ = 2, y₁ = 3. Opišite ponašanje tog rešenja kada t → +∞.',
    `Характеристическое уравнение r² − 4r + 3 = 0 имеет различные корни 1 и 3. Однородное решение равно C + D·3ᵗ.
Константа уже входит в однородную часть. Для постоянной правой части пробуем yₜᵖ = kt. Подстановка даёт k[(t + 2) − 4(t + 1) + 3t] = −2k = 2, поэтому k = −1.
Общее решение yₜ = C + D·3ᵗ − t. Из y₀ = 2 и y₁ = 3 получаем C + D = 2 и C + 3D − 1 = 3, откуда C = D = 1.
Искомое решение yₜ = 1 + 3ᵗ − t. Экспонента растёт быстрее t, поэтому yₜ → +∞.`,
    `Karakteristična jednačina r² − 4r + 3 = 0 ima različite korene 1 i 3. Homogeno rešenje je C + D·3ᵗ.
Konstanta je već deo homogenog rešenja. Za konstantnu desnu stranu probamo yₜᵖ = kt. Zamenom dobijamo k[(t + 2) − 4(t + 1) + 3t] = −2k = 2, pa je k = −1.
Opšte rešenje je yₜ = C + D·3ᵗ − t. Iz y₀ = 2 i y₁ = 3 sledi C + D = 2 i C + 3D − 1 = 3, odakle C = D = 1.
Traženo rešenje je yₜ = 1 + 3ᵗ − t. Eksponencijalni član raste brže od t, pa yₜ → +∞.`),
  q('Исследуйте сходимость ряда ∑ (3n + 1)/(n³ + 2n + 1), n от 1 до ∞.',
    'Ispitajte konvergenciju reda ∑ (3n + 1)/(n³ + 2n + 1), od n = 1 do ∞.',
    `Члены положительны. Отношение старших степеней 3n/n³ = 3/n² подсказывает сравнение с рядом ∑ 1/n².
Делим наш член на 1/n²: (3n³ + n²)/(n³ + 2n + 1) → 3. Предел конечен и строго положителен, значит, по предельному признаку сравнения оба ряда сходятся или расходятся одновременно.
Ряд ∑ 1/n² сходится (p-ряд с p = 2 > 1), поэтому заданный ряд сходится.`,
    `Članovi su pozitivni. Odnos vodećih članova 3n/n³ = 3/n² upućuje na poređenje sa redom ∑ 1/n².
Delimo dati član izrazom 1/n²: (3n³ + n²)/(n³ + 2n + 1) → 3. Limes je konačan i strogo pozitivan, pa prema graničnom kriterijumu poređenja redovi imaju istu prirodu.
Red ∑ 1/n² konvergira (p-red za p = 2 > 1), pa konvergira i dati red.`)
];
