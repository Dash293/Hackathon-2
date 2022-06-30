const AbstractManager = require("./AbstractManager");

class IdeaManager extends AbstractManager {
  static table = "idea";

  insert(idea) {
    return this.connection.query(
      `insert into ${IdeaManager.table} (title) values (?)`,
      [idea.title]
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
