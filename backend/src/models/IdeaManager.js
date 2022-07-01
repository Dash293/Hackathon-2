const AbstractManager = require("./AbstractManager");

const initiateToday = new Date();
const today = initiateToday.toISOString().split("T")[0];

class IdeaManager extends AbstractManager {
  static table = "idea";

  insert(idea) {
    return this.connection.query(
      `insert into ${IdeaManager.table} (launchDate, name, description) values (?, ?, ?)`,
      [today, idea.name, idea.description]
    );
  }

  update(idea) {
    return this.connection.query(
      `update ${IdeaManager.table} set title = ? where id = ?`,
      [idea.title, idea.id]
    );
  }
}

module.exports = IdeaManager;
