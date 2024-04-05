function Sum(n) {
  if (n > 0) {
    return n * Sum(n - 1);
  }
  return 0;
}
console.log(Sum(3));
