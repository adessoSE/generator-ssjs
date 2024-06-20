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
      {
        type: "input",
        name: "author",
        message: "author",
        default: "",
      },
      {
        type: "input",
        name: "repository",
        message: "repository",
        default: "",
      },
      {
        type: "input",
        name: "license",
        message: "license",
        default: "ISC",
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("ssjs-webpack"),
      this.destinationPath(this.answers.name),
      {
        name: this.answers.name,
        author: this.answers.author,
        repository: this.answers.repository,
        license: this.answers.license,
        bugs: `${this.answers.repository.replace(/(^.*?)\.git/gi, "$1")}/issues`,
        homepage: this.answers.repository.replace(/(^.*?)\.git/gi, "$1")
      },
      {},
      {
        globOptions: {
          ignore: "**/*.ejs"
        }
      }
    );
  }

  constructor(args, opts) {
    super(args, opts);
  }
}
