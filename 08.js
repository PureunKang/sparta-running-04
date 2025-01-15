/**
 * [08.js]
 *
 * - 어떤 API의 JSON 응답에서 status, result, records 등의 계층 구조가 있습니다.
 * - records 배열의 각 요소에는 { id, detail: { name } } 형태로 정보가 들어있습니다.
 * - extractNames 함수를 작성하세요:
 *   1) fetch를 이용해 JSON 데이터를 받아오고
 *   2) result.records 안에 있는 모든 name 값을 추출해
 *   3) name 값을 문자열 배열로 반환하세요.
 *
 * @param {string} url
 * @returns {Promise<string[]>}
 */
async function extractNames(url) {
  try {
    const res1 = await fetch(url);
    const res2 = await res1.json();
    const records = res2.result.records;
    return records.map((n) => n.detail.name);
  } catch (err) {
    console.log(err);
  }
}

// export 수정 불가
export { extractNames };
