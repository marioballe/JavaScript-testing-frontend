function addMoney(money, year) {
  return year * this.factor + money;
}

function showResults(nameContext, usersToShow) {
  console.log("Los usuarios siendo " + nameContext + " tendrían:");
  console.table(usersToShow);
}

export function calcularFactor(contextRich, contextPoor, usersList, yearList) {
  const richUsers = JSON.parse(JSON.stringify(usersList));
  const poorUsers = JSON.parse(JSON.stringify(usersList));

  richUsers.forEach(richUser => {
    yearList.forEach(year => {
      richUser.money = addMoney.call(contextRich, Number(richUser.money), year);
    });
  });
  showResults("ricos", richUsers);

  poorUsers.forEach(poorUser => {
    yearList.forEach(year => {
      poorUser.money = addMoney.call(contextPoor, Number(poorUser.money), year);
    });
  });
  showResults("pobres", poorUsers);
}
