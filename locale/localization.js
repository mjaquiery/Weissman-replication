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
    return LOC_STRINGS[str.toLowerCase()][X.loc.toUpperCase()];
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
    return LOC_IMG[str.toLowerCase()][X.loc.toUpperCase()];
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
    return LOC_KEYS[char.toLowerCase()][X.loc.toUpperCase()];
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
        'HUN': ''
    },
    'g': {
        'EN': 'g',
        'CZ': '',
        'HUN': ''
    },
    'j': {
        'EN': 'j',
        'CZ': '',
        'HUN': ''
    },
    'm': {
        'EN': 'm',
        'CZ': '',
        'HUN': ''
    },
    'n': {
        'EN': 'n',
        'CZ': '',
        'HUN': ''
    },
    'x': {
        'EN': 'x',
        'CZ': '',
        'HUN': ''
    },
    'z': {
        'EN': 'z',
        'CZ': '',
        'HUN': ''
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
        'EN': "Informed consent form:",
        'CZ': "",
        'HUN': ""
    },
    'g_c_about': {
        'EN': "<strong>About the study</strong>: This study will investigate how you process information and make decisions.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_overview': {
        'EN': "Expect to spend an hour at most to complete this study. If you choose to take part in this study, you will be asked to participate in different types of tasks.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_content': {
        'EN': "We may ask you to make decisions based on sounds (such as spoken words in English or non-speech sounds) or images or videos (such as faces, everyday objects, patterns, shapes, animals) that we will present to you. You may also be asked to fill out some questionnaires about your demographic information, attitudes and preferences regarding different types of decisions.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_volition': {
        'EN': "Voluntariness:",
        'CZ': "",
        'HUN': ""
    },
    'g_c_quit': {
        'EN': "This study is completely voluntary and you can withdraw from this study at any time by closing your Internet browser window.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_compensation': {
        'EN': "<strong>Compensation</strong>: You will receive the amount of money indicated in the HIT description for your participation. We will screen your responses prior to compensation. ",
        'CZ': "",
        'HUN': ""
    },
    'g_c_incomplete': {
        'EN': "If you do not complete the task, or we feel that you completed it to an unsatisfactory standard (ie. you do not follow the instructions), you will not be compensated.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_policy': {
        'EN': "This policy is in line with Amazon Mechanical Turk standards, which state \"a Requester may reject your work if the HIT was not completed correctly or the instructions were not followed.\"",
        'CZ': "",
        'HUN': ""
    },
    'g_c_confidentiality': {
        'EN': "<strong>How confidentiality will be maintained</strong>: Amazon Mechanical Turk will provide us, the researchers, only with your responses. We will not have access to your personal information.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_risks': {
        'EN': "<strong>Risks/Benefits</strong>: We know of no risks or benefits to you for participating in this research study.  The potential benefits of this research lie in the knowledge that will be acquired.\n",
        'CZ': "",
        'HUN': ""
    },
    'g_c_contact': {
        'EN': "<strong>Contact information</strong>: If you have any questions at this time or during the experiment, please feel free to ask.",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_pi': {
        'EN': "If questions arise after the experiment, you may contact the primary investigator:",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_pi_display': {
        'EN': "pi@experiment.edu",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_pi_href': {
        'EN': "mailto:pi@experiment.edu?subject=Weissman experiment",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_ec': {
        'EN': "You may also contact Human Subjects Protection for questions about your rights as a research subject:",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_ec_display': {
        'EN': "ec@experiment.edu",
        'CZ': "",
        'HUN': ""
    },
    'g_c_email_ec_href': {
        'EN': "mailto:ec@experiment.edu?subject=Weissman replication, EC#xxxx",
        'CZ': "",
        'HUN': ""
    },
    'g_c_checkbox': {
        'EN': "Please check the box to indicate your consent to participate in the study",
        'CZ': "",
        'HUN': ""
    },
    'g_c_agree': {
        'EN': "I agree to participate.",
        'CZ': "",
        'HUN': ""
    },
    'g_d_title': {
        'EN': "Demographics",
        'CZ': "",
        'HUN': ""
    },
    'g_d_optional': {
        'EN': "All questions are optional.",
        'CZ': "",
        'HUN': ""
    },
    'g_d_age': {
        'EN': "Age",
        'CZ': "",
        'HUN': ""
    },
    'g_d_education': {
        'EN': "Highest level of education attained or in progress",
        'CZ': "",
        'HUN': ""
    },
    'g_d_education_primary': {
        'EN': "Primary",
        'CZ': "",
        'HUN': ""
    },
    'g_d_education_secondary': {
        'EN': "Secondary",
        'CZ': "",
        'HUN': ""
    },
    'g_d_education_undergrad': {
        'EN': "Undergraduate degree",
        'CZ': "",
        'HUN': ""
    },
    'g_d_education_postgrad': {
        'EN': "Postgraduate or professional qualification",
        'CZ': "",
        'HUN': ""
    },
    'g_d_gender': {
        'EN': "Gender",
        'CZ': "",
        'HUN': ""
    },
    'g_d_gender_other': {
        'EN': "Other",
        'CZ': "",
        'HUN': ""
    },
    'g_d_gender_m': {
        'EN': "Male",
        'CZ': "",
        'HUN': ""
    },
    'g_d_gender_f': {
        'EN': "Female",
        'CZ': "",
        'HUN': ""
    },
    'g_e_title': {
        'EN': "Error!",
        'CZ': "",
        'HUN': ""
    },
    'g_e_no_task_name': {
        'EN': "No task has been specified. Please double-check the URL, or go back and click the link again.",
        'CZ': "",
        'HUN': ""
    },
    'g_f_left_middle': {
        'EN': "left middle",
        'CZ': "",
        'HUN': ""
    },
    'g_f_left_index': {
        'EN': "left index",
        'CZ': "",
        'HUN': ""
    },
    'g_f_right_middle': {
        'EN': "right middle",
        'CZ': "",
        'HUN': ""
    },
    'g_f_right_index': {
        'EN': "right index",
        'CZ': "",
        'HUN': ""
    },
    'g_i_title': {
        'EN': "Instructions:",
        'CZ': "",
        'HUN': ""
    },
    'g_i_accuracy70': {
        'EN': "It is very important to stay focused during the experiment. Please do not do anything else while doing this task. Please note that we only accept jobs with >70% accuracy, which is a reasonable threshold based on our previous studies.",
        'CZ': "",
        'HUN': ""
    },
    'g_g_continue': {
        'EN': "Continue...",
        'CZ': "",
        'HUN': ""
    },
    'g_g_end': {
        'EN': "End experiment",
        'CZ': "",
        'HUN': ""
    },
    'g_g_general': {
        'EN': "If you have any questions, comments, or concerns about the experiment, please write them here...",
        'CZ': "",
        'HUN': ""
    },
    'g_g_practice': {
        'EN': "Click this button to start a practice session.",
        'CZ': "",
        'HUN': ""
    },
    'g_g_block_end': {
        'EN': "End of run",
        'CZ': "",
        'HUN': ""
    },
    'g_g_block_break': {
        'EN': "You may have a short break.",
        'CZ': "",
        'HUN': ""
    },
    'g_g_end_title': {
        'EN': "Complete!",
        'CZ': "",
        'HUN': ""
    },
    'g_g_end_detail': {
        'EN': "Thank you for your participation. Your overall score was <span id='Score'></span>%.",
        'CZ': "",
        'HUN': ""
    },
    'g_g_end_contact': {
        'EN': "If you have any questions or concerns about the experiment, you can contact the lead researcher:",
        'CZ': "",
        'HUN': ""
    },
    'g_g_data_save_ok': {
        'EN': "The data have been saved successfully.",
        'CZ': "",
        'HUN': ""
    },
    'g_g_data_save_error': {
        'EN': "An error occurred while saving the data. The server said:", // Participants probably want info on whether they'll be paid here
        'CZ': "",
        'HUN': ""
    },
    'g_g_rather_not_say': {
        'EN': "Rather not say",
        'CZ': "",
        'HUN': ""
    },
    'g_h_flanker': {
        'EN': "Middle letter",
        'CZ': "",
        'HUN': ""
    },
    'g_h_primeprobe': {
        'EN': "Second word",
        'CZ': "",
        'HUN': ""
    },
    'g_h_simon': {
        'EN': "Square colour",
        'CZ': "",
        'HUN': ""
    },
    'g_h_stroop': {
        'EN': "Ink colour",
        'CZ': "",
        'HUN': ""
    },
    'g_h_key': {
        'EN': "Key",
        'CZ': "",
        'HUN': ""
    },
    'g_p_title': {
        'EN': "Practice",
        'CZ': "",
        'HUN': ""
    },
    'g_p_end': {
        'EN': "End of practice",
        'CZ': "",
        'HUN': ""
    },
    'g_r_too_slow': {
        'EN': "too slow",
        'CZ': "",
        'HUN': ""
    },
    'g_r_correct': {
        'EN': "correct",
        'CZ': "",
        'HUN': ""
    },
    'g_r_incorrect': {
        'EN': "incorrect",
        'CZ': "",
        'HUN': ""
    },
    'g_s_down': {
        'EN': "down",
        'CZ': "",
        'HUN': ""
    },
    'g_s_left': {
        'EN': "left",
        'CZ': "",
        'HUN': ""
    },
    'g_s_right': {
        'EN': "right",
        'CZ': "",
        'HUN': ""
    },
    'g_s_up': {
        'EN': "up",
        'CZ': "",
        'HUN': ""
    },
    'g_s_red': {
        'EN': "red",
        'CZ': "",
        'HUN': ""
    },
    'g_s_green': {
        'EN': "green",
        'CZ': "",
        'HUN': ""
    },
    'g_s_blue': {
        'EN': "blue",
        'CZ': "",
        'HUN': ""
    },
    'g_s_yellow': {
        'EN': "yellow",
        'CZ': "",
        'HUN': ""
    },
    'g_s_h': {
        'EN': "H",
        'CZ': "",
        'HUN': ""
    },
    'g_s_m': {
        'EN': "M",
        'CZ': "",
        'HUN': ""
    },
    'g_s_s': {
        'EN': "S",
        'CZ': "",
        'HUN': ""
    },
    'g_s_t': {
        'EN': "T",
        'CZ': "",
        'HUN': ""
    },
    'f_i_overview': {
        'EN': "In this experiment, we are interested in how people resolve conflicts in the processing of visual stimuli. During this experiment, you will see strings of 7 letters presented in the center of the screen, as shown in the examples below.",
        'CZ': "",
        'HUN': ""
    },
    'f_i_responses': {
        'EN': "For each string, your task is to identify the center letter, while ignoring the other letters. For example, the correct responses to the examples above are S and T, respectively. You will use the <kbd>z</kbd>, <kbd>x</kbd>, <kbd>n</kbd> and <kbd>m</kbd> keys for responses. You will learn the correspondence between the letters and the keys later in the practice session. Please respond as fast as possible while trying to avoid making mistakes.",
        'CZ': "",
        'HUN': ""
    },
    'f_i_duration': {
        'EN': "The whole experiment is divided into 4 runs of about 4 minutes each (on average, 16 minutes in total). You may also have a short break between runs.",
        'CZ': "",
        'HUN': ""
    },
    'i_i_overview': {
        'EN': "In this experiment, we are interested in how people resolve conflicts in the processing of visual stimuli. During this experiment, you will see color squares shown in either upper, lower, left or right side of the screen, as shown in the examples below. ",
        'CZ': "",
        'HUN': ""
    },
    'i_i_detail': {
        'EN': "Your task is to identify the color of the box, while ignoring the position where the square appears. For example, the correct responses to the examples above are blue and red, respectively. Each color will be assigned to one of the four arrow keys, as highlighted below. You will learn how different colors are mapped to different arrow keys in the practise session later. Please respond as fast as possible while trying to avoid making mistakes.",
        'CZ': "",
        'HUN': ""
    },
    'i_i_keymap': {
        'EN': "While doing this task, please place your fingers in the way shown below:",
        'CZ': "",
        'HUN': ""
    },
    'i_i_duration': {
        'EN': "The whole experiment is divided into 4 runs of about 4 minutes each (on average, 16 minutes in total). You may also have a short break between runs.",
        'CZ': "",
        'HUN': ""
    },
    'p_i_overview': {
        'EN': "In this experiment, we are interested in how people pay attention to visual stimuli. During this experiment, you will see words which will flash rapidly. First you will see three identical words stacked on top of each other at the center of the screen (first picture, below), then you will see a single word (second picture). In each case, the words will all be UP, DOWN, LEFT, or RIGHT.",
        'CZ': "",
        'HUN': ""
    },
    'p_i_detail': {
        'EN': "Your task is to indicate the identity of this single word (not the 3 words that appear earlier). You will use the <kbd>f</kbd>, <kbd>g</kbd>, <kbd>j</kbd>, and <kbd>n</kbd> keys to respond. The responses are shown below, along with which fingers to use for which keys. In the example above, the single word was 'LEFT', so you would press the <kbd>f</kbd> key. In all trials, please respond as quickly as possible without making mistakes.",
        'CZ': "",
        'HUN': ""
    },
    'p_i_practice': {
        'EN': "To make sure you understand the task, and to help you learn the response keys, we will give you a few practice trials. If you make a mistake, an error message will appear. After the practice trials, there will be 4 test runs. Each test run will last about 3 minutes and 20 seconds. You may also have a short break between runs. The total time is about 16 minutes.",
        'CZ': "",
        'HUN': ""
    },
    'p_i_responses': {
        'EN': "You should place your fingers on the keys as shown below. The table showing which key to press for which response will remain visible during the practice runs.",
        'CZ': "",
        'HUN': ""
    },
    's_i_overview': {
        'EN': "In this experiment, we are interested in how people resolve conflicts in the processing of visual stimuli. During this experiment, you will see color words painted in different shades, as shown in the examples below.",
        'CZ': "",
        'HUN': ""
    },
    's_i_detail': {
        'EN': "Your task is to identify the color in which the word is printed, while ignoring the meaning of the word. For example, the correct responses to the 2 examples above are yellow and red, respectively. Each color will be assigned to one of the four response keys, as highlighted below. Please press the <kbd>z</kbd>, <kbd>x</kbd>, <kbd>n</kbd> and <kbd>m</kbd> keys using your left middle finger, left index finger, right index finger and right middle finger, respectively. You will learn how different shades are mapped to different response keys in the practise session later. Please respond as fast as possible while trying to avoid making mistakes.",
        'CZ': "",
        'HUN': ""
    },
    's_i_duration': {
        'EN': "The whole experiment is divided into 4 runs of about 6 minutes each (24 minutes in total). You may also have a short break between runs.",
        'CZ': "",
        'HUN': ""
    }

};

const LOC_IMG = {
    'f_keyboard': {
        'EN': "assets/flanker/Keyboard.jpg",
        'CZ': "",
        'HUN': ""
    },
    'i_keyboard': {
        'EN': "assets/simon/Keyboard1.jpg",
        'CZ': "",
        'HUN': ""
    },
    'p_keyboard': {
        'EN': "assets/primeprobe/Keyboard.jpg",
        'CZ': "",
        'HUN': ""
    },
    'p_ex1': {
        'EN': "assets/primeprobe/Example1_EN.jpg",
        'CZ': "",
        'HUN': ""
    },
    'p_ex2': {
        'EN': "assets/primeprobe/Example2_EN.jpg",
        'CZ': "",
        'HUN': ""
    },
    's_keyboard': {
        'EN': "assets/stroop/Keyboard.jpg",
        'CZ': "",
        'HUN': ""
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