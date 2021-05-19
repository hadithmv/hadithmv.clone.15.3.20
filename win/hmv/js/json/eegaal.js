const eegaal_dataSet = [
  ["إِتَاوَةٌ","ވާރު. رِشوَةٌ [ރިޝްވަތު]","[ސަފުހާ 6]"  ],
  ["أَتَاوِيٌّ","ބީރައްޓެހިމީހާ","[ސަފުހާ 6]"  ],
  ["أُتْرُنْجٌ","ނިއަދުރު","[ސަފުހާ 6]"  ],
  ["أَثَاثٌ","ގެވެހިކަންވާރު","[ސަފުހާ 6]"  ],
  ["أُثْرٌ","ލަކުނު","[ސަފުހާ 6]"  ],
  ["أُثْفِيَّةٌ","އުދުންޖަހާހިލަ","[ސަފުހާ 6]"  ],
  ["إِثْمٌ","ފާފަ","[ސަފުހާ 6]"  ],
  ["آثِمٌ","ފާފަވެރިޔާ","[ސަފުހާ 6]"  ],
  ["إِثْمِدٌ","ގަލަދުން","[ސަފުހާ 6]"  ],
  ["أَثْنَاءٌ","ކަމެއްގެތެރެ","[ސަފުހާ 6]"  ],
  ["اِثْنَانِ","ދޭއް","[ސަފުހާ 6]"  ],
  ["اِثْنَا عَشَرَ","ބާރަ","[ސަފުހާ 6]"  ],
  ["إِجَابَةٌ","ޖަވާބުދިނުން","[ސަފުހާ 6]"  ],
  ["أُجَاجٌ","ލޮނުގަދަފެން","[ސަފުހާ 6]"  ],
  ["إِجَّاصٌ","އަލޫބޮخَاރު [އަލޫބޮޚާރު]","[ސަފުހާ 6]"  ],
  ["إِجَّانَةٌ","އެއްޗެހިދޮންނަމުށިގަޑު","[ސަފުހާ 6]"  ],
  ["أَجَّةٌ","ހޫނުގެގަދަކަން","[ސަފުހާ 6]"  ],
  ["أَجْرٌ","އިނާމު. ދަރުމަ","[ސަފުހާ 6]"  ],
  ["آجُرٌّ","ރާނާއީޓު","[ސަފުހާ 6]"  ],
  ["أُجْرَةٌ","ކުލި. މުސާރަ","[ސަފުހާ 6]"  ],
  ["أَجْزَاخَانَةٌ","ބޭސްފިހާރަ","[ސަފުހާ 6]"  ],
  ["أَجَلْ","އާއެކޭ","[ސަފުހާ 6]"  ],
  ["أَجْلٌ","ޓަކައި. ސަބަބު","[ސަފުހާ 6]"  ],
  ["أَجَلٌ","مُدَّةُ [މުއްދަތު] ގެ ނިމޭކޮޅު","[ސަފުހާ 6]"  ],
  ["إِجْلٌ","ކަދުރާގެރިހުން. ފުއްލާގެބައިގަޑު","[ސަފުހާ 6]"  ],
  ["آجِلَةٌ","آخِرَة [އާޚިރަތް] ދުވަސް","[ސަފުހާ 6]"  ],
  ["أُجُمٌ","ކިއްލާ","[ސަފުހާ 6]"  ],
  ["أَجَمَةٌ","ބޯވާގަޑު. ޖަންގަލީ","[ސަފުހާ 6]"  ],
  ["أَجْنَبِيٌّ","ހިލޭމީހާ. ބިދޭސީން","[ސަފުހާ 6]"  ],
  ["أَجِيْجٌ","ފެންއޮހޭއަޑު. އަލިފާނުގެއަޑު","[ސަފުހާ 6]"  ],
  ["أَجِيْرٌ","ކުލީމީހާ","[ސަފުހާ 6]"  ],
  ["اَحٌّ","ކެއްސުން","[ސަފުހާ 6]"  ],
  ["أُحَاحٌ","ފެންބޮވުން. އަގަހިކުން","[ސަފުހާ 6]"  ],
  ["اِحْتِفَالٌ","مَجلِس [މަޖްލިސް] ކުރުން","[ސަފުހާ 6]"  ],
  ["اِحْتِلَامٌ","ހުވަފެނުގައިމަނިބޭރުވުން","[ސަފުހާ 6]"  ],
  ["أَحَدٌ","އެކެން","[ސަފުހާ 6]"  ],
  ["أُحُدٌ","މަދީނާކައިރިފަރުބަދައެއް","[ސަފުހާ 6]"  ],
  ["أَحْشَاءٌ","އެތެރެހަށީތަކެތި","[ސަފުހާ 6]"  ],
  ["إِحْلِيْلٌ","ކުޑަގިފިލިނުކުންނަހޮޅި","[ސަފުހާ 6]"  ],
  ["أَحْمَقُ","ބުއްދިހަމަނުވާމީހާ","[ސަފުހާ 6]"  ],
  ["أَحْوَرُ","ކަޅުކަޅިކަޅު. ހުދުކަޅިހުދުމީހާ","[ސަފުހާ 7]"  ],
  ["أَخٌ","އެއްބަފާ. ނުވަތައެއްބަޑުފިރިހެނާ","[ސަފުހާ 7]"  ],
  ["أُخْبِيَةٌ","ހިޔާވިހާ. ނަކަތެއް","[ސަފުހާ 7]"  ],
  ["أُخْتٌ","އެއްބަފާ. ނުވަތައެއްބަޑުއަންހެނާ","[ސަފުހާ 7]"  ],
  ["أُخْدُوْدٌ","ދިގުވަޅުގަޑު","[ސަފުހާ 7]"  ],
  ["آخِرٌ","ފަހުކޮޅު","[ސަފުހާ 7]"  ],
  ["آخَرُ","އަނެއް. އެހެން","[ސަފުހާ 7]"  ],
  ["أَخْرَسُ","މަންމަނު","[ސަފުހާ 7]"  ],
  ["أَخْزَلُ","ބުރިކަށީގުދުނިކުމެފާއިވާމީހާ","[ސަފުހާ 7]"  ],
  ["أُخْطُبُوْطٌ","ބޯވަ","[ސަފުހާ 7]"  ],
  ["أَخْفَشُ","ލޮލުގެފެނުންކޮށިމީހާ","[ސަފުހާ 7]"  ],
  ["أَخْمَصٌ","ދަށްފައިގެމެދުގައިވާއަޑިތަން","[ސަފުހާ 7]"  ],
  ["إِدٌّ","ބިރުބޮޑުކަމެއް","[ސަފުހާ 7]"  ],
  ["أَدَاةٌ","ހަތިޔާރު. އާލާތް","[ސަފުހާ 7]"  ],
  ["إِدَامٌ","ލައިގެންކާތަކެތި","[ސަފުހާ 7]"  ],
  ["أَدَبٌ","ނިއަނެތިކަން. أَدَبُ [އަދަބު]ވެރިކަން","[ސަފުހާ 7]"  ],
  ["أَدَمَةٌ","ހަމުގެއެތެރެފުއް","[ސަފުހާ 7]"  ],
  ["أَدِيْبٌ","އަދަބުވެރިޔާ","[ސަފުހާ 7]"  ],
  ["أَدِيْمٌ","ވެލި. دِبَاغُ [ދިބާޣު]ކުޅަހަން","[ސަފުހާ 7]"  ],
  ["إِذْنٌ","އިޒުނަލިބުން. ދިނުން","[ސަފުހާ 7]"  ],
  ["أُذُنٌ","ކަންފަތް. އުޅައް","[ސަފުހާ 7]"  ],
  ["أَذَانٌ","ބަންގި. އަންގައިލުން","[ސަފުހާ 7]"  ],
  ["أَذَى","އުދަގޫ","[ސަފުހާ 7]"  ],
  ["أَذِيَّةٌ","އުދަގޫދިނުން. ލިބުން","[ސަފުހާ 7]"  ],
  ["أَرَبٌ","ބޭނުން","[ސަފުހާ 7]"  ],
  ["أُرْبَةٌ","އެއްޗެތީގައިޖަހާގޮށް","[ސަފުހާ 7]"  ],
  ["أَرْبَعَةٌ","ހަތަރެއް. 4","[ސަފުހާ 7]"  ],
  ["أَرْبِعَاءٌ","ބުދަ","[ސަފުހާ 7]"  ],
  ["أَرْبَعُونَ","ސާޅީސް. 40","[ސަފުހާ 7]"  ],
  ["أُرْبِيَّةٌ","މާކަޅުވާމަހުގެބުޑު","[ސަފުހާ 7]"  ],
  ["اِرْتِشَافٌ","މަދުމަދުންބުއިން","[ސަފުހާ 7]"  ],
  ["أَرَجٌ","މީރުވަސް","[ސަފުހާ 7]"  ],
  ["أَرْجَاءٌ","ފަރާތްފަރާތް","[ސަފުހާ 7]"  ],
  ["أُرْجُوْحَةٌ","އުދޯލި","[ސަފުހާ 7]"  ],
  ["إِرْدَبٌّ","ބަސްތާއެއް. 24 صَاعُ [ޞާޢު]","[ސަފުހާ 7]"  ],
  ["أَرُزٌّ","ހަޑޫ","[ސަފުހާ 7]"  ],
  ["أَرْضٌ","ބިންގަޑު","[ސަފުހާ 7]"  ],
  ["أَرَضَةٌ","ކަތުރުފަނި","[ސަފުހާ 7]"  ],
  ["أَرَقٌ","ރޭގަޑުނިދިނައުން","[ސަފުހާ 7]"  ],
  ["أُرَّمٌ","ރުޅިއައިސްގެންދަތްކޭރުވުން","[ސަފުހާ 7]"  ],
  ["أَرْمَلَةٌ","ހުވަފަތްއަންހެނާ","[ސަފުހާ 8]"  ],
  ["أَرْنَبٌ","މުސަޅު","[ސަފުހާ 8]"  ],
  ["أَرْنَبَةٌ","ނޭފަތުކުރި. އަންހެންމުސަޅު","[ސަފުހާ 8]"  ],
  ["أَرِيْبٌ","ބުއްދިވެރިޔާ","[ސަފުހާ 8]"  ],
  ["أَرِيْكَةٌ","ރަސްކަމުގެ تَختُ [ތަޚުތު]. ސިންގާސަނާ","[ސަފުހާ 8]"  ],
  ["إِزَاءٌ","ދިމާ. ކުރިމަތި","[ސަފުހާ 8]"  ],
  ["إِزَارٌ","އަންނައެތިގަޑު","[ސަފުހާ 8]"  ],
  ["أَزْمٌ","ގުނައިރުހަނުހުރުން","[ސަފުހާ 8]"  ],
  ["أَزْمَةٌ","ތަދުމަޑުކަން","[ސަފުހާ 8]"  ],
  ["إِزْمِيْلٌ","ވަޑާންކަށި","[ސަފުހާ 8]"  ],
  ["أَزِيْزٌ","ތެލިކެކޭއަޑު","[ސަފުހާ 8]"  ],
  ["أَسَاسٌ","ބިންގާ. ތަރަހަ","[ސަފުހާ 8]"  ],
  ["أُسَامَةُ","ސިންގާ","[ސަފުހާ 8]"  ],
  ["أُسْبُوْعٌ","ހުކުރުހަތްދުވަސް","[ސަފުހާ 8]"  ],
  ["إِسْتٌ","ފިދުމަސްގަޑުގެކޮޅު","[ސަފުހާ 8]"  ],
  ["أُسْتَاذٌ","އެދުރުމީހާ","[ސަފުހާ 8]"  ],
  ["أَسَدٌ","ސިންގާ","[ސަފުހާ 8]"  ],
  ["أُسْرُبٌ","ހުދުތިމަރަ","[ސަފުހާ 8]"  ],
  ["أُسْرَةٌ","މީހާގެ أَهلُ [އަހުލު]ވެރީން","[ސަފުހާ 8]"  ],
  ["أُسْطُوْلٌ","މަނަވަރުފައްޗެއް","[ސަފުހާ 8]"  ],
  ["أَسَفٌ","ގަދަހިތާމަ","[ސަފުހާ 8]"  ],
  ["آسِفٌ","ހިތާމަވެރިޔާ","[ސަފުހާ 8]"  ],
  ["إِسْفَنْجٌ","ހުހިވައް","[ސަފުހާ 8]"  ],
  ["إِسْفَنْدٌ","ހުދުރެވި","[ސަފުހާ 8]"  ],
  ["إِسْفِيْدَاجٌ","ހިންދޫރަ","[ސަފުހާ 8]"  ],
  ["إِسْفِيْنٌ","ލަކުޑިފަޅާއަބު","[ސަފުހާ 8]"  ],
  ["أُسْقُفٌّ","نَصَارَى [ނަޞާރާ]އިންގެދަންނަބޭކަލުން","[ސަފުހާ 8]"  ],
  ["إِسْكَافٌ","ފައިވާނާއި خُفُّ [ޚުއްފު]ހަދާމީހާ","[ސަފުހާ 8]"  ],
  ["إِسْكِلَةٌ","رُومُ [ރޫމު]ކަޑުގެބަދަރު","[ސަފުހާ 8]"  ],
  ["أَسَلٌ","ލޮންސި. ހައިގަސް","[ސަފުހާ 8]"  ],
  ["أُسْلُوْبٌ","ބަސްބުނުމުގެގޮތް. މަގު","[ސަފުހާ 8]"  ],
  ["اِسْمٌ","ނަން","[ސަފުހާ 8]"  ],
  ["آسِيْ","ބޭސްކުރާމީހާ","[ސަފުހާ 8]"  ],
  ["إِشَاعَةٌ","ޚަބަރުފާއުޅުކުރުން","[ސަފުހާ 8]"  ],
  ["اِشْتِرَاكٌ","ބައިވެރިވުން","[ސަފުހާ 8]"  ],
  ["أَشْرٌ","ކީހުން","[ސަފުހާ 8]"  ],
  ["إِشْقِيْلٌ","ބޮޑިކަދޮޅު","[ސަފުހާ 8]"  ],
  ["أُشْنَةٌ","ހަންޑިހަތް","[ސަފުހާ 8]"  ],
  ["إِصْبَعٌ","އިގިލި","[ސަފުހާ 8]"  ],
  ["إِصْطَبَلٌ","އަސްތިބޭގެ","[ސަފުހާ 8]"  ],
  ["اَصلٌ","ކޮންމެ އެއްޗެއްގެ ބުޑުގަނޑު","[ސަފުހާ 9]"  ],
  ["اَصِيصٌ","ގަސް އިންދާ މުށި","[ސަފުހާ 9]"  ],
  ["اَصِيلٌ","ހަވީރު ނަސަބުމޮޅުމީހާ","[ސަފުހާ 9]"  ],
  ["اِضَاءَةٌ","އަލިކުރުން","[ސަފުހާ 9]"  ],
  ["اِضَاعَةٌ","ނަގައިލުން","[ސަފުހާ 9]"  ],
  ["اَضدَادٌ","އެކޮޅު ކޮޅު ތަކެތި","[ސަފުހާ 9]"  ],
  ["اَضعَافٌ","ގިނަ ގުނަވުން","[ސަފުހާ 9]"  ],
  ["اِضمِحلَالٌ","ހަލާކުވެ ނެތިދިއުން","[ސަފުހާ 9]"  ],
  ["اِطَارٌ","ގިއު ގަނޑު ފްރޭމް","[ސަފުހާ 9]"  ],
  ["اَطَّارٌ","ގިއުގަނޑު ހަދާ ވިއްކާ މީހާ","[ސަފުހާ 9]"  ],
  ["اِطرَاءٌ","ބޮޑަށް ތާރީފްކުރުން","[ސަފުހާ 9]"  ],
  ["اُطُمٌ","ބޮޑެތި ކިއްލަ","[ސަފުހާ 9]"  ],
  ["اُطُومٌ","ވެލާ. ކަހަނބު. މުސިންބި","[ސަފުހާ 9]"  ],
  ["ظِلَامٌ","އަދިރިކުރުން","[ސަފުހާ 9]"  ],
  ["اِظهَارٌ","ފާޅުކަން","[ސަފުހާ 9]"  ],
  ["اِعتِرَافٌ","އިޤުރާރު ވުން","[ސަފުހާ 9]"  ],
  ["اَعرَجٌ","ކޮރުމީހާ","[ސަފުހާ 9]"  ],
  ["اِعلَانٌ","އެންގުން ފާޅުކުރުން","[ސަފުހާ 9]"  ],
  ["اَعمَى","ލޯކަނު މީހާ","[ސަފުހާ 9]"  ],
  ["اِغَارَةٌ","ލޫޓުވުން","[ސަފުހާ 9]"  ],
  ["اِغتِرَافٌ","އަތްގޮށީން ފެންނެގުން","[ސަފުހާ 9]"  ],
  ["اِغمَاءٌ","ގަނޑުވުން","[ސަފުހާ 9]"  ],
  ["اَغَنُّ","ނޯށުން ވާހަކަދައްކާ މީހާ","[ސަފުހާ 9]"  ],
  ["اُفٌّ","ކަންފަތު މަޑު ކަނޑާލާ ނިއަފަތިކޮޅު","[ސަފުހާ 9]"  ],
  ["اُفٍّ","ދަތިކަން ހުއްޓޭ. ޗަސްޖެހުން","[ސަފުހާ 9]"  ],
  ["اَفَّاكٌ","ދޮގުބުނާ މީހާ","[ސަފުހާ 9]"  ],
  ["آفَةٌ","مُصِيبَات [މުސީބާތް]","[ސަފުހާ 9]"  ],
  ["اُفقٌ","އުދަރެސް","[ސަފުހާ 9]"  ],
  ["اِفكٌ","ދޮގު","[ސަފުހާ 9]"  ],
  ["اُفُولٌ","އިރުހަދުއޮސްން","[ސަފުހާ 9]"  ],
  ["اَفيُونٌ","އަފިހުން","[ސަފުހާ 9]"  ],
  ["اُقَّةٌ","400 ދިރުހަމްގެ ބަރުދަން","[ސަފުހާ 9]"  ],
  ["اِقتِرَافٌ","ފާފަކުރުން","[ސަފުހާ 9]"  ],
  ["اقتِصَادٌ","ލިބޭ ތަކެތީން ފޯރާ ވަރަށް އުޅުން ބެހެއްޓުން","[ސަފުހާ 9]"  ],
  ["اَقلَفُ","خِتَانُ [ޚިތާނު]ނުކުރާ މީހާ","[ސަފުހާ 9]"  ],
  ["اِقلِيمٌ","ބޮޑެތިވިލާތް","[ސަފުހާ 9]"  ],
  ["اُكَافٌ","ޙިމާރުމަތީ އަޅާ މަޑި","[ސަފުހާ 9]"  ],
  ["اَكَّارٌ","ބިންގަނޑު ހަދާ ގޮވާންކުރާ މީހާ","[ސަފުހާ 9]"  ],
  ["اَكَّالٌ","ގިނައިން ކާމީހާ","[ސަފުހާ 9]"  ],
  ["اَكلٌ","ކެއުން","[ސަފުހާ 9]"  ],
  ["اُكُلٌ","ފަޅޯ ފަޅަ މޭވާ","[ސަފުހާ 10]"  ],
  ["اُكلٌ","ކާބާވަތުގެ ކޮންމެ އެއްޗެއް","[ސަފުހާ 10]"  ],
  ["اُكلَةٌ","ކޯވަރު. ބުޅީ އަޅާއެންގަނޑު","[ސަފުހާ 10]"  ],
  ["اَكلَةٌ","އެއްފަހަރު ކެއުން","[ސަފުހާ 10]"  ],
  ["اِكلَةٌ","ބޯކެހުން","[ސަފުހާ 10]"  ],
  ["اِكلِيلٌ","ތުއްރަވާސް ނޮރަނަކަތް","[ސަފުހާ 10]"  ],
  ["اَكَمَةٌ","ބޮޑު ފަސްފުނި","[ސަފުހާ 10]"  ],
  ["اَكمَهُ","ވިހާއިރު ލޯކަނުމީހާ","[ސަފުހާ 10]"  ],
  ["اَلآنَ","މިހާރު","[ސަފުހާ 10]"  ],
  ["اَلَا","ދަންނާށޭ","[ސަފުހާ 10]"  ],
  ["اَلاَّ","މެނުވީ.ނޫނީ","[ސަފުހާ 10]"  ],
  ["آل","أَهلُ [އަހުލު]ވެރީން. އަވާމެންދުރު","[ސަފުހާ 10]"  ],
  ["اَلبَتَّه","ކަނޑައެޅިގެން","[ސަފުހާ 10]"  ],
  ["اِلتِفَاتٌ","އެނބުރިބަލާލުން","[ސަފުހާ 10]"  ],
  ["اِلحَاحٌ","ކެދުން. ފަށްފަށްކިއުން","[ސަފުހާ 10]"  ],
  ["اَلفٌ","ހާހެއް [1000]","[ސަފުހާ 10]"  ],
  ["آلِفٌ","އެކުލަވާ ރަޙްމަތްތެރިޔާ","[ސަފުހާ 10]"  ],
  ["اُلفَةٌ","ހިތުގެ އެކުވެރިކަން","[ސަފުހާ 10]"  ],
  ["اَلَمٌ","ވޭން.ވޭންލިބުން","[ސަފުހާ 10]"  ],
  ["اَلمَاسٌ","އަލިމަސް. އެހެއް.","[ސަފުހާ 10]"  ],
  ["اَليَةٌ","ފިނދުމަސްކަނޑު","[ސަފުހާ 10]"  ],
  ["اَليَّةٌ","ހުވައި","[ސަފުހާ 10]"  ],
  ["اَليَومُ","މިއަދު","[ސަފުހާ 10]"  ],
  ["اَم","ނުވަތަ","[ސަފުހާ 10]"  ],
  ["أَمٌّ","قَصدُ [ޤަޞްދު]ކުރުން","[ސަފުހާ 10]"  ],
  ["أُمٌّ","އަމައި","[ސަފުހާ 10]"  ],
  ["اَمَّا","ދަންނައެ","[ސަފުހާ 10]"  ],
  ["اِمَّا","އެހެންނާ","[ސަފުހާ 10]"  ],
  ["اِمَارَةٌ","ވެރިކަން","[ސަފުހާ 10]"  ],
  ["اَماَرَةٌ","عَلَامَة [ޢަލާމާތް]. ފާހަގަ","[ސަފުހާ 10]"  ],
  ["اِماَطَةٌ","ދުރުކުކުން","[ސަފުހާ 10]"  ],
  ["اِمَالَةٌ","ލަބައިލުން. ދޫޖެއްސުން","[ސަފުހާ 10]"  ],
  ["اِمامٌ","ވެރިމީހާ","[ސަފުހާ 10]"  ],
  ["اَمَامٌ","ކުރިމަތި","[ސަފުހާ 10]"  ],
  ["اُمَّةٌ","ބާގަޔަކުމީހުން","[ސަފުހާ 10]"  ],
  ["اِمَّةٌ","ތިޔާގިއުޅުން ވައްތަރު","[ސަފުހާ 10]"  ],
  ["اَمَةٌ","އަޅުއަންހެނާ","[ސަފުހާ 10]"  ],
  ["اَمْتٌ","އުސްތަން","[ސަފުހާ 10]"  ],
  ["اِمْتِحَانٌ","ގޮތްބެލުން. ވަރުބެލުން","[ސަފުހާ 10]"  ],
  ["اِمْتِثَاَلٌ","ކިއަމަންގަތުން","[ސަފުހާ 10]"  ],
  ["اَمْرٌ","ކަމެއް. ކަމައް އެދުން","[ސަފުހާ 11]"  ],
  ["آمِرٌ","އަމުރުކުރާ މީހާ","[ސަފުހާ 11]"  ],
  ["اِمْرٌ","މުންކަރާތެއް އަޖާބުކަމެއް","[ސަފުހާ 11]"  ],
  ["اِمْرَأَةٌ","އަންހެނާ","[ސަފުހާ 11]"  ],
  ["اَمْسِ","އިއްޔެ","[ސަފުހާ 11]"  ],
  ["اَسْعَاءٌ","ހިމަގޮހޮރު","[ސަފުހާ 11]"  ],
  ["اَمَلٌ","ކަންތަކަށް އެދުން","[ސަފުހާ 11]"  ],
  ["اَمْلَجٌ","ބޭސް ގޯނބިލި","[ސަފުހާ 11]"  ],
  ["اَمَمٌ","ގާތް. ކުޑައެތިކޮޅު","[ސަފުހާ 11]"  ],
  ["اُمُّ مِلْدَمٍ","ހުން","[ސަފުހާ 11]"  ],
  ["اُمُّ الْقُرَى","މަށްކާ","[ސަފުހާ 11]"  ],
  ["اَمَنْ","އަމާންކަން","[ސަފުހާ 11]"  ],
  ["اَمِيرٌ","އަމުރު ވެރިޔާ","[ސަފުހާ 11]"  ],
  ["اَمِينٌ","އަމާނާތް ތެރިޔާ","[ސަފުހާ 11]"  ],
  ["اَنَا","އަހަރެން. މަ","[ސަފުހާ 11]"  ],
  ["اِنَاءٌ","އެއްޗެހިއަޅާ ކަންވާރު","[ސަފުހާ 11]"  ],
  ["اَنَامٌ","މީސްތަނުން","[ސަފުހާ 11]"  ],
  ["اُنْبُوبٌ","ހޮޅި. އޮނު. ހޮލު","[ސަފުހާ 11]"  ],
  ["اِنْبِيقٌ","އާވި ނަށްކާ އިންޖީނު","[ސަފުހާ 11]"  ],
  ["اَنْتَ","ކަލޭ","[ސަފުހާ 11]"  ],
  ["اِنْتِبَاهٌ","ހޭލުން","[ސަފުހާ 11]"  ],
  ["اِنْتِخَابٌ","މޮޅުތަކެތި ހޮވުން","[ސަފުހާ 11]"  ],
  ["اِنْجِدَانٌ","ހުގުގަސް","[ސަފުހާ 11]"  ],
  ["اَنْبَرٌ","ނަގިލި","[ސަފުހާ 11]"  ],
  ["اِنْحِنَاءٌ","ލެނބިލުން. ގުދުވުން","[ސަފުހާ 11]"  ],
  ["اِنْسٌ","އާދަމުގެދަރީން","[ސަފުހާ 11]"  ],
  ["اُنْسٌ","މުނިއަވަސްފިލުވުން","[ސަފުހާ 11]"  ],
  ["آنِسٌ","މުނިއަވަސް ފިލުވާ މީހާ","[ސަފުހާ 11]"  ],
  ["اِنْسَانٌ","އާދަމުގެ ދަރީން","[ސަފުހާ 11]"  ],
  ["اِنْسَانُ الْعَيْنِ","ލޮލުގެކޮއި","[ސަފުހާ 11]"  ],
  ["اُنْشُوطَةٌ","ދަމާލާ ގޮށް","[ސަފުހާ 11]"  ],
  ["اَنْفٌ","ނޭފަތް","[ސަފުހާ 11]"  ],
  ["اُنْفٌ","ބޭނުންނުހިފާނުބަހައްޓާއެތި","[ސަފުހާ 11]"  ],
  ["آنِفًا","ދެންމެޔަކު","[ސަފުހާ 11]"  ],
  ["آنَفَةٌ","ނުރުހުން. ބޮޑާކަން","[ސަފުހާ 11]"  ],
  ["اِنْقِلَابٌ","ފުރޮޅިގެން ދިއުން","[ސަފުހާ 11]"  ],
  ["اِنْقِيَادٌ","ކިޔަމަން ގަތުން","[ސަފުހާ 11]"  ],
  ["آنُكٌ","ވިރިފައިވާ ތިމަރަ","[ސަފުހާ 11]"  ],
  ["اُنْمُلَةٌ","އިނގިލީގެ ކުރީ ބަދަ","[ސަފުހާ 11]"  ],
  ["اُنْمُوذَجٌ","ނަމޫނާ","[ސަފުހާ 11]"  ],
  ["اِنْهِزَامٌ","ބަލިވެގެން ފަހަތަށްދިއުން","[ސަފުހާ 12]"  ],
  ["اَنِيْسُونْ","ފަރިހިދަމުއި","[ސަފުހާ 12]"  ],
  ["اَنِيْنٌ","ވޭނުގެ ކުކުރުން","[ސަފުހާ 12]"  ],
  ["اَوَابِدٌ","ނުބައި ޖަންގަލީ އާދަ","[ސަފުހާ 12]"  ],
  ["اُوَارٌ","ހޫނުކަން. ކިރުހިއްކުން","[ސަފުހާ 12]"  ],
  ["اُوَامٌ","ގަދަޔަށް އަނަގަ ހިއްކުން. ބޯއެނބުރުން","[ސަފުހާ 12]"  ],
  ["اَوَانٌ","ވަގުތު","[ސަފުހާ 12]"  ],
  ["اَوْبِيَةٌ","ރޯގާ ބަލިމަޑުކަން","[ސަފުހާ 12]"  ],
  ["اَوْخٌ","މަތިވެރިކަން","[ސަފުހާ 12]"  ],
  ["اِوَنٌ","ރާދަ އަސްދޫނި. ރޭރު","[ސަފުހާ 12]"  ],
  ["اَوْضَةٌ","ކޮޓަރި","[ސަފުހާ 12]"  ],
  ["اُوقَيَةٌ","ބާރަދިރުހަމުގެ ބަރުދަން","[ސަފުހާ 12]"  ],
  ["اَوًّلٌ","ފުރަތަމަ","[ސަފުހާ 12]"  ],
  ["اُولُو","ވެރި","[ސަފުހާ 12]"  ],
  ["اَوْلَى","ރަނގަޅުކަން ބޮޑު","[ސަފުހާ 12]"  ],
  ["آهْ","އައްދޯތް","[ސަފުހާ 12]"  ],
  ["اَهَابٌ","ދީބާޣު ނުކުރާ ހަން","[ސަފުހާ 12]"  ],
  ["اُهْبَةٌ","ދަތުރުގެ ސާމާނު","[ސަފުހާ 12]"  ],
  ["اِهْتِمَامٌ","އެހީތެރިވުން","[ސަފުހާ 12]"  ],
  ["اَهْدَبٌ","އެސްފިޔަދިގު މީހާ","[ސަފުހާ 12]"  ],
  ["اَهْلٌ","ތިމާގެ މީހުން","[ސަފުހާ 12]"  ],
  ["اِهْمَالٌ","އެހީތެރިކަން ނުބެހެއްޓުން","[ސަފުހާ 12]"  ],
  ["اَحَمِّيًّةٌ","ބޭނުންކަން ބޮޑުވުން","[ސަފުހާ 12]"  ],
  ["اِيَابٌ","އެނބުރި އައުން","[ސަފުހާ 12]"  ],
  ["اِيَاسٌ","އެދުން ކެނޑުން","[ސަފުހާ 12]"  ],
  ["اِيَّايَ","މަށަށް","[ސަފުހާ 12]"  ],
  ["اَيْ","އެބަހީ","[ސަފުހާ 12]"  ],
  ["اِيْجَابٌ","ގަބޫލު ކުރުން","[ސަފުހާ 12]"  ],
  ["اَيْسَرٌ","ވާތްފަރާތް. ފަސޭހަކަން","[ސަފުހާ 12]"  ],
  ["اِيْقَاظٌ","ހޭލެއްވުން","[ސަފުހާ 12]"  ],
  ["اِيَّلٌ","ދަޅުފީނި ފުށްލާ","[ސަފުހާ 12]"  ],
  ["اَيِّمٌ","ހުސްހަށިބައި މީހާ","[ސަފުހާ 12]"  ],
  ["اِيْمَاءٌ","އިޝާރާތް ކުރުން","[ސަފުހާ 12]"  ],
  ["اِيْمَانٌ","ހިތުން ތެދުކުރުން","[ސަފުހާ 12]"  ],
  ["اَيْمَنٌ","ކަނާތް ފަރާތް","[ސަފުހާ 12]"  ],
  ["اَيْنٌ","ވަގުތު ކުޑަތަންވުން","[ސަފުހާ 12]"  ],
  ["اَيْنَ","ކޮންތާކު","[ސަފުހާ 12]"  ],
  ["اِيْوَانٌ","ރަސްގެފާނު މަޖިލީސްކުރާގެ","[ސަފުހާ 12]"  ],
  ["بَابُ البَاءِ\n \n ب މިއީ اَلِفُ بَا ގެ ދެވަނަ އަކުރެވެ. އެއީ اَبجَدُން (2) މިعَدَدެވެ.","","[ސަފުހާ 13]"  ],
  ["بَابٌ","ދޮރު","[ސަފުހާ 13]"  ],
  ["بَابُوْجٌ","ސިލީޕަރުފައިވާން","[ސަފުހާ 13]"  ],
  ["بَابُوْرٌ","އާގުބޯޓު","[ސަފުހާ 13]"  ],
  ["بَاحَةٌ","މެދުގޯތިތެރެ","[ސަފުހާ 13]"  ],
  ["بَاحِثٌ","ހޯދާބަލާމީހާ","[ސަފުހާ 13]"  ],
  ["بَاحِرٌ","ބުއްދިމަދުމީހާ","[ސަފުހާ 13]"  ],
  ["بَاحُوْرٌ","ހޫނުގެގަދަކަން","[ސަފުހާ 13]"  ],
  ["بَاخِرَةٌ","އާގުބޯޓު","[ސަފުހާ 13]"  ],
  ["بَاخِعٌ","އަމިއްލަޔަށްމަރުވާމީހާ","[ސަފުހާ 13]"  ],
  ["بَادِيَةٌ","ބީރައްޓެހިވަލުރަށް","[ސަފުހާ 13]"  ],
  ["بَاذِخٌ","މަތިވެރިމީހާ","[ސަފުހާ 13]"  ],
  ["بَاذِلٌ","ހޭދަކުރާމީހާ","[ސަފުހާ 13]"  ],
  ["بَاذِنْجَانٌ","ބަށި","[ސަފުހާ 13]"  ],
  ["بَارٌّ","ހެއުކޮއްހީތާމީހާ","[ސަފުހާ 13]"  ],
  ["بَارَةٌ","قِرشُ [ޤިރްޝު]ގެ 40 ބައިކުޅައެއްބައި","[ސަފުހާ 13]"  ],
  ["بَارِجٌ","ކުޅަދާނަފަޅުވެރިޔާ","[ސަފުހާ 13]"  ],
  ["بَارِجَةٌ","މަވަރު","[ސަފުހާ 13]"  ],
  ["بَارِحَةٌ","ވޭތުވެދިޔަރޭ","[ސަފުހާ 13]"  ],
  ["بَارِدٌ","ފިނިއެއްޗެއް","[ސަފުހާ 13]"  ],
  ["بَارِضٌ","ދެފަތްނުފޮޅޭކުދިގަސް. ކޯދު","[ސަފުހާ 13]"  ],
  ["بَارُوْدٌ","ބަޑިބޭސް","[ސަފުހާ 13]"  ],
  ["بَارُوْدَةٌ","ކުދިބަޑި","[ސަފުހާ 13]"  ],
  ["بَازٌ","ބާޒު","[ސަފުހާ 13]"  ],
  ["بَأْسٌ","عذاب [އަޒާބު]. ފަރުވާ. ގަދަފަދަކަން","[ސަފުހާ 13]"  ],
  ["بَاسِقٌ","ދިގުއެއްޗެއް","[ސަފުހާ 13]"  ],
  ["بَاسِلٌ","ހިއްވަރުގަދަފަހުލަވާނު","[ސަފުހާ 13]"  ],
  ["بَاسَلِيْقٌ","އަތްދަޑީގާވާނާރެއް","[ސަފުހާ 13]"  ],
  ["بَاسِمٌ","ހިނިތުންވާމީހާ","[ސަފުހާ 13]"  ],
  ["بَاسُوْرٌ","ބުރީބަލިކަން","[ސަފުހާ 13]"  ],
  ["بَاصِرَةٌ","ލޯ","[ސަފުހާ 13]"  ],
  ["بَاضِعٌ","ތޫނުކަޑި","[ސަފުހާ 13]"  ],
  ["بَاطِشٌ","ގަދަކަމުންއަތުލާމީހާ","[ސަފުހާ 13]"  ],
  ["بَاطِلٌ","بَاطِل [ބާޠިލު]ކަންތައް","[ސަފުހާ 14]"  ],
  ["بَاطِنٌ","އެތެރެފުށް","[ސަފުހާ 14]"  ],
  ["بَاعٌ","ބޮމަ","[ސަފުހާ 14]"  ],
  ["بَاعِثٌ","ސަބަބު ފޮނުވާމީހާ","[ސަފުހާ 14]"  ],
  ["بَاغٍ","حَقّاَ [ޙައްޤާ]އި ދެކޮޅުހަދާމީހާ","[ސަފުހާ 14]"  ],
  ["بَاقَةٌ","ބަދެފާހުންނަމާބޮޑި","[ސަފުހާ 14]"  ],
  ["بَاقِرٌ","ފަޅާމީހާ.ބޮޑަށްދަންނަމީހާ","[ސަފުހާ 14]"  ],
  ["بَاقِلَّاءُ","ފޫޅު. ކާންގެންގުޅޭމީހާ","[ސަފުހާ 14]"  ],
  ["بَاكُورَةٌ","އަހަރުގެފުރަތަމަމޭވާ.ކުރީކޮޅު","[ސަފުހާ 14]"  ],
  ["بَاكِيْ","ރޯމީހާ","[ސަފުހާ 14]"  ],
  ["بَالٌ","ހިތް. حَالُ [ޙާލު].","[ސަފުހާ 14]"  ],
  ["بَالِغٌ","ފުރާފުރިއްޖެމީހާ","[ސަފުހާ 14]"  ],
  ["بَالُوعَةٌ","ނަރުދަމާ.ނަރުދަމާގެއަގަ.","[ސަފުހާ 14]"  ],
  ["بَالُونٌ","ބެލޫނު","[ސަފުހާ 14]"  ],
  ["بَامِيا","ބާމިޔާ.ތަރުކާރިއެއް","[ސަފުހާ 14]"  ],
  ["بَنِيْ","ރާނާމީހާ","[ސަފުހާ 14]"  ],
  ["بَاهِلٌ","ކަމެއްނެތިދެކޮޅަށްހިނގާމީހާ","[ސަފުހާ 14]"  ],
  ["بَاهِيْ","ރީތިމީހާ","[ސަފުހާ 14]"  ],
  ["بَائِتٌ","ރޭހުރިތަކެތި","[ސަފުހާ 14]"  ],
  ["بَائِسٌ","ބޭނުންބޮޑު فَقِيرُ [ފަޤީރު]","[ސަފުހާ 14]"  ],
  ["بَائِعٌ","ވިއްކާމީހާ","[ސަފުހާ 14]"  ],
  ["بَبْرٌ","هِنْدُ [ހިންދު]ކަރައިގެމިނިކާވަގު","[ސަފުހާ 14]"  ],
  ["بَبَّغَاءٌ","ތަކަތުވާ","[ސަފުހާ 14]"  ],
  ["بَتٌّ","ކަނޑައިލުން","[ސަފުހާ 14]"  ],
  ["بَتْرٌ","ކަނޑައިލުން","[ސަފުހާ 14]"  ],
  ["بَثٌ","ފެތުރުން.ބޮޑިހިތާމަ","[ސަފުހާ 14]"  ],
  ["بَثْرٌ","ބިހި","[ސަފުހާ 14]"  ],
  ["بُجٌ","ޅަކޮތަރު.ކޮތަރުފުއްގަޑު","[ސަފުހާ 14]"  ],
  ["بَجَعَةٌ","ގިރުބާދޫނި","[ސަފުހާ 14]"  ],
  ["بَحَّارٌ","ނަވުގެފަޅުވެރީން","[ސަފުހާ 14]"  ],
  ["بُحْبُوحَةٌ","ތަނަވަސްތަން","[ސަފުހާ 14]"  ],
  ["بَحْثٌ","ހޯދާބެލުން","[ސަފުހާ 14]"  ],
  ["بَحْرٌ","ކަޑު","[ސަފުހާ 14]"  ],
  ["بُحَيْرَةٌ","ކުދިކަޑު","[ސަފުހާ 14]"  ],
  ["بُخَارٌ","އާވި.ހުން","[ސަފުހާ 14]"  ],
  ["بُخْتِيٌّ","ވަރުގަދަ عَجَمِي جَمَلُ [ޢަޖަމީ ޖަމަލު]","[ސަފުހާ 14]"  ],
  ["بَخَرٌ","އަގަވަސްނުބައިވުން","[ސަފުހާ 14]"  ],
  ["بَخْزٌ","ލޯދުއްވާލުން","[ސަފުހާ 14]"  ],
  ["بَخْسٌ","އުނިކުރުން.އަނިޔާކުރުން","[ސަފުހާ 14]"  ],
  ["بَخْشِيْشٌ","ކަމެއްކޮށްދިނީމާދޭ هَدِيَة [ހަދިޔާ]","[ސަފުހާ 14]"  ],
  ["بَحْصٌ","ލޯކޮނެލުން","[ސަފުހާ 15]"  ],
  ["بُخْلٌ","މުދަލަށްދަހިވެތިކަން","[ސަފުހާ 15]"  ],
  ["بُخْنُقٌ","އަންހެނުންއަޅާކުޑަދޮޅި","[ސަފުހާ 15]"  ],
  ["بَخُوْرٌ","މީރުވަސްދުވާދުންއަޅާތަކެތި","[ސަފުހާ 15]"  ],
  ["بَخِيْلٌ","މުދަލަށްދަހިވެތިމީހާ","[ސަފުހާ 15]"  ],
  ["بُدٌّ","ފިލާންދާތަން","[ސަފުހާ 15]"  ],
  ["بَدْأٌ","ފެށުން","[ސަފުހާ 15]"  ],
  ["بَدَّالٌ","ކާތަކެތިވިއްކާމީހާ","[ސަފުހާ 15]"  ],
  ["بُدَاهَةٌ","ކަމެއްގެކުރީކޮޅު","[ސަފުހާ 15]"  ],
  ["بَدْرٌ","ފުރިހަމަހަދު","[ސަފުހާ 15]"  ],
  ["بَدْرَةٌ","ދިހަހާސް دِرْهَمْ [ދިރުހަމް]ވާ ކޮތަޅު","[ސަފުހާ 15]"  ],
  ["بَدْلَةٌ","ފުރިހަމަހެދުމެއް","[ސަފުހާ 15]"  ],
  ["بَدَنٌ","ހަށިގަޑު","[ސަފުހާ 15]"  ],
  ["بَدَنَةٌ","އަންހެން جَمَلُ [ޖަމަލު]","[ސަފުހާ 15]"  ],
  ["بُدُوٌّ","ފައުޅުވުން","[ސަފުހާ 15]"  ],
  ["بَدَوِيٌّ","ވަލުރަށުގެމީހާ. ބަދަވީއެއް","[ސަފުހާ 15]"  ],
  ["بَدِيْهَةٌ","فِكْرُ [ފިކުރަ]ކާނުލައިއެގުން","[ސަފުހާ 15]"  ],
  ["بَذَاءَةٌ","ދޫނުބައިކަން","[ސަފުހާ 15]"  ],
  ["بَذَاخَةٌ","ދަރަޖަމަތިވެރިވުން","[ސަފުހާ 15]"  ],
  ["بَذْرٌ","އޮށް. ގޮވާންލުން. މުޑުވައް","[ސަފުހާ 15]"  ],
  ["بَذْلٌ","ހޭދަކުރުން","[ސަފުހާ 15]"  ],
  ["بِذْلَةٌ","ލާންގެންގުޅޭ ބައުފޭރާން","[ސަފުހާ 15]"  ],
  ["بَذِيْءٌ","ދޫނުބައިމީހާ","[ސަފުހާ 15]"  ],
  ["بَرٌّ","އެއްގަން. ހެއުމާތްމީހާ","[ސަފުހާ 15]"  ],
  ["بِرٌّ","ހެއުކަން","[ސަފުހާ 15]"  ],
  ["بُرٌّ","ގޮދަން","[ސަފުހާ 15]"  ],
  ["بُرَاءٌ","ފޭއްސުން. ދަޑިމެށުން","[ސަފުހާ 15]"  ],
  ["بَرَاءَةٌ","ސަލާމަތްވުން","[ސަފުހާ 15]"  ],
  ["بُرَادَةٌ","ދަގަޑުގާނާއިރުވެރޭކުޑި","[ސަފުހާ 15]"  ],
  ["بَرَّادَةٌ","ފޯޗު. ފެންފިނިކުރާކަންވާރު","[ސަފުހާ 15]"  ],
  ["بَرَاعَةٌ","ކޮންމެކަމަކުންމަތިވެރިވުން","[ސަފުހާ 15]"  ],
  ["بَرَّامٌ","ވައުއަބުރާމީހާ","[ސަފުހާ 15]"  ],
  ["بُرْءٌ","ބަލިފަސޭހަވުން","[ސަފުހާ 15]"  ],
  ["بَرْبَرٌ","ބާވަތެއްގެބަބުރުން","[ސަފުހާ 15]"  ],
  ["بُرْتُقَالٌ","ފޮނިލުބޯ","[ސަފުހާ 15]"  ],
  ["بُرْثُنٌ","جَنَوَارُ [ޖަނަވާރު]ގެ ވަކި","[ސަފުހާ 15]"  ],
  ["بُرْجٌ","ބުރުޒު","[ސަފުހާ 15]"  ],
  ["بُرْجُمَةٌ","އިގިލީގެބަދަ","[ސަފުހާ 15]"  ],
  ["بَرْجَلٌ","ފަރުގާލު","[ސަފުހާ 15]"  ],
  ["بُرَحَاءٌ","حَالُ [ޙާލު]ދަތިކަމުގެ ހިތާމައިގެގަދަވޭން","[ސަފުހާ 15]"  ],
  ["بَرْدٌ","ފިނި. ނިދި","[ސަފުހާ 16]"  ],
  ["بَرَدٌ","ގޮބޮޅިވާރޭ","[ސަފުހާ 16]"  ],
  ["بُرَدَاءٌ","ހީކަރުވާފައިއަންނަ ހުން","[ސަފުހާ 16]"  ],
  ["بُرْدَةٌ","ސާލު","[ސަފުހާ 16]"  ],
  ["بَرْذَعَةٌ","ސޫފިމަތީއަޅާފޮތިގަޑު","[ސަފުހާ 16]"  ],
  ["بِرْذَوْنٌ","تُرُكِىْ [ތުރުކީ] އަސް","[ސަފުހާ 16]"  ],
  ["بَرَزٌ","ފައުޅުވުން","[ސަފުހާ 16]"  ],
  ["بُرْضَةٌ","ގަސްނެއް ބިންގަޑު","[ސަފުހާ 16]"  ],
  ["بِرْطِيْلٌ","ބަރުތީލަ. ދިގުހިލަ","[ސަފުހާ 16]"  ],
  ["بُرْعُوْمٌ","ނުފޮޅޭމާ","[ސަފުހާ 16]"  ],
  ["بَرْغَشٌ","މަދިރި","[ސަފުހާ 16]"  ],
  ["بُرْغُوَثٌ","ސެއްޅި","[ސަފުހާ 16]"  ],
  ["بَرَقٌ","ބިރުން حَيْرَانْ ޙައިރާން]ވުން","[ސަފުހާ 16]"  ],
  ["بَرْقٌ","ވިދުވަރު","[ސަފުހާ 16]"  ],
  ["بُرْقٌ","އަންހެނާ زِيْنَةْ [ޒީނަތް]ވުން","[ސަފުހާ 16]"  ],
  ["بَرْقِيَّةٌ","ތެލްގިރާފް","[ސަފުހާ 16]"  ],
  ["بِرْقِيْلٌ","ގާދުއްވާބަޑި","[ސަފުހާ 16]"  ],
  ["بِرْكَارٌ","ފަރުގާލު","[ސަފުހާ 16]"  ],
  ["بُرْكَانٌ","އަލިފާންއަރާފަރުބަދަ","[ސަފުހާ 16]"  ],
  ["بِرْكَةٌ","ވެވު","[ސަފުހާ 16]"  ],
  ["بَرْمٌ","ވާއެޅުން. ނަނުއެޅުން","[ސަފުހާ 16]"  ],
  ["بُرْمَةٌ","ތެލި. ފުފޭ","[ސަފުހާ 16]"  ],
  ["بِرْمِيْلٌ","ފީފާ","[ސަފުހާ 16]"  ],
  ["بَرْنَامَجٌ","ލިއެފައިވާ قَوَاعِدُ [ޤަވާޢިދު]","[ސަފުހާ 16]"  ],
  ["بُرُنْزٌ","ސިލަވަރު","[ސަފުހާ 16]"  ],
  ["بُرْنَيْطَةٌ","އިގިރޭސި ތޮފި","[ސަފުހާ 16]"  ],
  ["بِرْوَازٌ","ގިއުގަޑު. ފިރޭމް","[ސަފުހާ 16]"  ],
  ["بُرُوْضٌ","ކުދިގަސްފެޅުން","[ސަފުހާ 16]"  ],
  ["بُرُوْكٌ","جَمَلُ [ޖަމަލު] ބަޑުޖެހުން","[ސަފުހާ 16]"  ],
  ["بِرُوْمِتْرُ","ވިއްސާރަ ބަލާ ކަށިގަޑު","[ސަފުހާ 16]"  ],
  ["بُرْهَانٌ","ދަލީލު","[ސަފުހާ 16]"  ],
  ["بُرْهَةٌ","ހިދުކޮޅެއް","[ސަފުހާ 16]"  ],
  ["بَرَهْمَنٌ","هِنْدِىْ [ހިންދީ]ންގެއަޅުވެރީން","[ސަފުހާ 16]"  ],
  ["بَرْيٌ","قَلَمْ [ޤަލަން] ޖެހުން","[ސަފުހާ 16]"  ],
  ["بَريْءٌ","سَلَامَةْ [ސަލާމަތް] ވެފައިހުރިމީހާ","[ސަފުހާ 16]"  ],
  ["بَرِيَّةٌ","ހެއްދެވިހައި خَلْقُ [ޚަލްޤު]ތަކުން","[ސަފުހާ 16]"  ],
  ["بَرِّيَّةٌ","ހުސްބިންތައް. صَحَرَا [ސަހަރާ]","[ސަފުހާ 16]"  ],
  ["بَريْدٌ","ބޯސްޓް. ބާރަ مِيْلُ [މޭލު]","[ސަފުހާ 16]"  ],
  ["بَرِيْمٌ","ކައްޑެވިރޮދި","[ސަފުހާ 16]"  ],
  ["بَرِّيْمَةٌ","ބުރުމާ. ތޮރުފާކަށި","[ސަފުހާ 16]"  ],
  ["بَزٌّ","އުއިފޮތި. ފޭރިގަތުން","[ސަފުހާ 17]"  ],
  ["بَزَّارٌ","ހަވާދާއި. އޮށްވިއްކާމީހާ","[ސަފުހާ 17]"  ],
  ["بَزَّازٌ","ފޮތިވިއްކާމީހާ","[ސަފުހާ 17]"  ],
  ["بُزَاقٌ","ކުޅު","[ސަފުހާ 17]"  ],
  ["بَزَّاقٌ","ލުބޯހުތެއްކަހަލަފިނިހަކައެއް","[ސަފުހާ 17]"  ],
  ["بِزَالٌ","އުގުރިނަގާކަށިގަޑު","[ސަފުހާ 17]"  ],
  ["بَزْبَازٌ","ގިރުބާގެހޮޅި","[ސަފުހާ 17]"  ],
  ["بِزْرٌ","އޮއްޓަރު. ހަވާދު","[ސަފުހާ 17]"  ],
  ["بِزْرُقُطُوْنَا","އިސްބަغُލު [އިސްބަޣުލު]","[ސަފުހާ 17]"  ],
  ["بَزْمٌ","މެދުދަތުންދައިގަތުން","[ސަފުހާ 17]"  ],
  ["بَزِيْمٌ","ފަތްބޮޑި ބަންނަވަކަގަޑު","[ސަފުހާ 17]"  ],
  ["بِسٌّ","އޮޅުބުޅާ","[ސަފުހާ 17]"  ],
  ["بِسَاطٌ","ދޫލަ","[ސަފުހާ 17]"  ],
  ["بَسَالَةٌ","ހިތްވަރުގަދަކަން","[ސަފުހާ 17]"  ],
  ["بُسْتَانٌ","ބަގީޗާ","[ސަފުހާ 17]"  ],
  ["بُسْرٌ","ދޮންނުވާރޯކަދުރު","[ސަފުހާ 17]"  ],
  ["بَسْطٌ","ފެތުރުން","[ސަފުހާ 17]"  ],
  ["بَسْطَةٌ","ތަނަވަސްކަން","[ސަފުހާ 17]"  ],
  ["بَسْمَلَةٌ","بِسْمِ [ބިސްމި]","[ސަފުހާ 17]"  ],
  ["بِشَارَةٌ","އުހައުވެރިކަމުގެ خَبَرُ [ޚަބަރު]","[ސަފުހާ 17]"  ],
  ["بَشَاشَةٌ","މޫނުއަލިކޮއްލުން","[ސަފުހާ 17]"  ],
  ["بَشَاعَةٌ","صُوْرَ [ސޫރަ]ހުތުރުކަން","[ސަފުހާ 17]"  ],
  ["بَشَّاكٌ","ދޮގުވެރިޔާ","[ސަފުހާ 17]"  ],
  ["بَشْرٌ","ހަންނޮޅުން","[ސަފުހާ 17]"  ],
  ["بِشْرٌ","މޫނުއަލިކަން","[ސަފުހާ 17]"  ],
  ["بَشَرٌ","އާދަމުގެދަރީން","[ސަފުހާ 17]"  ],
  ["بَشَرَةٌ","ހަމުގެބޭރުފުށް","[ސަފުހާ 17]"  ],
  ["بَشَمٌ","ފޫހިވުން.ގިސްލެވޭވަރަށްކެއުން","[ސަފުހާ 17]"  ],
  ["بَشِيْرٌ","އުހައުވެރިخَبَرُ [ޚަބަރު] ދޭމީހާ","[ސަފުހާ 17]"  ],
  ["بَشِيْعٌ","صُوْرَ [ސޫރަ]ހުތުރުމީހާ","[ސަފުހާ 17]"  ],
  ["بُصَاقٌ","ކުޅު","[ސަފުހާ 17]"  ],
  ["بَصَرٌ","ލޯ. ލޮލުގެފެނުން","[ސަފުހާ 17]"  ],
  ["بَصَلٌ","ފިޔާ","[ސަފުހާ 17]"  ],
  ["بَصَلُ الْفَارِّ","ބޮޑިކަދޮޅު","[ސަފުހާ 17]"  ],
  ["بَصْوَةٌ","ރޯވެފާވާއަގުރު","[ސަފުހާ 17]"  ],
  ["بَصِيْرَةٌ","ހިތުގެފެނުން. ވިސްނުން","[ސަފުހާ 17]"  ],
  ["بَضَاضَةٌ","ހަންތުނިއޮމާންކަން","[ސަފުހާ 17]"  ],
  ["بِضَاعَةٌ","ވިޔަފާރިސާމާނު","[ސަފުހާ 17]"  ],
  ["بِضْعٌ","ތިނަކާނުވަޔަކާ ދެމެދު","[ސަފުހާ 17]"  ],
  ["بِضْعَةٌ","މަސްކޮޅެއް","[ސަފުހާ 17]"  ],
  ["بَطٌّ","އަސްދޫނި. ފަޅައިލުން","[ސަފުހާ 18]"  ],
  ["بُطْأٌ","ލަސްވުން","[ސަފުހާ 18]"  ],
  ["بَطَاطَا","ވިލާތު އަލުވި","[ސަފުހާ 18]"  ],
  ["بِطَاقَةٌ","އަގުޖަހާފާވާފޮތިކޮޅު. ކަރުދާސްކޮޅެއް","[ސަފުހާ 18]"  ],
  ["بَطَّالٌ","ގޮތްނެތްމީހާ","[ސަފުހާ 18]"  ],
  ["بِطَانَةٌ","ބަތާނަ. رَحْمَةْ [ރަޙްމަތް]ތެރިޔާ","[ސަފުހާ 18]"  ],
  ["بَطْحَاءُ","އަކިރިބިންގަޑު. مَكَّه [މައްކާ]","[ސަފުހާ 18]"  ],
  ["بَطْخٌ","ލޮއްވުން","[ސަފުހާ 18]"  ],
  ["بَطْرٌ","ފަޅައިލުން","[ސަފުހާ 18]"  ],
  ["بَطَرٌ","ބޮޑާކަން","[ސަފުހާ 18]"  ],
  ["بِطْرِيْقٌ","رُوْمِىْ [ރޫމީ]ންގެ لَشْكَرُ [ލަޝްކަރު]ގެ ވެރިއާ","[ސަފުހާ 18]"  ],
  ["بِطْرِيْرَكٌ","ފާދިރީންގެވެރިމީހާ","[ސަފުހާ 18]"  ],
  ["بَطَلٌ","ފަހުލަވާނު","[ސަފުހާ 18]"  ],
  ["بَطْنٌ","ބަޑު","[ސަފުހާ 18]"  ],
  ["بِطْنَةٌ","ނުލާހިކުވާވަރަށް ކެއުން","[ސަފުހާ 18]"  ],
  ["بِطِّيْخٌ","ކަރާ","[ސަފުހާ 18]"  ],
  ["بُطَيْنٌ","ބުރުނު. ހިތުގެތިރީބައި","[ސަފުހާ 18]"  ],
  ["بَطْلِيْنُوْسٌ","ގޮޅާ. ތުނިޔަ","[ސަފުހާ 18]"  ],
  ["بَعْثٌ","ފޮނުވުން","[ސަފުހާ 18]"  ],
  ["بُعْدٌ","ދުރު. ދުރުކަން","[ސަފުހާ 18]"  ],
  ["بَعْرٌ","جَنَوَارُ [ޖަނަވާރު]ގެ ގުއި","[ސަފުހާ 18]"  ],
  ["بَعْضٌ","ބައެއް","[ސަފުހާ 18]"  ],
  ["بَعْلٌ","ފިރިމީހާ","[ސަފުހާ 18]"  ],
  ["بَعُوْضٌ","މަދިރި","[ސަފުހާ 18]"  ],
  ["بَعِيْدٌ","ދުރުގައިވާއެތި","[ސަފުހާ 18]"  ],
  ["بَعِيْرٌ","جَمَلُ [ޖަމަލު]. އޮށް","[ސަފުހާ 18]"  ],
  ["بَغَّالٌ","بَغَلُ [ބަޣަލު] ގެންގުޅޭމީހާ","[ސަފުހާ 18]"  ],
  ["بَغْتَةً","ކުއްލިއަކަށް","[ސަފުހާ 18]"  ],
  ["بَغَرٌ","އަލާނުކެޑުން","[ސަފުހާ 18]"  ],
  ["بُغْضٌ","ހިތުގެރުޅި","[ސަފުހާ 18]"  ],
  ["بَغَلٌ","އަހާحِمَارُ [ޙިމާރު] ދޭއްޗަށްލިބޭދަރި","[ސަފުހާ 18]"  ],
  ["بُغْيَةٌ","އެދޭކަންތައް","[ސަފުހާ 18]"  ],
  ["بَقٌّ","ތަންމަކުނު","[ސަފުހާ 18]"  ],
  ["بَقَاءٌ","ދެމިހުރުން","[ސަފުހާ 18]"  ],
  ["بَقَّارٌ","ގެރިގެންގުޅޭމީހާ. ފަޅާމީހާ","[ސަފުހާ 18]"  ],
  ["بَقَّالٌ","ތަރުކާރީވއްކާމީހާ","[ސަފުހާ 18]"  ],
  ["بُقْجَةٌ","ބޮخُސާބޮޑި [ބޮޚުސާބޮޑި]","[ސަފުހާ 18]"  ],
  ["بَقْرٌ","ފަޅައިލުން","[ސަފުހާ 18]"  ],
  ["بَقَرَةٌ","އަންހެންގެރި","[ސަފުހާ 18]"  ],
  ["بَقْلٌ","ތަރުކާރީ","[ސަފުހާ 18]"  ],
  ["بَقَّمٌ","ފަތަގު","[ސަފުހާ 19]"  ],
  ["بَقِيَّةٌ","އިތުރުންހުރި ތަކެތި","[ސަފުހާ 19]"  ],
  ["بُكَاءٌ","ރުއިން","[ސަފުހާ 19]"  ],
  ["بُكْرَةٌ","ހެދުނު","[ސަފުހާ 19]"  ],
  ["بَكَرَةٌ","ފުރޮޅު. ކައްޕި. ދަޑިބަރަނި","[ސަފުހާ 19]"  ],
  ["بَكَمٌ","މައްމަންކަން","[ސަފުހާ 19]"  ],
  ["بَلٌّ","ތެމުން","[ސަފުހާ 19]"  ],
  ["بَلْ","އަދިއެ ކިމެއްތަ","[ސަފުހާ 19]"  ],
  ["بَلاَءٌ","ގޮތްބެލުން. ހިތާމަ","[ސަފުހާ 19]"  ],
  ["بَلَادَةٌ","ހިތްގައުކަން","[ސަފުހާ 19]"  ],
  ["بَلَاطٌ","ތަޅުންއަޅާ އޮމާންހިލަ","[ސަފުހާ 19]"  ],
  ["بَلَاغَةٌ","ބަސްބުނުމުގެ ކުޅަދާނަކަން","[ސަފުހާ 19]"  ],
  ["بَلَاهَةٌ","ވިސްނުންކޮށިކަން","[ސަފުހާ 19]"  ],
  ["بِلْبَالٌ","ހިތުގެމޮޅިވެރިކަން","[ސަފުހާ 19]"  ],
  ["بُلْبُلَةٌ","ރާކޫޒު","[ސަފުހާ 19]"  ],
  ["بَلَحٌ","ގިތި ކަދުރު","[ސަފުހާ 19]"  ],
  ["بَلَدٌ","ރަށް","[ސަފުހާ 19]"  ],
  ["بُلْدَه","އުތުރަހަޅަ","[ސަފުހާ 19]"  ],
  ["بَلَدِيَّةٌ","ރަށު ތެރެހެދުމުގެ مَحْكَمَه [މަޙްކަމާ]","[ސަފުހާ 19]"  ],
  ["بُلَعٌ","ހުވަންނަކަތް","[ސަފުހާ 19]"  ],
  ["بَلْغَمٌ","خِލޭސްމޭ [ޚިލޭސްމޭ]","[ސަފުހާ 19]"  ],
  ["بَلَلٌ","ތެއްކަން","[ސަފުހާ 19]"  ],
  ["بَلُّوْرٌ","ބިއްލޫރި","[ސަފުހާ 19]"  ],
  ["بِلًى","ބައުވުން","[ސަފުހާ 19]"  ],
  ["بَلَى","ނޫނެކޭ. އާއެކޭ","[ސަފުހާ 19]"  ],
  ["بَلِيْدٌ","ހިތްގައުމީހާ","[ސަފުހާ 19]"  ],
  ["بُلَيْلَجٌ","ބުރޮޅި","[ސަފުހާ 19]"  ],
  ["بُنٌّ","ބުން","[ސަފުހާ 19]"  ],
  ["بَنَّانٌ","ރާނާމީހާ","[ސަފުހާ 19]"  ],
  ["بَنَاتُنَعْشٍ","އައްސަރަގު","[ސަފުހާ 19]"  ],
  ["بَنَانٌ","އިގިލިތަކުގެ ކޮޅު","[ސަފުހާ 19]"  ],
  ["بِنْتٌ","އަންހެންދަރި","[ސަފުހާ 19]"  ],
  ["بَنْجٌ","ބަގުފިލާ","[ސަފުހާ 19]"  ],
  ["بَنْدَرٌ","ބަދަރު. މައިރަށް","[ސަފުހާ 19]"  ],
  ["بُنْدُقٌ","ކުދިއުންޑަ. ކުދިބަދަނެއް","[ސަފުހާ 19]"  ],
  ["بُنْدُقِيَّةٌ","ކުދިބަޑި","[ސަފުހާ 19]"  ],
  ["بِنْزِيْنٌ","ބެޓްރޯލް","[ސަފުހާ 19]"  ],
  ["بِنْصَرٌ","ކަށިއިގިލި","[ސަފުހާ 19]"  ],
  ["بَنْطَلُوْنٌ","ފަޓްލޫނު","[ސަފުހާ 19]"  ],
  ["بَوَّابٌ","ދޮރުވާނު","[ސަފުހާ 19]"  ],
  ["بَوَارٌ","ހަލާކު","[ސަފުހާ 20]"  ],
  ["بَوَّاقٌ","ބަރުގޮނުފުމޭމީހާ","[ސަފުހާ 20]"  ],
  ["بُوْتَقَةٌ","ރަންރިހިވިރުވާ އުބު","[ސަފުހާ 20]"  ],
  ["بَوْرَقٌ","ބައްދާ ރަންކަރު","[ސަފުހާ 20]"  ],
  ["بُورِيٌ","ތިލޭރުމިހާފުމޭ ހޮޅި","[ސަފުހާ 20]"  ],
  ["بُوْسْطَةٌ","ބޯސްޓު","[ސަފުހާ 20]"  ],
  ["بُوْصَلَةٌ","ސަމުގާ","[ސަފުހާ 20]"  ],
  ["بُوْقٌ","ބަރުގޮނު","[ސަފުހާ 20]"  ],
  ["بُوْعٌ","ފައިބޮޑުވާއިގިލިބުޑުކަށިގަޑު","[ސަފުހާ 20]"  ],
  ["بَوْلٌ","ކުޑަގެފިލި","[ސަފުހާ 20]"  ],
  ["بُوْلِيْصَةٌ","ބިއްލަޑީ","[ސަފުހާ 20]"  ],
  ["بَهَارٌ","ރިދޫފިނިފެންމާ","[ސަފުހާ 20]"  ],
  ["بَهْجَةٌ","އުފާވެރިކަން. ރީތިކަން","[ސަފުހާ 20]"  ],
  ["بَهَقٌ","ދޫމި","[ސަފުހާ 20]"  ],
  ["بُهْلُوْلٌ","ހެއްވާމީހާ. صَالِحُ [ޞާލިޙު]ވެރިއާ","[ސަފުހާ 20]"  ],
  ["بَهْمٌ","ޅަކަންބަޅި","[ސަފުހާ 20]"  ],
  ["بُهَمٌ","ހިތްވަރުގަދަ ފަހުލަވާނު","[ސަފުހާ 20]"  ],
  ["بَهْوٌ","މަރިޔާދުގެ","[ސަފުހާ 20]"  ],
  ["بَهِيْجٌ","ރިތިއެތި. ރިތިމިހާ","[ސަފުހާ 20]"  ],
  ["بَهِيمَةٌ","ހަތަރެސްފައިޖަހައިގެން ހިނގާ ސޫފި","[ސަފުހާ 20]"  ],
  ["بَيَاضٌ","ހުދުކުލަ. ދޮންކުލަ","[ސަފުހާ 20]"  ],
  ["بَيَّاضٌ","ބިސްވިއްކާ މިހާ. ތިމަރަލާމީހާ","[ސަފުހާ 20]"  ],
  ["بَيَّاعٌ","ވިއްކާމީހާ","[ސަފުހާ 20]"  ],
  ["بَيْتٌ","ގެ. ޅެމެއްގެބުރިއެއް","[ސަފުހާ 20]"  ],
  ["بَيْتُ الْمَالِ","ސަރުކާރުގެ خَزَانَة [ޚަޒާނާ]","[ސަފުހާ 20]"  ],
  ["بَيْدَ","މެނުވީ","[ސަފުހާ 20]"  ],
  ["بَيْدٌ","ހަލާކުވުން","[ސަފުހާ 20]"  ],
  ["بَيْدَاءٌ","ހުސްބިންގަނޑު","[ސަފުހާ 20]"  ],
  ["بَيْدَرٌ","ސާފުކުރާން ގޮވާންއެއްކުރާތަން","[ސަފުހާ 20]"  ],
  ["بِئْرٌ","ފެންވަޅު","[ސަފުހާ 20]"  ],
  ["بَيْرَقٌ","އަމާންދިދަ","[ސަފުހާ 20]"  ],
  ["بَيْضَةٌ","ބިސް. ދަގަޑުތޮފި","[ސަފުހާ 20]"  ],
  ["بَيْطَارٌ","ސޫފާސޫފީގެ حَكِيْم [ޙަކީމް]","[ސަފުހާ 20]"  ],
  ["بَيْعَةٌ","ވެރިކަން ޤަބޫލުކުރުން","[ސަފުހާ 20]"  ],
  ["بِيْعَةٌ","نَصَارَى [ނަޞާރާ]އިންގެ ފައްޅި","[ސަފުހާ 20]"  ],
  ["بَيْنَ","ދެމެދު","[ސަފުހާ 20]"  ],
  ["بَيِّنٌ","ފައުޅުވެގެންވާއެތި","[ސަފުހާ 20]"  ],
  ["بَيِّنَةٌ","ހެމި. ދަލީލު","[ސަފުހާ 20]"  ],
  ["بَابُ التَّاءِ\n \n ت މިއީ اَلِفُ بَا ގެ ތިންވަނަ އަކުރެވެ. އެއީ اَبجَدُން (400) މިعَدَدެވެ.","","[ސަފުހާ 21]"  ],
  ["تَابٌّ","ވަރުދެރަ މުސްކުޅިޔާ.","[ސަފުހާ 21]"  ],
  ["تَابِلٌ","ހަވާދު. މަސާލަ.","[ސަފުހާ 21]"  ],
  ["تَابُوْتٌ","ސަންސޯއް. ފޮށި.","[ސަފުހާ 21]"  ],
  ["تَابُوْرٌ","لَشْكَرُ [ލަޝްކަރު]ގެ ބައިގަނޑެއް.","[ސަފުހާ 21]"  ],
  ["تَاجٌ","ރަސްކަމުގެ تَاجُ [ތާޖު].","[ސަފުހާ 21]"  ],
  ["تَاجِرٌ","ވިޔަފާރިވެރިޔާ.","[ސަފުހާ 21]"  ],
  ["تَاحِمٌ","ވިޔާމީހާ.","[ސަފުހާ 21]"  ],
  ["تَارَةً","ބައެއް ފަހަރު.","[ސަފުހާ 21]"  ],
  ["تَارِسٌ","އައްޑަނަ ހިފާ މީހާ.","[ސަފުހާ 21]"  ],
  ["تَارِكٌ","ދޫކޮށްލި މީހާ.","[ސަފުހާ 21]"  ],
  ["تَافَةٌ","عَيْبُ [ޢައިބު]. ފާފަ.","[ސަފުހާ 21]"  ],
  ["تَافِهٌ","ރަހަނެތް އެތި.","[ސަފުހާ 21]"  ],
  ["تَامِرٌ","ކަދުރު ގެންގުޅޭ މީހާ.","[ސަފުހާ 21]"  ],
  ["تَائِبٌ","تَوبَة [ތައުބާ]ވާ މީހާ.","[ސަފުހާ 21]"  ],
  ["تَائِقٌ","އެދުންވެރިވާ މީހާ.","[ސަފުހާ 21]"  ],
  ["تَائِهٌ","حَيْرَانْ [ޙައިރާން]ވެގެންވާ މީހާ.","[ސަފުހާ 21]"  ],
  ["تَأَخُّرٌ","ފަސްވުން.","[ސަފުހާ 21]"  ],
  ["تَأَخِّيْ","أَخَކު [އަޚަކު] ކަމުގައި ހެދުން.","[ސަފުހާ 21]"  ],
  ["تَأْدِيبٌ","أَدَبُ [އަދަބު] އުނގަންނައިދިނުން.","[ސަފުހާ 21]"  ],
  ["تَأْدِيَةٌ","އަދާކުރުން.","[ސަފުހާ 21]"  ],
  ["تَأْمِينٌ","آمِيْنْ [އާމީން] ކިޔުން.","[ސަފުހާ 21]"  ],
  ["تَأَوُّهٌ","ހިތާމައިގެ ނޭވާލުން.","[ސަފުހާ 21]"  ],
  ["تَأْوِيْلٌ","އެތެރެފުށުގެ مَعْنَ [މާނަ] ބަޔާންކުރުން.","[ސަފުހާ 21]"  ],
  ["تَبٌ","ހަލާކު. ކަލާކުކުރުން.","[ސަފުހާ 21]"  ],
  ["تَبَارٌ","ހަލާކު.","[ސަފުހާ 21]"  ],
  ["تَبَاشِيْرٌ","ކޮންމެ ކަމެއްގެ ކުރީކޮޅު.","[ސަފުހާ 21]"  ],
  ["تَبَّالٌ","ހަވާދު ވިއްކާ މީހާ.","[ސަފުހާ 21]"  ],
  ["تَبَّانٌ","ހުއި ވިއްކާ މީހާ.","[ސަފުހާ 21]"  ],
  ["تُبَّانٌ","ޖަގިޔާ. ހަރުވާޅުބުރި.","[ސަފުހާ 21]"  ],
  ["تَبَاهِيْ","އެކަކުއަނެކަކަށް فَخْرُ[ފަޚުރު]ވެރިވުން.","[ސަފުހާ 21]"  ],
  ["تَبْتِيْلٌ","ދުނިޔެއެޅުން.","[ސަފުހާ 21]"  ],
  ["تَبَخْتُرٌ","ބޮޑާ ވައްތަރަށް ހިނގުން.","[ސަފުހާ 21]"  ],
  ["تَبَرُّءٌ","سَلَامَةْ [ސަލާމަތް] ވެގަތުން.","[ސަފުހާ 22]"  ],
  ["تَبَرُّجٌ","އަންހެނާ ޒީނަތްތެރިކަން ފައުޅުކުރުން.","[ސަފުހާ 22]"  ],
  ["تَبَرُّعٌ","ދަރުމަވެރިވުން.","[ސަފުހާ 22]"  ],
  ["تَبَرُّمٌ","ރޮދިއެބުރުން.","[ސަފުހާ 22]"  ],
  ["تَبَسُّمٌ","ހިނިތުންވުން.","[ސަފުހާ 22]"  ],
  ["تِبْغٌ","ދުންފަތް.","[ސަފުހާ 22]"  ],
  ["تَبْكِيْتٌ","ބަހުން ރޮވޭވަރު ކޮއްލުން.","[ސަފުހާ 22]"  ],
  ["تَبْلِيْعٌ","ދިރުވައިލުން.","[ސަފުހާ 22]"  ],
  ["تَبْلِيْغٌ","އިއްވުން.","[ސަފުހާ 22]"  ],
  ["تِبْنٌ","ހިކި ހުއި.","[ސަފުހާ 22]"  ],
  ["تَبَنٌ","ވިސްނުންތެރިވުން.","[ސަފުހާ 22]"  ],
  ["تَبَوُّءٌ","قَائِمُ [ޤާއިމް] ވުން.","[ސަފުހާ 22]"  ],
  ["تَبِيْعٌ","އެއްއަހަރުވީ ގެރި.","[ސަފުހާ 22]"  ],
  ["تَتْرَى","ވިދިވިދިގެން ވުން.","[ސަފުހާ 22]"  ],
  ["تُتْنٌ","ދުންފަތް.","[ސަފުހާ 22]"  ],
  ["تَثَاؤُبٌ","އާފުރުން.","[ސަފުހާ 22]"  ],
  ["تِجَارَةٌ","ވިޔާފާރި [ވިޔަފާރި].","[ސަފުހާ 22]"  ],
  ["تَجَاسُرٌ","ބިރަކާއި ނުލައި ކުރިޔަށް ނިކުތުން.","[ސަފުހާ 22]"  ],
  ["تَجْدِيْدٌ","އައުކުޅައުން.","[ސަފުހާ 22]"  ],
  ["تَجْذِيْفٌ","ފަލިޖެހުން.","[ސަފުހާ 22]"  ],
  ["تَحْرِبَةٌ","ގޮތްބެލުން.","[ސަފުހާ 22]"  ],
  ["تَجْفِيْفٌ","ރޯތަކެތި ހިއްކުން.","[ސަފުހާ 22]"  ],
  ["تَجْلِيدٌ","ފޮތް ހަންޖެހުން.","[ސަފުހާ 22]"  ],
  ["تَجَنُّبٌ","ދުރުވެގަތުން.","[ސަފުހާ 22]"  ],
  ["تَجْهِيْزٌ","ތައްޔާރުކުރުން.","[ސަފުހާ 22]"  ],
  ["تَحَاوُرٌ","ޒުވާބުކުރުން.","[ސަފުހާ 22]"  ],
  ["تَحْتُ","ތިރި. ދަށް.","[ސަފުހާ 22]"  ],
  ["تَحَتُّمٌ","ކަޑައެޅުން.","[ސަފުހާ 22]"  ],
  ["تَحْدِيْدٌ","މިންވަރު ކަޑައެޅުން.","[ސަފުހާ 22]"  ],
  ["تَحْرِيْرٌ","ލިއުން. މިނިވަންކުރުން.","[ސަފުހާ 22]"  ],
  ["تَحْرِيْفٌ","އަކުރާއި مَعْنَ [މާނަ] ބަދަލުކުރުން.","[ސަފުހާ 22]"  ],
  ["تُحْفَةٌ","هَدِيَة [ހަދިޔާ]. ވެދުން.","[ސަފުހާ 22]"  ],
  ["تَحْقِيْرٌ","ނިކަމެތިކުރުން.","[ސަފުހާ 22]"  ],
  ["تَحْلِيَةٌ","ފޮނިކުޅައުން. ޒީނަތްވެގަތުން.","[ސަފުހާ 22]"  ],
  ["تُحْمَةٌ","ގަދަ ކަޅުކަން. ރަތްދޮންކަން.","[ސަފުހާ 22]"  ],
  ["تَحَمُّلٌ","ކަމެއްގެ ބުރަ އުފުލުން.","[ސަފުހާ 22]"  ],
  ["تَحَنُّثٌ","ހުވައި އުވައިލުން.","[ސަފުހާ 22]"  ]
]
