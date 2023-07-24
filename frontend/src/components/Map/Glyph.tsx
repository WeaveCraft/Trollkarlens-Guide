export const markerGlyph = (status: number, info: string | null): string => {
    if (status === 2) {
      return '\ue876';
    } else if (info === null || info === '') {
      return '\ue061';
    } else {
      return '\ue645';
    }
  };
  
  export const markerGlyphSize = (code: string): string => {
    if (code.toString() === '\ue061') {
      return '1em';
    }
    return '2em';
  };