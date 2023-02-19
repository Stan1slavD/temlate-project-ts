/** Возвращает обложку, если ее нет
 *  @param {string} data - url обложки
 */
export function getImg(data:string):string {
  if (data == "") {
    return "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
  } else return data;
}
