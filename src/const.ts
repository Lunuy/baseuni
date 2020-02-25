
//Define constants to control unusable unicode area.
export const UNUSABLE_START = 0xD800;
export const UNUSABLE_END = 0xE000;
export const UNUSABLE_SHIFT = UNUSABLE_END - UNUSABLE_START;
export const UNUSABLE_UNSHIFT = UNUSABLE_START - UNUSABLE_END;