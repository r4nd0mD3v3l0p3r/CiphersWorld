import {AlphabetSize} from '../ciphers/core/Alphabet'

export default {
    app_title: 'Ciphers World',
    sidebar_category_general: 'General',
    sidebar_category_ciphers: 'Ciphers',
    sidebar_route_home: 'Home',
    sidebar_route_about: 'About',
    sidebar_route_settings: 'Settings',
    sidebar_route_ciphers_atbash: 'Atbash',
    sidebar_route_ciphers_caesar: 'Caesar',
    sidebar_route_ciphers_vigenere: 'Vigenere',

    about_screen_text: 'This app is licensed under GPL3. You can find the source code in my ',
    about_screen_repo: 'Github repository',

    home_screen_welcome_title: 'Welcome to Cyphers World!',
    home_screen_welcome_text: 'A simple app to learn about ciphers and have some fun with them',

    settings_screen_please_configure: 'Please take a moment to configure the app',
    settings_screen_language: 'Language',
    settings_screen_done: 'Done',

    output_text_card_text_copied: 'Copied to clipboard',
    output_text_card_share: 'Share',
    output_text_card_copy: 'Copy',

    overview_cipher_description: 'Cipher description',
    overview_reference_links: 'Reference links',

    //ciphers

    ciphers_common_decryption_title: 'Decryption',
    ciphers_common_encryption_title: 'Encryption',
    ciphers_common_overview_title: 'Overview',
    ciphers_common_decrypted_text: 'Decrypted text',
    ciphers_common_encrypted_text: 'Encrypted text',
    ciphers_common_input_text: 'Enter text here',
    ciphers_common_clear_input_text_button: 'Clear input text',
    ciphers_common_decrypt_button: 'Decrypt',
    ciphers_common_encrypt_button: 'Encrypt',

    atbash_title: 'Atbash cipher',
    atbash_description: 'The Atbash cipher is a monoalphabetic substitution cipher, originally used to encrypt the Hebrew alphabet.',

    caesar_title: 'Caesar cipher',
    caesar_description: 'The Caesar cipher is a substitution cipher in which each letter of a given text is replaced by a letter some fixed number' +
        ' of positions down the alphabet. Julius Caesar used a right shift of 3 places to encrypt his messages.',
    caesar_shift: 'Shift',

    vigenere_title: 'Vigenere cipher',
    vigenere_description: 'The Vigenere cipher is a polyalphabetic cipher. It uses a series of interwoven Caesar ciphers, based on the letters of a keyword.',
    vigenere_keyword_placeholder: 'Enter keyword here',
    vigenere_clear_keyword_button: 'Clear keyword',
    vigenere_keyword_not_valid: 'Keyword not valid. Only characters are allowed.',

    hill_title: 'Hill cipher',
    hill_description: '',
    hill_error_bad_matrix: 'The matrix must respect this format: [[1,2],[3,4]]',
    hill_error_not_square_matrix: 'The matrix must be square',
    hill_error_matrix_det_zero: 'The matrix determinant is zero',
    hill_error_matrix_det_mod_not_coprimes: `The matrix determinant and the mod value (${AlphabetSize}) are not coprimes`,
}
