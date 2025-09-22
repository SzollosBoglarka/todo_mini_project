# Funkcionális specifikáció

## 1. A rendszer céljai és nem céljai

### 1.1 A rendszer céljai

Az elkészített rendszerrel a felhasználó képes lesz:

* feladatait egy helyen, átláthatóan nyomonkövetni, felesleges szemét *(cetlik)* generálása nélkül
* új feladatokat hozzáadni, módosítani a már létrehozottakat
* kategorizálni a feladatokat
* megadni a feladatok fontosságát *(prioritás)*
* törölni, ha esetleg rosszul adott meg valamit
* határidő megadása *(deadline)*
* feldatokat rendezni
* feladatok közötti keresésni
* a fentebb felsoroltakat akármilyen internethasználatra alkalmas eszközön végrehajtani

### 1.2 A rendszer ***NEM*** céljai

Az elkészített rendszerrel a felhasználó ***NEM*** lesz képes:

* több felhasználó adatait külön-külön kezelni *(böngészőnként tároljuk az adatokat)*
* egyszerre több kategóriába sorolni egy feladatot
* ugyan azon adatokat elérni különböző eszközökről
* több másik felhasználóval ugyan azokat a feladatokat kezelni

## 2. Jelenlegi helyzet

Az embereknek mindennapjaik során számos feladatot kell, hogy elvégezzenek. Mind a munka, a tanulás és a magánélet kapcsán felmerülnek fontos határidők, elvégzendő teendők. Ezeket sokan rendszertelenül tartjuk számon: egyes teendőket cetlikre írunk fel, másokat a telefonba jegyzünk fel, néhányat pedig csak próbálunk fejben tartani.

Ez nem a legoptimálisabb, hiszen így könnyen feledésbe merülhetnek fontos dolgok, a papírra felírt információk akár el is veszhetnek. Ezen felül sürgető határidők mellett nehéz meghatározni, hogy melyik teendővel kezdjünk, melyiket lenne a legfontosabb megcsinálni. Valamint nem mindig egyértelmű, hogy egy adott feladat elvégzése elkezdődött-e már, vagy befejeződött. Emellett az is előfordul, hogy emlékszünk egy feladatra, de nem találjuk, hová jegyeztük fel.

Ezek miatt a feladatok kezelése sokszor átláthatatlan és stresszes. Egy egységes rendszer, amely támogatja a feladatok rögzítését, fontossági sorrend szerinti kategorizálását és kereshetőségét, nagymértékben megkönnyítené a mindennapokat.

## 3. Vágyálom rendszer

Célunk egy **könnyen kezelhető és felhasználóbarát** feladatkezelő eszköz fejlesztése, amely támogatja a **teendők összegyűjtését, rendszerezését és nyomon követés**ét a lehető legoptimálisabb módon. Az alkalmazás lehetőséget biztosít arra, hogy a felhasználó a feladatokat különböző tulajdonságokkal lássa el, mint például határidő, elvégzésre szánt idő, prioritási szint, kategória vagy részletes leírás. Ezek a kiegészítő információk segítenek a pontos ütemterv kialakításában, így a felhasználó elkerülheti a kapkodást és az átgondolatlan sorrendet, amely gyakran jellemzi a hagyományos, papírra vagy telefonba írt feladatlistákat.

A rendszer egyik fő erőssége a **könnyű használhatóság**: nincs szükség regisztrációra, elegendő egy becenév megadása, amely alapján a felhasználót az alkalmazás később megszólítja. A felület kialakításánál a **letisztultság és az egyértelműség** az elsődleges szempont, így minden funkció jól látható és könnyen elérhető. A felhasználói élményt tovább fokozza a **reszponzív megjelenés**, amely biztosítja, hogy a program személyi számítógépen, laptopon, tableten és mobiltelefonon egyaránt kényelmesen használható legyen.

A feladatok megjelenítése átlátható listában történik, a részletek külön területen vagy modal pop-up-ban jelennek meg úgy, hogy közben a teljes lista látható marad. A feladatok sorrendje igény szerint módosítható, a beépített kereső pedig jelentősen megkönnyíti a nagyobb mennyiségű teendő kezelését. A **vizuális átláthatóság**ot a gondosan megválasztott színek, ikonok és tipográfia biztosítják, a prioritási szintek pedig különböző színkódokkal kiemelve segítik a felhasználót a fontosabb feladatok gyors felismerésében.

