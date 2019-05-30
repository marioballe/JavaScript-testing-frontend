export function* yearGenerator(firstYear) {
  if (firstYear >= 2010) {
    return firstYear;
  }
  yield ++firstYear;
}
