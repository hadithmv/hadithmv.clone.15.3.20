# minify

Set-Location -Path $PSScriptRoot #C:/Users/ashraaf/Downloads/VScode/hadithmv.github.io/js

google-closure-compiler --charset=UTF-8 --js=allHadith-script.js --js_output_file=allHadith-script.min.js
google-closure-compiler --charset=UTF-8 --js=barbahari-script.js --js_output_file=barbahari-script.min.js
google-closure-compiler --charset=UTF-8 --js=bulugh-script.js --js_output_file=bulugh-script.min.js
google-closure-compiler --charset=UTF-8 --js=eegaal-script.js --js_output_file=eegaal-script.min.js
google-closure-compiler --charset=UTF-8 --js=hisnulMuslim-script.js --js_output_file=hisnulMuslim-script.min.js
google-closure-compiler --charset=UTF-8 --js=muwatta-script.js --js_output_file=muwatta-script.min.js
google-closure-compiler --charset=UTF-8 --js=nawaqid-script.js --js_output_file=nawaqid-script.min.js
google-closure-compiler --charset=UTF-8 --js=nawawi-script.js --js_output_file=nawawi-script.min.js
google-closure-compiler --charset=UTF-8 --js=qawaid-script.js --js_output_file=qawaid-script.min.js
google-closure-compiler --charset=UTF-8 --js=quran-script.js --js_output_file=quran-script.min.js
google-closure-compiler --charset=UTF-8 --js=quranBakurube-script.js --js_output_file=quranBakurube-script.min.js
google-closure-compiler --charset=UTF-8 --js=radheef-script.js --js_output_file=radheef-script.min.js
google-closure-compiler --charset=UTF-8 --js=raziyain-script.js --js_output_file=raziyain-script.min.js
google-closure-compiler --charset=UTF-8 --js=umdah-script.js --js_output_file=umdah-script.min.js
google-closure-compiler --charset=UTF-8 --js=usooluThalaatha-script.js --js_output_file=usooluThalaatha-script.min.js
google-closure-compiler --charset=UTF-8 --js=usooluSunnah-script.js --js_output_file=usooluSunnah-script.min.js