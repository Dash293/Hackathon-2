const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title) values (?)`,
      [project.title]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [project.title, project.id]
    );
  }
}

module.exports = ProjectManager;
