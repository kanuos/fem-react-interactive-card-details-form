// constants
const MAX_CARD_LENGTH = 16;
/**
 * Function accepts a date string and returns a maxLength lengthed digit version of the input
 * Default value - "00"
 * 
 * @param xx string
 * @param maxLength number
 * @returns stringified two digit date
 */
export function getPaddedDigits(xx = "00", maxLength = 2): string {
    // trim the whitespaces
    // padStart - converts 2 to 02 
    // slice - converts 222 - 22, 02 - 02
    return xx.trim().padStart(maxLength, "0").slice(0, maxLength);
}


/**
 * Function accepts a credit-card string 
 * and returns a string[] representing group of 4 digits
 * 
 * @param card string
 * @returns string[]
 */
export function getFormattedCreditCard(card: string): string[] {
    // trim and convert the card to 16 digits
    // if spaces exist in the string - they are omitted
    // if card is less than 16 digits long - fill the gap with 0s at the end
    // if card length is greater than 16 - restrict to the first 16 chars
    card = card.trim().replaceAll(' ', '').padEnd(MAX_CARD_LENGTH, "0").slice(0, MAX_CARD_LENGTH);
    return groupDigits(card);
}




/**
 * Receives a string (preferably of digits) and returns a credit card formatted string
 * in format [xxxx xxxx xxxx xxxx]
 * e.g. 
 * input - 1234567890123456
 * output - 1234 5678 9012 3456
 * @param cc string
 * @returns string
 */
export function getSpacedDigitCreditCard(cc: string): string {
    // empty input returns empty string
    // trim off the excess of 16 digits from right end
    cc = cc.trim().replaceAll(' ', '').slice(0, MAX_CARD_LENGTH);
    if (cc.length === 0) {
        return cc;
    }
    return groupDigits(cc).join(" ")
}


/**
 * Receives a string (preferably digits) and returns a group of digits with each group 
 * comprising a max of maxGroupLength characters
 * Default maxGroupLength = 4
 * e.g 
 * input - 123456789
 * output - ["1234", "5678", "9"]
 * 
 * @param numStr string
 * @param maxGroupLength number
 * @returns string []
 */
export function groupDigits(numStr: string, maxGroupLength = 4): string[] {
    // loop over the card and store a group of 4 chars to temp variable
    // each temp is pushed to digitGroup 
    const digitGroup: string[] = [];

    let temp = "";

    numStr.split('').forEach(digit => {
        if (digit.length === 0) return;
        if (temp.length >= maxGroupLength) {
            digitGroup.push(temp);
            temp = "";
        }
        temp += digit;
    })

    // add the remaining group in temp to the array
    digitGroup.push(temp);

    // return non-empty groups only
    return digitGroup.filter(el => el.length > 0)
}