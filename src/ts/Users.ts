import user from "./User.js";

class Users {
  private users: object[] = [];

  constructor() {}

  public addUser(newUser: object): boolean {
    const index = this.users.findIndex((x) => x[`uid`] === newUser["uid"]);

    if (index === -1) {
      this.users.push(new user(newUser));
      return index === -1;
    }

    return false;
  }

  public removeUser(uid: string): boolean {
    this.users = this.users.filter((x) => x["uid"] !== uid);

    const index = this.users.findIndex((x) => x["uid"] === uid);

    return index === -1;
  }

  public getUser(uid): object | false {
    return this.users.find((x) => x["uid"] === uid) || false;
  }

  public getUsers(): object[] {
    return this.users;
  }

  public getUserCount(): number {
    return this.users.length;
  }
}
