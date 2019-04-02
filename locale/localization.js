/* Localised strings for English, Czech, Hungarian */

/**
 * Return the localised string for prompt str
 * @param {string} str prompt
 * @param {string} [loc] location override
 * @return {string}
 */
function S(str, loc) {
    if(typeof loc !== 'undefined')
        return LOC_STRINGS[str.toLowerCase()][loc.toUpperCase()];
    return LOC_STRINGS[str.toLowerCase()][X.loc];
}

/**
 * Fetch the image src string for a location-dependent image
 * @param {string} str
 * @param {string} [loc]
 * @return {string}
 */
function I(str, loc) {
    if(typeof loc !== 'undefined')
        return LOC_IMG[str.toLowerCase()][loc.toUpperCase()];
    return LOC_IMG[str.toLowerCase()][X.loc];
}

/**
 * Return the locale-specific key for a character. This allows different response characters for different locales.
 * @param {string} char QWERTY (UK) keyboard key
 * @param {string} [loc] location override
 * @return {string}
 */
function K(char, loc) {
    if(typeof loc !== 'undefined')
        return LOC_KEYS[char.toLowerCase()][loc.toUpperCase()];
    return LOC_KEYS[char.toLowerCase()][X.loc];
}

/**
 * Return the keyboard icon for the requested character (should be an arrowkey)
 * @param {string} char
 * @return {string}
 */
function KI(char) {
    if(!char.match(/arrow/i))
        return char;
    char = char.substring(5)[0].toLowerCase();
    return "&" + char + "arr;";
}

/**
 * Some keys are different in some experiments thanks to varied keyboard layouts.
 * This object lists QWERTY (UK) keyboard key positions and provides the alternate key names and codes.
 * @type {{}}
 */
const LOC_KEYS = {
    'f': {
        'EN': 'f',
        'CZ': '',
        'HUN': 'f'
    },
    'g': {
        'EN': 'g',
        'CZ': '',
        'HUN': 'g'
    },
    'j': {
        'EN': 'j',
        'CZ': '',
        'HUN': 'j'
    },
    'm': {
        'EN': 'm',
        'CZ': '',
        'HUN': 'm'
    },
    'n': {
        'EN': 'n',
        'CZ': '',
        'HUN': 'n'
    },
    'x': {
        'EN': 'x',
        'CZ': '',
        'HUN': 'x'
    },
    'c': {
        'EN': 'c',
        'CZ': 'c',
        'HUN': 'c'
    },
    'z': {
        'EN': 'z',
        'CZ': '',
        'HUN': 'y'
    },
    'arrowdown': {
        'EN': 'ArrowDown',
        'CZ': 'ArrowDown',
        'HUN': 'ArrowDown'
    },
    'arrowup': {
        'EN': 'ArrowUp',
        'CZ': 'ArrowUp',
        'HUN': 'ArrowUp'
    },
    'arrowleft': {
        'EN': 'ArrowLeft',
        'CZ': 'ArrowLeft',
        'HUN': 'ArrowLeft'
    },
    'arrowright': {
        'EN': 'ArrowRight',
        'CZ': 'ArrowRight',
        'HUN': 'ArrowRight'
    }
};

/**
 * String localisation list.
 * Indices have the general structure:
 * x_y_z
 * x = experiment ([g]eneral, [f]lanker, [p]rimeprobe, s[i]mon, [s]troop)
 * y = stage (e.g. [c]onsent, [i]nstructions, [f]ingers, [r]esponses, [s]timulus)
 * z = descriptor (e.g. title, email_pi)
 *
 * Each entry is an object with keys containing the localisation codes and values of the target strings
 * @type {{}}
 */
