const AbstractManager = require("./AbstractManager");

class EmployeeManager extends AbstractManager {
  static table = "employee";

  // find(id) {
  //   return this.connection.query(`select * from  ${this.table} where id = ?`, [
  //     id,
  //   ]);
  // }

  insert(employee) {
    return this.connection.query(
      `insert into ${EmployeeManager.table} (title) values (?)`,
      [employee.title]
    );
  }

  update(employee) {
    return this.connection.query(
      `update ${EmployeeManager.table} set title = ? where id = ?`,
      [employee.title, employee.id]
    );
  }
}

module.exports = EmployeeManager;
