const posts = [
  {
    id: 1,
    user: "Alice",
    likes: 120,
    comments: [
      { user: "Bob", text: "Great post!", likes: 10 },
      { user: "Charlie", text: "Nice work", likes: 5 },
    ],
  },
  {
    id: 2,
    user: "Bob",
    likes: 90,
    comments: [
      { user: "Alice", text: "Amazing!", likes: 20 },
      { user: "Charlie", text: "Love it!", likes: 25 },
    ],
  },
  {
    id: 3,
    user: "Alice",
    likes: 200,
    comments: [{ user: "Charlie", text: "🔥🔥🔥", likes: 50 }],
  },
];

// function totalLikes(posts) {
//   return posts.reduce((acc, post) => {
//     return (
//       acc +
//       post.likes +
//       post.comments.reduce((acc, comment) => acc + comment.likes, 0)
//     );
//   }, 0);
// }
// console.log(totalLikes(posts));

// function uniqueUsers(posts) {
//   let set = new Set();
//   return Array.from(
//     posts.reduce((acc, post) => {
//       acc.add(post.user);
//       post.comments.forEach((comment) => acc.add(comment.user));
//       return acc;
//     }, set)
//   );
// }

// console.log(uniqueUsers(posts));

// function mostLikedUser(posts) {
//   let map = new Map();
//   let max = 0;
//      posts.reduce((acc, post) => {
//     map.set(post.user, (map.get(post.user) || 0) + post.likes);
//     post.comments.forEach((comment) => {
//       map.set(comment.user, (map.get(comment.user) || 0) + comment.likes);
//     });
//     return acc;
//   }, map);
//   for (let [key, value] of map) {
//     if (value > max) {
//       max = value;
//       mostLiked = key;
//     }
//   }
//   return mostLiked;
// }
// console.log(mostLikedUser(posts));

function groupPostsByUser(posts) {
  return posts.reduce((acc, { user, id }) => {
    acc[user] = acc[user] || [];
    acc[user].push(id);
    return acc;
  }, {});
}

console.log(groupPostsByUser(posts));
/* ➞
{
  "Alice": [1, 3],
  "Bob": [2]
}
*/
