# Tesztelési jegyzőkönyv

## Manuális tesztek

### Összes felület

| ID | Név                    | Leírás                                                                    | Megfelelés | QA |
|----|------------------------|---------------------------------------------------------------------------|------------|----|
|    | CSS betöltődése        | Az összes oldalon betöltődnek a megfelelő CSS fájlok, és működnek.        | OK         |    |
|    | JavaScript betöltődése | Az összes oldalon betöltődnek a megfelelő JavaScript fájlok, és működnek. | OK         |    |

### Bejelentkező felület

| ID | Név                | Leírás                                                                                                                                                                 | Megfelelés | QA |
|----|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|----|
|    | Becenév validálása | Becenév megadásának elmulasztása esetén a rendszer nem támogatja a továbblépést.<br/>Mező kitöltése esetén a továbbiakban a megadott névvel hivatkozik a felhasználóra | OK         |    |
|    | Becenév mentése    | Az első bejelentkezést követően a becenév mentésre kerül a localStorage-ben a `currentUser` kulcs alá                                                                  | OK         |    |
|    | Bejelentkezés      | Becenév megadása után a "Tovább" gomb a feladatkezelő oldalra navigál                                                                                                  | OK         |    |

### Feladat kezelő felület

| ID | Név                               | Leírás                                                                                                                                                                                                                                                                                                            | Megfelelés | QA                                       |
|----|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------|
|    | Felhasználó köszöntése            | A felhasználó a bejelentkező felületen megadott becenév alapján kerül köszöntésre.                                                                                                                                                                                                                                | OK         |                                          |
|    | Adatbetöltés                      | A már regisztrált felhasználók feladatai automatikusan betöltődnek a táblázatba.                                                                                                                                                                                                                                  | OK         | [Varga Tímea](https://github.com/timi15) |
|    | Feladat hozzáadása                | Az "Új feladat létrehozása" gomb használatát követően egy modal ablak jelenik meg inputmezőket magábafoglalva.<br/>A kért információk megadása, majd a "Mentés" gombra való kattintás egy új feladatot csatol a felhasználó feladatlistájához.<br/>"Mégse" gomb használatával az új feladat terve elvetésre kerül | OK         |                                          |
|    | Hozzáadás feltétele               | A szerkesztési ablakban megjelenő bármely beviteli mező üresen hagyása gátolja a mentést                                                                                                                                                                                                                          | OK         |                                          |
|    | Modal ablak háttérszínezése       | A modal ablakban a "Prioritás" címkével ellátott lenyíló listából kiválasztott érték alapján megváltozik az ablak háttérszíne.                                                                                                                                                                                    | OK         |                                          |
|    | Szerekesztés gomb                 | A táblázatban szereplő "Szerkesztés" gomb megnyomásával egy modal ablakba betöltődik az adott  feladat adatai                                                                                                                                                                                                     | OK         | [Varga Tímea](https://github.com/timi15) |
|    | Feladat módosítás form validálása | A modal ablakban szereplő "Mentés" gomb megnyomásával validálódik a formban található összes input mező. Üres mező esetén a formot nem lehet elküldeni, valamint ezt a felhasználó tudtára is adja a rendszer.                                                                                                    | OK         | [Varga Tímea](https://github.com/timi15) |
|    | Feladat módosítása                | A modal ablakban szereplő "Mentés" gomb megnyomásával a módosított adatok elmentődnek a localStorage-ban                                                                                                                                                                                                          | OK         | [Varga Tímea](https://github.com/timi15) |
|    | Feladat törlése                   | A kijelölt feladat törlődik a felületről és a localStorage-ból is.                                                                                                                                                                                                                                                | OK         |                                          |
|    | Törlés megerősítés                | A feladat törlésénél egy SweetAlert ablak jelenik meg, ahol Törlés és Mégsem közül lehet választani. Törlés esetén törlődik a feladat a felületről és a localStorage-ból is. Mégsem esetén bezáródik a SweetAlert, és nem történik törlés.                                                                        | OK         |                                          |
|    | Törlés utáni visszajelzés         | Feladat törlés esetén megjelenik egy SweetAlert, ami jelzi, hogy sikeres volt a feladat törlése.                                                                                                                                                                                                                  | OK         |                                          |
|    | Counter helyes működése           | Nyomonkövetve az új feladatok hozzáadását, illetve a meglévők állapotváltozását, a számláló mindig valós értéket mutat a feladatok státusz alapú számosságára nézve                                                                                                                                               | OK         |                                          |
|    | Kijelentkezés                     | A "Kijelentkezés" lehetőségre kattintva az oldal a kijelentkezési felületre navigál, továbbá maga után vonja a `currentUser` törlődését a localStorage-ből                                                                                                                                                        | OK         |                                          |
|    | Keresés                           | A keresőmezőbe írt szöveg alapján módosul a megjelenített feladatok listája. Csak azok a feladatok jelennek meg, amelyekben szerepel az a kifejezés, amit a keresőbe írt a felhasználó.                                                                                                                           | OK         |                                          |
|    | Kategória szűrő                   | A "Kategória" felirattal ellátott lenyíló listából kiválasztott tulajdonságnak megfelelő feladatok kerülnel kizárólag mejelenítésre.                                                                                                                                                                              | OK         |                                          |
|    | Prioritás szűrő                   | A "Prioritás" felirattal ellátott lenyíló listából kiválasztott tulajdonságnak megfelelő feladatok kerülnek kizárólag megjelenítésre                                                                                                                                                                              | OK         |                                          |
|    | Státusz szűrő                     | A "Státusz" felirattal ellátott lenyíló listából kiválasztott tulajdonságnak megfelelő feladatok kerülnek kizárólag megjelenítésre                                                                                                                                                                                | OK         |                                          |
|    | Szűrők összehangolása             | A különböző szűrők (kategória-, prioritás-, státuszszűrő és keresés) egymás utáni alkalmazásakor a szűrés a már szűrt feladatok listáján történik.                                                                                                                                                                | OK         |                                          |
|    | Szűrők törlése                    | A "Szűrők törlése" gomb megnyomása után a szűrők törlődnek, és az összes feladat megjelenik. A keresőmezőből kitörlődik a beírt szöveg.                                                                                                                                                                           | OK         |                                          |

### Kijelentkezési felület

| ID | Név                          | Leírás                                                                                                                           | Megfelelés | QA |
|----|------------------------------|----------------------------------------------------------------------------------------------------------------------------------|------------|----|
|    | Navigáció kijelentkezés után | A "Vissza a bejelentkező oldalra" lehetőségre kattintva visszatér a kezdőoldalra, ahol ismét a bejelentkezés lehetőségét kínálja | OK         |    |

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
| GF – Összes felület         |               |    |        |
| LI – Bejelentkező felület   |               |    |        |
| TM – Feladat kezelő felület |               |    |        |
| LO – Kijelentkezési felület |               |    |        |
| BR – Böngésző teszt         | 9             | 9  | 0      |
| **Összesen**                |               |    |        |
