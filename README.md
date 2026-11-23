# TatraBanka 

PROJEKT: KOMPLETNÁ MOBILNÁ BANKOVÁ APLIKÁCIA



1. Hlavná úloha



Vybuduj kompletnú, funkčnú a responzívnu aplikáciu simulujúcu moderné internetové bankovníctvo.



Ako grafickú referenciu použi všetky dodané screenshoty mobilnej aplikácie Tatra banka.



Cieľom je dosiahnuť čo najpresnejšiu vizuálnu podobnosť v:



- rozložení obrazoviek,

- navigácii,

- veľkostiach komponentov,

- typografii,

- farbách,

- ikonách,

- kartách,

- formulároch,

- spodnej navigačnej lište,

- detailoch transakcií a platieb.



Použi vlastnú identitu aplikácie a fiktívne testovacie údaje. Neimituj skutočnú identitu banky ani jej oficiálne prihlasovanie.



2. Technológie



Preferovaná architektúra:



- React

- TypeScript

- Vite

- Tailwind CSS

- Supabase

- PostgreSQL

- Supabase Auth

- Supabase Row Level Security



Aplikácia musí mať frontend a backend oddelené.



Všetky dôležité údaje ukladaj na serveri do databázy PostgreSQL prostredníctvom bezpečného backendu.



Nepoužívaj localStorage ako hlavné úložisko finančných údajov.



3. Dizajn



Vytvor mobilné rozhranie s vysokou vizuálnou presnosťou podľa referenčných screenshotov.



Požiadavky:



- tmavý režim,

- svetlý režim,

- čierne a tmavosivé plochy,

- modré akcenty,

- jemné tiene a zaoblené rohy,

- čistá banková typografia,

- konzistentné ikony,

- plynulé prechody,

- správne rozloženie na Android telefónoch.



Všetky obrazovky musia používať rovnaký dizajnový systém.



4. Obrazovky aplikácie



Implementuj tieto sekcie:



1. Prihlasovanie a používateľský profil.

2. Domovská obrazovka s účtom a zostatkom.

3. História pohybov.

4. Detail transakcie.

5. Nová platba.

6. Potvrdenie simulovanej platby.

7. Príjemcovia.

8. Šablóny platieb.

9. Trvalé príkazy.

10. Platobné karty.

11. Detail karty a nastavenie limitov.

12. MaFin – prehľad príjmov a výdavkov.

13. Osobný profil.

14. Kontakty a podpora.

15. Hlavné menu.

16. Nastavenia.

17. Notifikácie.



Každá obrazovka musí byť funkčná a prepojená s ostatnými.



5. Funkčnosť platieb



Vytvor kompletný systém simulovaných bankových prevodov.



Formulár musí obsahovať:



- meno príjemcu,

- IBAN,

- sumu,

- menu EUR,

- variabilný symbol,

- konštantný symbol,

- špecifický symbol,

- správu pre príjemcu,

- dátum vykonania.



Pred potvrdením zobraz kontrolnú obrazovku.



Po potvrdení:



- skontroluj dostatočný zostatok,

- validuj IBAN,

- vykonaj simulovaný prevod,

- aktualizuj zostatok,

- vytvor transakciu,

- ulož údaje na server,

- aktualizuj históriu pohybov,

- aktualizuj štatistiky MaFin.



Použi databázovú transakciu alebo bezpečnú serverovú funkciu, aby sa zostatok a transakcia aktualizovali atomicky.



Zabráň dvojitému vykonaniu platby.



Platby nesmú byť odosielané do reálneho bankového systému.



6. Databáza



Navrhni bezpečnú databázovú štruktúru:



- profiles

- accounts

- transactions

- recipients

- payment_templates

- standing_orders

- cards

- card_limits

- notifications

- user_settings



Každý používateľ smie pristupovať iba k vlastným údajom.



Použi:



- Row Level Security,

- bezpečné serverové operácie,

- kontrolu oprávnení,

- validáciu vstupov,

- bezpečné spracovanie chýb,

- ochranu pred opakovaným vykonaním platby.



Nikdy nevystavuj Service Role Key vo frontende.



Pred vytváraním migrácií najskôr skontroluj existujúcu databázu. Ak už existujú vhodné tabuľky, zachovaj ich a prispôsob sa existujúcej štruktúre.



7. Navigácia



Vytvor spodnú mobilnú navigáciu podľa referenčných screenshotov.



Aktívna sekcia musí byť vizuálne zvýraznená.



Navigácia musí fungovať na každej obrazovke a nesmie prekrývať obsah.



Implementuj aj hlavné rozbaľovacie menu.



8. Pravidlá vývoja



Najskôr analyzuj celý existujúci projekt.



Nevytváraj nový projekt bez potreby.



Nemaž existujúce funkcie bez dôvodu.



Zachovaj existujúce údaje a databázové väzby, ak existujú.



Rozdeľ aplikáciu do komponentov, stránok, služieb, hookov a typov.



Neponechávaj všetku logiku v jednom HTML súbore.



Každé tlačidlo musí mať skutočnú funkciu.



Nevytváraj nefunkčné vizuálne prvky.



Po dokončení každej časti spusti dostupné testy a oprav chyby.



9. Výsledná kontrola



Over:



- registráciu a prihlásenie,

- načítanie údajov zo servera,

- vytvorenie platby,

- aktualizáciu zostatku,

- históriu transakcií,

- pridávanie príjemcov,

- ukladanie šablón,

- úpravu limitov,

- fungovanie navigácie,

- mobilné rozloženie,

- svetlý a tmavý režim,

- bezpečnosť databázy.



10. Dokončenie



Výsledkom musí byť jedna ucelená aplikácia.



Nie iba HTML prototyp.

Nie iba grafický návrh.

Nie iba nefunkčné obrazovky.



Požadujem skutočnú frontendovú aplikáciu s backendom, serverovou databázou a funkčnými simulovanými operáciami.



Priebežne dokumentuj vykonané zmeny a na konci odovzdaj zoznam hotových funkcií, nevyriešených problémov a výsledkov testovania.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9977ccbf-77f0-4757-abc0-3044b89aaf40).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
