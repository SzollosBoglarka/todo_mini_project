# TODO feladatkezelő rendszer

## 2. Jelenlegi helyzet

Az embereknek mindennapjaik során számos feladatot kell, hogy elvégezzenek. Mind a munka, a tanulás és a magánélet kapcsán felmerülnek fontos határidők, elvégzendő teendők. Ezeket sokan rendszertelenül tartjuk számon: egyes teendőket cetlikre írunk fel, másokat a telefonba jegyzünk fel, néhányat pedig csak próbálunk fejben tartani.

Ez nem a legoptimálisabb, hiszen így könnyen feledésbe merülhetnek fontos dolgok, a papírra felírt információk akár el is veszhetnek. Ezen felül sürgető határidők mellett nehéz meghatározni, hogy melyik teendővel kezdjünk, melyiket lenne a legfontosabb megcsinálni. Valamint nem mindig egyértelmű, hogy egy adott feladat elvégzése elkezdődött-e már, vagy befejeződött. Emellett az is előfordul, hogy emlékszünk egy feladatra, de nem találjuk, hová jegyeztük fel.

Ezek miatt a feladatok kezelése sokszor átláthatatlan és stresszes. Egy egységes rendszer, amely támogatja a feladatok rögzítését, fontossági sorrend szerinti kategorizálását és kereshetőségét, nagymértékben megkönnyítené a mindennapokat.

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