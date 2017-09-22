export function booleanProxy(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}
booleanProxy(true);
booleanProxy(false);
