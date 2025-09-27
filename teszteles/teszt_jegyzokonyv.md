# Tesztelési jegyzőkönyv

## Manuális tesztek

### Összes felület
|  ID | Név | Leírás | Megfelelés |
|-----| ----------- | ----------- | ----------- |

### Bejelentkező felület
| ID | Név                      | Leírás                                                                                                                                                                                                                                     | Megfelelés |
|----|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ----------- |

### Feladat kezelő felület
|  ID | Név | Leírás | Megfelelés |
|-----| ----------- | ----------- | ----------- |
|    | Feladat törlése          | A kijelölt feladat törlődik a felületről és a localStorage-ból is.                                                                                                                                                                         | OK |
|    | Törlés megerősítés       | A feladat törlésénél egy SweetAlert ablak jelenik meg, ahol Törlés és Mégsem közül lehet választani. Törlés esetén törlődik a feladat a felületről és a localStorage-ból is. Mégsem esetén bezáródik a SweetAlert, és nem történik törlés. | OK |
|    | Törlés utáni visszajelzés | Feladat törlés esetén megjelenik egy SweetAlert, ami jelzi, hogy sikeres volt a feladat törlése.                                                                                                                                           | OK |
| | Keresés | A keresőmezőbe írt szöveg alapján módosul a megjelenített feladatok listája. Csak azok a feladatok jelennek meg, amelyekben szerepel az a kifejezés, amit a keresőbe írt a felhasználó. | OK |
| | Kategória szűrő | A kategória szűrő listájából lehet választani egy kategóriát.  Csak a kiválasztott kategóriájú feladatok jelennek meg. | OK |
| | Szűrők összehangolása | A különböző szűrők (kategória-, prioritás-, státuszszűrő és keresés) egymás utáni alkalmazásakor a szűrés a már szűrt feladatok listáján történik. | OK |
| | Szűrők törlése | A „Szűrők törlése” gomb megnyomása után a szűrők törlődnek, és az összes feladat megjelenik. A keresőmezőből kitörlődik a beírt szöveg. | OK |

### Kijelentkezési felület
|  ID | Név | Leírás | Megfelelés |
|-----| ----------- | ----------- | ----------- |