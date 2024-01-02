## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.  
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

### ❗ 필수

// TODO:

- [O] 원하는 특정 기업을 하나 선정하거나 새로운 가상의 기업을 만드세요!
- [o] 해당 기업의 할 일 목록(List)이 출력되는 페이지가 있어야 합니다! (예시)`example.com/`)
- [ ] 해당 기업 혹은 담당 개발자에 대한 간단한 소개 페이지가 포함돼야 합니다! (예시) `example.com/about`)
- [ ] 할 일 항목(Item)을 새롭게 추가할 수 있어야 합니다!
- [ ] 실제 서비스로 배포하고 외부에서 접근 가능한 링크를 추가해야 합니다! (Vercel, Netlify, AWS, GCP 등)
- [ ] 각 페이지를 데스크탑과 모바일 등 다양한 디바이스 크기에 대응하는 반응형 레이아웃으로 만들어야 합니다!

### ❔ 선택

- [ ] 할 일 항목을 수정할 수 있도록 만들어보세요.
- [ ] 할 일 항목을 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어보세요. (추천 라이브러리 - [SortableJS](http://sortablejs.github.io/Sortable/))
- [ ] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해보세요.
- [ ] 할 일을 완료한 항목을 한 번에 삭제할 수 있도록 만들어보세요.
- [ ] 할 일 항목의 최신 수정일을 표시해보세요.
- [ ] 할 일 목록이 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 기타 동작이 완료되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 할 일과 관련된 기타 기능도 고려해보세요.

## API 사용법

요청 주소(Endpoint)

```curl
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

모든 API 요청(Request)은, 다음 사용 예시와 같이 `headers` 정보가 꼭 포함돼야 합니다!
`username`은 `KDTX_ParkYoungWoong`와 같이 본명을 포함하고 파스칼 케이스로 작성해야 합니다!
확인할 수 없는 사용자의 DB 정보는 임의로 삭제될 수 있습니다!

API 사용 예시:

```js
async function createTodo() {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_ParkYoungWoong",
      },
      body: JSON.stringify({
        title: "아침 먹기!",
      }),
    }
  );
  const json = await res.json();
  console.log(json);

  return json;
}
```

### 목록 조회

전체 할 일 목록을 조회합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'GET'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type ResponseValue = Todo[]; // 할 일 목록

interface Todo {
  id: string; // 할 일 ID
  order: number; // 할 일 순서
  title: string; // 할 일 제목
  done: boolean; // 할 일 완료 여부
  createdAt: string; // 할 일 생성일
  updatedAt: string; // 할 일 수정일
}
```

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS 공부하기",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "과제 PullRequest(PR) 생성",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API 스터디",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### 항목 추가

할 일 항목을 새롭게 추가합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'POST'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title: string; // 할 일 제목 (필수!)
  order?: number; // 할 일 순서
}
```

```json
{
  "title": "KDT 과정 설계 미팅",
  "order": 2
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}
```

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT 과정 설계 미팅",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 수정

특정 할 일 항목을 수정합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'PUT'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title: string; // 할 일 제목 (필수!)
  done: boolean; // 할 일 완료 여부 (필수!)
  order?: number; // 할 일 순서
}
```

```json
{
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2
}
```

응답 데이터 타입 및 예시:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 삭제

특정 할 일 항목을 삭제합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'DELETE'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true;
```

### 항목 일괄 삭제

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions
  \ -X 'DELETE'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  todoIds: string[]; // 삭제할 할 일 ID 목록 (필수!)
}
```

```json
{
  "todoIds": [
    "mnIwaAPIAE1ayQmqekiR",
    "tMzPImGoWtRdJ6yyVv2y",
    "GHrvr3LaPx1g7y2sNuaC",
    "Rq8BebKihCgteHHhMIRS"
  ]
}
```

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true;
```

### 목록 순서 변경

할 일 목록의 순서를 변경합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder
  \ -X 'PUT'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  todoIds: string[]; // 새롭게 정렬할 할 일 ID 목록 (필수!)
}
```

