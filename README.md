# File-based routing

Here are some examples of file paths and their corresponding URLs for commonly used patterns in file-based routing. We'll be using src/pages as the pages directory:

### Index routes
- src/pages/index.tsx -> /
- src/pages/posts/index.tsx -> /posts

### Nested routes
- src/pages/posts/topic.tsx -> /posts/topic
- src/pages/settings/profile.tsx -> /settings/profile

### Dynamic routes
- src/pages/posts/[slug].tsx -> /posts/:slug
- src/pages/[user]/settings.tsx -> /:user/settings
- src/pages/posts/[...all].tsx -> /posts/*

# Handbooks
- [Javscript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [React Hooks cheat sheet](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
- [Learn CSS](https://web.dev/learn/css/)
- [Learn HTML](https://www.learn-html.org/)

# Libraries
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://reactjs.org/docs/getting-started.html)
- [react-router-dom](https://reactrouter.com/docs/en/v6)
- [SWR](https://swr.vercel.app/docs/getting-started)
- [axios](https://axios-http.com/docs/intro)
- [Vite](https://vitejs.dev/config/)


export const getTable = selectorFamily({
  key: 'getTable',
  get:
    (name: string | string[]) =>
    ({ get }: any) => {
      if (Array.isArray(name)) {
        const listedArray: any[] = name.reduce((acc: any[], val) => {
          const table = get(masterState).find((d: any) => d.name === val);
          if (table) {
            acc.push((table.data || []).map((d: any) => ({ ...d, value: d.code, label: d.name })));
          } else {
            acc.push([]);
          }
          return acc;
        }, []);
        return listedArray;
      }
      const table = get(masterState).find((d: any) => d.name === name);
      if (!table) return [];
      return (table.data || []).map((d: any) => ({ ...d, value: d.code, label: d.name }));
    },
});

const [currencies, status] = useRecoilValue(getTable(['program_currency', 'status']));

