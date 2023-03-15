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
    const MAX_CARD_LENGTH = 16;
    // trim and convert the card to 16 digits
    // if spaces exist in the string - they are omitted
    // if card is less than 16 digits long - fill the gap with 0s at the end
    // if card length is greater than 16 - restrict to the first 16 chars
    card = card.trim().replaceAll(' ', '').padEnd(MAX_CARD_LENGTH, "0").slice(0, MAX_CARD_LENGTH);


    // loop over the card and store a group of 4 chars to temp variable
    // each temp is pushed to digitGroup 
    const digitGroup: string[] = [];

    let temp = "";

    card.split('').forEach(digit => {
        if (temp.length >= 4) {
            digitGroup.push(temp);
            temp = "";
        }
        temp += digit;
    })

    // add the remaining group in temp to the array
    digitGroup.push(temp);
    return digitGroup;
}