BANK[5] = [
  q(
    'На A = {−1, −2, −3} задано xρy ⇔ x − y < 0. Найдите наименьшее отношение ρ₁, для которого ρ ∪ ρ₁ является отношением порядка на A.',
    'Na A = {−1, −2, −3} dato je xρy ⇔ x − y < 0. Odredite najmanju relaciju ρ₁ takvu da je ρ ∪ ρ₁ relacija poretka na A.',
    `Условие x − y < 0 равносильно x < y. Поэтому в ρ ровно три пары: (−3, −2), (−2, −1), (−3, −1).
Для нестрогого порядка нужны рефлексивность, антисимметричность и транзитивность. Строгое сравнение уже антисимметрично и транзитивно. Для рефлексивности не хватает всех трёх пар вида (x, x).
Добавим ρ₁ = {(−3, −3), (−2, −2), (−1, −1)}. Объединение задаёт обычный порядок ≤ на A. Минимальность доказана: пропуск любой из трёх пар нарушает рефлексивность.`,
    `Uslov x − y < 0 znači x < y. Zato ρ ima tri para: (−3, −2), (−2, −1), (−3, −1).
Poredak mora biti refleksivan, antisimetričan i tranzitivan. Strogo poređenje je već antisimetrično i tranzitivno. Za refleksivnost nedostaje svaki par oblika (x, x).
Dodajemo ρ₁ = {(−3, −3), (−2, −2), (−1, −1)}. Unija je uobičajeni poredak ≤ na A. Relacija ρ₁ je najmanja: ako izostavimo bilo koji njen par, refleksivnost više ne važi.`
  ),
  q(
    'Пусть f(x) = 16 − (x − 4)², f: (−∞, 2] → B. Найдите B так, чтобы f была сюръективной.',
    'Neka je f(x) = 16 − (x − 4)² i f: (−∞, 2] → B. Odredite B tako da funkcija bude „na”.',
    `Сюръективность означает, что каждое значение из B достигается. Поэтому B должно совпадать с множеством значений на указанном промежутке.
При x ≤ 2 имеем 4 − x ≥ 2. Квадрат (4 − x)² принимает каждое значение от 4 до +∞, следовательно, 16 − (4 − x)² принимает каждое значение от −∞ до 12 включительно.
Ответ: B = (−∞, 12]. Максимум 12 достигается при x = 2. Для любого b ≤ 12 число x = 4 − √(16 − b) лежит в области определения и даёт f(x) = b.`,
    `Surjektivnost znači da je svaki element skupa B vrednost funkcije. Zato B treba da bude slika datog intervala.
Za x ≤ 2 važi 4 − x ≥ 2. Kvadrat (4 − x)² uzima svaku vrednost od 4 do +∞, pa 16 − (4 − x)² uzima sve vrednosti od −∞ do 12 uključivo.
Rešenje je B = (−∞, 12]. Maksimum 12 dostiže se za x = 2. Za svako b ≤ 12 broj x = 4 − √(16 − b) pripada domenu i zadovoljava f(x) = b.`
  ),
  q(
    'При каких a > 0 функция непрерывна в точке x = 0? При x > 0 задано f(x) = 2 ln(1 + ax)/x, при x ≤ 0 задано f(x) = 4 − x.',
    'Za koje a > 0 je funkcija neprekidna u tački x = 0? Za x > 0 važi f(x) = 2 ln(1 + ax)/x, a za x ≤ 0 važi f(x) = 4 − x.',
    `В точке склейки нужны одинаковые односторонние пределы и значение функции. Из второй ветви получаем f(0) = 4 и предел слева 4.
Справа положим u = ax. Тогда 2 ln(1 + ax)/x = 2a · ln(1 + u)/u. При x → 0⁺ также u → 0⁺, а стандартный предел ln(1 + u)/u равен 1.
Правый предел равен 2a. Из 2a = 4 получаем a = 2. Это положительное значение действительно уравнивает оба предела с f(0).`,
    `U tački spajanja treba izjednačiti oba jednostrana limesa i vrednost funkcije. Iz druge grane dobijamo f(0) = 4 i levi limes 4.
Za desni limes uvedimo u = ax. Tada je 2 ln(1 + ax)/x = 2a · ln(1 + u)/u. Kad x → 0⁺, i u → 0⁺, a poznati limes ln(1 + u)/u jednak je 1.
Desni limes je 2a. Iz 2a = 4 sledi a = 2. Vrednost je pozitivna i oba jednostrana limesa tada su jednaka f(0).`
  ),
  q(
    'Найдите первую производную f(x) = 3/(2 − x²) − 3/x³.',
    'Odredite prvi izvod funkcije f(x) = 3/(2 − x²) − 3/x³.',
    `Знаменатели должны быть отличны от нуля: x ≠ 0 и x ≠ ±√2. Перепишем f(x) = 3(2 − x²)⁻¹ − 3x⁻³.
Для первого слагаемого используем цепное правило: производная внешней степени даёт −1, а производная внутреннего выражения даёт −2x. Получаем 3 · (−1)(2 − x²)⁻² · (−2x) = 6x/(2 − x²)².
Для второго слагаемого степенное правило даёт (−3)(−3)x⁻⁴ = 9/x⁴. Итого f′(x) = 6x/(2 − x²)² + 9/x⁴.`,
    `Imenioci moraju biti različiti od nule: x ≠ 0 i x ≠ ±√2. Pišemo f(x) = 3(2 − x²)⁻¹ − 3x⁻³.
U prvom sabirku primenjujemo pravilo za izvod složene funkcije. Spoljašnji stepen daje faktor −1, a izvod unutrašnjeg izraza je −2x. Dobijamo 3 · (−1)(2 − x²)⁻² · (−2x) = 6x/(2 − x²)².
Za drugi sabirak pravilo za stepen daje (−3)(−3)x⁻⁴ = 9/x⁴. Dakle, f′(x) = 6x/(2 − x²)² + 9/x⁴.`
  ),
  q(
    'Вычислите определитель матрицы с рядами (1, 2, 3), (2, 3, 4), (3, 4, 5).',
    'Izračunajte determinantu matrice čije su vrste (1, 2, 3), (2, 3, 4), (3, 4, 5).',
    `Разность соседних строк в обоих случаях равна (1, 1, 1). Значит, R₃ − R₂ = R₂ − R₁, откуда R₃ = 2R₂ − R₁.
Третья строка является линейной комбинацией первых двух. Определитель матрицы с линейно зависимыми строками равен 0.
Проверка разложением по первой строке: 1(15 − 16) − 2(10 − 12) + 3(8 − 9) = −1 + 4 − 3 = 0.`,
    `Razlika susednih vrsta u oba slučaja je (1, 1, 1). Prema tome, R₃ − R₂ = R₂ − R₁, odakle R₃ = 2R₂ − R₁.
Treća vrsta je linearna kombinacija prve dve, pa su vrste linearno zavisne. Determinanta takve matrice jednaka je 0.
Provera razvojem po prvoj vrsti: 1(15 − 16) − 2(10 − 12) + 3(8 − 9) = −1 + 4 − 3 = 0.`
  ),
  q(
    'Для каких действительных a система имеет единственное решение? Найдите его.\n2x − y = 1\nx − z = 0\n−x + y − az = −1',
    'Za koje realne vrednosti a sistem ima jedinstveno rešenje? Odredite ga.\n2x − y = 1\nx − z = 0\n−x + y − az = −1',
    `Первые два уравнения позволяют выразить обе переменные через x без деления на параметр: y = 2x − 1 и z = x.
Подстановка в третье уравнение даёт −x + 2x − 1 − ax = −1, то есть (1 − a)x = 0. Прежде чем делить на 1 − a, разбираем два случая.
Если a ≠ 1, то x = 0, y = −1, z = 0. Если a = 1, последнее уравнение выполняется при любом x = t, решения имеют вид (t, 2t − 1, t). Следовательно, решение единственно ровно при a ≠ 1.`,
    `Iz prve dve jednačine izrazimo obe nepoznate preko x bez deljenja parametrom: y = 2x − 1 i z = x.
Zamenom u trećoj jednačini dobijamo −x + 2x − 1 − ax = −1, odnosno (1 − a)x = 0. Pre deljenja izrazom 1 − a razmatramo dva slučaja.
Za a ≠ 1 sledi x = 0, y = −1, z = 0. Za a = 1 poslednja jednačina važi za svako x = t, pa su rešenja (t, 2t − 1, t). Sistem ima jedinstveno rešenje tačno za a ≠ 1.`
  ),
  q(
    'При a = 1 определите ранг матрицы системы 2x − y = 1, x − z = 0, −x + y − az = −1.',
    'Za a = 1 odredite rang matrice sistema 2x − y = 1, x − z = 0, −x + y − az = −1.',
    `При a = 1 строки матрицы коэффициентов равны R₁ = (2, −1, 0), R₂ = (1, 0, −1), R₃ = (−1, 1, −1).
Замечаем, что R₃ = R₂ − R₁. Значит, ранг не превосходит 2. Чтобы доказать точное значение, берём минор из первых двух строк и первых двух столбцов: 2 · 0 − (−1) · 1 = 1 ≠ 0.
Следовательно, ранг равен 2. Это согласуется с одной свободной переменной в решении системы.`,
    `Za a = 1 vrste matrice koeficijenata su R₁ = (2, −1, 0), R₂ = (1, 0, −1), R₃ = (−1, 1, −1).
Važi R₃ = R₂ − R₁, pa rang nije veći od 2. Da bismo dokazali tačnu vrednost, računamo minor iz prve dve vrste i prve dve kolone: 2 · 0 − (−1) · 1 = 1 ≠ 0.
Prema tome, rang je 2. To odgovara jednoj slobodnoj nepoznatoj u rešenju sistema.`
  ),
  q(
    'Решите 2yₜ₊₂ − 3yₜ₊₁ − 2yₜ = 6 при y₀ = 1, y₁ = 0. Опишите поведение при t → +∞.',
    'Rešite 2yₜ₊₂ − 3yₜ₊₁ − 2yₜ = 6 za y₀ = 1 i y₁ = 0. Opišite ponašanje kada t → +∞.',
    `Поскольку правая часть постоянна, ищем постоянное частное решение c. Получаем (2 − 3 − 2)c = 6, то есть c = −2.
Для однородной части пробуем yₜ = rᵗ. Характеристическое уравнение 2r² − 3r − 2 = (2r + 1)(r − 2) = 0 даёт два различных корня 2 и −1/2. Общее решение: yₜ = A · 2ᵗ + B · (−1/2)ᵗ − 2.
Подставим начальные условия. Получаем A + B = 3 и 2A − B/2 = 2. Удвоим второе уравнение и прибавим первое: 5A = 7, поэтому A = 7/5 и B = 8/5.
Ответ: yₜ = (7/5) · 2ᵗ + (8/5) · (−1/2)ᵗ − 2. Знак второго слагаемого чередуется, а его модуль стремится к нулю. Первое растёт без границ, поэтому yₜ → +∞. Проверка: формула даёт y₂ = 4, и 2 · 4 − 3 · 0 − 2 · 1 = 6.`,
    `Desna strana je stalna, pa tražimo konstantno partikularno rešenje c. Dobijamo (2 − 3 − 2)c = 6, odnosno c = −2.
Za homogeni deo probamo yₜ = rᵗ. Karakteristična jednačina 2r² − 3r − 2 = (2r + 1)(r − 2) = 0 ima dva različita korena: 2 i −1/2. Opšte rešenje je yₜ = A · 2ᵗ + B · (−1/2)ᵗ − 2.
Iz početnih uslova dobijamo A + B = 3 i 2A − B/2 = 2. Drugu jednačinu pomnožimo sa 2 i dodamo prvu: 5A = 7, pa su A = 7/5 i B = 8/5.
Rešenje je yₜ = (7/5) · 2ᵗ + (8/5) · (−1/2)ᵗ − 2. Drugi sabirak menja znak, a apsolutna vrednost mu teži nuli. Prvi sabirak neograničeno raste, pa yₜ → +∞. Provera: formula daje y₂ = 4 i 2 · 4 − 3 · 0 − 2 · 1 = 6.`
  ),
  q(
    'Исследуйте сходимость ряда Σₙ₌₁^∞ 2ⁿ/(n + 3).',
    'Ispitajte konvergenciju reda Σₙ₌₁^∞ 2ⁿ/(n + 3).',
    `Положим uₙ = 2ⁿ/(n + 3). Для сходимости необходимо, чтобы uₙ → 0. Проверим, как меняются соседние члены: uₙ₊₁/uₙ = 2(n + 3)/(n + 4).
Это отношение больше 1 при каждом n ≥ 1. Значит, члены положительны и возрастают начиная с u₁ = 1/2. В частности, они не стремятся к нулю.
Ряд расходится. Более точно, сумма первых N членов не меньше N/2 и потому стремится к +∞.`,
    `Neka je uₙ = 2ⁿ/(n + 3). Neophodan uslov konvergencije je uₙ → 0. Uporedimo susedne članove: uₙ₊₁/uₙ = 2(n + 3)/(n + 4).
Ovaj količnik je veći od 1 za svako n ≥ 1. Članovi su pozitivni i rastu počev od u₁ = 1/2. Zato ne teže nuli.
Red divergira. Preciznije, zbir prvih N članova je najmanje N/2, pa parcijalne sume teže ka +∞.`
  )
];

BANK[5][3].ru.prompt += '\nПримечание к фото: мелкий фрагмент прочитан как 3/x³.';
BANK[5][3].sr.prompt += '\nNapomena uz fotografiju: sitan zapis pročitan je kao 3/x³.';
