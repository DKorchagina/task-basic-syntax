export function romanToInteger(str) {
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let rez = 0;
    let curLen = 0;
    let prev;
    while (str.length>curLen) {
        switch(str[curLen]) {
            case 'M':
                if (prev == "C") {
                    rez += 800;
                }
                else {
                    rez += 1000;
                }
                curLen += 1;
                break;
            case 'D':
                if (prev == "C") {
                    rez += 300;
                }
                else {
                    rez += 500;
                }
                curLen += 1;
                break;
            case 'C':
                if (prev == "X") {
                    rez += 80;
                }
                else {
                    rez += 100;
                }
                curLen += 1;
                break;
            case 'L':
                if (prev == "X") {
                    rez += 30;
                }
                else {
                    rez += 50;
                }
                curLen += 1;
                break;
            case 'X':
                if (prev == "I") {
                    rez += 8;
                }
                else {
                    rez += 10;
                }
                curLen += 1;
                break;
            case 'V':
                if (prev == "I") {
                    rez += 3;
                }
                else {
                    rez += 5;
                }
                    curLen += 1;
                    break;
            default:
                rez += 1;
                curLen += 1;
        }
        prev = str[curLen-1];
    };
    return rez;
}
