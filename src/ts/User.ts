class User {
  private fname: string = "";
  private lname: string = "";
  private email: string = "";

  constructor(userObj: object) {
    this.fname = userObj[`fname`];
    this.lname = userObj[`lname`];
    this.email = userObj[`email`];
  }

  public setFname(f): void {
    this.fname = f;
  }

  public setLname(l): void {
    this.lname = l;
  }

  public setEmail(e): void {
    this.email = e;
  }
}

const user = User;

export default user;
