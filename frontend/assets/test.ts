const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
export const TEST = {
  info: {
    mainTitle: '여행 성향 테스트',
    subTitle: '나와 가장 잘 맞는 여행지는 어디일까?!✈',
  },
  questions: [
    {
      no: 0,
      question: '4박 5일의 휴가를 가지게된 나 어떤 여행을 계획할까?',
      answers: [
        {
          content: '내 마음대로 가는 여행이 좋다',
          no: 1,
          result: -1,
        },
        {
          content: '계획대로 정해진 패키지 여행이 좋다',
          no: 3,
          result: -1,
        },
      ],
    },
    {
      no: 1,
      question: '내 마음대로 떠나기로한 당신 어떤 교통수단을 이용할 것인가?',
      answers: [
        {
          content: '대중교통을 타면서 여유롭게 창밖 구경을 해볼까?',
          no: 2,
          result: -1,
        },
        {
          content: '자동차를 타면서 여행은 자유롭게 다녀야지!',
          no: 4,
          result: -1,
        },
      ],
    },
    {
      no: 2,
      question: '차를 타기로 정했다. 이제 여행 계획을 세워보자',
      answers: [
        {
          content: '금강산도 식후경! 맛집부터 찾자!',
          no: 5,
          result: -1,
        },
        {
          content: '어디 관광지가 핫하더라,, 인스타를 켜본다',
          no: 4,
          result: -1,
        },
      ],
    },
    {
      no: 3,
      question: '패키지 여행을 떠나기로한 당신 어떤 코스를 고를것인가?',
      answers: [
        {
          content: '평소에 잘 알려진 유명 관광명소가 많은 여행',
          no: 6,
          result: -1,
        },
        {
          content: '평소에 잘 알려지지 않은 숨은 명소 여행',
          no: 4,
          result: -1,
        },
      ],
    },
    {
      no: 4,
      question: '여행 코스를 찾아보고 있는 당신, 일정은 어떻게 잡을것인가?',
      answers: [
        {
          content: '청정 자연속에서 여유롭게 쉬고싶다~',
          no: 7,
          result: -1,
        },
        {
          content: '여행은 쉴틈이 있으면 안돼 이곳저곳 돌아다니자구!',
          no: 6,
          result: -1,
        },
      ],
    },
    {
      no: 5,
      question: '밥을 든든하게 먹고 어디갈지를 찾아보는 당신',
      answers: [
        {
          content: '주변에 역사 유적지가 있네? 한번 가볼까?',
          no: 8,
          result: -1,
        },
        {
          content: '밥도 든든하게 먹었겠다 자연에서 산책한번 해야지!',
          no: 7,
          result: -1,
        },
      ],
    },
    {
      no: 6,
      question:
        '휴가가 끝나 돌아가려고 하는데 3일의 휴가가 더 생긴 당신! 어디를 갈 것인가?',
      answers: [
        {
          content: '역시 즐길거리가 많은 도시가 좋지!',
          no: -1,
          result: 0,
        },
        {
          content: '도시를 벗어나 새로운 즐길거리를 찾아볼까?',
          no: -1,
          result: 1,
        },
      ],
    },
    {
      no: 7,
      question: '자연을 선택한 당신 산과 바다 둘중 하나를 고른다면?',
      answers: [
        {
          content: '다시 내려올거면 왜 올라가? 뭐니뭐니해도 바다가 최고야',
          no: -1,
          result: 2,
        },
        {
          content: '추운 바닷바람보다 공기맑고 푸른 산이 좋지',
          no: -1,
          result: 3,
        },
      ],
    },
    {
      no: 8,
      question: '근처에 2개의 유적지가 있다. 어디를 갈지 고민하는 당신',
      answers: [
        {
          content:
            '고인돌같이 평소에 보기 힘든 이색적이고 특별한 유적지가 좋다.',
          no: -1,
          result: 4,
        },
        {
          content: '경복궁같이 익숙하고 전통적인 멋이 가득 담긴 유적지가 좋다.',
          no: -1,
          result: 5,
        },
      ],
    },
  ],
  results: [
    {
      type: 'A',
      title: '역동적이고 에너지가 넘치는 청춘 여행 스타일',
      desc: '<h1><label>역동적이고 에너지</label>가 넘치는 청춘 여행 스타일</h1>',
      color: '#FF2323',
      courses: [
        {
          no: 545,
          title: '낮이 좋아? 밤이 좋아? 서울의 주경, 야경 여행코스',
          image: IMAGE_URL + '2/11875',
        },
        {
          no: 826,
          title: '영화 마니아를 위한 로맨틱 여행',
          image: IMAGE_URL + '1/10709',
        },
      ],
    },
    {
      type: 'B',
      title: '유명한 관광지만 골라가는 알짜배기 여행 스타일',
      desc: '<h1><label>유명한 관광지</label>만 골라가는 알짜배기 여행 스타일</h1>',
      color: '#FF1895',
      courses: [
        {
          no: 731,
          title: '제주도 세계자연유산 탐방 1 코스',
          image: IMAGE_URL + '1/17017',
        },
        {
          no: 559,
          title: '경복궁 북쪽마을 북촌 즐기기',
          image: IMAGE_URL + '2/11875',
        },
      ],
    },
    {
      type: 'C',
      title: '탁 트인 바다를 보며 느긋하게 힐링하는 여행 스타일',
      desc: '<h1><label>탁 트인 바다</label>를 보며 느긋하게 힐링하는 여행 스타일<h1>',
      color: '#3C44FF',
      courses: [
        {
          no: 697,
          title: '부산의 아름다운 낮과 밤을 느끼는 주경, 야경 여행',
          image: IMAGE_URL + '1/10697',
        },
        {
          no: 295,
          title: '제주 사계해안도로, 바다와 산의 하모니에 홀릭하다!',
          image: IMAGE_URL + '2/16609',
        },
      ],
    },
    {
      type: 'D',
      title: '푸르른 산속 맑은 공기를 즐기는 여행 스타일',
      desc: '<h1>푸르른 <label>산속 맑은 공기</label>를 즐기는 여행 스타일</h1>',
      color: '#1BBE00',
      courses: [
        {
          no: 65,
          title: '지리산의 깊은 산자락 속에 세상 시름을 묻다',
          image: IMAGE_URL + '2/5542',
        },
        {
          no: 566,
          title: '화산이 만든 비경을 찾아가는 탐험길',
          image: IMAGE_URL + '2/5652',
        },
      ],
    },
    {
      type: 'E',
      title: '여행지의 이색적인 맛과 역사를 즐기는 여행 스타일',
      desc: '<h1>여행지의 <label>이색적인 맛과 역사</label>를 즐기는 여행 스타일</h1>',
      color: '#BB0000',
      courses: [
        {
          no: 716,
          title: '가평에서 만나보는 유럽, 이색체험 여행',
          image: IMAGE_URL + '2/2634',
        },
        {
          no: 521,
          title: '서울 해방촌의 이국적인 맛집을 찾아서',
          image: IMAGE_URL + '2/12230',
        },
      ],
    },
    {
      type: 'F',
      title: '여행지의 전통적인 맛과 문화를 즐기는 여행 스타일',
      desc: '<h1>여행지의 <label>전통적인 맛과 문화</label>를 즐기는 여행 스타일</h1>',
      color: '#FF6B00',
      courses: [
        {
          no: 50,
          title: '경주 최고의 문화유산을 만나다',
          image: IMAGE_URL + '2/10753',
        },
        {
          no: 724,
          title: '꼼꼼하게 둘러보는 전주 한옥마을과 주변 명소들',
          image: IMAGE_URL + '2/16182',
        },
      ],
    },
  ],
};