```json
{
  "todoIds": [
    "mnIwaAPIAE1ayQmqekiR",
    "tMzPImGoWtRdJ6yyVv2y",
    "GHrvr3LaPx1g7y2sNuaC",
    "Rq8BebKihCgteHHhMIRS"
  ]
}
```

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true; // 순서 변경 여부
```

```
KDT7-M2,
├─ .git,
│  ├─ config,
│  ├─ description,
│  ├─ FETCH_HEAD,
│  ├─ HEAD,
│  ├─ hooks,
│  │  ├─ applypatch-msg.sample,
│  │  ├─ commit-msg.sample,
│  │  ├─ fsmonitor-watchman.sample,
│  │  ├─ post-update.sample,
│  │  ├─ pre-applypatch.sample,
│  │  ├─ pre-commit.sample,
│  │  ├─ pre-merge-commit.sample,
│  │  ├─ pre-push.sample,
│  │  ├─ pre-rebase.sample,
│  │  ├─ pre-receive.sample,
│  │  ├─ prepare-commit-msg.sample,
│  │  ├─ push-to-checkout.sample,
│  │  └─ update.sample,
│  ├─ index,
│  ├─ info,
│  │  └─ exclude,
│  ├─ objects,
│  │  ├─ 01,
│  │  │  └─ 208f86455645ae2cdbea68be34ec8cf34095c4,
│  │  ├─ 14,
│  │  │  └─ 6e0149cd3ada00457d597f3f28230dc4d15758,
│  │  ├─ 15,
│  │  │  └─ 2761ebf2f75adf3be4645fb1e4dd6340ae6027,
│  │  ├─ 20,
│  │  │  └─ 0eaab0f009c93fae9b31231465e77d9d62ac69,
│  │  ├─ 23,
│  │  │  └─ c4474cf480930c11805f50f4ec378672ffc8fe,
│  │  ├─ 2e,
│  │  │  ├─ 7af2b7f1a6f391da1631d93968a9d487ba977d,
│  │  │  └─ ae2b15dca634f0ceb4734422fbf3091d319939,
│  │  ├─ 30,
│  │  │  └─ 9884105efb27f0711bae09d0894c9544fae079,
│  │  ├─ 33,
│  │  │  └─ 88607933dd1adb6f72f81867a69eeed049c2ae,
│  │  ├─ 40,
│  │  │  └─ 78e7476a2eaf5705d327b5c9d459c234c01652,
│  │  ├─ 49,
│  │  │  └─ 4bfe0835347cf0c0cf2edead124810ffc34e1e,
│  │  ├─ 50,
│  │  │  ├─ 28233c1d45a98b227e254722f96391dae76861,
│  │  │  └─ 620ec85d337be736575d70ca9f0ffd3c449b2c,
│  │  ├─ 55,
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e,
│  │  ├─ 5f,
│  │  │  └─ b548f2b4f61aeac797755caf7f7945ab96040c,
│  │  ├─ 60,
│  │  │  └─ 651b9fd54435950113386e3f4292a9dca0f8e9,
│  │  ├─ 61,
│  │  │  └─ 7f5e93c0a72d292f814113fa72fb5f02b4a011,
│  │  ├─ 6c,
│  │  │  └─ 1ec159d8470ee9565d66c0eee1ea88308d63f1,
│  │  ├─ 73,
│  │  │  ├─ 6a03e8875bcf2fce9968435d5836dc6cf865ee,
│  │  │  └─ 9bd864619f9ed62f0235d3669c6cabbb366f47,
│  │  ├─ 79,
│  │  │  └─ 545d95471f537e11c1d1d23bc9adce2fe3f2c2,
│  │  ├─ 86,
│  │  │  └─ 9ef7aa47c8889605b9b505009b372c4f48f253,
│  │  ├─ 88,
│  │  │  └─ a317cea438ab2a69eea2a21178ec3defac7f8e,
│  │  ├─ 8a,
│  │  │  └─ 909a15a0ebffc001e639084f10d592f0a73ebc,
│  │  ├─ 8b,
│  │  │  ├─ 9d240496f965f1fa6ebeceef309457802c6a3e,
│  │  │  └─ ffbc75358fba790e2edddfea23c8109ffab72d,
│  │  ├─ 8d,
│  │  │  ├─ 6ff4d3d1f835c31485a8fe406c80996484aa15,
│  │  │  └─ 7bb793cc58ee325c7de808368894d35be07c87,
│  │  ├─ 90,
│  │  │  └─ a76d46825b16894c2eb315dcc6bcb26ae7c450,
│  │  ├─ 97,
│  │  │  └─ 9b4dfc91c86e8e860b194a6507a0143ee9e04f,
│  │  ├─ a4,
│  │  │  └─ 816abf7191176a24ad799c195d7c5e438ffa28,
│  │  ├─ a5,
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1,
│  │  ├─ ac,
│  │  │  └─ 5a77d69942b875a86daa324b03552d44b44089,
│  │  ├─ b0,
│  │  │  └─ 683fd24d70abb7eeaeef8e39e3a12b4e74775a,
│  │  ├─ b4,
│  │  │  └─ a9199f8082d9d37869d07f7b181445224a43e8,
│  │  ├─ b6,
│  │  │  ├─ 68a6386e0f610ebbf5fc4da61344af4509533a,
│  │  │  ├─ 8ae1b2e75399dd4b7759d8d6ea841ad59f2f61,
│  │  │  └─ c5f0afafd6f2e009ed3d2c5de7351bcf7fb12d,
│  │  ├─ bd,
│  │  │  └─ ef82015138f5b7e152e7f52faa12e081de932b,
│  │  ├─ c0,
│  │  │  └─ 64ba6f74a5358909a7534a85de0e4c5bd829ed,
│  │  ├─ c4,
│  │  │  └─ 70c812406be9268404738614a543b9d64f4f17,
│  │  ├─ c5,
│  │  │  └─ e08481f8aede5a6cc897b0f034e806a8617d7d,
│  │  ├─ d4,
│  │  │  └─ 8c54938bc654e0743785ea29478e9cdefd91e0,
│  │  ├─ d7,
│  │  │  └─ 0196943d0d24fc6f262d0e6c91407a94d21eda,
│  │  ├─ db,
│  │  │  └─ cad782b692d0be48ee1bc65a98561f8d498154,
│  │  ├─ e5,
│  │  │  └─ 07aecf3fcb25e4b8ea1a4a386513a6f4f5ea8b,
│  │  ├─ e6,
│  │  │  ├─ 3d4102f7f929e7816ea288951b63294fc078d2,
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391,
│  │  ├─ e7,
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3,
│  │  ├─ e8,
│  │  │  ├─ 94c25d31bcaab5a833f4b720ed4fbcc3d6e922,
│  │  │  └─ b590f1f5059976394f8d7a37e6c0d49ba12ef3,
│  │  ├─ e9,
│  │  │  └─ 8cedef3a2dbab05c3db2aa7cb1b2daae8d83ab,
│  │  ├─ eb,
│  │  │  └─ 2970a0017fa1fd7ec7bda07dc7ed2b8e45a4a2,
│  │  ├─ ec,
│  │  │  └─ 41587b5c33f73da501eac1f85f563b5277ca1d,
│  │  ├─ ed,
│  │  │  └─ c74ae1be9b868056f1c08a81ee3367c92bcc44,
│  │  ├─ ee,
│  │  │  └─ 74586eda404ecad96d96ac0876f7a0c88f437e,
│  │  ├─ f0,
│  │  │  ├─ 8b547ddaca0409492f5d67479a03d2486982a0,
│  │  │  └─ e0db47e96edbefe90337223cda3c2443624e60,
│  │  ├─ ff,
│  │  │  └─ 6c75bd3496250422172ece6dcf5495e087c80f,
│  │  ├─ info,
│  │  └─ pack,
│  │     ├─ pack-359dc96789064cd7b7e5923095934b825b9d7ccd.idx,
│  │     ├─ pack-359dc96789064cd7b7e5923095934b825b9d7ccd.pack,
│  │     ├─ pack-a2cde6e08f3b6ce94fed4a8e6a9716bfee4c6b34.idx,
│  │     └─ pack-a2cde6e08f3b6ce94fed4a8e6a9716bfee4c6b34.pack,
│  ├─ packed-refs,
│  └─ refs,
│     ├─ heads,
│     │  └─ main,
│     ├─ remotes,
│     │  └─ origin,
│     │     ├─ HEAD,
│     │     ├─ KDT07_JungJiHye,
│     │     ├─ KDT7_ChoiHongJoo,
│     │     └─ KDT7_LimHyunSung,
│     └─ tags,
├─ .gitignore,
├─ api,
│  └─ api.js,
├─ index.html,
├─ package-lock.json,
├─ package.json,
├─ public,
│  └─ sunyanglogo.svg,
├─ README.md,
└─ src,
   ├─ App.js,
   ├─ components,
   │  ├─ TextField.js,
   │  ├─ TheHeader.js,
   │  ├─ TheHeader.module.scss,
   │  ├─ TodoItem.js,
   │  └─ TodoItem.module.scss,
   ├─ core,
   │  └─ core.js,
   ├─ main.js,
   ├─ main.scss,
   ├─ routes,
   │  ├─ About.js,
   │  ├─ Home.js,
   │  ├─ index.js,
   │  └─ NotFound.js,
   └─ store,
      └─ message.js,

```
