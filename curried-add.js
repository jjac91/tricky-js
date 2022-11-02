function curriedAdd(total = 0) {
  if (arguments.length === 0) return total;
  else {
    return function curriedAdd(num) {
      if (arguments.length === 0) return total;
      total += num;
      return curriedAdd;
    };
  }
}

module.exports = { curriedAdd };
