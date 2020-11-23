/**
 * unit 0 => 개
 * unit 1 => g
 *
 * price => 원?
 */
const assets = "/assets/markeyImg/";
export default [
  {
    id: 1,
    seller: [
      {
        sid: 1,
        title: "금강방앗간",
        info: "우리 쌀로 만들어 건강하고 안심할 수 있는 먹을거리",
        src: "/assets/markeyImg/금강방앗간.jpeg",
        titleImage: "title_img",
        content: [
          {
            title: "김",
            unit: 0,
            price: 2,
          },
          {
            title: "밥",
            unit: 1,
            price: 34,
          },
          {
            title: "굴비1",
            unit: 1,
            price: 51,
          },
          {
            title: "굴비2",
            unit: 1,
            price: 23,
          },
          {
            title: "굴비3",
            unit: 1,
            price: 32,
          },
        ],
      },
      {
        sid: 2,
        title: "낙원떡집",
        info: "너는 글을 쓰거라 나는 떡을 썰 테니. 전국 배송 가능합니다 ^^",
        src: `${assets}/낙원떡집.jpeg`,
        titleImage: "title_img",
        content: [
          {
            title: "김",
            unit: 0,
            price: 0.1,
          },
          {
            title: "밥",
            unit: 1,
            price: 1.1,
          },
          {
            title: "굴비1",
            unit: 1,
            price: 1,
          },
          {
            title: "굴비2",
            unit: 1,
            price: 2,
          },
          {
            title: "굴비3",
            unit: 1,
            price: 3,
          },
        ],
      },
      {
        sid: 3,
        title: "대재청과",
        info: "상큼한 향기가 나는 대재청과로 오세요!",
        src: `${assets}대재청과.jpeg`,
        titleImage: "title_img",
        content: [
          {
            title: "김",
            unit: 0,
            price: 0.1,
          },
          {
            title: "밥",
            unit: 1,
            price: 1.1,
          },
          {
            title: "굴비1",
            unit: 1,
            price: 1,
          },
          {
            title: "굴비2",
            unit: 1,
            price: 2,
          },
          {
            title: "굴비3",
            unit: 1,
            price: 3,
          },
        ],
      },
      {
        sid: 4,
        title: "대풍정육",
        info: "좋은 질의 정육만 취급합니다",
        src: `${assets}대풍정육.jpeg`,
        titleImage: "title대풍정육_img",
        content: [
          {
            title: "김",
            unit: 0,
            price: 0.1,
          },
          {
            title: "밥",
            unit: 1,
            price: 1.1,
          },
          {
            title: "굴비1",
            unit: 1,
            price: 1,
          },
          {
            title: "굴비2",
            unit: 1,
            price: 2,
          },
          {
            title: "굴비3",
            unit: 1,
            price: 3,
          },
        ],
      },
      {
        sid: 5,
        title: "떡고을",
        info: "쫄깃쫄깃 그 날 뽑은 떡!",
        src: `${assets}떡고을.jpeg`,
        titleImage: "title_img",
        content: [
          {
            title: "김",
            unit: 0,
            price: 0.1,
          },
          {
            title: "밥",
            unit: 1,
            price: 1.1,
          },
          {
            title: "굴비1",
            unit: 1,
            price: 1,
          },
          {
            title: "굴비2",
            unit: 1,
            price: 2,
          },
          {
            title: "굴비3",
            unit: 1,
            price: 3,
          },
        ],
      },
      {
        sid: 6,
        title: "못난이만두",
        info: "만두를 먹고싶을 만두",
        src: `${assets}못난이만두.jpeg`,
        titleImage: "title_img",
        content: [],
      },
      {
        sid: 7,
        title: "영신상회",
        info: "반찬 판매합니다",
        src: `${assets}영신상회.jpeg`,
        titleImage: "title_img",
        content: [],
      },
      {
        sid: 8,
        title: "형제왕식자재",
        info: "형제가 운영하는 식자재마트입니다 ㅎㅎ",
        src: `${assets}형제왕식자재.jpeg`,
        titleImage: "title_img",
        content: [],
      },
    ],
  },
  {
    id: 2,
    seller: [],
  },
];
