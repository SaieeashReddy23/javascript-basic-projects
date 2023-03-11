const paginate = (data) => {
  const followersperPage = 10;
  const noOfPages = Math.ceil(data.length / followersperPage);
  const pages = Array.from({ length: noOfPages }, (_, index) => {
    let start = index * followersperPage;
    return data.slice(start, start + followersperPage);
  });
  return pages;
};

export default paginate;
