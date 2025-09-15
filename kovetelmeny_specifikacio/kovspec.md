# TODO feladatkezelő rendszer

## 1. Áttekintés

A **webes alkalmazás**unk célja egy olyan felület biztosítása, melyben a felhasználó felveheti és nyomon követheti teendőit. Az alkalmazás webes felületen érhető el, ugyanakkor reszponzív tulajdonságai lehetővé teszik a mobilon való kezelhetőséget egyaránt.

A rendszer támogatja a feladatok létrehozását, szerkesztését, törlését és státuszuk módosítását, valamint lehetőséget biztosít a prioritások és határidők megadására. A feladatok kereshetők, rendezhetők és áttekinthetően jelennek meg.

## 2. Jelenlegi helyzet

Az embereknek mindennapjaik során számos feladatot kell, hogy elvégezzenek. Mind a munka, a tanulás és a magánélet kapcsán felmerülnek fontos határidők, elvégzendő teendők. Ezeket sokan rendszertelenül tartjuk számon: egyes teendőket cetlikre írunk fel, másokat a telefonba jegyzünk fel, néhányat pedig csak próbálunk fejben tartani.

Ez nem a legoptimálisabb, hiszen így könnyen feledésbe merülhetnek fontos dolgok, a papírra felírt információk akár el is veszhetnek. Ezen felül sürgető határidők mellett nehéz meghatározni, hogy melyik teendővel kezdjünk, melyiket lenne a legfontosabb megcsinálni. Valamint nem mindig egyértelmű, hogy egy adott feladat elvégzése elkezdődött-e már, vagy befejeződött. Emellett az is előfordul, hogy emlékszünk egy feladatra, de nem találjuk, hová jegyeztük fel.

Ezek miatt a feladatok kezelése sokszor átláthatatlan és stresszes. Egy egységes rendszer, amely támogatja a feladatok rögzítését, fontossági sorrend szerinti kategorizálását és kereshetőségét, nagymértékben megkönnyítené a mindennapokat.

## 3. Vágyálom rendszer

Célunk egy **könnyen kezelhető és felhasználóbarát** feladatkezelő eszköz fejlesztése, amely támogatja a **teendők összegyűjtését, rendszerezését és nyomon követés**ét a lehető legoptimálisabb módon. Az alkalmazás lehetőséget biztosít arra, hogy a felhasználó a feladatokat különböző tulajdonságokkal lássa el, mint például határidő, elvégzésre szánt idő, prioritási szint, kategória vagy részletes leírás. Ezek a kiegészítő információk segítenek a pontos ütemterv kialakításában, így a felhasználó elkerülheti a kapkodást és az átgondolatlan sorrendet, amely gyakran jellemzi a hagyományos, papírra vagy telefonba írt feladatlistákat.

A rendszer egyik fő erőssége a **könnyű használhatóság**: nincs szükség regisztrációra, elegendő egy becenév megadása, amely alapján a felhasználót az alkalmazás később megszólítja. A felület kialakításánál a **letisztultság és az egyértelműség** az elsődleges szempont, így minden funkció jól látható és könnyen elérhető. A felhasználói élményt tovább fokozza a **reszponzív megjelenés**, amely biztosítja, hogy a program személyi számítógépen, laptopon, tableten és mobiltelefonon egyaránt kényelmesen használható legyen.

A feladatok megjelenítése átlátható listában történik, a részletek külön területen vagy modal pop-up-ban jelennek meg úgy, hogy közben a teljes lista látható marad. A feladatok sorrendje igény szerint módosítható, a beépített kereső pedig jelentősen megkönnyíti a nagyobb mennyiségű teendő kezelését. A **vizuális átláthatóság**ot a gondosan megválasztott színek, ikonok és tipográfia biztosítják, a prioritási szintek pedig különböző színkódokkal kiemelve segítik a felhasználót a fontosabb feladatok gyors felismerésében.

Mivel az alkalmazás **webes felület**en érhető el, a felhasználónak nincs szüksége papíralapú jegyzetekre vagy külön telepíthető programokra. Így a feladatlista mindig elérhető marad, nem felejthető otthon és nem veszhet el, a **böngésző által biztosított tárolás**nak köszönhetően pedig az adatok minden oldalfrissítéskor megmaradnak.

## 4. Funkcionális követelmények

- **Feladatkezelés (CRUD műveletek)**
  - Új feladat létrehozása *(id, cím, feladat leírása, kategória, határidő, státusz, prioritási szint)*.
  - Feladat szerkesztése
  - Feladat törlése.
  - Feladat státuszának változtatása *(pl. új / folyamatban / kész)*.
- **Kategorizálás és priorizálás**
  - Feladatok hozzárendelhetők kategóriákhoz-
  - Prioritási szintek megadása *(pl. alacsony, közepes, magas)*.
  - Prioritási szintek vizuálisan elkülönülnek *(színkódokkal)*.
- **Időkezelés**
  - Határidő megadásának lehetősége (dátumválasztóval).
  - *Későbbi bővítés lehetősége: feladatok idő szerinti rendezése.*
- **Feladatok megjelenítése és keresése**
  - Teendők listázása reszponzív elrendezésben.
  - Keresőmező a feladatok között.
  - *Későbbi fejlesztési lehetőség: Feladatok sorrendjének kézi átrendezése (drag & drop)*
  - Részletek megnyitása modal ablakban, miközben a lista látható marad.