const LOC_STRINGS = {
    'g_c_title': {
        'EN': "Inform form:",
        'CZ': "",
        'HUN': "Tájékoztató nyilatkozat:"
    },
    'g_c_summary': {
        'EN': "<strong>summary of the study</strong>: text",
        'CZ': "",
        'HUN': "<strong>A vizsgálat célja</strong>: A kutatás célja egy korábbi kísérlet megismétlése. A kísérlet azt kutatja, hogyan dolgozod fel az információkat és hozol döntéseket."
    },
    'g_c_data': {
        'EN': "<strong>data handling</strong>: text",
        'CZ': "",
        'HUN': "<strong>Adatkezelés</strong>: Szigorúan bizalmasan kezelünk minden olyan személyes információt, amit a kutatás keretén belül gyűjtünk össze. A kutatás során nyert adatokat kóddal ellátva biztonságos számítógépeken tároljuk. A kutatás során nyert adatokat összegezzük. Az ELTE PPK Affektív Pszichológia Tanszék Döntéspszichológiai Kutatócsoportja, mint adatkezelő, fenti személyes adataimat bizalmasan kezeli, más adatkezelőnek, adatfeldolgozónak nem adja át. E tényállás részleteit a „Hozzájárulás adatkezeléshez” c. dokumentum tartalmazza: http://decisionlab.elte.hu/hozzajarulas-adatkezeleshez/ Az adatkezelésről szóló szabályozásról részletesebben pedig itt tájékozódhat: https://ppk.elte.hu/file/Hozzajarulas_adatkezeleshez_melleklet_2018.pdf A kutatás egy későbbi szakaszában még egy kísérletet fogunk kiküldeni Önnek. A kutatás során nyert személyes adatait arra használjuk fel, hogy a két kísérletben adott válaszait össze tudjuk kötni. Az azonosítására alkalmas adatokat (NEPTUN kód) ezután törölni fogjuk, így válaszai már nem lesznek semmilyen módon Önhöz köthetők. Az anononimizált adatait ezután más kutatókkal megosztjuk."
    },
    'g_c_participation': {
        'EN': "<strong>participation</strong>: text",
        'CZ': "",
        'HUN': "<strong>Részvétel</strong>: A kutatásban való részvétel teljesen önkéntes. A vizsgálatot bármikor indoklás nélkül megszakíthatod, vagy a kérdések megválaszolását megtagadhatod a böngésző ablak bezárásával."
    },
    'g_c_title2': {
        'EN': "Consent form",
        'CZ': "",
        'HUN': "Beleegyező nyilatkozat"
    },
    'g_c_p1': {
        'EN': "first paragraph text",
        'CZ': "",
        'HUN': "Felelősségem teljes tudatában kijelentem, hogy a mai napon az Eötvös Loránd Tudományegyetem, Dr. Aczél Balázs kutatásvezető által végzett vizsgálatban önként veszek részt; a vizsgálat jellegéről, annak megkezdése előtt kielégítő tájékoztatást kaptam; nem szenvedek semmilyen pszichiátriai betegségben; a vizsgálat idején alkohol vagy drogok hatása alatt nem állok."
    },
    'g_c_p2': {
        'EN': "second paragraph text",
        'CZ': "",
        'HUN': "Tudomásul veszem, hogy az azonosításomra alkalmas személyi adataimat bizalmasan kezelik. Hozzájárulok ahhoz, hogy a vizsgálat során a rólam felvett, személyem azonosítására nem alkalmas adatok más kutatók számára is hozzáférhetők legyenek. Fenntartom a jogot arra, hogy a vizsgálat során annak folytatásától bármikor elállhassak. Ilyen esetben a rólam addig felvett adatokat törölni kell. Tudomásul veszem, hogy csak a teljesen befejezett kitöltésért kapok pontot a Pszichológiai kísérletben és tudományos aktivitásban való részvétel nevű kurzuson."
    },
    'g_c_incomplete': {
        'EN': "If you do not complete the task, or we feel that you completed it to an unsatisfactory standard (ie. you do not follow the instructions), you will not be compensated.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_contact': {
        'EN': "<strong>Contact information</strong>: If you have any questions at this time or during the experiment, please feel free to ask.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_pi': {
        'EN': "If questions arise after the experiment, you may contact the lead researcher " +
            "<a href='mailto:marton.balazs.kovacs@gmail.com?subject=Weissman experiment'>" +
            "marton.balazs.kovacs@gmail.com</a>",
        'CZ': "",
        'HUN': "Ha bármilyen kérdésed, aggályod vagy panaszod van a kísérlettel kapcsolatban, kérem keresd Kovács Márton kutatóasszisztenst <a href='mailto:marton.balazs.kovacs@gmail.com?subject=Weissman experiment'>marton.balazs.kovacs@gmail.com</a>",
    },
    'g_c_email_ec': {
        'EN': "You may also contact Human Subjects Protection for questions about your rights as a research subject <a href='mailto:strategia@rk.elte.hu?subject=Weissman replication'>strategia@rk.elte.hu</a>",
        'CZ': "",
        'HUN': "Továbbá írhatsz az ELTE adatvédelmi tisztviselőjének Dr. Rigó Kingának (<a href='mailto:strategia@rk.elte.hu?subject=Weissman replication'>strategia@rk.elte.hu</a>) [ELTE Adat- és Stratégiai Információkezelési Iroda; 1053 Budapest, Ferenciek tere 6.]"
    },
    'g_c_agree': {
        'EN': "<strong>if you are fine with it click on the box</strong>",
        'CZ': "",
        'HUN': "<strong>Kérem, amennyiben egyetértesz a fenti feltételekkel, és hozzájárulsz a kutatásban való részvételhez, ezt az állítás mellett megjelenő szürke mező kipipálásával igazold. Együttműködésedet előre is köszönjük!</strong>"
    },
    'g_c_agree2': {
        'EN': "<strong>if you are fine with it click on the box</strong>",
        'CZ': "",
        'HUN': "<strong>A kutatásban való részvételem körülményeiről részletes tájékoztatást kaptam, a feltételekkel egyetértek.</strong>"
    },
    'g_d_title': {
        'EN': "Demographics",
        'CZ': "",
        'HUN': "Demográfiai kérdések"
    },
    'g_d_optional': {
        'EN': "All questions are optional.",
        'CZ': "",
        'HUN': "Kérlek, szánj néhány percet az alábbi demográfiai kérdések megválaszolására:"
    },
    'g_d_age': {
        'EN': "Age",
        'CZ': "",
        'HUN': "Kor"
    },
    'g_d_education': {
        'EN': "Highest level of education attained or in progress",
        'CZ': "",
        'HUN': "Legmagasabb végzettséged:"
    },
    'g_d_education_primary': {
        'EN': "Primary",
        'CZ': "",
        'HUN': "Általános iskola"
    },
    'g_d_education_secondary': {
        'EN': "Secondary",
        'CZ': "",
        'HUN': "Gimnázium / középiskola"
    },
    'g_d_education_undergrad': {
        'EN': "Undergraduate degree",
        'CZ': "",
        'HUN': "BA/BSc"
    },
    'g_d_education_postgrad': {
        'EN': "Postgraduate or professional qualification",
        'CZ': "",
        'HUN': "MA/MSc vagy magasabb"
    },
    'g_d_gender': {
        'EN': "Gender",
        'CZ': "",
        'HUN': "Nem"
    },
    'g_d_gender_other': {
        'EN': "Other",
        'CZ': "",
        'HUN': "Egyéb"
    },
    'g_d_gender_m': {
        'EN': "Male",
        'CZ': "",
        'HUN': "Férfi"
    },
    'g_d_gender_f': {
        'EN': "Female",
        'CZ': "",
        'HUN': "Nő"
    },
    'g_d_uid': {
        'EN': "Unique user identifier",
        'CZ': "",
        'HUN': "Neptun kód:"
    },
    'g_d_none': {
        'EN': "I do not wish to be paid",
        'CZ': "",
        'HUN': ""
    },
    'g_d_hun': {
        'EN': "(Hungarian recruitment platform)",
        'CZ': "",
        'HUN': "(Magyar kísérleti személy szervező oldal)"
    },
    'g_d_cz': {
        'EN': "(Czech recruitment platform)",
        'CZ': "",
        'HUN': ""
    },
    'g_e_title': {
        'EN': "Error!",
        'CZ': "",
        'HUN': "Hiba!"
    },
    'g_e_no_task_name': {
        'EN': "No task has been specified. Please double-check the URL, or go back and click the link again.",
        'CZ': "",
        'HUN': "Nincs feladat megadva. Kérlek, ellenőrizd a beírt címet, vagy menj vissza és kattints a linkre még egyszer."
    },
    'g_f_left_middle': {
        'EN': "left middle",
        'CZ': "",
        'HUN': "bal középső"
    },
    'g_f_left_index': {
        'EN': "left index",
        'CZ': "",
        'HUN': "bal mutató"
    },
    'g_f_right_middle': {
        'EN': "right middle",
        'CZ': "",
        'HUN': "jobb középső"
    },
    'g_f_right_index': {
        'EN': "right index",
        'CZ': "",
        'HUN': "jobb mutató"
    },
    'g_i_title': {
        'EN': "Instructions:",
        'CZ': "",
        'HUN': "Instrukció"
    },
    'g_i_accuracy70': {
        'EN': "It is very important to stay focused during the experiment. Please do not do anything else while doing this task. Please note that we only accept jobs with >70% accuracy, which is a reasonable threshold based on our previous studies.",
        'CZ': "",
        'HUN': "Nagyon fontos, hogy a kísérlet során végig tudj összpontosítani! Kérünk, hogy ne csinálj semmi mást, miközben a feladatot csinálod! Kérünk, vedd figyelembe, hogy ha a megoldásod pontossága 70%-nál alacsonyabb lesz, ami egy ésszerű határ az előző kutatások fényében, akkor csak 0,5 pontot kapsz a kitöltésért. Ha 70% feletti pontossággal oldod meg a feladatot, akkor 1 pontot kapsz a „Pszichológiai kísérletben és tudományos aktivitásban való részvétel” nevű kurzuson."
    },
    'g_g_continue': {
        'EN': "Continue...",
        'CZ': "",
        'HUN': "Tovább"
    },
    'g_g_end': {
        'EN': "End experiment",
        'CZ': "",
        'HUN': "Kísérlet vége"
    },
    'g_g_general': {
        'EN': "If you have any questions, comments, or concerns about the experiment, please write them here...",
        'CZ': "",
        'HUN': "Ha bármi kérdésed vagy megjegyzésed van a kísérlettel kapcsolatban, kérlek ide írd!"
    },
    'g_g_practice': {
        'EN': "Click this button to start a practice session.",
        'CZ': "",
        'HUN': "Kattints ide a gyakorlás elkezdéséhez!"
    },
    'g_g_block_end': {
        'EN': "End of run",
        'CZ': "",
        'HUN': "Ez a rész véget ért."
    },
    'g_g_block_break': {
        'EN': "You may have a short break.",
        'CZ': "",
        'HUN': "Tarthatsz egy rövid szünetet."
    },
    'g_g_end_title': {
        'EN': "Complete!",
        'CZ': "",
        'HUN': "Kész!"
    },
    'g_g_end_detail': {
        'EN': "Thank you for your participation. Your overall score was <span id='Score'></span>%.",
        'CZ': "",
        'HUN': "A kísérlet véget ért, köszönjük a részvételt! Az átlagos eredményed <span id='Score'></span>% volt."
    },
    'g_g_end_contact': {
        'EN': "If you have any questions or concerns about the experiment, you can contact the lead researcher <a href='mailto:marton.balazs.kovacs@gmail.com?subject=Weissman experiment'>marton.balazs.kovacs@gmail.com</a>",
        'CZ': "",
        'HUN': "Ha bármi kérdésed vagy megjegyzésed van, kérlek vedd fel a kapcsolatot a kutatás vezetőjével <a href='mailto:marton.balazs.kovacs@gmail.com?subject=Weissman experiment'>marton.balazs.kovacs@gmail.com</a>!"
    },
    'g_g_data_save_ok': {
        'EN': "The data have been saved successfully.",
        'CZ': "",
        'HUN': "Az eredményed elmentésre került."
    },
    'g_g_data_save_error': {
        'EN': "An error occurred while saving the data. The server said:", // Participants probably want info on whether they'll be paid here
        'CZ': "",
        'HUN': "Hiba történt az adatok elmentése során. Hibaüzenet:"
    },
    'g_g_rather_not_say': {
        'EN': "Rather not say",
        'CZ': "",
        'HUN': "Inkább nem válaszolnék"
    },
    'g_g_stimulus' : {
        'EN': "Stimulus",
        'CZ': "",
        'HUN': ""
    },
    'g_g_response' : {
        'EN': "Response",
        'CZ': "",
        'HUN': ""
    },
    'g_g_finger' : {
        'EN': "Finger",
        'CZ': "",
        'HUN': ""
    },
    'g_h_flanker': {
        'EN': "Middle letter",
        'CZ': "",
        'HUN': "Középső betű"
    },
    'g_h_primeprobe': {
        'EN': "Second word",
        'CZ': "",
        'HUN': "Második szó"
    },
    'g_h_simon': {
        'EN': "Square colour",
        'CZ': "",
        'HUN': "A négyzet színe"
    },
    'g_h_stroop': {
        'EN': "Ink colour",
        'CZ': "",
        'HUN': "A betűk színe"
    },
    'g_h_key': {
        'EN': "Key",
        'CZ': "",
        'HUN': "Billentyű"
    },
    'g_p_title': {
        'EN': "Practice",
        'CZ': "",
        'HUN': "Gyakorlás"
    },
    'g_p_end': {
        'EN': "End of practice",
        'CZ': "",
        'HUN': "Véget ért a gyakorló rész."
    },
    'g_r_too_slow': {
        'EN': "too slow",
        'CZ': "",
        'HUN': "túl lassú"
    },
    'g_r_correct': {
        'EN': "correct",
        'CZ': "",
        'HUN': "helyes"
    },
    'g_r_incorrect': {
        'EN': "incorrect",
        'CZ': "",
        'HUN': "helytelen"
    },
    'g_s_down': {
        'EN': "down",
        'CZ': "",
        'HUN': "le"
    },
    'g_s_left': {
        'EN': "left",
        'CZ': "",
        'HUN': "bal"
    },
    'g_s_right': {
        'EN': "right",
        'CZ': "",
        'HUN': "jobb"
    },
    'g_s_up': {
        'EN': "up",
        'CZ': "",
        'HUN': "fel"
    },
    'g_s_red': {
        'EN': "red",
        'CZ': "",
        'HUN': "piros"
    },
    'g_s_green': {
        'EN': "green",
        'CZ': "",
        'HUN': "zöld"
    },
    'g_s_blue': {
        'EN': "blue",
        'CZ': "",
        'HUN': "kék"
    },
    'g_s_yellow': {
        'EN': "yellow",
        'CZ': "",
        'HUN': "sárga"
    },
    'g_s_h': {
        'EN': "H",
        'CZ': "",
        'HUN': "H"
    },
    'g_s_m': {
        'EN': "M",
        'CZ': "",
        'HUN': "M"
    },
    'g_s_s': {
        'EN': "S",
        'CZ': "",
        'HUN': "S"
    },
    'g_s_t': {
        'EN': "T",
        'CZ': "",
        'HUN': "T"
    },
    'f_i_overview': {
        'EN': "In this experiment, we are interested in how people resolve conflicts in the processing of visual stimuli. During this experiment, you will see strings of 7 letters presented in the center of the screen, as shown in the examples below.",
        'CZ': "",
        'HUN': "Ebben a kísérletben arra vagyunk kíváncsiak, hogy az emberek hogyan oldják fel a vizuális ingerek feldolgozása közben létrejövő ellentmondásokat. A kísérlet alatt 7 betűből álló sorozatokat fogsz látni egymás után a képernyő közepén, ahogy a lenti példák is mutatják."
    },
    'f_i_responses': {
        'EN': "For each string, your task is to identify the center letter, while ignoring the other letters. For example, the correct responses to the examples above are S and T, respectively. You will use the <kbd>z</kbd>, <kbd>x</kbd>, <kbd>n</kbd> and <kbd>m</kbd> keys for responses. You will learn the correspondence between the letters and the keys later in the practice session. Please respond as fast as possible while trying to avoid making mistakes.",
        'CZ': "",
        'HUN': "Minden egyes betűsornál az a feladatod, hogy meghatározd a középső betűt, miközben a többi betűt figyelmen kívül hagyod. Például, a helyes válaszok a fenti példákra az S és a T. Az <kbd>y</kbd>, <kbd>x</kbd>, <kbd>n</kbd> and <kbd>m</kbd> billentyűket fogod a válaszadásra használni. A betűk és a billentyűk közti összefüggést később, a gyakorló rész alatt lesz alkalmad megtanulni. Kérünk, olyan gyorsan válaszolj, amennyire ez lehetséges hibázás nélkül!"
    },
    'f_i_duration': {
        'EN': "The whole experiment is divided into 4 runs of about 4 minutes each (on average, 16 minutes in total). You may also have a short break between runs.",
        'CZ': "",
        'HUN': "Az egész kísérlet 4 részre van felosztva, amelyből mindegyik 4 percet tesz ki (16 perc összesen). A részek között rövid szünetet is tarthatsz."
    },
    'i_i_overview': {
        'EN': "In this experiment, we are interested in how people resolve conflicts in the processing of visual stimuli. During this experiment, you will see color squares shown in either upper, lower, left or right side of the screen, as shown in the examples below. ",
        'CZ': "",
        'HUN': "Ebben a kísérletben arra vagyunk kíváncsiak, hogy az emberek hogyan oldanak fel a vizuális ingerek feldolgozása közben létrejövő konfliktusokat. A kísérlet során színes négyzeteket fogsz látni a képernyő fenti, lenti, bal vagy jobb oldalán, ahogy a lenti példák is mutatják."
    },
    'i_i_detail': {
        'EN': "Your task is to identify the color of the box, while ignoring the position where the square appears. For example, the correct responses to the examples above are blue and red, respectively. Each color will be assigned to one of the four arrow keys, as highlighted below. You will learn how different colors are mapped to different arrow keys in the practise session later. Please respond as fast as possible while trying to avoid making mistakes.",
        'CZ': "",
        'HUN': "A feladatod az lesz, hogy meghatározd a négyzet színét, miközben figyelmen kívül hagyod azt, hol helyezkedik el a négyzet. Például a helyes válaszok a fenti példára a kék és a piros. Mindegyik szín a négy nyíl billentyű egyikéhez van hozzárendelve, ahogy lent is láthatod ezt kiemelve. A színek és a nyíl billentyűk közti összefüggést később, a gyakorló rész alatt lesz alkalmad megtanulni. Kérünk, olyan gyorsan válaszolj, amennyire ez lehetséges hibázás nélkül."
    },
    'i_i_keymap': {
        'EN': "While doing this task, please place your fingers in the way shown below:",
        'CZ': "",
        'HUN': "Miközben a feladatot csinálod, rakd az ujjaid a következő módon:"
    },
    'i_i_duration': {
        'EN': "The whole experiment is divided into 4 runs of about 4 minutes each (on average, 16 minutes in total). You may also have a short break between runs.",
        'CZ': "",
        'HUN': "Az egész kísérlet 4 részre van felosztva, amelyből mindegyik 4 percet tesz ki (16 perc összesen). A részek között rövid szünetet is tarthatsz."
    },
    'p_i_overview': {
        'EN': "In this experiment, we are interested in how people pay attention to visual stimuli. During this experiment, you will see words which will flash rapidly. First you will see three identical words stacked on top of each other at the center of the screen (first picture, below), then you will see a single word (second picture). In each case, the words will all be UP, DOWN, LEFT, or RIGHT.",
        'CZ': "",
        'HUN': "Ebben a kísérletben arra vagyunk kíváncsiak, hogy az emberek hogyan figyelnek a vizuális ingerekre. Minden próbában először három azonos szót fogsz látni egymás fölött a képernyő közepén. A három szó minden próbában csak Fel, Le, Bal és Jobb lehet. A három szó nagyon gyorsan fog felvillanni, majd eltűnni. Ezután egy szót fogsz látni a képernyő közepén. Ez a szó is Bal, Jobb, Fel vagy Le lesz."
    },
    'p_i_detail': {
        'EN': "Your task is to indicate the identity of this single word (not the 3 words that appear earlier). You will use the <kbd>f</kbd>, <kbd>g</kbd>, <kbd>j</kbd>, and <kbd>n</kbd> keys to respond. The responses are shown below, along with which fingers to use for which keys. In the example above, the single word was 'LEFT', so you would press the <kbd>f</kbd> key. In all trials, please respond as quickly as possible without making mistakes.",
        'CZ': "",
        'HUN': "A  feladatod az lesz, hogy beazonosítsd az egyedül álló szót (ne a három szót, ami előtte jelenik meg). Ha az egyedül álló szó Bal, akkor nyomd meg az F billentyűt a bal középső ujjaddal! Ha az egyedül álló szó Jobb, akkor nyomd meg a G billentyűt a bal mutatóujjaddal! Ha az egyedül álló szó Fel, akkor nyomd meg a J billentyűt a jobb középső ujjaddal! Ha az egyedül álló szó Le, nyomd meg az N billentyűt a jobb mutatóujjaddal! Minden próbában próbálj meg olyan gyorsan válaszolni, amennyire lehetséges hibázás nélkül!"
    },
    'p_i_practice': {
        'EN': "To make sure you understand the task, and to help you learn the response keys, we will give you a few practice trials. If you make a mistake, an error message will appear. After the practice trials, there will be 4 test runs. Each test run will last about 3 minutes and 20 seconds. You may also have a short break between runs. The total time is about 16 minutes.",
        'CZ': "",
        'HUN': "Hogy biztosan megértsd a feladatot, egy pár próbafeladatot adunk neked először. Ha hibázol, akkor egy hibaüzenet fog megjelenni. A próbafeladatok után 4 kör tesztfeladat fog következni. Minden tesztfeladat kör körülbelül 3 percig és 20 másodpercig tart. A körök között egy rövid szünetet is tarthatsz. A kísérlet egésze körülbelül 16 perc lesz."
    },
    'p_i_responses': {
        'EN': "You should place your fingers on the keys as shown below. The table showing which key to press for which response will remain visible during the practice runs.",
        'CZ': "",
        'HUN': "Miközben a feladatot csinálod kérünk, helyezd az ujjaid a következő módon: <kbd>f</kbd> = bal középső ujj, <kbd>g</kbd> = bal mutatóujj, <kbd>j</kbd> = jobb mutatóujj, <kbd>n</kbd> = jobb középső ujj"
    },
    's_i_overview': {
        'EN': "In this experiment, we are interested in how people resolve conflicts in the processing of visual stimuli. During this experiment, you will see color words painted in different shades, as shown in the examples below.",
        'CZ': "",
        'HUN': "Ebben a kísérletben arra vagyunk kíváncsiak, hogy az emberek hogyan oldanak fel a vizuális ingerek feldolgozása közben létrejövő konfliktusokat. A kísérlet alatt színek neveit fogod látni különböző színű betűkkel kiírva, ahogy a lenti példa mutatja."
    },
    's_i_detail': {
        'EN': "Your task is to identify the color in which the word is printed, while ignoring the meaning of the word. For example, the correct responses to the 2 examples above are yellow and red, respectively. Each color will be assigned to one of the four response keys, as highlighted below. Please press the <kbd>z</kbd>, <kbd>x</kbd>, <kbd>n</kbd> and <kbd>m</kbd> keys using your left middle finger, left index finger, right index finger and right middle finger, respectively. You will learn how different shades are mapped to different response keys in the practise session later. Please respond as fast as possible while trying to avoid making mistakes.",
        'CZ': "",
        'HUN': "A feladatod az lesz, hogy meghatározd, milyen színnel van a szó nyomtatva, miközben a szó jelentését figyelmen kívül hagyod. Például a fenti 2 példára a helyes válaszok a sárga és a piros. Mindegyik szín a négy válaszbillentyű valamelyikéhez lesz hozzárendelve, ahogy a lenti ábrán ki van emelve. Kérünk, hogy a y, x, n és m billentyűket a bal középső ujjaddal, a bal mutató ujjaddal, a jobb mutató ujjaddal és a jobb középső ujjaddal nyomd le! Azt, hogy melyik szín melyik válaszbillentyűhöz tartozik, később a gyakorló rész alatt lesz alkalmad megtanulni. Kérünk, olyan gyorsan válaszolj, amennyire ez lehetséges hibázás nélkül."
    },
    's_i_duration': {
        'EN': "The whole experiment is divided into 4 runs of about 6 minutes each (24 minutes in total). You may also have a short break between runs.",
        'CZ': "",
        'HUN': "Az egész kísérlet 4 részre van felosztva, amelyből mindegyik 6 percet tesz ki (24 perc összesen). A részek között rövid szünetet is tarthatsz."
    }

};

