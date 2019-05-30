import { yearGenerator } from "./generators";

function addMoney(money, year) {
  return year * this.factor + money;
}

const setUsersMoney = function(factor, userList) {
  return new Promise((resolve, rejected) => {
    userList.forEach(async user => {
      let currentYearIndex = yearGenerator(2000);
      let interval = setInterval(() => {
        let yearGenerator = currentYearIndex.next();
        console.log(user.money);
        user.money = addMoney.call(
          factor,
          Number(user.money),
          yearGenerator.value
        );
        if (yearGenerator.done) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  });
};

export { setUsersMoney };
