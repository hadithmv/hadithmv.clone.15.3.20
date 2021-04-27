let radheef_dataSet = [
  ["أَنَا","(ނ) އަހަރެން / އަހަރުން / އަހުރެން / އަނާ / އަޅުގަނޑު ","I / me"  ],
  ["بِطرِيق","ފީނާދޫނި","penguin"  ],
  ["إجراءات إدارة الحالة، إجراءات إدارة الدعوى","މައްސަލަ ކުރިއަށް ގެންދަންވީ ގޮތް","case management procedure"  ],
  ["غير مستجيب","ނާއިޖާބީ","non responsive"  ],
  ["دُعسُوقَة","ނަލަމަޑި","ladybird"  ],
  ["جِذْرُ الشَّمَنْدَر؛ شمندر","ރަންގުމޫ","beetroot"  ],
  ["حِمَارُ الزّرَد؛ حمار وحشى مخطط؛عتابي","ކަފިހިއަސް","zebra"  ],
  ["جَلّ، جيلاتين، هُلَام","ޖެލް","gel"  ],
  ["حافِز، غِذاء، مَحرُوقَات، وِقاد، وَقَد، وَقُود، وَقِيد","އަނދަނަ","fuel"  ],
  ["جَوَّانِيّ، دَاخِليّ","އެތެރެ","indoor"  ],
  ["خَارِجِيّ، خَلَائِيّ، مَكشُوف","ބޭރު","outdoor"  ],
  ["اِستِثنَائِيّ، اِضطِرار، اِضطِرارِيّ، أَزمَة، شِدَّة، ضَرُورَة، طَارِئ، طَوَارِئ","ކުއްލިޙާލަތު","emergency"  ],
  ["انتِخَاب فَرعِي أَو تَكمِيلِي أَو جُزئِي","މެދައިންތިޚާބު","by-election"  ],
  ["مُعاوَدَة","ދަސްވެރިކަން","internship"  ],
  ["مُعاوِد ","ދަސްވާރު","intern"  ],
  ["أَذَى، تَذَمُّر، تَظَلُّم، شَكَاة، شِكَايَة، شَكوَة، شَكوَى، شَكِيَّة، ضَيم، ظُلم، مَظلَمَة","ޝިކާޔަތު","grievance"  ],
  ["إِعلَان، بَلاَغ، بَيَان، قَرَار، نَشرَة","ތޫރަ","bulletin"  ],
  ["الطَابِق الأَرضِي أَو الدَور الأَرضِي","ތިރީ ބުރި","ground floor"  ],
  ["نَائِب","އިންތިޚާބީ ބައިވެރިޔާ","running mate"  ],
  ["اِرتِكاس، اِستِجَابَة، إِجَابَة، تَجَاوُب، تَحَرّك، تَلبِيَة، جَوَاب، رَدٌّ، رَكس، قَضَاء","އިޖާބަ","response"  ],
  ["تَردِيدِيّ، حَسّاس، مُتَجَاوِب، مُجِيب، مُستَجِيب، مُلَبي، مُنفَتِح","އިޖާބީ","responsive"  ],
  ["اِنثِنَائِيّ، أَغيَد، أَقوَد، أَليِناء، أَملَد، سَلِس، طَوِيّ، غِيد، غَيداء، لِدان، لَدن، لَيّن، مِذعان، مَرِن، مِطوَاع، مُطِيع، مَلداء","ފަހެލި","flexible"  ],
  ["اِنثِنَاء، انثنائية، سَلاسَة، غَيَد، لَدَانَة، لَدُونَة، لِين، لُيُونَة، مُرُونَة، مِطوَاعِيّة","ފަހެލިކަން","flexibility"  ],
  ["غَير قَابِل لِلِانثِنَاء","ނުފަހެލި","non flexible"  ],
  ["دَولَة دَاخِل دَولَة","އަޑީ ސަރުކާރު","deep state"  ],
  ["سَيَّارَة الإِسعَاف؛ سَيَّارَةُ تَنْقُل الْمَرْضَى إِلَى الْمُسْتَشْفَى","އެންބިއުލަންސު","ambulance"  ],
  ["لنج الإِسعَاف","އެންބިއުލާންޗު / އެންބިއުލޯންޗު","sea ambulance"  ],
  ["مُبَاشر عَلى الإنتَرنت؛ مُتَّصِل؛ مُتَّصِلُ بِإنتَرنت؛ ‎مُتَوِافِر عَلَى الشَّابَكَة؛ مَوصُول (إِلَى الخَط)","އޮންލައިން","online"  ],
  ["إِرَم، أُعلُومَة، صُوَّة، مَعلَم، مِيل","މޭލުގާ / މޭލުދަނޑި","milestone"  ],
  ["جَندَل، شاغُور، شَلَّال، مَسقَط، هَدّارَة","ފެނާރު","waterfall"  ],
  ["أرض، سَيّارَة، كَوكَب، كَوكَبِيّ، نَجم","ގުރަހަ","planet"  ],
  ["اِلتِزام، إِكارَة، تَعَهُّد، تَلزِيم، حِراثَة، زِرَاعَة، زِراعِيّ، فِلاحَة، مُؤاكَرَة","ދަނޑުވެރިކަން","farming"  ],
  ["إِرِّيس، أَكّار، زارِع، زَرّاع، فَلَّاح، مُزَارِع، مَزرَعانِيّ، ملتزِم، مُؤاكِر","ދަނޑުވެރިޔާ","farmer"  ],
  ["اِختِلاف، اِفتِنان، تَعَدّد، تَفَنُّن، تَنَوُّع، تنويع، فَرق","ސިންދަފާތު","Diversity"  ],
  ["اِستَلحَق، إِضَافَة، تابِع، جَنَاح، ذَيل، ضاحية، مُلحَق","އިތުރުވެނި","Annex"  ],
  ["تنوع لغوي","ބަހަވީ ސިންދަފާތު","Linguistic Diversity"  ],
  ["التنوع الثقافي","ސަގާފީ ސިންދަފާތު","Cultural Diversity"  ],
  ["المحاصيل الزراعية","ޒިރާއީ އުފެއްދުންތައް","Agricultural produce"  ],
  ["اِنتاج، أجَمَة، ثَمَر، جَنىً، حَصائِد، حَصِيد، حصيلة، حَمل، حَوصَلَة، دَخل، زَرع، زَرِيعَة، شَجراء، صَلَمة، غَلَّة، مجموعة، مَجنَى، مَحصُول، مَدخُول، نِتَاج","މަތިވަރު","crop"  ],
  ["القيمة الزراعية المضافة","ޒިރާއީ އަގުއެއްކުރުން","agricultural value addition"  ],
  ["السلسلة القيمية؛ سلسلة الإمدادات؛ سلسلة الأنشطة المضيفة للقيمة","އަގުޗޭނު","value chain"  ],
  ["أَلِيف، داجِن، دَجاج، دَواجِن، فِراخ","ކޯލި","poultry"  ],
  ["مزارع دواجن","ކޯލިވެރިޔާ","poultry farmer"  ],
  ["تربية الدواجن","ކޯލިވެރިކަން","poultry farming"  ],
  ["أَنعام، بَهَائِم، جُشار، ماشِيَة، مَوَاشٍ، مَواشِي، نَعَم","ދިރޭމުދާ","livestock"  ],
  ["اِقتِطاف، جَني، حَصَاد، حَصد، قِطَاف، قَطف","މަތިވަރުކެނޑުން","harvesting"  ],
  ["القيمة المضافة","އަގު އެއްކުރުން","value addition"  ],
  ["القيمة المضافة","އަގުއެއްކުރި","value added"  ],
  ["القيمة المضافة","އެއްކުރި އަގު","added value"  ],
  ["ضريبة القيمة المضافة","އަގު އެއްކުރި ވާރު","value added tax"  ],
  ["زِرَاعَة","ޒިރާއަތު","agriculture"  ],
  ["حَقليّ، زِرَاعِيّ، فِلاحِيّ","ޒިރާއީ","agricultural"  ],
  ["إِخرَاج، إدخال، إدراج، إِفراز، تَبوِيب، تَدرِيج، تَرتِيب، تَسجِيل، تَصنِيف، تَضمِين، تَنحِيَة، تَنسِيق، تَنظِيم، تَوصِيف، جَدوَلَة، صِنف، ضَرب، طبقة، فَرز، فئة، نَوع","ގިންތިކުރުން","classification"  ],
  ["استئساديّ، برافو، تنمُّريّ، جدًا، رائع، رفيق، زميل، فتوّة، متنمِّر، مَرِح، مَرحَى، مُمتاز","ގަނާ","bully"  ],
  ["تَجَرَّأ، يُرهب، يتنمّر","ގަނާކުރުން","bullying"  ],
  ["فرقة الكلب","ފާރަގެމަ","Dog Squad"  ],
  ["تَصبِيرَة، تَقوِيتَة، قَضمَة، لُقَيمَة، لُمجَة","ލުއިކާ","snack"  ],
  ["اِستَرَق، راقَب، رَقَب، عَرِيف، مُحَذِّر، مُرَاقِب، مُرشِد، مِرقاب، مُنذِر، مونيطور، وَرَل","މޮނީޓަރު","monitor"  ],
  ["زعيم الخط","ސަފުދާރު","line leader"  ],
  ["قارِئ، مُجَوِّد","ކިޔެވެނި","quran reciter"  ],
  ["مستقبل","ސުވާސްތު","greeter"  ],
  ["مساعد وجبة خفيفة","ލުއިކާ އެހީތެރިޔާ","snack helper"  ],
  ["مُزِيل، مَصبَغة، مُطَهِّر، مُكَرّر، مُنَظِّف، منظِّفة، مُنَقي","ސާފީ","cleaner"  ],
  ["أَطيان، جُلاَف، دِلغان، صَلصال، طَفلِيّ، طِين، فَخّارِيّ، كلاي، لِيَق، لِيقَة، مَدَر، مَعجُون، مِلاَط، وَحل","މަށި","clay"  ],
  ["لعب العجين","ފުށްމަށި","play dough"  ],
  ["ركن اللغة","ބަސް އަށި/ބަސް ދާލަ","language corner"  ],
  ["ركن العدد","ވިޔަ އަށި / ވިޔަ ދާލަ","number corner"  ],
  ["ركن اللعب","ކުޅިވަރު އަށި / ކުޅިވަރު ދާލަ","play corner"  ],
  ["ركن إبداعي","އިޖާދު އަށި / އީޖާދު ދާލަ","creative corner"  ],
  ["ركن المهارة","ހުނަރު އަށި / ހުނަރު ދާލަ","skill corner"  ],
  ["إصبع، إِصبَعِيّ، رَقمِيّ، عَدَدِيّ، مُصَبَّع، مِفتاح","ސުމޭކު","digital"  ],
  ["صورة شخصية","ނަފްސީ","selfie"  ],
  ["اِستِبصار، انثناء، انعكاس، أثَر، تَأثِير، تَأَمُّل، تَأنّ، تَبَصّر، تَدَبر، تَرَوِّي، تَروِيَة، تعريضٌ بِ، تَفَكُّر، تَفكِير، رَوِيّة، عَكس، فكرة، مَفعُول، ملاحظة، منثني، نَظَر","ރިވެލި","reflection"  ],
  ["أَبْدَى، أَظْهَر، تَرَوَّى، تَفَكَّر، رَدّ، عَكَس، يَشين، يَعْكِس، يُضفي على، يُظهر، يُكْسِب، يُوْرِث، يبيِّن","ރިވެލިވުން","reflection/reflecting"  ],
  ["اِستَبصَر، اِفتَكَر، إعكس، عَكَس","ރިވެލިކުރުން","reflect"  ],
  ["انعطاف، انكسار، تَكَسُّر","ރިފެރިވުން","refraction"  ],
  ["إنكسر","ރިފެރިކުރުން","refract"  ],
  ["مُجَازَفَة، مُخَاطَرَة، مُطَوِّحَة، مُغَامَرَة","އާހިތަ","adventure"  ],
  ["أَشوَس، جَرِيء، جسور، خَطِر، شُجَاع، غِمارِيّ، مُجَازِف، مُخَاطِر، مُغَامِر، مِقحام، مِقدام","އާހިތަވެރި","adventurous"  ],
  ["أَرعَن، طائِش، مُجَازِف، مُخَاطِر، مُغَامِر","އާހިތަވެރިޔާ","adventurer"  ],
  ["مغامرون","އާހިތަވެރީން","adventurers"  ],
  ["اِحتِمَال، اِحتِياطِيّ، إِمكان، إِمكَانِيَّة، أرجَحِيّه، جَوَاز، طارئ، طوارئ، عارِض، مصادفة","ބަދިލީ / އިހުތިމާލީ","contingency"  ],
  ["اِتّفَاقِيّ، أَرجَح، تَصَادُفِيّ، جائِز، شَرطِيّ، طارِئ، طارِئَة، طَوارِئيّ، عابِر، عارِض، عَرَضِيّ، غالِب، فريق، مُحتَمَل، مُرَجّح، مَشرُوط، مصادَفة، مُمكِن","ބަދިލު / އިހުތިމާލު","contingent"  ],
  ["رَذاذ، سَحَاب، سحب، سَدِيم، شابُورَة، شَبُّورَة، غَشَاوَة، غُطَيط، غَيم","ބަނަފިނި","mist"  ],
  ["خارجيّ، خَلائيّ، مكشوف","ބޭރުވެށި","outdoor"  ],
  ["حِمَارُ الزّرَد؛ حمار وحشى مخطط؛عتابي","ކަފިހިއަސް","zebra"  ],
  ["اِستِثنَائِيّ، اِضطِرار، اِضطِرارِيّ، أَزمَة، شِدَّة، ضرورة، طارِئ، طَوارِئ","ކުއްލި ޙާލަތު","emergency"  ],
  ["انحدار، انحناء، اهتياج، تسلُّق، تعلية، تواء، خدعة، شُبوب، مَدرَج، مُنحَدَ","ކަތޭރި","ramp"  ],
  ["القِيم الأساسية","އަރައިހުރި ސިފަތައް","core values"  ],
  ["تجديد، تحديث، مستجدّات","އަދާހަމަ","update (n)"  ],
  ["أَجَدّ، جَدّد، حَدّث، عَصْرَن، يُحدِّث، يعصِّر","އަދާހަމަކުރުން","update (v)"  ],
  ["اِبتِكَار، اِختِرَاع، اِستِحداث، إبداع، بَدع، بَدعَة، تَجدِيد، تَقلِيعَة، حَدَث، مُبتَدَع، مُبتَكَر، مُختَرَع، مُستَحدَث","އީޖާދު","innovation"  ],
  ["جَوَّانِيّ، داخِليّ","އެތެރެވެށި","indoor"  ],
  ["اتصال مباشر؛ أُونْلايْن؛ على الإنترنت؛ على الخط؛ على خط التليفون؛ فوري؛ متصل بإنترنت؛ متصل بحاسب؛ متصل بشبكة الإنترنت","އޮންލައިން","online"  ],
  ["اِتّقاء، إعَاقَة، إيقاف، تَثبِيط، تَجَنّب، تحَاشِي، تَدَارُك، تَفَادٍ، تَقييد، تلاَفِي، حَبس، حَجز، حَصر، حَيلُولَة، دَرء، دَرئ، رَدّ، رَدع، زَجر، صَدّ، عِصمَة، عَضل، كَبت، كَفّ، مَنع، وَقاء، وِقَايَة، وِقائِيَّة","ވާކީ","prevention"  ],
  ["اِنثِنَاء، رَجُوعيّة، لَدَانَة، لِين، لُيُونَة، مُرُونَة، مِطوَاعِيّة","ވިލުން","resilience"  ],
  ["برنامج، بِساط، خطة، رَصِيف، سُدَّة، مِنبَر، مِنَصّة","މަންސަ","platform"  ],
  ["منظومة بيئية؛ نطام بيئي؛ نظام إيكولوجي","މާހައުލީ ނިޒާމް","ecosystem"  ],
  ["بِيئِيّ، مُحِيطِيّ، وَسَطِيّ","މާހައުލީ","environmental"  ],
  ["إجراءات إدارة الحالة","މައްސަލަ ކުރިއަށް ގެންދަންވީ ގޮތް","case management procedure"  ],
  ["فَصلِيّ، مَوسِمِيّ","މޫސުމީ","seasonal"  ],
  ["إيوان، باحَة، بَهو، بُوح، رَدهَة، رواق، صالَة، صَرح، فِناء، قاعَة، قَصر، لِيوان، مَشّايَة، مَلهًى / أريكة، تَجَسطَن، تَجَصطَن، دِهلِيز، رَدهَة، رُوَاق، مُتَّكأ","މާލަން","hall/lounge"  ],
  ["اِستِبصار، إِبصار، بَصَر، بَصِيرَة، تَبَصّر، تَخَيُّل، تَصَوُّر، تَوَهُّم، جَلَيَان، خَيَال، رُؤَى، رُؤيَا، رُؤيَة، طَيف، عِلم، فِرَاسَة، فِطنَة، كَشف، مُخَيّلَة، نَظَر، هَلوَسَة","މުހިންމަތް/ ތަޞައްވުރު","vision"  ],
  ["الفلكيون؛ علماء الفلك","ފަލަކީން","astronomers"  ],
  ["انتشاريّ، إضَافِيّ، أَرِيض، بالِغ، جامِع، رَحب، ساحِق، شاسِع، شامِل، طويل، عامّ، فائِق، كامِل، كُلّيّ، مَبسُوط، مُتَرامِي، مُتَّسع، مُتَكاثِر، مَزِيد، مُستَفِيض، مُسهَب، مُفَصّل، مُمتَدّ، مَمدُود، مُنبَسِط، مُوَسّع، واسِع","ފެތުރެނިވި، ދަގަތަ","extensive"  ],
  ["سُدُم، سَدِيم، شابورة، ضَبَابِيّة، غَشَاوَة، اغبرار؛ رهج؛ سَدِيم: ضَبَابٌ رَقِيق؛ شَبُّورة؛ ضباب خفيف؛ عجاج؛ غَشَّى: جَعَلَهُ أَغْبَش؛ غيم؛ يجعله غائمًا","ދުންފުސް","haze"  ],
  ["حَرَف، حلّل، حادَ الضَّوْءُ","ދިފެރިކުރުން","diffract"  ],
  ["اِنحراف، حُيُود","ދިފެރިވުން","diffraction"  ],
  ["اِستِعدَاد، أُهبَة، تَأَهُّب، تَجَهّز، تَهَيّؤ، جاهِزِيَّة، جُهُوزِيَّة","ތައްޔާރުކަން","preparedness"  ],
  ["اِبتِذال، اِرتِدَاد، اِمتِهان، اِنحِسَار، اِنحِطَاط، انحلال، إِذلال، تَحقِير، تَذلِيل، تَرَاجُع، تَعرية، تَفَسّخ، تفكُّك، تَقَهقُر، حِطّة، خِزي، ذُلّ، فَسَاد، مهانة، هُبُوط، هَتك، هَوَان، هُون","ލަފަސަ","degradation"  ],
  ["بناء، بِنَايَة، بُني، بُنيَان، بِنيَة، تَرتِيب، تَركِيب، تَركِيبَة، تشييد، تَكوِين، جِبِلّة، حَبكَة، خِلقَة، شَكل، صَرح، طِينَة، عِمَارَة، قَوَام، كِيَان، مَبنًى، مَنظُومَة، نَسِيج، هَياكِل، هَيكَل، هَيئَة","ބިނާ","structure"  ],
  ["منطقة تغيير ملابس الأطفال","ތުއްތު ކުދީންގެ ރީތިވެނި","baby changing area"  ],
  ["رمز البناء، قانون البناء، كود البناء","ބިނާކޯޑު","building code"  ],
  ["غير بنائي، ليس تركيبي","ލާބިނާއީ","non structural"  ],
  ["إِخرَاج، إدخال، إدراج، إِفراز، تَبوِيب، تَدرِيج، تَرتِيب، تَسجِيل، تَصنِيف، تَضمِين، تَنحِيَة، تَنسِيق، تَنظِيم، تَوصِيف، جَدوَلَة، صِنف، ضَرب، طبقة، فَرز، فئة، نَوع","ގިންތިކުރުން","classification "  ],
  ["زَقْزَق، سَقْسَق، يُسَقسق، إرسالية قصيرة؛ تغريدة؛ رسالة قصيرة؛ صوت الطائر الصغير","ގޮވެލި","tweet"  ],
  ["عد، كِيوِي، لاجناحيّ، نيوزيلنديّ","ކަނބިލިދޫނި، ކީވީ","kiwi"  ],
  ["شَمس","1. އިރު 2. ސޫރުދަ","sun"  ],
  ["قَمَر","ހަނދު","moon"  ],
  ["مجلس الشيوخ الأكاديمي","ޢުލޫމީ ސެނެޓު","academic senate"  ],
  ["اِنْتَدَب ل، أَبَاح، أَجَاز، أَذِن، سَمَح، عَزَا إلى، نَسَب إلى، يُجيز، يُعزِّز، يُقرّ، يصدِّق، يعزو إلى، يفوِّض، ينسِب","އިތުމާދުކުރުން","accredit"  ],
  ["اعتماد، اِنتِداب، إجازة، إِنَابَة، تَخوِيل، تصديق، تَفوِيض، تَوكِيل، نسبة","އިތުމާދު","accreditation"  ],
  ["تقرير الاعتماد","އިތުމާދީ ރިޕޯޓު","accreditation report"  ],
  ["الأَرْمَلَةُ السَّوداء (نوع من العناكب)؛ العَنْكَبُوتُ الأَرْمَلَةُ السَّوداء","ކަޅުބަދި މަކުނު","black widow spider"  ],
  ["شمعة رباط؛ عمود الإشارة الضوئية؛ عمود ربط الحبال؛ مربط الحبال؛ مَكَان رَبْط الْحِبَال","މޫޓު","bollard"  ],
  ["عنكبوت الأرملة البنية","މުށިބަދިމަކުނު","brown widow spider"  ],
  ["اِدِّعاء، إصَابَة، إطار، أَحدَاث، أمر، بَيت، تَابُوت، جِرَاب، حادِثَة، حال، حالَة، حجّة، حقيبة، خِزَانَة، دَعوَى، دولار، زوج، شَاهِد، شَأن، صُندُوق، صِوَان، ظَرف، عُلبَة، غِشَاء، غِطَاء، غُفرَة، غِلاَف، غِمد، قِرَاب، قَضِيّة، مِثَال، مَثَلٌ، مَجمَع، مجموعة، مُحَاكَمَة، مريض، مَسألَة، مَطلَب، مُقَاضَاة، مَوضُوع، واقع، واقِعَة، وَضع، وَقت","ވޭދަނަ","case"  ],
  ["أمين السرّ؛ رَئِيسُ الجامِعَة؛ مستشار","ޗާންސެލަރު","chancellor"  ],
  ["اِتِّفاق، اِتِّفَاقِيَّة، امتياز، إعلان، إكراء، حصانة، دُستور، شِرعَة، صَكّ، عَقد، عَهد، قانُون، مُعَاهَدَة، مفتَقَرة، مكتراة، مِيثَاق، مِيثاقِيّ، وَثِيقَة","ޗާޓަރު","charter"  ],
  ["مؤتمر المجتمع","ވިލީ ސިންތާ","community conference"  ],
  ["اِجتِمَاع، اِئتِمار، إنعام، تآمُر، تداوُل، تَشَاوُر، مُبَاحَثَة، مُدَاوَلَة، مُذَاكَرَة، مُشَاوَرَة، مَنح، مُؤتَمَر","ސިންތާ","conference"  ],
  ["إجراء الاجتماع؛ إعداد مؤتمر","ސިންތާކުރުން","conferencing"  ],
  ["استشارة/ نصيحة/ مشورة؛ الإرشاد النفسي؛ التشاور - المشاورة؛ التوعية (بأهمية…)؛ إرشاد؛ إسداء المشورة؛ مشورة؛ نصح؛ نصيح","ވަސޭހަތް","counselling"  ],
  ["مستشار، موجّه، المرشد ","ވަސޭހަތްތެރިއާ","counsellor"  ],
  ["العدّ التنازلي؛ ثقل موازنة؛ عَدٌّ عَكْسِيّ","ގުނާނަ","countdown"  ],
  ["عشرة، عَقد، العقد عشرة عشرة؛ عشر سنين؛ عقد عشري؛ مدة عشر سنوات","ދަހަރު","decade"  ],
  ["إنَابَة، بِالوَكَالَة، تَفوِيض، تَوكِيل، خَلِيفَة، كاهِيَة، مساعِد، معاوِن، مُفَوّض، مُمَثّل، مَندُوب، مُوفَد، مُوَكَّل، نائِب، وَكِيل","ވަކީލު","deputy"  ],
  ["نائب نائب رئيس الجامعة","ނައިބު ޗާންސެލަރުގެ ވަކީލު","deputy vice chancellor"  ],
  ["أَمْباساد؛ سِفَارَة: مَقَرُّ السَّفِير؛ سكن السفير؛ مَقَرّ السّفِير؛ مَنْصِبُ السَّفِير","ސަފާރާ / އެމްބަސީ","embassy"  ],
  ["ذباب الفاكهة؛ ذُبَابَةُ الفاكِهَة؛ ذُبابَةُ الفَواكِه","މޭވާމެހި","fruit fly"  ],
  ["بازار؛ متجر عام؛ محلات تجارية كبرى؛ مستودع عام","ގުދަން / ފިހާރަ","general store"  ],
  ["جَمعِيّة، قانون، كُلِّيَّة، مبدأ، مَجمع، مَعهَد، مُنشَأَة، مُؤَسَّسة","މައުހަދު","institute"  ],
  ["المجرم الحَدَث؛ حدث مذنب، الحدث الجاني","ޔަވާންގުނާވެރިޔާ","juvenile offender"  ],
  ["صُفَّة، طارِمَة، ظُلَّة، كُشك، جوسق؛ كشك ظلة؛ كوخ","ކިއޮސްކް / މެޝިން","kiosk"  ],
  ["مَصبَغَة، مَغسَل، مغسولات، مكوى","ދޮވަތި","laundry"  ],
  ["حاضَر، مُحَاضَرَة، مَوعِظَة","ދަރެސް","lecture"  ],
  ["أُستاذ، خَطِيب، مُحَاضِر، مُدَرّس، مُعَلّم، مُعِيد، موبِّخ","ދާރިސް","lecturer"  ],
  ["كُتُبِيّ، مكتبي، أمِينُ المَكْتَبَة؛ قيم مكتبة؛ مُدِيرُ مكتبة","ކުތުބުދާރު","librarian"  ],
  ["الفَكُّ العُلْوِيُّ","ތަލިކަށިގަނޑު","maxilla"  ],
  ["المخزن الطبي","ބޭސް ގުދަން/ ބޭސް ފިހާރަ","medical store"  ],
  ["خدمة وطنية","ޥަޠަނީ ޚިދުމަތް","national service"  ],
  ["كلمة التعارف؛ كلمة العبور؛ كَلِمَة سرّ؛ كلمة مرور","ފާސްބަސް","password"  ],
  ["ثقب الباب؛ ثُقْبٌ بِمِقْدارِ عَيْن؛ وصواص ثقب ينظر منه","ދޮރުކަޅި","peephole"  ],
  ["إِجراء، إجرَاءَات، أُسلُوب، بروتوكول، تَدبِير، طَرِيقَة، عَمَلِيّة، كَيفِيّة، مَأخَذ، مَحَجَّة، مَسطَرَة، مُعامَلَة، مُقَارَبَة، مَنهَج، نَمَط، نَهج","އިޖުރާތު / ލުއިފަރުވާ","procedure"  ],
  ["غرفة الإجراءات","ލުއިފަރުވާ ކޮޓަރި","procedure room"  ],
  ["اِحتِفاء، اِستقبال، اِستِلاَم، اِقتِبال، اِلتِقاط، أخذ، تَقَبّل، تَلَقّ، تلَقي، تَنَاوُل، قَبُول، مَأدُبَة، مُقَابَلَة، مُلاَقَاة، وَلِيمَة","އިސްތިޤްބާލު","reception"  ],
  ["أَب، خوري، قائد، كاهِن، موجِّه","އަމީދު","rector"  ],
  ["مُسَجِّل","ދަފްތާރު","registrar"  ],
  ["العدالة التصالحية","ރުޖޫޢީ އިންސާފު","restorative justice"  ],
  ["فَزَّاعَة، مِجدار، مَفزَع، نُطّار","ކާމާ/ވާފަހާ/ވާފެއްސި/ދަނޑިމާލި","scarecrow"  ],
  ["بالٌ، تَرتِيب، حال، حالَة، دَرَجَة، رُتبَة، سُدّة، طَور، مَرتَبَة، مَركَز، مَقَام، مَكَانَة، مَنزِلَة، مَنصِب، مَوقِف، وَضع، وَضعِيَّة","ހާލަތު","status"  ],
  ["إِعَانَة، تَبَرُّع، زِيَادَة، عِلاَوَة، مُسَاعَدَة، مُسَاهَمَة، مِنحَة","ވިނަވި (ނަން)","subsidy"  ],
  ["أثر، بِطَاقَة، بقيّة، تَذكَرَة، جُزَازَة، خِرقة، راية، رُقعَة، سِعر، شِعار، كِسرة، كُنيَة، لَصِيقَة، لَقَب، مِزقة","ޓެގު","tag"  ],
  ["غرفة التطبيب عن بعد","ދުރުތާފަރުވާކޮޓަރި","telemedicine room"  ],
  ["ثالِثيّ، ثِلثيّ، طَيَرانيّ","ތިނެވި","tertiary"  ],
  ["التعليم العالي؛ التعليم بعد الثانوي","ތިނެވި ތަޢުލީމު","tertiary education"  ],
  ["المركز التدريبي؛ مركز التدريب","ތަމްރީނު މަރުކަޒު","training centre"  ],
  ["نائب المستشار؛ نائب رئيس لجنة","ނާއިބު ޗާންސެލަރު","vice chancellor"  ],
  ["عنكبوت الأرملة","ބަދި މަކުނު","widow spider"  ],
  ["خِلَاف، ضِدّ، عَكس، غَير، مُطابِقة، نَقِيض","އިދި","antonym"  ],
  ["اختبار؛ اصغاء- استماع؛ أخضع لتجربة أداء؛ حاسّةُ السّمْع؛ حس السمع؛ سَماع؛ سَمْع؛ يُخْضِع لتجربة أداء؛ يقدم","ހޮވެލި","audition"  ],
  ["مقالات، تدوين؛ سجلّ خادم الويب؛ كحول؛ مدونات الوب؛ مدوّنة؛ مفكّرة","ބުލޮގު","blog"  ],
  ["بُرج، بريدج، جِسر، قَنطَرَة، كُبرِي، كُوبرِي، مَعبَر","ދާލަން/ބުރިޖު","bridge"  ],
  ["بلدوزر، تَراكتُور، جَرّار، جَرَّارَة، جرّافة، مِقلَعَة","ގެންޑާ","bulldozer"  ],
  ["إصابة، ضحيّة، قَتلَى، قَتِيل، كارثة، مُصاب، مصيبة","އަވަތޭރި","casualty"  ],
  ["موظف طبي، ضابط طبي مصاب","އަވަތޭރި ޑަކުޓަރު","casualty medical officer"  ],
  ["ممرضة ضحية","އަވަތޭރި ނަރުސް","casualty nurse"  ],
  ["جثّة، جَسَد، جسم، مجموعة، مُدَوَّنَة","ބަސްމާފާނު","corpus (language)"  ],
  ["ديناصُور، دَينُوصُور","ސާރު","dinosaur"  ],
  ["أطروحة أكاديمية؛ بحث علمي؛ بحث مطول؛ رسالة جامعية؛ رسالة دكتوراة؛ رسالة دكتوراه؛ مَبْحَث","ދެނަބަސް","dissertation"  ],
  ["ابتهاج، اِحتِفَال، اِحتِفَالِيّ، بهجة، جَمع، حُضُور، حَفل، حَفلَة، عِيد، عِيدِيّ، كَرنَفَال، مِهرَجَان، مِهرَجَانِيّ، مَوسِم","މަހާސަމާ","festival"  ],
  ["خِضَابُ الدَّم؛ هيموجلوبين؛ هيموغلوبين؛ هيموكلوبين؛ يحمور","ރަތަނި","haemoglobin"  ],
  ["طب شعبي، علاج منزلي","ގެވެށި ފަރުވާ","home remedy"  ],
  ["رطوبة جويًا، الأرصاد الجوية المائية","ފެންސުމީ","hydrometeorological"  ],
  ["مخاطر الأرصاد الجوية المائية","ފެންސުމީ އަރައްކާ","hydrometeorological hazard"  ],
  ["اِسْتَثْمَرَ: وَظَّفَ مالًا؛ أَبْضَع؛ خول؛ قلد (منصبا)؛ منح؛ وظف؛ يثمر؛ يَسْتَثْمِر؛ يَكْسُو","ވުނަ","invest"  ],
  ["اِستثمار، اِستِثمارِيّ، اِستِغلاَل، إِبضاع، تثمير، تَخوِيل، تطويق، تَعيِينُ، تَفوِيض، تَنصِيب، تَوظِيف، تَولِيَة، حصار، غلاف","ވުނަކުރުން","investment"  ],
  ["مساهم/ مستثمر؛ مستثمر ثقة؛ مُسْتَثْمِر: مُوَظِّفَ (مال)","ވުނޭރު","investor"  ],
  ["بروتوكول اتفاق؛ كتاب تفاهم؛ مذكرة تفاھم","ފަހުމުނާމާ (ފނ)","memorandum of understanding"  ],
  ["صَرح، ضَريح، عَلَم، مأثَرة، مَعلَم، مَفخَرة، نُصب","ހަނދާނީ ބިނާ","monument"  ],
  ["تَنظِيم، شَبَكَة، شَبَكِيّ","ވިއުގަ","network"  ],
  ["خَيمَة، رَوق، سُرَادِق، شادِر، صِوان، صِيوان، فُسطاط، كَعب، مِضرَب","ފަވީލާ","pavilion"  ],
  ["خلايا الدم الحمراء؛ خلية الدم الحمراء؛ كريات الدم الحمراء","ރަތުލޭހަތާ","red blood cells"  ],
  ["حَرِيش، خَرتِيت، خَرطِيط، كَركَدَنّ، مِرمِيس، هِرمِيس","ގެންޑާ","rhinoceros"  ],
  ["الوسائط الاجتماعية؛ وسائط التواصل الاجتماعي؛ وسائل الاتصال الاجتماعية؛ وسائل الإعلام الاجتماعي؛ وسائل/ وسائط التواصل الاجتماعي","މީސްމީޑިއާ","social media"  ],
  ["شبكة اجتماعية، شبكة العلاقات الاجتماعية؛ شبكة تواصل اجتماعي","އިޖްތިމާޢީ ވިއުގަ /މީސް ވިއުގަ","social network"  ],
  ["حصة، خازوق، دِجرانَة، دِعَامَة، رُجبَة، رَكِيزَة، رِهَان، سِناد، سَنَد، شاخِص، عِمَاد، نُصبَة، وَتَد","މަސްލަހަތު","stake"  ],
  ["صاحب الشأن؛ صاحب المصلحة؛ صاحب مصلحة؛ طرف معني؛ طرف مؤثر؛ مُتَسَلِّم الرِّهان؛ مساهم؛ مشارك؛ منتق","މަސްލަހަތުވެރިޔާ","stakeholder"  ],
  ["أصحاب الشأن؛ أصحاب المصلحة؛ أطراف معنية؛ بيان المبادئ؛ حملة الأسهم؛ ذو صلة؛ ذو مصلحة؛ ذوي العلاقة؛ صاحب الحق","މަސްލަހަތުވެރިން","stakeholders"  ],
  ["فئة فرعية","އަފިގިންތި","sub-class"  ],
  ["مُتَرَادِف، مُرَادِف","ދާދި","synonym"  ],
  ["التطبيب من بُعد؛ تَطْبيبٌ بُعادِيّ؛ تَطْبيبٌ عَنْ بُعدٍ","ދުރުތާފަރުވާ","telemedicine"  ],
  ["اطروحة/ رسالة ماجستير؛ الأطروحة الجامعيّة؛ أصل/ موضوع؛ أطروحة/ فكرة؛ أُطْرُوحَة: رِسَالَةٌ عِلْمِيَّة؛ دعوى؛ رسالة دراسية؛ رسالة (علمية) أطروحة؛ رسالة ماجستير","ފިކުރާތު","thesis"  ],
  ["اعتقال، جَنَاح، حِرَاسَة، حَرَس، حماية، حِمىً، حيّ، خَفَارة، ردهة، سِتر، سَجن، عناية، قاصِر، قِسمٌ في، مَحجُور، وصاية، وِقَاء","ޖަނަލު","ward"  ],
  ["خلايا الدم البيضاء؛ كريات الدم البيضاء","ހުދުލޭހަތާ","white blood cells"  ],
  ["إزَار، أَعصَب، أَلحَف، بطانية، حَبَرَة، حِرام، دِثار، سَربَل، طَوَى، طيّة، عَصَب، غَشَاوَة، غَشَّى، غَشِّي، غِطَاء، غلاف، غَلَّف، قَرطَس، قيد، قيود، كَفَن، لِحاف، لَحَف، لفّ، لفّة، لَفَّع، لَفَف، معطف، مِلحَف","ރަންދު","wrap"  ],
  ["إحَاطَة، إخفاء، تَحزِيم، تَطوِيق، تَغطِيَة، تَغلِيف، خَوشَق، سَتر، غِشَاء، غِطَاء، غِطائِيّ، غِلاَف، لَفّ، لِفَافَة، لَفلَفَة، مُحِيطٌ بِ، مُطَوّق، مُكتَنِف، مِلَفّ","ރަންދުކުރުން","wrapping"  ],
  ["واي فاي","ވައިފައި","wifi"  ],
  ["اشعار مبكر؛ انذار مبكر (في مجال نزع السلاح)","ދުރާ އިންޒާރު","early warning"  ],
  ["نظام الإنذار المبكر","ދުރާ އިންޒާރީ ނިޒާމު","early warning system"  ],
  ["فرز المصابين، تصنيف أولوية","ދަނެގަތި","triage"  ],
  ["تقويم النطق؛ علاج النطق؛ علاج عيوب النطق؛ علم أمراض النطق واللغة؛ مداواة الخطاب؛ معالجة العيوب الكلامية؛ معالجة عِلَل النُّطق؛ معالجة عيوب النطق؛ معالجة للنطق","ކަލާނު ފަރުވާ","speech therapy"  ],
  ["معالج","ފަރުވާވެރިޔާ","therapist"  ],
  ["اِستِشفاء، تَداوٍ، تدَاوِي، تَعالُج، دِواء، عِلاج، مُدَاوَاة، مُدَاوَة، مُعَالَجَة","ފަރުވާ","therapy"  ],
  ["تِلمِيذ، مبتدئ، مُتَدَرّب، مُتَدَرّج، مُتَرَبِّص، مُتَمَرّن، مُتَمَهّن، مُتَمَهّنٌ في","ހުނަވަރު","apprentice"  ],
  ["تَتَلمُذ، تَدَرُّب، تَدَرّج، تَدرِيب، تَعويد، تَلمَذَة، تَمَرّن، تَمرِين، تَمَهُّن","ހުނަވަރުކަން","apprenticeship"  ],
  ["اِستِخدام، تجهيزات، تَحدِيد، تَخصِيص، تَعرِيف، تَعيِين، تَنصِيب، تَوظِيف، تَولِيَة، عد، مُبَايَعَة، مَنصِب، مُوَاعَدَة، مَواعِيد، مَوعِد، مَوقِت، مِيعاد، مِيقات، وظيفة","މިވާދު","appointment"  ],
  ["افتراضي، تخيليّ، عمليّ، فعليّ، مفترَض، واقعيّ","ދާދިވަރު","virtual (computing)"  ],
  ["طريق حلقي؛ طريق دائري؛ طريق طَوْقِيٌّ","ވަށަމަގު","ring road"  ],
  ["المسار السريع؛ سريع؛ طَرِيقٌ ثُنَائيُّ الاتِّجاه؛ طريق رئيسي؛ طريق سريع/ أُوتوستراد؛ طريق سيار؛ طريق عام رابط؛ طريق عُمُومِيّ؛ فج","ހަލިމަގު","highway"  ],
  ["لازر، لِيزر","ލޭޒަރު","laser"  ],
  ["البروفيل؛ الصورة الجانبية؛ المظهر الجانبي؛ الملف الشخصي؛ أشكال؛ أنماط؛ بروفايل؛ بروفيل؛ توصيف","ފުރަމަލަ","profile"  ],
  ["حُجَيرة، خَلوَة، زاوية، طارِمَة، ظُلَّة، كُشك، مَقصُورَة","ކުށި","booth"  ],
  ["كشك دفع رسم المرور","އަރަދުކުށި","toll booth"  ],
  ["رسول خير؛ سفير النوايا الحسنة","އައިތަ ސަފީރު","goodwill ambassador"  ],
  ["الحرف؛ شكل؛ مقطع صرفي؛ مورفيم؛ وحدة صرفية فارق","އެކަ","morpheme"  ],
  ["أَرآد، تِرب، حديث، رِئد، عَصرِيّ، قِرن، لِدَة، مُتَزَامِن، مُتَعاصِر، مُتَوَاقِت، مُعَاصِر","އާދީ","current / contemporary"  ],
  ["اِستِهلال، اِفتِتاحِيّة، إمَام، أتَابِك، أَمِير، أنبوب، آمِر، تَمهِيد، حادِي، حاكِم، دَلِيل، دُهقَان، رائِد، رَأس، رَئِيس، زَعِيم، سائِس، سَراة، سَرِيّ، سَيّد، شَرِيف، شُغنُب، شُغنوب، شَهم، شَيخ، طُعم، عَمِيد، قائِد، قُطب، قِيَادِيّ، كَرِيم، مَتبُوع، مُجتَذِبة، مدير، مُرشِد، مُسَيِّر، مُقَدِّمَة، مُهدِي، مَولىً، هادِي، هوادي، وَتَر","އިސްވާރު","leader"  ],
  ["إدَارَة، إِمَامَة، إِمامِيّ، تَرَؤُّس، حُكم، رَآس، رِياس، رِئَاسَة، زَعَامَة، سُلطَة، سَيطَرَة، قَود، قِياد، قِيَادَ","އިސްދާނަ / އިސްދާނަކަން","leadership"  ],
  ["البرلمان مجلس النواب؛ المجلس النيابي؛ النيابي؛ برلمان؛ جَمْعِيّةٌ تَشْرِيعِيّة؛ مجلس الأمة؛ مَجْلِسُ المُمَثّلِين؛ مَجْلِسٌ تَشْرِيعِيّ؛ مجلس نوّاب الأمة","ބަރުލަމާނު","parliament"  ],
  ["بَرلَمَانِيّ، نِيَابِيّ","ބަރުލަމާނީ","parliamentary"  ],
  ["نظام برلمانيّ؛ نظام حكم برلماني","ބަރުލަމާނީ ނިޒާމު","parliamentary system"  ],
  ["رِياسِيّ، رِئَاسِيّ","ރިޔާސީ","presidential"  ],
  ["نظام حكم رئاسي؛ نظام رئاسي؛ نظام رئسي","ރިޔާސީ ނިޒާމު","presidential system"  ],
  ["مُتَرَبِّص، مُتَرَشِّح، مُرَشَّح","ފުރަދާރު","candidate (electoral)"  ],
  ["تَرَشُّح، تَرشِيح","ފުރަދާރުކަން","candidacy"  ],
  ["أُحبُولَة، أَقمِشَة، حَبكَة، حِيلَة، شبكة، شرَك، شُعّ، عُكَاشَة، مقوَّس، مؤامرة، نَسِيج، وَتَرَة","ޖާލު","web (internet)"  ],
  ["قائمة مختَصَرة","ކުރުލިސްޓު","shortlist"  ],
  ["تقييم القائمة المختَصَرة","ކުރުލިސްޓުކުރުން","shortlisting"  ],
  ["إخفاء، تَرشِيح، تَروِيق، تَصفِيَة، تَنقِيَة، حاجِب، حَجب، ساتِر، غَربَلَة، فحص، فَرز، نَخل","ފުރޭނުން","screening"  ],
  ["تِقَانَة، تَقنِيَة، تِكنُولُوجيَا","ފަންނިޔާތު","technology (study - machinery and devices)"  ],
  ["فِهرِس، لائِحَة، مَسرَد","ގްލޮސަރީ ","glossary "  ],
  [" إِرب، أَلمَعِيّ، بَصيرَة، حِجىً، دِمَاغ، ذكاء، ذَكِيّ، عد، عَقل، فَهم، مُخّ، مُخّيّ، نُخاع","ސިކުނޑިއެވެ","brain "  ],
  ["اقتحام، اِقتَحَم، انقضاض، إعصار، ثورة، حاصِب، حاصِبَة، داهَم، زَوبَعَة، عاصِفَة، نَوّ، نَوء، نوبة، نَوئ","ޠޫފާން ","storm "  ],
  ["لِسَانِيّ، لُغَوِيّ","ބައްސަ","lingual"  ],
  ["أحاديّ اللّغة؛ صَاحِبَة لُغَة وَاحِدَة","އެއްބައްސަ","monolingual"  ],
  ["الثُّنائيّ اللغة؛ ذو لغتين؛ مجيد اللّغتين؛ مزدوِج اللغة؛ يَتَحَدَّث بِلُغَتَيْن","ދެބައްސަ","bilingual"  ],
  ["متعدد اللغة","ގިނަބައްސަ","multilingual"  ],
  ["اِشتاق، اِشتَق، أَحَبّ، أَحبَب، أُلفَة، أُنس، تَآلُف، تَحَبّب، تَعَلّق، جِماع، حُبّ، حَبَب، حُبّيّ، حَبِيب، حَنَان، حُنُوّ، شَغَف، شَفَقَة، عِشق، عِشقِيّ، عَطف، عَهد، غَرَامِيّ، غَزَل، غَزَلِيّ، مُحَبّ، محبّة، مَحبُوب، مُغَازَلَة، مَوَدّة، مَيل، هَوىً، هَوِي، وَجد، وَدّ، وُلُوع","ލޯބި، ހަހަރު","love"  ],
  ["إيجَابِيّ، أكِيد، باتّ، بَنّاء، تامّ، ثابِت، جازِم، حاسِم، حَتمِيّ، حقيقة، حَقِيّقِيّ، شافٍ، صِرف، عَمَلِيّ، قاطِع، مُتَأَكّد، مُتَحَقّق، مُتَوَكّد، مُتَيَقّن، مُثبَت، مَحض، مُحَقّق، مُرضٍ، مُقَرّر، مُقنِع، مُوجَب، مُوَكَّد، مُؤَكّد، واثِق، واقِعِيّ، وَضعيّ، وَكِيد، يقينيّ","ފައްސި","positive"  ],
  ["إِنكارِيّ، رَفض، سالِب، سَلبٌ، سلبيّ، صِفرِيّ، نَفي، نَفيِيّ، نقيض، هادِم، هَدَّام","ނައްސި","Negative"  ],
  ["البريد الإلكتروني","އީމޭލު","Email"  ],
  ["إِتَاوَة، أُجرَة، جَرَس، جزية، جُعل، خَبط، خَبطَة، دَقّ، دَقّة، رَسم، ضَرب، ضَرِيبَة، طَرق، قَرعَة، مَكس","އަރަދު","Toll"  ],
  ["كاشف الأسرار؛ كاشف الخبايا؛ مفشى الأسرار، المبلغ","ފަށާރު","Whistle Blower"  ],
  ["الثقب الأسود","ކަނާޅު","Black hole"  ],
  ["أَكَادِيمِيَّة، كُلِّيَّة، مَجمَع، مَجمَعِيّ، مَدرَسَة، مَعهَد","ވިދާރާ","Academy"  ],
  ["فاكهة التنين","ޕިތާޔާ","Dragon Fruit"  ],
  ["عربة","ބަގީ","Buggy"  ],
  ["نيبتون","ނަފުތޫނު","Neptune"  ],
  ["تصادُفٌ، خاطَر، خَطَر، خُطُورَة، غَرَر، غِمار، مُجَازَفَة، مُخَاطَرَة، مصادفة، مُغَامَرَة، هَزرَد","އަރައްކާ","Hazard"  ],
  ["أُسرَة، أقرِباء، أهل، بَيت، بَيتِيّ، عاديّ، عائِلَة، عَيّل، مألوف، مَنزِلِيّ","ގޭބިސީ","Household "  ],
  ["الدبلوم الوطني","ޤައުމީ ޑިޕުލޮމާ","National Diploma "  ],
  ["غاز مضغوط غير قابل للاشتعال","ހުޅުނުހިފާ ގޭސް","Non Flammable Compressed Gas"  ],
  ["الجملة العصبية؛ الجهاز العصبى؛ الجِهازُ العَصَبِيّ؛ الجهاز أو المجموع العصبي؛ العصبي الجسمي؛ جُمْلَةٌ عَصَبِيّة","ނާރުތަކާ ބެހޭ ނިޒާމު","Nervous System"  ],
  ["لجنة وطنية للحد من مخاطر الكوارث، المنبر الوطني للحد من مخاطر الكوارث","ކާރިސީ ހިރާސް ކުޑަކުރުމުގެ ޤައުމީ މަންސަ / ކާރިސީ ރިސްކު ކުޑަކުރުމުގެ ޤައުމީ މަންސަ","National Platform For Disaster Risk Reduction"  ],
  ["اخطار طبيعية؛ خطر طبيعي؛ مخاطر طبيعية","ޤުދުރަތީ އަރައްކާ / ޠަބީޢީ އަރައްކާ","Natural Hazard"  ],
  ["علم المنعكسات، الانعكاسية ","ވިންދުފަރުވާ","Reflexology"  ],
  ["الجهاز التنفسى؛ مَجَارِي التّنَفّس","ނޭވާލުމާބެހޭ ނިޒާމު","Respiratory System"  ],
  ["بَرِّيّ، رِيفَيّ، زراعيّ، فَلَّاحِيّ، قَرَوِيّ","ރަށްފުށް","Rural"  ],
  ["زخة مطر- وابل؛ مَطْرَة؛ وَبْلةٌ مَطَر","ކެރި","Rain Shower"  ],
  ["الرطوبة النسبية","ވައިގެ ތެތްކަމުގެ ނިސްބަތް","Relative Humidity"  ]
]
