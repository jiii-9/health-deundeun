# 검색 결과에 중복되는 재료 제거하기

```JSX
const duplicateWordFilter = dataResultItems.filter(
  (arr, index, callback) =>
    index === callback.findIndex(item => item.DESC_KOR === arr.DESC_KOR)
);
```

- 예시로 '연어'를 검색했을 때, 검색결과에 연어가 2개 출력이 되었다.
- return 되는 값 안에서 filter를 사용하여 중복값을 다시 제거해준다.
- filter함수의 세 번째 인자로 callback이 들어가는데 배열의 값을 callback함수로 전달하여 해당값들이 callback함수에 정의된 기준에 부합하는지 검사하고 true만 모아서 리턴해준다.
