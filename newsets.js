/* Five additional written-exam papers. Each entry has its own worked solution. */
(() => {
  const A = 'A = {1, 2, 3, 4}';
  const classify = [
    ['2 ∣ (x − y)', 'Разность числа с самим собой равна нулю. Смена знака сохраняет чётность. Сумма двух чётных разностей тоже чётна: x − z = (x − y) + (y − z). Поэтому отношение рефлексивно, симметрично и транзитивно.\nПары (1,3) и (3,1) опровергают антисимметричность. Это эквивалентность с классами {1,3} и {2,4}.', 'Razlika broja sa samim sobom je nula. Promena znaka čuva parnost. Zbir dve parne razlike je paran jer je x − z = (x − y) + (y − z). Relacija je zato refleksivna, simetrična i tranzitivna.\nParovi (1,3) i (3,1) pobijaju antisimetričnost. Ovo je relacija ekvivalencije sa klasama {1,3} i {2,4}.'],
    ['x ∣ y', 'Каждое число делит себя. Из y = kx и z = my следует z = mkx, что доказывает транзитивность. Если положительные x и y делят друг друга, то km = 1, значит k = m = 1 и x = y.\nЭто частичный порядок: он рефлексивен, антисимметричен и транзитивен. Симметричности нет: 1 делит 2, а 2 не делит 1. Числа 2 и 3 несравнимы.', 'Svaki broj deli samog sebe. Iz y = kx i z = my sledi z = mkx, pa je relacija tranzitivna. Ako pozitivni x i y dele jedan drugog, proizvod odgovarajućih pozitivnih količnika je 1, pa je x = y.\nOvo je parcijalno uređenje: relacija je refleksivna, antisimetrična i tranzitivna. Nije simetrična jer 1 deli 2, a 2 ne deli 1. Brojevi 2 i 3 nisu uporedivi.'],
    ['|x − y| ≤ 1', 'На диагонали расстояние равно нулю. Перестановка x и y сохраняет расстояние. Значит, есть рефлексивность и симметричность.\nПары 1ρ2 и 2ρ1 опровергают антисимметричность. Из 1ρ2 и 2ρ3 не следует 1ρ3. Транзитивности нет, поэтому это ни эквивалентность, ни частичный порядок.', 'Na dijagonali je rastojanje nula. Zamena x i y čuva rastojanje, pa je relacija refleksivna i simetrična.\nIz 1ρ2 i 2ρ1, uz 1 ≠ 2, sledi da relacija nije antisimetrična. Važe 1ρ2 i 2ρ3, ali ne i 1ρ3. Nema tranzitivnosti, pa relacija nije ni ekvivalencija ni parcijalno uređenje.'],
    ['x ≥ y', 'Имеем x ≥ x. Из x ≥ y и y ≥ x следует x = y. Из x ≥ y ≥ z следует x ≥ z. Получены рефлексивность, антисимметричность и транзитивность.\nСимметричности нет: 3 ≥ 1, но 1 < 3. Любые два числа сравнимы, поэтому это линейный порядок.', 'Važi x ≥ x. Iz x ≥ y i y ≥ x sledi x = y. Iz x ≥ y ≥ z sledi x ≥ z. Time su dokazane refleksivnost, antisimetričnost i tranzitivnost.\nSimetričnost ne važi jer 3 ≥ 1, ali 1 < 3. Svaka dva broja su uporediva, pa je ovo linearno uređenje.'],
    ['x + y = 5', 'Все пары: (1,4), (4,1), (2,3), (3,2). На диагонали пар нет. Вместе с каждой парой входит обратная, поэтому отношение симметрично, но не антисимметрично.\nИз 1ρ4 и 4ρ1 следовало бы 1ρ1, что неверно. Нет рефлексивности и транзитивности. Это ни эквивалентность, ни частичный порядок.', 'Svi parovi su (1,4), (4,1), (2,3), (3,2). Dijagonalnih parova nema. Uz svaki par postoji obrnuti, pa je relacija simetrična, ali nije antisimetrična.\nIz 1ρ4 i 4ρ1 bi moralo da sledi 1ρ1, što ne važi. Relacija nije ni refleksivna ni tranzitivna. Nije ni ekvivalencija ni parcijalno uređenje.']
  ];
  function relation(i) {
    const [rule, ru, sr] = classify[i];
    return q('На ' + A + ' задано xρy ⇔ ' + rule + '. Проверьте рефлексивность, симметричность, антисимметричность и транзитивность. Классифицируйте отношение.', 'Na skupu ' + A + ' data je relacija xρy ⇔ ' + rule + '. Ispitati refleksivnost, simetričnost, antisimetričnost i tranzitivnost. Klasifikovati relaciju.', ru, sr);
  }
  const functions = [
    ['√(x − 2) + 1', '[2, +∞)', '[1, +∞)', 'Под корнем требуется x − 2 ≥ 0. При x = 2 достигается 1. Для каждого y ≥ 1 берём x = (y − 1)² + 2, тогда f(x) = y.', 'Pod korenom mora važiti x − 2 ≥ 0. Za x = 2 dobija se 1. Za svako y ≥ 1 uzmemo x = (y − 1)² + 2, pa je f(x) = y.'],
    ['3 − (x + 2)²', 'ℝ', '(−∞, 3]', 'Квадрат определён на всей прямой и неотрицателен. Максимум 3 достигается при x = −2. Для любого y ≤ 3 подходит x = −2 + √(3 − y).', 'Kvadrat je definisan na celoj pravoj i nenegativan je. Maksimum 3 se dostiže za x = −2. Za svako y ≤ 3 odgovara x = −2 + √(3 − y).'],
    ['eˣ − 4', 'ℝ', '(−4, +∞)', 'Экспонента определена для всех x и строго положительна. Значение −4 недостижимо. Для каждого y > −4 есть прообраз x = ln(y + 4).', 'Eksponencijalna funkcija je definisana za svako x i strogo je pozitivna. Vrednost −4 se ne dostiže. Za svako y > −4 postoji praslika x = ln(y + 4).'],
    ['2 + 1/(x − 1)', 'ℝ ∖ {1}', 'ℝ ∖ {2}', 'Знаменатель исключает x = 1. Дробь с числителем 1 никогда не равна нулю, так что y = 2 невозможно. Для любого y ≠ 2 подставляем x = 1 + 1/(y − 2).', 'Imenilac isključuje x = 1. Razlomak sa brojiocem 1 ne može biti nula, pa je y = 2 nemoguće. Za svako y ≠ 2 uzimamo x = 1 + 1/(y − 2).'],
    ['|x − 3| − 2', 'ℝ', '[−2, +∞)', 'Модуль определён на ℝ и равен нулю при x = 3, поэтому минимум равен −2. Для любого y ≥ −2 подходит x = y + 5, поскольку x − 3 = y + 2 ≥ 0.', 'Apsolutna vrednost je definisana na ℝ i jednaka je nuli za x = 3. Minimum je zato −2. Za svako y ≥ −2 uzimamo x = y + 5, jer je x − 3 = y + 2 ≥ 0.']
  ];
  function onto(i) {
    const [f,d,b,r,s] = functions[i];
    const answer = '\nD = ' + d + ', B = ' + b + '.';
    return q('Для f(x) = ' + f + ' найдите естественную область определения D и множество B, для которого f: D → B сюръективна.', 'Za f(x) = ' + f + ' odrediti prirodni domen D i skup B tako da je f: D → B surjektivna.',r + answer,s + answer);
  }
  const limits = [
    ['lim (x → 0) (√(9 + x) − 3)/x', 'Подстановка даёт 0/0. Домножаем на сопряжённое: (√(9+x) − 3)(√(9+x) + 3) = x.\nПри x ≠ 0 сокращаем x и получаем 1/(√(9+x) + 3). Его предел равен 1/6.', 'Zamena daje 0/0. Množimo konjugovanim izrazom: (√(9+x) − 3)(√(9+x) + 3) = x.\nZa x ≠ 0 skraćujemo x. Ostaje 1/(√(9+x) + 3), čija je granična vrednost 1/6.'],
    ['lim (x → 0) sin(5x)/sin(2x)', 'Выделяем стандартные пределы: sin(5x)/sin(2x) = (5/2)·[sin(5x)/(5x)]·[2x/sin(2x)].\nВ радианах sin u/u → 1, поэтому ответ 5/2.', 'Izdvajamo standardne limite: sin(5x)/sin(2x) = (5/2)·[sin(5x)/(5x)]·[2x/sin(2x)].\nZa ugao u radijanima sin u/u → 1, pa je rezultat 5/2.'],
    ['lim (x → +∞) (1 + 3/x)²ˣ', 'Пусть t = x/3. Тогда 2x = 6t и выражение равно [(1 + 1/t)ᵗ]⁶.\nПри t → +∞ внутренняя степень стремится к e, поэтому предел e⁶.', 'Neka je t = x/3. Tada je 2x = 6t i izraz je [(1 + 1/t)ᵗ]⁶.\nZa t → +∞ izraz u uglastoj zagradi teži ka e, pa je rezultat e⁶.'],
    ['lim (x → +∞) (3x² − x + 2)/(2x² + 5)', 'Делим числитель и знаменатель на x². Получаем (3 − 1/x + 2/x²)/(2 + 5/x²).\nОбратные степени стремятся к нулю, а знаменатель стремится к 2. Ответ 3/2.', 'Delimo brojilac i imenilac sa x². Dobijamo (3 − 1/x + 2/x²)/(2 + 5/x²).\nNegativni stepeni teže nuli, a imenilac teži ka 2. Rezultat je 3/2.'],
    ['lim (x → 0) (e⁴ˣ − 1)/sin(3x)', 'Переписываем как (4/3)·[(e⁴ˣ − 1)/(4x)]·[3x/sin(3x)].\nПо стандартным пределам (eᵘ − 1)/u → 1 и sin u/u → 1 оба множителя в скобках стремятся к 1. Ответ 4/3.', 'Pišemo (4/3)·[(e⁴ˣ − 1)/(4x)]·[3x/sin(3x)].\nPo standardnim limitama (eᵘ − 1)/u → 1 i sin u/u → 1 oba faktora u zagradama teže jedinici. Rezultat je 4/3.']
  ];
  const derivatives = [
    ['ln(2x² + 3)', 'Аргумент логарифма всегда положителен. По правилу цепочки (ln u)′ = u′/u. Здесь u′ = 4x.\nf′(x) = 4x/(2x² + 3), x ∈ ℝ.', 'Argument logaritma je uvek pozitivan. Po pravilu za složenu funkciju (ln u)′ = u′/u, uz u′ = 4x.\nf′(x) = 4x/(2x² + 3), x ∈ ℝ.'],
    ['((x − 1)/(x + 2))³', 'Пусть u = (x − 1)/(x + 2). По правилу частного u′ = [(x + 2) − (x − 1)]/(x + 2)² = 3/(x + 2)².\nТогда f′ = 3u²u′ = 9(x − 1)²/(x + 2)⁴, x ≠ −2.', 'Neka je u = (x − 1)/(x + 2). Pravilo za količnik daje u′ = [(x + 2) − (x − 1)]/(x + 2)² = 3/(x + 2)².\nZato je f′ = 3u²u′ = 9(x − 1)²/(x + 2)⁴, x ≠ −2.'],
    ['arctan(x² − 1)', 'По правилу цепочки производная арктангенса равна u′/(1 + u²). Для u = x² − 1 имеем u′ = 2x.\nf′(x) = 2x/[1 + (x² − 1)²], x ∈ ℝ.', 'Po pravilu za složenu funkciju izvod arkustangensa je u′/(1 + u²). Za u = x² − 1 važi u′ = 2x.\nf′(x) = 2x/[1 + (x² − 1)²], x ∈ ℝ.'],
    ['ln((x² + 1)/(x + 2))', 'Числитель положителен, поэтому требуется x > −2. На этой области f = ln(x² + 1) − ln(x + 2).\nДифференцируем оба логарифма: f′ = 2x/(x² + 1) − 1/(x + 2) = (x² + 4x − 1)/[(x² + 1)(x + 2)].', 'Brojilac je pozitivan, pa mora biti x > −2. Tu važi f = ln(x² + 1) − ln(x + 2).\nDiferenciranjem dobijamo f′ = 2x/(x² + 1) − 1/(x + 2) = (x² + 4x − 1)/[(x² + 1)(x + 2)].'],
    ['(x² + 1)e⁻ˣ', 'Применяем правило произведения. Производные множителей равны 2x и −e⁻ˣ.\nf′ = 2xe⁻ˣ − (x² + 1)e⁻ˣ = −(x − 1)²e⁻ˣ, x ∈ ℝ.', 'Primenjujemo pravilo za proizvod. Izvodi faktora su 2x i −e⁻ˣ.\nf′ = 2xe⁻ˣ − (x² + 1)e⁻ˣ = −(x − 1)²e⁻ˣ, x ∈ ℝ.']
  ];
  const matrix = [
    ['A = [[2, 1], [1, 0]]. A² − 2A − I = 0?', 'Перемножаем строки и столбцы: A² = [[5, 2], [2, 1]]. Затем 2A = [[4, 2], [2, 0]].\nРазность равна единичной матрице I, поэтому равенство верно.', 'Množenjem vrsta i kolona dobijamo A² = [[5, 2], [2, 1]]. Zatim je 2A = [[4, 2], [2, 0]].\nRazlika je jedinična matrica I, pa jednakost važi.'],
    ['det [[2, 1, 0], [1, 3, 1], [0, 2, 4]] = ?', 'Разлагаем по первой строке со знаками +, −, +. Третий элемент нуль, поэтому остаются два минора.\n2(3·4 − 1·2) − 1(1·4 − 1·0) = 20 − 4 = 16.', 'Razvijamo po prvoj vrsti sa znacima +, −, +. Treći element je nula, pa ostaju dva minora.\n2(3·4 − 1·2) − 1(1·4 − 1·0) = 20 − 4 = 16.'],
    ['A = [[1, 2], [0, 1]], B = [[2, 0], [1, 3]]. AB − BA = ?', 'Порядок множителей существенен. Умножая строки A на столбцы B, получаем AB = [[4, 6], [1, 3]]. Меняем порядок и получаем BA = [[2, 4], [1, 5]].\nВычитаем поэлементно: AB − BA = [[2, 2], [0, −2]].', 'Redosled činilaca je bitan. Množenjem vrsta A i kolona B dobijamo AB = [[4, 6], [1, 3]]. Obrnutim redosledom dobijamo BA = [[2, 4], [1, 5]].\nOduzimanjem po elementima: AB − BA = [[2, 2], [0, −2]].'],
    ['A = [[3, 1], [2, 1]]. A⁻¹ = ?', 'Для матрицы 2×2 определитель равен ad − bc = 3 − 2 = 1. Он ненулевой, поэтому обратная существует.\nМеняем местами диагональные элементы, меняем знаки остальных и делим на определитель: A⁻¹ = [[1, −1], [−2, 3]].', 'Za matricu reda dva determinanta je ad − bc = 3 − 2 = 1. Različita je od nule, pa inverzna postoji.\nMenjamo mesta dijagonalnim elementima, ostalima menjamo znak i delimo determinantom: A⁻¹ = [[1, −1], [−2, 3]].'],
    ['det [[1, 2, 3], [2, 4, 6], [0, 1, 2]] = ?', 'Вторая строка равна удвоенной первой. Вычитание удвоенной первой строки из второй сохраняет определитель и создаёт нулевую строку.\nРазложение по нулевой строке даёт 0.', 'Druga vrsta je dvostruka prva vrsta. Oduzimanje dvostruke prve vrste od druge ne menja determinantu, a stvara nultu vrstu.\nRazvoj po nultoj vrsti daje 0.']
  ];
  const systems = [[2,6,2,3],[3,5,1,0],[4,7,3,2],[5,4,1,0],[6,8,2,4]];
  function system(i) {
    const [k,h,d,c] = systems[i];
    const eq = 'x + y + z = ' + h + '\n' + k + 'x + ay + ' + k + 'z = ' + (k*h+c) + '\nx + y + 2z = ' + (h+d);
    const step = 'z = ' + d + ', x + y = ' + (h-d) + ', (a − ' + k + ')y = ' + c + '.';
    const value = c ? c + '/(a − ' + k + ')' : '0';
    const normal = '\na ≠ ' + k + ': y = ' + value + ', x = ' + (h-d) + ' − y, z = ' + d + '.';
    const ru = 'Вычитаем первое уравнение из третьего, а затем из второго вычитаем первое, умноженное на ' + k + '. Получаем ' + step + normal + ' Деление на ненулевой коэффициент даёт единственное решение.\na = ' + k + ': ' + (c ? 'уравнение 0·y = ' + c + ' противоречиво, поэтому решений нет.' : 'получаем тождество 0 = 0. Свободная переменная y = t даёт (x,y,z) = (' + (h-d) + ' − t, t, ' + d + '), t ∈ ℝ.');
    const sr = 'Od treće jednačine oduzimamo prvu, a od druge oduzimamo prvu pomnoženu sa ' + k + '. Dobijamo ' + step + normal + ' Deljenje nenultim koeficijentom daje jedinstveno rešenje.\na = ' + k + ': ' + (c ? 'jednačina 0·y = ' + c + ' je protivrečna, pa rešenja nema.' : 'dobijamo identitet 0 = 0. Slobodna promenljiva y = t daje (x,y,z) = (' + (h-d) + ' − t, t, ' + d + '), t ∈ ℝ.');
    return [
      q('Решите систему в зависимости от a ∈ ℝ.\n'+eq,'Diskutovati i rešiti sistem u zavisnosti od a ∈ ℝ.\n'+eq,ru,sr),
      q('При a = '+k+' найдите ранги основной и расширенной матриц.\n'+eq,'Za a = '+k+' odrediti rang matrice sistema i rang proširene matrice.\n'+eq,
        'Из третьей строки вычитаем первую. Получается строка [0,0,1 | '+d+'], независимая от первой. Из второй вычитаем первую, умноженную на '+k+': [0,0,0 | '+c+'].\nВ матрице коэффициентов две независимые строки, ранг 2. '+(c?'В расширенной матрице последняя описанная строка даёт третий ведущий элемент в столбце правых частей. Ранг равен 3.':'В расширенной матрице эта строка целиком нулевая. Её ранг тоже равен 2.'),
        'Od treće vrste oduzimamo prvu. Dobijena vrsta [0,0,1 | '+d+'] nezavisna je od prve. Od druge oduzimamo prvu pomnoženu sa '+k+': [0,0,0 | '+c+'].\nMatrica koeficijenata ima dve nezavisne vrste, pa je njen rang 2. '+(c?'U proširenoj matrici poslednja opisana vrsta daje treći pivot u koloni desnih strana. Rang je 3.':'U proširenoj matrici ta vrsta je cela nulta. Njen rang je takođe 2.'))
    ];
  }
  const rec = [
    ['yₜ₊₂ − 5yₜ₊₁ + 6yₜ = 4; y₀ = 5, y₁ = 9.', 'r² − 5r + 6 = (r − 2)(r − 3)', '(1 − 5 + 6)K = 4 ⇒ K = 2', 'yₜ = 2 + C·2ᵗ + D·3ᵗ', 'C + D = 3, 2C + 3D = 7 ⇒ C = 2, D = 1', 'yₜ = 2 + 2·2ᵗ + 3ᵗ → +∞.'],
    ['4yₜ₊₂ − yₜ = 6; y₀ = 5, y₁ = 5/2.', '4r² − 1 = (2r − 1)(2r + 1)', '(4 − 1)K = 6 ⇒ K = 2', 'yₜ = 2 + C·(1/2)ᵗ + D·(−1/2)ᵗ','C + D = 3, (C − D)/2 = 1/2 ⇒ C = 2, D = 1','yₜ = 2 + 2·(1/2)ᵗ + (−1/2)ᵗ → 2.'],
    ['yₜ₊₂ − 4yₜ = 3; y₀ = 0, y₁ = −3.', 'r² − 4 = (r − 2)(r + 2)', '(1 − 4)K = 3 ⇒ K = −1','yₜ = −1 + C·2ᵗ + D·(−2)ᵗ','C + D = 1, 2C − 2D = −2 ⇒ C = 0, D = 1','yₜ = −1 + (−2)ᵗ. y₂ₙ → +∞, y₂ₙ₊₁ → −∞.'],
    ['yₜ₊₂ − 4yₜ₊₁ + 4yₜ = 1; y₀ = 2, y₁ = 5.', 'r² − 4r + 4 = (r − 2)²', '(1 − 4 + 4)K = 1 ⇒ K = 1', 'yₜ = 1 + (C + Dt)2ᵗ','C = 1, 2(C + D) = 4 ⇒ D = 1','yₜ = 1 + (1 + t)2ᵗ → +∞.'],
    ['yₜ₊₂ − 3yₜ₊₁ + 2yₜ = 2; y₀ = 2, y₁ = 0.', 'r² − 3r + 2 = (r − 1)(r − 2)', 'K[(t + 2) − 3(t + 1) + 2t] = 2 ⇒ K = −2', 'yₜ = C + D·2ᵗ − 2t','C + D = 2, C + 2D − 2 = 0 ⇒ D = 0, C = 2','yₜ = 2 − 2t → −∞.']
  ];
  function recurrence(i) {
    const [p,char,part,form,cond,last] = rec[i];
    const reasonR = ['Оба слагаемых с основаниями больше единицы положительны и растут.', 'Оба основания по модулю меньше единицы, поэтому их степени исчезают.', 'Чётная и нечётная подпоследовательности расходятся в разные стороны. Общего предела нет.', 'Положительный множитель (1 + t)2ᵗ неограниченно растёт.', 'Коэффициент растущей экспоненты оказался нулём. Остаётся линейное убывание.'][i];
    const reasonS = ['Oba člana sa osnovama većim od jedan pozitivna su i rastu.', 'Obe osnove su po apsolutnoj vrednosti manje od jedan, pa njihovi stepeni teže nuli.', 'Parni i neparni podniz odlaze u suprotnim smerovima. Zajednička granična vrednost ne postoji.', 'Pozitivan faktor (1 + t)2ᵗ neograničeno raste.', 'Koeficijent rastuće eksponencijale je nula. Ostaje linearno opadanje.'][i];
    return q('Решите разностное уравнение и опишите поведение при t → +∞.\n'+p,'Rešiti diferencnu jednačinu i opisati ponašanje za t → +∞.\n'+p,
      'В однородное уравнение подставляем rᵗ. Характеристический многочлен: '+char+'. '+(i===3?'Корень 2 двойной, поэтому два независимых решения — 2ᵗ и t·2ᵗ.':'Каждый из двух различных корней даёт решение rᵗ.')+'\n'+(i===4?'Число 1 — корень, поэтому постоянная входит в однородное решение. Пробуем частное решение Kt: ':'Для постоянной правой части пробуем постоянное частное решение K: ')+part+'.\n'+form+'. Подставляем t = 0 и t = 1: '+cond+'.\n'+last+' '+reasonR,
      'U homogenu jednačinu uvrštavamo rᵗ. Karakteristični polinom: '+char+'. '+(i===3?'Koren 2 je dvostruk, pa su nezavisna rešenja 2ᵗ i t·2ᵗ.':'Svaki od dva različita korena daje rešenje rᵗ.')+'\n'+(i===4?'Broj 1 je koren, pa konstanta pripada homogenom rešenju. Probamo partikularno rešenje Kt: ':'Za konstantnu desnu stranu probamo konstantno partikularno rešenje K: ')+part+'.\n'+form+'. Uvrštavamo t = 0 i t = 1: '+cond+'.\n'+last+' '+reasonS);
  }
  const series = [
    ['Σ (n + 3)/(n³ + 2)', 'Для больших n член ведёт себя как 1/n². Проверяем предельным сравнением: n²(n + 3)/(n³ + 2) → 1.\nЧлены положительны, а ряд Σ1/n² сходится (p = 2 > 1). Данный ряд сходится.', 'Za velike n član se ponaša kao 1/n². Proveravamo graničnim poređenjem: n²(n + 3)/(n³ + 2) → 1.\nČlanovi su pozitivni, a Σ1/n² konvergira jer je p = 2 > 1. Zato i dati red konvergira.'],
    ['Σ 3ⁿ/n!', 'Факториал удобно сократить в отношении соседних членов: aₙ₊₁/aₙ = 3/(n + 1) → 0.\nПо признаку Даламбера предел меньше 1, поэтому ряд сходится абсолютно.', 'Faktorijel se skraćuje u količniku susednih članova: aₙ₊₁/aₙ = 3/(n + 1) → 0.\nPo Dalamberovom kriterijumu granična vrednost je manja od 1, pa red apsolutno konvergira.'],
    ['Σ (−1)ⁿ⁻¹/n', 'Величины 1/n убывают к нулю, а знаки чередуются. По признаку Лейбница ряд сходится.\nРяд модулей Σ1/n — гармонический и расходится. Следовательно, сходимость условная.', 'Brojevi 1/n monotono opadaju ka nuli, a znaci se smenjuju. Po Lajbnicovom kriterijumu red konvergira.\nRed apsolutnih vrednosti Σ1/n je harmonijski i divergira. Dakle, konvergencija je uslovna.'],
    ['Σ ((2n + 1)/(3n + 2))ⁿ', 'Степень n подсказывает радикальный признак. Корень n-й степени из положительного члена равен (2n + 1)/(3n + 2) → 2/3.\nПредел меньше 1, поэтому ряд сходится.', 'Stepen n upućuje na koreni kriterijum. N-ti koren pozitivnog člana je (2n + 1)/(3n + 2) → 2/3.\nGranična vrednost je manja od 1, pa red konvergira.'],
    ['Σ (2n + 1)/(3n + 4)', 'Проверяем необходимое условие сходимости: общий член должен стремиться к нулю. Делим на n и получаем (2 + 1/n)/(3 + 4/n) → 2/3.\nУсловие нарушено, ряд расходится.', 'Prvo proveravamo potreban uslov konvergencije: opšti član mora težiti nuli. Deljenjem sa n dobijamo (2 + 1/n)/(3 + 4/n) → 2/3.\nUslov nije ispunjen, pa red divergira.']
  ];
  for (let i = 0; i < 5; i++) {
    const [lim,lr,ls] = limits[i], [f,dr,ds] = derivatives[i], [m,mr,ms] = matrix[i], [sum,ar,as] = series[i];
    BANK[6+i] = [relation(i), onto(i),
      q('Вычислите без правила Лопиталя: '+lim+'.', 'Izračunati bez Lopitalovog pravila: '+lim+'.', lr,ls),
      q('Найдите первую производную f(x) = '+f+'.','Naći prvi izvod funkcije f(x) = '+f+'.',dr,ds),
      q(m,m,mr,ms), ...system(i), recurrence(i),
      q('Исследуйте сходимость ряда '+sum+', n от 1 до ∞.','Ispitati konvergenciju reda '+sum+', n od 1 do ∞.',ar,as)];
  }
})();
