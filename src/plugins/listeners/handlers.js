export default {
  'test': (store, { key, payload }) => {
    console.log(key + ' listener', payload);

    return {
      test: 'sdg',
      user: {
        name: {
          first: 'lala',
          last: ['cool']
        }
      }
    };
  },

  'user.name': (store, { key, payload }) => {
    console.log(key + ' listener', payload);

    return {
      test: 'sdg',
      user: {
        name: {
          first: 'lala',
          last: ['cool', 'dude']
        }
      }
    };
  },

  'user.name.last.1': (store, { key, payload }) => {
    console.log(key + ' listener', payload);

    return store;
  }
};
