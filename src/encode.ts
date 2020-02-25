import { UNUSABLE_START, UNUSABLE_SHIFT } from "./const";

export default function encode(bufferArray : number[], START = 38) {
    let string = "";
    const array = bufferArray;
    const padding = (5 - (array.length % 5)) % 5;
    array.push(...(new Array(padding)).fill(0));

    for(let i = 0; i < array.length ; i += 5) {
        let left = array[i] + (array[i+1] * 256) + ((array[i+2] % 16) * 65536) + START;
        let right = Math.floor(array[i+2] / 16) + (array[i+3] * 16) + (array[i+4] * 4096) + START;
        if(left >= UNUSABLE_START) left += UNUSABLE_SHIFT;
        if(right >= UNUSABLE_START) right += UNUSABLE_SHIFT;

        string += String.fromCodePoint(left);
        string += String.fromCodePoint(right);
    }

    return padding + string;
}