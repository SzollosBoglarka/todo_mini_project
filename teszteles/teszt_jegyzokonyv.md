# Tesztelési jegyzőkönyv

## Manuális tesztek

### Összes felület

| ID  | Név                    | Leírás                                                                    | Megfelelés | QA                                                     |
|-----|------------------------|---------------------------------------------------------------------------|------------|--------------------------------------------------------|
| GF1 | CSS betöltődése        | Az összes oldalon betöltődnek a megfelelő CSS fájlok, és működnek.        | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| GF2 | JavaScript betöltődése | Az összes oldalon betöltődnek a megfelelő JavaScript fájlok, és működnek. | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |

### Bejelentkező felület

| ID | Név                | Leírás                                                                                                                                                                 | Megfelelés | QA |
|----|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|----|
| LI1 | Becenév validálása | Becenév megadásának elmulasztása esetén a rendszer nem támogatja a továbblépést.<br/>Mező kitöltése esetén a továbbiakban a megadott névvel hivatkozik a felhasználóra | OK         | [Kántor Kamilla](https://github.com/kericica) |
| LI2 | Becenév mentése    | Az első bejelentkezést követően a becenév mentésre kerül a localStorage-ben a `currentUser` kulcs alá                                                                  | OK         | [Kántor Kamilla](https://github.com/kericica) |
| LI3 | Bejelentkezés      | Becenév megadása után a "Tovább" gomb a feladatkezelő oldalra navigál                                                                                                  | OK         | [Kántor Kamilla](https://github.com/kericica) |

### Feladat kezelő felület

| ID   | Név                               | Leírás                                                                                                                                                                                                                                                                                                            | Megfelelés | QA                                                     |
|------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|--------------------------------------------------------|
| TM1  | Felhasználó köszöntése            | A felhasználó a bejelentkező felületen megadott becenév alapján kerül köszöntésre.                                                                                                                                                                                                                                | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM2  | Adatbetöltés                      | A már regisztrált felhasználók feladatai automatikusan betöltődnek a táblázatba.                                                                                                                                                                                                                                  | OK         | [Varga Tímea](https://github.com/timi15)               |
| TM3  | Feladat hozzáadása                | Az "Új feladat létrehozása" gomb használatát követően egy modal ablak jelenik meg inputmezőket magábafoglalva.<br/>A kért információk megadása, majd a "Mentés" gombra való kattintás egy új feladatot csatol a felhasználó feladatlistájához.<br/>"Mégse" gomb használatával az új feladat terve elvetésre kerül | OK         | [Kántor Kamilla](https://github.com/kericica) |
| TM4  | Hozzáadás feltétele               | A szerkesztési ablakban megjelenő bármely beviteli mező üresen hagyása gátolja a mentést                                                                                                                                                                                                                          | OK         | [Kántor Kamilla](https://github.com/kericica) |
| TM5  | Modal ablak háttérszínezése       | A modal ablakban a "Prioritás" címkével ellátott lenyíló listából kiválasztott érték alapján megváltozik az ablak háttérszíne.                                                                                                                                                                                    | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM6  | Szerekesztés gomb                 | A táblázatban szereplő "Szerkesztés" gomb megnyomásával egy modal ablakba betöltődik az adott  feladat adatai                                                                                                                                                                                                     | OK         | [Varga Tímea](https://github.com/timi15)               |
| TM7  | Feladat módosítás form validálása | A modal ablakban szereplő "Mentés" gomb megnyomásával validálódik a formban található összes input mező. Üres mező esetén a formot nem lehet elküldeni, valamint ezt a felhasználó tudtára is adja a rendszer.                                                                                                    | OK         | [Varga Tímea](https://github.com/timi15)               |
| TM8  | Feladat módosítása                | A modal ablakban szereplő "Mentés" gomb megnyomásával a módosított adatok elmentődnek a localStorage-ban                                                                                                                                                                                                          | OK         | [Varga Tímea](https://github.com/timi15)               |
| TM9  | Feladat törlése                   | A kijelölt feladat törlődik a felületről és a localStorage-ból is.                                                                                                                                                                                                                                                | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM10 | Törlés megerősítés                | A feladat törlésénél egy SweetAlert ablak jelenik meg, ahol Törlés és Mégsem közül lehet választani. Törlés esetén törlődik a feladat a felületről és a localStorage-ból is. Mégsem esetén bezáródik a SweetAlert, és nem történik törlés.                                                                        | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM11 | Törlés utáni visszajelzés         | Feladat törlés esetén megjelenik egy SweetAlert, ami jelzi, hogy sikeres volt a feladat törlése.                                                                                                                                                                                                                  | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM12 | Counter helyes működése           | Nyomonkövetve az új feladatok hozzáadását, illetve a meglévők állapotváltozását, a számláló mindig valós értéket mutat a feladatok státusz alapú számosságára nézve                                                                                                                                               | OK         | [Kántor Kamilla](https://github.com/kericica) |
| TM13 | Kijelentkezés                     | A "Kijelentkezés" lehetőségre kattintva az oldal a kijelentkezési felületre navigál, továbbá maga után vonja a `currentUser` törlődését a localStorage-ből                                                                                                                                                        | OK         | [Kántor Kamilla](https://github.com/kericica) |
| TM14 | Keresés                           | A keresőmezőbe írt szöveg alapján módosul a megjelenített feladatok listája. Csak azok a feladatok jelennek meg, amelyekben szerepel az a kifejezés, amit a keresőbe írt a felhasználó.                                                                                                                           | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM15 | Kategória szűrő                   | A "Kategória" felirattal ellátott lenyíló listából kiválasztott tulajdonságnak megfelelő feladatok kerülnel kizárólag mejelenítésre.                                                                                                                                                                              | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM16 | Prioritás szűrő                   | A "Prioritás" felirattal ellátott lenyíló listából kiválasztott tulajdonságnak megfelelő feladatok kerülnek kizárólag megjelenítésre                                                                                                                                                                              | OK         | [Kántor Kamilla](https://github.com/kericica) |
| TM17 | Státusz szűrő                     | A "Státusz" felirattal ellátott lenyíló listából kiválasztott tulajdonságnak megfelelő feladatok kerülnek kizárólag megjelenítésre                                                                                                                                                                                | OK         | [Kántor Kamilla](https://github.com/kericica) |
| TM18 | Szűrők összehangolása             | A különböző szűrők (kategória-, prioritás-, státuszszűrő és keresés) egymás utáni alkalmazásakor a szűrés a már szűrt feladatok listáján történik.                                                                                                                                                                | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM19 | Szűrők törlése                    | A "Szűrők törlése" gomb megnyomása után a szűrők törlődnek, és az összes feladat megjelenik. A keresőmezőből kitörlődik a beírt szöveg.                                                                                                                                                                           | OK         | [Szőllős Boglárka](https://github.com/SzollosBoglarka) |
| TM20 | Rendezés cím szerint | A feladatokat felsoroló táblázat fejlécében található "Cím" felirattal ellátott mezőre való kattintás kiinduló állapottól függően rendezi a feladatokat. Az alatta lévő oszlop tartalmának megfelelően az ábécé rendet követve, helyzettől függően növekvő, illetve csökkenő sorrendben kerülnek felsorolásra a teendők | OK | [Kántor Kamilla](https://github.com/kericica) |
| TM21 | Rendezés határidő szerint | A feladatok táblázatának fejlécében található "Határidő" felirattal ellátott mezőre való kattintás kiinduló állapottól függően rendezi a feladatokat a megadott dátum szerint növekvő (legkorábbi a tetején), illetve csökkenő (legkesőbbi a tetején) sorrendben | OK | [Kántor Kamilla](https://github.com/kericica) |
| TM22 | Prioritás alapú színkódolás       | A táblázatban a sorok színe az általuk tartalmazott feladatok prioritási szintje szerint jelennek meg                                                                                                                                                                                                             | OK         | [Varga Tímea](https://github.com/timi15)               |

### Kijelentkezési felület

| ID | Név                          | Leírás                                                                                                                           | Megfelelés | QA |
|----|------------------------------|----------------------------------------------------------------------------------------------------------------------------------|------------|----|
| LO1 | Navigáció kijelentkezés után | A "Vissza a bejelentkező oldalra" lehetőségre kattintva visszatér a kezdőoldalra, ahol ismét a bejelentkezés lehetőségét kínálja | OK         | [Kántor Kamilla](https://github.com/kericica) |

## Böngésző kompatibilitás teszt – Opera, Mozilla FireFox, Google Chrome

| ID  | Funkció                 | Leírás                                                                 | Megfelelés | QA                                       |
|-----|-------------------------|------------------------------------------------------------------------|------------|------------------------------------------|
| BR1 | Oldal betöltése         | Az alkalmazás hibamentesen betöltődik a böngészőkben                   | OK         | [Varga Tímea](https://github.com/timi15) |
| BR2 | Responsive design       | Mobil- és tablet-nézetben is jól jelenik meg                           | OK         | [Varga Tímea](https://github.com/timi15) |
| BR3 | Bejelentkezés           | Helyes adatokkal be lehet jelentkezni                                  | OK         | [Varga Tímea](https://github.com/timi15) |
| BR4 | Hibás login kezelése    | Hibás adatoknál megjelenik a hibaüzenet                                | OK         | [Varga Tímea](https://github.com/timi15) |
| BR5 | Feladat hozzáadása      | Új feladat sikeresen menthető, megjelenik a listában                   | OK         | [Varga Tímea](https://github.com/timi15) |
| BR6 | Feladat törlése         | Feladat törlése működik, és a localStorage-ból is eltűnik              | OK         | [Varga Tímea](https://github.com/timi15) |
| BR7 | Szűrés/keresés          | A kereső és szűrők megfelelően működnek a böngészőkben                 | OK         | [Varga Tímea](https://github.com/timi15) |
| BR8 | Feladatstátusz számláló | A feladatok státuszának számlálója megfelelően működnek a böngészőkben | OK         | [Varga Tímea](https://github.com/timi15) |
| BR9 | Kijelentkezés           | Kijelentkezés után a rendszer visszairányít a bejelentkező felületre   | OK         | [Varga Tímea](https://github.com/timi15) |

## Tesztösszesítés

| Modul / Felület             | Tesztek száma | OK | Nem OK |
|-----------------------------|---------------|----|--------|
| GF – Összes felület         | 2             | 2  | 0      |
| LI – Bejelentkező felület   | 3             | 3  | 0      |
| TM – Feladat kezelő felület | 22            | 22 | 0      |
| LO – Kijelentkezési felület | 1             | 1  | 0      |
| BR – Böngésző teszt         | 9             | 9  | 0      |
| **Összesen**                | 37            | 37 | 0      |
