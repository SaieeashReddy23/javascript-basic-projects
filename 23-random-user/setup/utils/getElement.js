const getElement = (select) => {
  const element = document.querySelector(select);

  if (element) {
    return element;
  } else {
    throw new Error(`could not find the element with the selector ${select} `);
  }
};

export default getElement;