Mivel az alkalmazás **webes felület**en érhető el, a felhasználónak nincs szüksége papíralapú jegyzetekre vagy külön telepíthető programokra. Így a feladatlista mindig elérhető marad, nem felejthető otthon és nem veszhet el, a **böngésző által biztosított tárolás**nak köszönhetően pedig az adatok minden oldalfrissítéskor megmaradnak.

## 4. Jelenlegi üzleti folyamatok

**A feladatok kezelésének jelenlegi folyamata:**

1. **Feladat megjelenése:** Egy új teendő felmerül.
2. **Feladat feljegyzése:** A feladatot különböző módon próbáljuk megjegyezni: cetlire írás/telefonba feljegyzés/fejben tartás.
3. **Feladat prioritásának meghatározása:** A prioritások meghatározására nincs egységes rendszer. Általában azzal kezdünk, amit fontosabbnak érzünk, emiatt előfordulhat, hogy fontos feladatok háttérbe szorulnak vagy teljesen elfelejtődnek.
4. **Feladat állapotának nyomon követése:** A feladatok állapota *(pl. új / folyamatban / kész)* nincs rögzítve.
5. **Feladat teljesítése:** A feladatokat nem feltétlenül sikerül teljesíteni, mert előfordulhat, hogy elfelejtjük, vagy elhagyjuk a cetlit, vagy túl későn találjuk meg a feljegyzést.

A folyamat széttagolt, hiányzik belőle a rendszerezettség, így könnyen átláthatatlanná válik.

## 5. Igényelt üzleti folyamatok

### 5.1 Igényelt üzleti folyamatok leírása
A megrendelő azt szeretné, hogy a felhasználóknak a **kezdő oldalon** csak egy **becenevet** kelljen **megadnia**, amelyet a rendszer a későbbiekben a megszólítás során használ. A kezdő oldalról egy **tovább gombbal** lehessen továbblépni a feladatkezelő felületre.

A **feladatkezelő felületen** a felhasználók **láthassák a meglévő feladataikat**, ezeket tudják **módosítani** és **törölni**, valamint legyen lehetőségük **új feladatokat létrehozni**. A megrendelő igénye, hogy a feladatokhoz **kategóriát**, **prioritást** és **státuszt** lehessen hozzárendelni, illetve ezeket később módosítani is lehessen. További elvárás, hogy a feladatok között könnyű legyen eligazodni, ezért a rendszer biztosítson **keresési és rendezési lehetőségeket**.

A feladatkezelő felületről **kijelentkezés** gombbal lehessen kijelentkezni, amely egy **kijelentkezési oldalra** vezet, ahonnan **vissza** lehet térni a kezdő oldalra.

### 5.2 Igényelt üzleti folyamatok diagram
![TODO feladatkezelő rendszer - Igényelt üzleti folyamat diagram](./src/uzleti_folyamatok.png)

## 6. Használati esetek

### 6.1 Aktorok (szereplők) meghatározása

Esetünkben az egyetlen szereplő maga a ***felhasználó***.

### 6.2 Használati eset diagram

![TODO feladatkezelő rendszer - Use Case Diagram](./src/use_case_diagram.png)

## 7. Követelménylista

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

## 8. Képernyőtervek

### 8.1 Kezdő oldal
![TODO feladatkezelő rendszer - Kezdő oldal](./src/kezdo_oldal.png)

### 8.2 Feladatkezelő oldal
![TODO feladatkezelő rendszer - Feladatkezelő oldal](./src/feladat_kezelo_felulet.png)

### 8.3 Kijelentkezési oldal
![TODO feladatkezelő rendszer - Kijelentkezési oldal](./src/kijelentkezesi_oldal.png)

## 9. Forgatókönyvek

Szétszort Szilveszter mindennapjait kaotikus cetlik és elfelejtett teendők uralják, míg Pontos Panna mindig szervezett és precíz. Egy hosszúra nyúlt reggel után véletlenül összefutnak a parkban, ahol Panna bemutatja neki a PlanBerry nevű egyszerű, átlátható ToDo alkalmazást, amelyben könnyedén lehet feladatokat létrehozni, szerkeszteni, kategorizálni, határidőt és prioritást adni hozzájuk.

Szilveszter ráébred, hogy a digitális lista sokkal kezelhetőbb, mint a cetlik cunamija. Az app segítségével Szilveszter lassan úrrá lesz a káoszon, és végül Szervezett Szilveszterré válik.

[PlanBerry - UserStory](./user_stories/userStory1.md)
