# bit-bit-bit

## 🌏 WebSite
https://turtle601.github.io/bit-bit-bit

## 🌁 Background
이 프로젝트는 `normad-corder React Master Course` 챌린지 과제 제출용입니다. <br />
혹시라도 저작권 및 문제가 생긴다면 바로 Private Repository로 돌리도록 하겠습니다. 

## 🐕‍🦺 Usage
- React.js
- Typescript
- react-router-dom
- Styled-component
- ApexChart.js (for chart)
- gh-pages (배포)
- api : https://api.coinpaprika.com/

## ver 1.
`구현 기간` : 2022.01.26 ~ 2022.01.28

`신경써서 구현했던 것` :
- 다크모드 커스텀 훅 구현 (useDarkMode())
- 재사용성 고려(css, ts함수들) + 극한의 모듈화 
- 함수명을 직관적으로 하기
- css grid, flex를 이용한 반응형 디자인

- ts 이해하기
> ts사용이 처음이라 어떤 식으로 type을 선언하고 js와 다른 점을 파악하려고 애썼습니다.

- git 
> 1. issue탭과 project탭의 활용
> 2. `main`을 배포용, `develop` 개발용, develop위의 여러 브랜치를 `feature/...`, `chores/...` 등으로 이름지어 개발을 진행하고 merge 시키는 식으로 진행하였습니다. 

`아쉬웠던 점` :
- 3일 안에 제출이었기 때문에 많은 기능을 구현하지 못했던 점
- 성능 최적화가 이루어지지 않았다.
- api데이터 로딩 시 시간이 오래 걸리는 문제(한번 방문했으면 다음 번에는 바로 로딩하게 하기) 해결 X
