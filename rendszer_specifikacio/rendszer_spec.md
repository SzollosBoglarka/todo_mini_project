# Rendszer specifikáció

## 2. Projektterv

### 2.1  Projektszerepkörök, felelősségek

* **PM** (Project Manager): Az a személy, aki a projekt vezeti. Ez a személy végzi a projekt felülvizsgálatát, mind részfeladatok meghatározása, mind változtatások bekerülése terén.
* **UI/UX Designer**: Felhasználóbarát és átlátható felület tervezése. Színek, ikonok, tipográfia, reszponzív elrendezés meghatározása
* **PA** (Program Analyst): Tervezésért, fejlesztésért felelős személy. Optimális megoldások kifejlesztésére is hivatott. Programkódok írása.
* **QA** (Quality Assurance): Teszteket biztosít a projekthez, amik a kód helyes működést támasztják alá.

### 2.2 Projektmunkások és felelősségeik

* **Varga Tímea**: *PM, PA*
* **Szőllős Boglárka**: *UI/UX Designer, PA*
* **Kántor Kamilla**: *QA, PA*

### 2.3 Ütemterv

**Ütemterv:**

| Funkció / Story                | Feladat / Task                                           | Prioritás | Becsült szükséges idő (óra) | Ráfordított idő (óra) |
|--------------------------------|---------------------------------------------------------|-----------|----------------------------|----------------------|
| Követelmény specifikáció       | Követelmények összegyűjtése, dokumentáció elkészítése  | 1         | 6                        | 4                  |
| Funkcionális specifikáció      | Funkciók, use-case-ek, felhasználói történetek kidolgozása | 1      | 6                         | 5                   |
| Rendszerterv                   | Adatmodell, architektúra, menü-hierarchia, képernyőtervek készítése | 1 | 6 | 0 |
| Szerveroldal létrehozása       | localStorage alapú adatkezelés, CRUD függvények implementálása JavaScript-tel | 2 | 12 | 0 |
| Kinézet létrehozása             | Frontend fejlesztés, HTML/CSS, reszponzív felület, modal ablakok | 2 | 12 | 0 |
| Tesztek megírása és futtatása  | Funkcionális teszt, reszponzív teszt, hibajavítás     | 3         | 4                         | 0                   |

## 6. Fizikai környezet

Az alkalmazás webes felületre készül, reszponzív kialakítással, így mobil eszközökön is kényelmesen használható. A hálózaton tűzfal üzemel, de minden szükséges port engedélyezett a működéshez. A projekthez nem tartoznak megvásárolt komponensek vagy fizetős szoftverek.

### 6.1 Fejlesztő eszközök

| Eszköz / Szoftver               | Rendeltetés                                           | Megjegyzés                                                                                                                        |
|---------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Visual Studio Code              | Fejlesztői környezet (IDE)                            |                                                                                                                                   |
| JetBrains WebStorm              | Fejlesztői környezet (IDE)                            |                                                                                                                                   |
| HTML5                           | Weboldalak struktúrájának kialakítása                 | Az oldal vázát adja, minden frontend fejlesztés alapja                                                                            |
| CSS3                            | Stílusok kezelése                                     |                                                                                                                                   |
| Bootstrap                       | Frontend-fejlesztési keretrendszer                    | Előre elkészített komponensek és rácsrendszer a reszponzív designhoz                                                              |
| Vanilla JavaScript              | Dinamikus funkciók, eseménykezelés, DOM manipuláció   |                                                                                                                                   |
| LocalStorage                    | Adattárolás a kliens oldalon                          | Egyszerű key-value tárolás a felhasználói adatokhoz; böngésző által biztosított                                                   |
| Chrome / Firefox / Edge / Opera | Funkcionális tesztelés, reszponzív teszt, hibakeresés | Fejlesztői eszközök (DevTools) használatával kódprofilozás, hibakeresés és performance teszt                                      |
| Git/GitHub                      | Verziókezelés, kódmegosztás, csapatmunka              | Commit-ok, branch-ek és pull request-ek kezelése, projektek nyomon követése                                                       |
| Trello                          | Projekt- és feladatmenedzsment                        | Kanban tábla a sprintek és taskok vizuális követéséhez, prioritások kezelése, agile tool-ok használata (story points, wip number) |

## 9. Adatmodell terv

A rendszer **adatbázis helyett a böngésző által biztosított localStorage-t** használja az adatok tárolására. A localStorage **kulcs-érték párok**at tárol, melyek JSON formátumban szervezhetők, így a felhasználói adatok és a feladatok megőrizhetők az oldalfrissítés után is.

``` json
{
  "users": [
    {
      "id": number,
      "nickname": string,
      "tasks": [
        {
          "id": number,
          "title": string,
          "description": string,
          "category": string,
          "deadline": string,
          "priority": string,
          "status": string
          
        }
      ]
    }
  ]
}
```
### 9.1 Mezők jelentése

* `users`: a felhasználókat tartalmazó tömb.
  * `id`: a felhasználó egyedi azonosítója.
  * `nickname`: a felhasználó által megadott becenév, amely megszólításra szolgál.
  * `tasks`: a felhasználóhoz tartozó feladatok listája.
    * `id`: a feladat egyedi azonosítója.
    * `title`: rövid cím, ami a feladatot összefoglalja.
    * `description`: részletesebb leírás a feladatról.
    * `category`: a feladat kategóriája *(pl. „Tanulás”, „Munka”)*.
    * `deadline`: határidő, ISO 8601 dátum stringként tárolva.
    * `priority`: a feladat fontossága *(pl. „alacsony”, „közepes”, „magas”)*.
    * `status`: a feladat állapota *(pl. „új”, „folyamatban”, „kész”)*.

### 9.2  **Minta**

![PlanBerry - Adatmodell minta adatokkal](src/adattarolas_minta.png)