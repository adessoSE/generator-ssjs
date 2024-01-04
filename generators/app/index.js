import Generator from "yeoman-generator";

export default class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: "ssjs",
      },
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath("ssjs-webpack"),
      this.destinationPath(this.answers.name)
    );
  }

  constructor(args, opts) {
    super(args, opts);
  }
}
