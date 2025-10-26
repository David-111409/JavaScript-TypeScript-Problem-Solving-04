const posts = [
  {
    id: 1,
    user: "Alice",
    likes: 5,
    comments: [
      { user: "Bob", likes: 2 },
      { user: "Charlie", likes: 1 },
      //   { user: "Bob", likes: 3 },
    ],
  },
  {
    id: 2,
    user: "Bob",
    likes: 8,
    comments: [
      // { user: "Alice", likes: 2 },
      { user: "Charlie", likes: 4 },
      { user: "Charlie", likes: 1 },
    ],
  },
  {
    id: 3,
    user: "Charlie",
    likes: 3,
    comments: [
      { user: "Alice", likes: 1 },
      { user: "Alice", likes: 5 },
      //   { user: "Bob", likes: 2 },
    ],
  },
];

function topCommenters(posts) {
  let map = new Map();
  posts.forEach((post) => {
    post.comments.forEach((comment) => {
      let newObj = map.get(comment.user) || {
        user: comment.user,
        comments: 0,
        posts: new Set(),
      };
      newObj.comments++;

      newObj.posts.add(post.id);

      map.set(comment.user, newObj);
    });
  });
  return [
    ...map.values().map((user) => {
      return { ...user, posts: [...user.posts] };
    }),
  ].sort((a, b) => b.comments - a.comments);
}
console.log(topCommenters(posts));

console.log(topCommenters([
    {
      id: 1,
      user: "Alice",
      comments: [
        { user: "Bob" },
        { user: "Charlie" },
      ],
    },
    {
      id: 2,
      user: "Bob",
      comments: [
        { user: "Alice" },
        { user: "Charlie" },
      ],
    },
    {
      id: 3,
      user: "Charlie",
      comments: [
        { user: "Alice" },
        { user: "Bob" },
      ],
    },
  ]));
