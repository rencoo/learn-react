const _articles = [
  {
    id: '0',
    title: 'Title1',
    categoryId: 1
  },
  {
    id: '1',
    title: 'Title2',
    categoryId: 2
  },
  {
    id: '2',
    title: 'Title2',
    categoryId: 3
  }
];

const _categories = [
  {
    id: 1,
    name: '分类1'
  },
  {
    id: 2,
    name: '分类2'
  },
  {
    id: 3,
    name: '分类3'
  }
];

function mockFetch(mockData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 300);
  });
}

export function fetchArticles() {
  return mockFetch(_articles);
}

export function fetchCategories() {
  return mockFetch(_categories);
}
