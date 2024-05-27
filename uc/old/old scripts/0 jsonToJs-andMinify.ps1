Set-Location -Path $PSScriptRoot

# https://learn.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Management/Set-Content?view=powershell-7.3
# https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/add-content?view=powershell-7.3


Set-Content ../akhbaruShuyukh.js -Value 'const akhbaruShuyukh_DB='
Get-Content akhbaruShuyukh.json | Add-Content ../akhbaruShuyukh.js
uglifyjs ../akhbaruShuyukh.js -c -m -o ../akhbaruShuyukh.js

# no actual allAqida.json or js exists

Set-Content ../allAthar.js -Value 'const allAthar_DB='
Get-Content allAthar.json | Add-Content ../allAthar.js
uglifyjs ../allAthar.js -c -m -o ../allAthar.js

Set-Content ../aqidatuRaziyain.js -Value 'const aqidatuRaziyain_DB='
Get-Content aqidatuRaziyain.json | Add-Content ../aqidatuRaziyain.js
uglifyjs ../aqidatuRaziyain.js -c -m -o ../aqidatuRaziyain.js

Set-Content ../aqidahNawawi.js -Value 'const aqidahNawawi_DB='
Get-Content aqidahNawawi.json | Add-Content ../aqidahNawawi.js
uglifyjs ../aqidahNawawi.js -c -m -o ../aqidahNawawi.js

Set-Content ../barbahari.js -Value 'const barbahari_DB='
Get-Content barbahari.json | Add-Content ../barbahari.js
uglifyjs ../barbahari.js -c -m -o ../barbahari.js

Set-Content ../barbahariDFK.js -Value 'const barbahariDFK_DB='
Get-Content barbahariDFK.json | Add-Content ../barbahariDFK.js
uglifyjs ../barbahariDFK.js -c -m -o ../barbahariDFK.js

Set-Content ../bulugh.js -Value 'const bulugh_DB='
Get-Content bulugh.json | Add-Content ../bulugh.js
uglifyjs ../bulugh.js -c -m -o ../bulugh.js

# dont write 'const bulughFull_DB=' here
Set-Content ../bulughFull.js -Value 'const bulugh_DB='
Get-Content bulughFull.json | Add-Content ../bulughFull.js
uglifyjs ../bulughFull.js -c -m -o ../bulughFull.js

Set-Content ../radheefEegaal.js -Value 'const radheefEegaal_DB='
Get-Content radheefEegaal.json | Add-Content ../radheefEegaal.js
uglifyjs ../radheefEegaal.js -c -m -o ../radheefEegaal.js

Set-Content ../fortyAajurry.js -Value 'const fortyAajurry_DB='
Get-Content fortyAajurry.json | Add-Content ../fortyAajurry.js
uglifyjs ../fortyAajurry.js -c -m -o ../fortyAajurry.js

Set-Content ../fortyNawawi.js -Value 'const fortyNawawi_DB='
Get-Content fortyNawawi.json | Add-Content ../fortyNawawi.js
uglifyjs ../fortyNawawi.js -c -m -o ../fortyNawawi.js

Set-Content ../hisnulMuslim.js -Value 'const hisnulMuslim_DB='
Get-Content hisnulMuslim.json | Add-Content ../hisnulMuslim.js
uglifyjs ../hisnulMuslim.js -c -m -o ../hisnulMuslim.js

Set-Content ../kitabulEman.js -Value 'const kitabulEman_DB='
Get-Content kitabulEman.json | Add-Content ../kitabulEman.js
uglifyjs ../kitabulEman.js -c -m -o ../kitabulEman.js

Set-Content ../kunnaasha.js -Value 'const kunnaasha_DB='
Get-Content kunnaasha.json | Add-Content ../kunnaasha.js
uglifyjs ../kunnaasha.js -c -m -o ../kunnaasha.js

Set-Content ../muwatta.js -Value 'const muwatta_DB='
Get-Content muwatta.json | Add-Content ../muwatta.js
uglifyjs ../muwatta.js -c -m -o ../muwatta.js

Set-Content ../radheefNanfoiy.js -Value 'const radheefNanfoiy_DB='
Get-Content radheefNanfoiy.json | Add-Content ../radheefNanfoiy.js
uglifyjs ../radheefNanfoiy.js -c -m -o ../radheefNanfoiy.js

Set-Content ../nawaqidulislam.js -Value 'const nawaqidulislam_DB='
Get-Content nawaqidulislam.json | Add-Content ../nawaqidulislam.js
uglifyjs ../nawaqidulislam.js -c -m -o ../nawaqidulislam.js

Set-Content ../qawaidulArbau.js -Value 'const qawaidulArbau_DB='
Get-Content qawaidulArbau.json | Add-Content ../qawaidulArbau.js
uglifyjs ../qawaidulArbau.js -c -m -o ../qawaidulArbau.js

Set-Content ../quranBakurube.js -Value 'const quran_DB='
Get-Content quranBakurube.json | Add-Content ../quranBakurube.js
uglifyjs ../quranBakurube.js -c -m -o ../quranBakurube.js

Set-Content ../quranBetaqat.js -Value 'const quran_DB='
Get-Content quranBetaqat.json | Add-Content ../quranBetaqat.js
uglifyjs ../quranBetaqat.js -c -m -o ../quranBetaqat.js

Set-Content ../quranHmv.js -Value 'const quran_DB='
Get-Content quranHmv.json | Add-Content ../quranHmv.js
uglifyjs ../quranHmv.js -c -m -o ../quranHmv.js

