# fetch로 API 받아오기

```JSX
const fetchMaterialHandler = async () => {
  const response = await fetch(MATERIAL_URL);
  const data = await response.json();

  setMaterialData(data);
};
```

- 영양정보 데이터와 레시피 데이터 둘 다 동일하게 fetch()를 이용하여 가져왔습니다.
  <br />
  <br />

# useEffect 사용

```JSX
useEffect(() => {
  fetchRecipeHandler();
}, []);

if (recipeData.length === 0) {
  return;
}
```

```JSX
useEffect(() => {
  fetchMaterialHandler();
}, [MATERIAL_URL, enteredInputValue]);

if (materialData.length === 0) {
  return null;
}
```

- 레시피 데이터는 처음 렌더 되었을 때만 동작하도록 dependency를 빈 배열로 두었습니다.
- 영양정보 데이터는 Form 컴포넌트에서 입력하는 값을 받아와 url을 변경하여 그에 맞는 영양정보 데이터를 받아와야 하기 때문에 Form 컴포넌트에서 받아온 값과 영양정보url이 변경될 때만 함수가 실행되도록 해주었습니다.
  <br />
  <br />

# API 통신하면서 막혔던 문제점

### 초기 작성 코드

![1](https://user-images.githubusercontent.com/87428495/207273657-15d49dfb-9ab0-48d8-8ba4-40e7db388268.JPG)

- fetch()로 데이터를 받아오고 브라우저를 새로고침하면 오류가 났습니다.
  <br />
  <br />
  <br />

### 오류 화면

![2](https://user-images.githubusercontent.com/87428495/207272644-8803e8d5-15ae-4f49-8b22-955eb700a505.JPG)

<br />
<br />
<br />

## 내가 생각한 문제원인

- 초기 state를 const [recipeData, setRecipeData] = useState([]); <br />
  로 빈 배열을 초깃값으로 지정해주었기 때문에 데이터가 받아와지기 전 값이 다음 컴포넌트로 넘어가면서 나는 것이 원인이라고 생각했습니다.
  <br />
  <br />
  <br />

## 해결한 방법

![3](https://user-images.githubusercontent.com/87428495/207273441-11a97892-ed82-458d-b09d-e7f7e239cdc8.JPG)

- 데이터를 받아오는 함수를 따로 작성해주고 useEffect를 이용하여 페이지가 렌더 되었을 때만 실행되도록 해주었고, 받아온 데이터의 길이가 0일 경우에는 null을 반환하도록 해주었습니다.
