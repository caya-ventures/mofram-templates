export const shortenedText = (text: string, separator: string = '-', spacing: string = '...'): string => {
    if (!text) return '';
    const textParts = text.split(separator);
    return `${textParts[0]}${separator}${spacing}${separator}${textParts[textParts.length-1]}`;
}
