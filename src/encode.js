/**
 * Convert to utf-8
 *
 * @param {string} text
 */
export default function encode (text) {
  let utf8 = ''
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i)
    if (c >= 0x0001 && c <= 0x007f) {
      utf8 += text.charAt(i)
    } else if (c > 0x07ff) {
      utf8 += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f))
      utf8 += String.fromCharCode(0x80 | ((c >> 6) & 0x3f))
      utf8 += String.fromCharCode(0x80 | ((c >> 0) & 0x3f))
    } else {
      utf8 += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f))
      utf8 += String.fromCharCode(0x80 | ((c >> 0) & 0x3f))
    }
  }

  return utf8
}
