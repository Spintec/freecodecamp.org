function compareEquality(a,b) {
    if (a==b) {
        return "The numbers are equal";
    }
    return "The numbers are not equal";
}
console.log(compareEquality(1,"1"));
// Operatorul "== face conversia intre string si number daca vede diferente, iar dupa compara valorile
