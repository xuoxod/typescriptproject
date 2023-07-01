class User {
  private fname: string = "";
  private lname: string = "";
  private email: string = "";
  private uid: string = "";
  private sid: string = "";

  constructor(userObj: object) {
    if (userObj !== null && userObj !== undefined) {
      this.fname = userObj[`fname`];
      this.lname = userObj[`lname`];
      this.email = userObj[`email`];
      this.uid = userObj[`uid`];
      this.sid = userObj[`sid`];
    }
  }

  public getFname(): string {
    return this.fname;
  }

  public getLname(): string {
    return this.lname;
  }

  public getEmail(): string {
    return this.email;
  }

  public getUid(): string {
    return this.uid;
  }

  public getSid(): string {
    return this.sid;
  }

  public toString(): string {
    return `${this.email}`;
  }
}

const user = User;

export default user;
