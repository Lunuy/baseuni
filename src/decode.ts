import { UNUSABLE_END, UNUSABLE_UNSHIFT } from "./const";

export default function decode(encoded : string, START = 38) {
    const array = [];
    const padding = parseInt(encoded[0]);
    for(let i = 1; encoded.codePointAt(i);) {
        const leftSize = String.fromCodePoint(encoded.codePointAt(i)).length;
        const rightSize = String.fromCodePoint(encoded.codePointAt(i+leftSize)).length;
        let left = encoded.codePointAt(i);
        let right = encoded.codePointAt(i + leftSize);
        if(left >= UNUSABLE_END) left += UNUSABLE_UNSHIFT;
        if(right >= UNUSABLE_END) right += UNUSABLE_UNSHIFT;
        left -= START;
        right -= START;

        array.push(
            left % 256,
            Math.floor(left / 256) % 256,
            Math.floor(left / 65536) + (16 * (right % 16)),
            Math.floor(right / 16) % 256,
            Math.floor(right / 4096) % 256
        );

        i += leftSize;
        i += rightSize;
    }
    if(padding) array.splice(-padding);
    return array;
}