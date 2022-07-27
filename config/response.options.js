const formatResult = (model) => {
  return {
    info: {
      next: model.next,
      pages: model.pages,
      count: model.count,
      prev: model.prev,
    },
    results: model.docs,
  };
};

module.exports = formatResult;