- **Felhasználói élményt javító funkciók**
  - Mobil- és asztali nézet támogatása *(reszponzív design)*.
  - Intuitív, áttekinthető felület *(átlátható színek, ikonok, tipográfia)*.
- **Tárolás és adatkezelés**
  - Alapértelmezett tárolás: böngésző által biztosított tároló *(localStorage)*.
  - A felhasználó teendői és neve automatikusan betöltődnek újraindításkor.

## 5. A rendszerre vonatkozó szabályok

- Standard webes technológiák *(HTML / CSS / JS)* alkalmazása.
- Könnyen üzemeltethető és karbantartható rendszer.
- Reszponzív design, amely minden eszközön *(mobil, tablet, PC)* jól működik.
- Egyszerű és intuitív felhasználói felület kialakítása.

## 6. Jelenlegi üzleti folyamatok modellje

**A feladatok kezelésének jelenlegi folyamata:**

1. **Feladat megjelenése:** Egy új teendő felmerül.
2. **Feladat feljegyzése:** A feladatot különböző módon próbáljuk megjegyezni: cetlire írás/telefonba feljegyzés/fejben tartás.
3. **Feladat prioritásának meghatározása:** A prioritások meghatározására nincs egységes rendszer. Általában azzal kezdünk, amit fontosabbnak érzünk, emiatt előfordulhat, hogy fontos feladatok háttérbe szorulnak vagy teljesen elfelejtődnek.
4. **Feladat állapotának nyomon követése:** A feladatok állapota *(pl. új / folyamatban / kész)* nincs rögzítve.
5. **Feladat teljesítése:** A feladatokat nem feltétlenül sikerül teljesíteni, mert előfordulhat, hogy elfelejtjük, vagy elhagyjuk a cetlit, vagy túl későn találjuk meg a feljegyzést.

A folyamat széttagolt, hiányzik belőle a rendszerezettség, így könnyen átláthatatlanná válik.

## 7. Igényelt üzleti folyamatok

A felhasználónak a kezdő *bejelentkező* oldalon csak egy becenevet kell megadnia, amelyet a program a továbbiakban a megszólítás során fog használni. A bejelentkezést követően a felhasználó a feladatkezelő felületre érkezik, ahol igényeinek megfelelő feladatokat tud felvenni, a meglévőket módosítani, illetve igény szerint törölni. Ezeken a funkciókon felül lehetősége van a feladatok státuszát állítani annak megfelelően, hogyan áll azok teljesítésével. A felvett elemek között kereshet, valamint rendezheti azokat.

## 8. Követelménylista

|Modul        | ID |Név                    | v.|Kifejtés                              |
|-------------|----|-----------------------|---|--------------------------------------|
| Jogosultság | K1 | Bejelentkezési felület | 1.0 | A felhasználónak kötelező megadnia egy becenevet, amelyet a program a továbbiakban a megszólítás során használ. |
| Felület | K2 | Kezdőlap | 1.0 | A felhasználó itt adja meg a becenevét. Sikeres megadás után egy másik oldalra léphet tovább, ahol a feladatait kezelheti.|
| Felület | K3| Feladatkezelő felület | 1.0 | A felhasználó itt hozhat létre, módosíthat és törölhet feladatokat. A feladatok Bootstrap modal ablakokban szerkeszthetők, így a megjelenés áttekinthetőbb. |
| Feladattípus | K4 | Feladat hozzáadása | 1.0 | Új feladat létrehozása cím, leírás, határidő és prioritás *(low, medium, high)* megadásával. A prioritás színekkel is jelölve van.|
| Feladattípus | K5 | Feladat módosítása | 1.0 | A felhasználó szerkesztheti egy meglévő feladat adatait |
| Feladattípus | K6 | Feladat törlése | 1.0 |Egy feladat véglegesen törölhető a listából. |
| Feladattípus | K7 | Feladat státusz módosítása | 1.0 |A felhasználó átállíthatja a feladat állapotát *(pl.  új / folyamatban / kész)*. |
| Felület | K8 | Keresés és rendezés | 1.0 |A felhasználó kereshet feladatok között, és rendezheti azokat. |
| Adatkezelés | K9 | Tárolás | 1.0 |Az alkalmazás minden adatot *(becenév, feladatok)* eltárol a böngésző által biztosított tárolóban *(localStorage)*|

## 8.1 Rendszer áttekintés

![TODO feladatkezelő rendszer – rendszer áttekintő diagram](./src/diagram.png)

## 9. Fogalomtár

|Fogalom        | Meghatározás |
|-------------|----|
| Reszponzív felület | A webalkalmazás mobilon, tableten és PC-n egyaránt megfelelően jelenik meg, a képernyőmérethez igazodva. |
| CRUD műveletek | Create, Read, Update, Delete, azaz létrehozás, lekérdezés, módosítás és törlés. |
| Prioritási szint |A feladat fontosságát jelző kategória |
| Státusz | A feladat aktuális állapota |  
| LocalStorage | A böngésző által biztosított kliens oldali tároló, ahol az adatok megőrződnek az oldalfrissítés után is. |
| Modal ablak | Felugró ablak a felületen, ami a fő tartalmat nem takarja el teljesen, pl. feladat szerkesztésére.|