Set-Content ../quranJaufar.js -Value 'const quran_DB='
Get-Content quranJaufar.json | Add-Content ../quranJaufar.js
uglifyjs ../quranJaufar.js -c -m -o ../quranJaufar.js

Set-Content ../quranMuhammad.js -Value 'const quran_DB='
Get-Content quranMuhammad.json | Add-Content ../quranMuhammad.js
uglifyjs ../quranMuhammad.js -c -m -o ../quranMuhammad.js

Set-Content ../quranMukhtasar.js -Value 'const quran_DB='
Get-Content quranMukhtasar.json | Add-Content ../quranMukhtasar.js
uglifyjs ../quranMukhtasar.js -c -m -o ../quranMukhtasar.js

Set-Content ../quranMuyassar.js -Value 'const quran_DB='
Get-Content quranMuyassar.json | Add-Content ../quranMuyassar.js
uglifyjs ../quranMuyassar.js -c -m -o ../quranMuyassar.js

Set-Content ../quranMuyassarGhareeb.js -Value 'const quran_DB='
Get-Content quranMuyassarGhareeb.json | Add-Content ../quranMuyassarGhareeb.js
uglifyjs ../quranMuyassarGhareeb.js -c -m -o ../quranMuyassarGhareeb.js

Set-Content ../quranQiraaath.js -Value 'const quran_DB='
Get-Content quranQiraaath.json | Add-Content ../quranQiraaath.js
uglifyjs ../quranQiraaath.js -c -m -o ../quranQiraaath.js

Set-Content ../quranRasmee.js -Value 'const quran_DB='
Get-Content quranRasmee.json | Add-Content ../quranRasmee.js
uglifyjs ../quranRasmee.js -c -m -o ../quranRasmee.js

Set-Content ../quranSadi.js -Value 'const quran_DB='
Get-Content quranSadi.json | Add-Content ../quranSadi.js
uglifyjs ../quranSadi.js -c -m -o ../quranSadi.js

Set-Content ../quranSoabuni.js -Value 'const quran_DB='
Get-Content quranSoabuni.json | Add-Content ../quranSoabuni.js
uglifyjs ../quranSoabuni.js -c -m -o ../quranSoabuni.js

Set-Content ../radheefAll.js -Value 'const radheefAll_DB='
Get-Content radheefAll.json | Add-Content ../radheefAll.js
uglifyjs ../radheefAll.js -c -m -o ../radheefAll.js

Set-Content ../radheefManiku.js -Value 'const radheefManiku_DB='
Get-Content radheefManiku.json | Add-Content ../radheefManiku.js
uglifyjs ../radheefManiku.js -c -m -o ../radheefManiku.js

Set-Content ../radheefRasmee.js -Value 'const radheefRasmee_DB='
Get-Content radheefRasmee.json | Add-Content ../radheefRasmee.js
uglifyjs ../radheefRasmee.js -c -m -o ../radheefRasmee.js

Set-Content ../riyadusaliheen.js -Value 'const riyadusaliheen_DB='
Get-Content riyadusaliheen.json | Add-Content ../riyadusaliheen.js
uglifyjs ../riyadusaliheen.js -c -m -o ../riyadusaliheen.js

Set-Content ../surah-juz-ayahNo-basmalah-ayah-uthmani.js -Value 'const surah_juz_basmalah_ayah_uthmani_DB='
Get-Content surah-juz-ayahNo-basmalah-ayah-uthmani.json | Add-Content ../surah-juz-ayahNo-basmalah-ayah-uthmani.js
uglifyjs ../surah-juz-ayahNo-basmalah-ayah-uthmani.js -c -m -o ../surah-juz-ayahNo-basmalah-ayah-uthmani.js

Set-Content ../umdah.js -Value 'const umdah_DB='
Get-Content umdah.json | Add-Content ../umdah.js
uglifyjs ../umdah.js -c -m -o ../umdah.js

Set-Content ../quranUshru.js -Value 'const quranUshru_DB='
Get-Content quranUshru.json | Add-Content ../quranUshru.js
uglifyjs ../quranUshru.js -c -m -o ../quranUshru.js

Set-Content ../usooluSiththa.js -Value 'const usooluSiththa_DB='
Get-Content usooluSiththa.json | Add-Content ../usooluSiththa.js
uglifyjs ../usooluSiththa.js -c -m -o ../usooluSiththa.js

Set-Content ../usooluSunnah.js -Value 'const usooluSunnah_DB='
Get-Content usooluSunnah.json | Add-Content ../usooluSunnah.js
uglifyjs ../usooluSunnah.js -c -m -o ../usooluSunnah.js

Set-Content ../usooluThalaatha.js -Value 'const usooluThalaatha_DB='
Get-Content usooluThalaatha.json | Add-Content ../usooluThalaatha.js
uglifyjs ../usooluThalaatha.js -c -m -o ../usooluThalaatha.js




<# OLD
# removes first array
((Get-Content -path "C:\Users\ashraaf\Downloads\VScode\hadithmv.github.io\js\json\raw\test.js" -Raw) -replace '(\[(?:\[??[^\[]*?\]))','') | Set-Content -Path "C:\Users\ashraaf\Downloads\VScode\hadithmv.github.io\js\json\raw\rawtest.js"
# cleans up spaces and comma
((Get-Content -path "C:\Users\ashraaf\Downloads\VScode\hadithmv.github.io\js\json\raw\rawtest.js" -Raw) -replace '\[\s\s+,','[') | Set-Content -Path "C:\Users\ashraaf\Downloads\VScode\hadithmv.github.io\js\json\raw\rawtest.js"
#>