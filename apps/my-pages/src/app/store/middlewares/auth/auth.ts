export const authMiddleware = (store) => (next) => (action) => {
  console.log('action', action);

  next({
    ...action,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${
        store.getState().user?.accessToken
          ? store.getState().user?.accessToken
          : ''
      }`,
    },
  });
};
