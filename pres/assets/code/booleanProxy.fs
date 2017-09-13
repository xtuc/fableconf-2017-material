let booleanProxy x =
  match x with
  | true -> true
  | false -> false

booleanProxy true
booleanProxy false