const LOC_IMG = {
    'f_keyboard': {
        'EN': "assets/flanker/Keyboard.jpg",
        'CZ': "",
        'HUN': "assets/flanker/Keyboard_f_HUN.png"
    },
    'i_keyboard': {
        'EN': "assets/simon/Keyboard1.jpg",
        'CZ': "",
        'HUN': "assets/simon/Keyboard_i_HUN.jpg"
    },
    'p_keyboard': {
        'EN': "assets/primeprobe/Keyboard.jpg",
        'CZ': "",
        'HUN': "assets/primeprobe/Keyboard_p_HUN.jpg"
    },
    'p_ex1': {
        'EN': "assets/primeprobe/Example1_EN.jpg",
        'CZ': "",
        'HUN': "assets/primeprobe/Example1_HUN.jpg"
    },
    'p_ex2': {
        'EN': "assets/primeprobe/Example2_EN.jpg",
        'CZ': "",
        'HUN': "assets/primeprobe/Example2_HUN.jpg"
    },
    's_keyboard': {
        'EN': "assets/stroop/Keyboard.jpg",
        'CZ': "",
        'HUN': "assets/stroop/Keyboard_s_HUN.jpg"
    },
    's_ex1': {
        'EN': "assets/stroop/Example1_EN.jpg",
        'CZ': "",
        'HUN': "assets/stroop/Example1_HUN.jpg"
    },
    's_ex2': {
        'EN': "assets/stroop/Example2_EN.jpg",
        'CZ': "",
        'HUN': "assets/stroop/Example2_HUN.jpg"
    }
};
