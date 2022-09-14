const posts = (posts = [], actions) => {
  switch (actions) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};

export default posts;

// here reducer name is posts, exporting posts
