import { CadastroDeAlunos } from '../cadastrodealunos';
import { Aluno } from '../../common/aluno';

describe("O cadastro de alunos", () => {
  var cadastro: CadastroDeAlunos;

  function cadastrarAluno(nome:string, cpf:string) {
    var aluno: Aluno = new Aluno();
    aluno.nome = nome;
    aluno.cpf = cpf;
    cadastro.cadastrar(aluno);
  }

  beforeEach(() => cadastro = new CadastroDeAlunos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getAlunos().length).toBe(0);
  })

  it("cadastra alunos corretamente", () => {
    cadastrarAluno("Mariana","683");

    expect(cadastro.getAlunos().length).toBe(1);
    var aluno = cadastro.getAlunos()[0];
    expect(aluno.nome).toBe("Mariana");
    expect(aluno.cpf).toBe("683");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

  it("não aceita alunos com CPF duplicado", () => {
    cadastrarAluno("Mariana","683");
    cadastrarAluno("Pedro","683");

    expect(cadastro.getAlunos().length).toBe(1);
  })

  it("cadastra mais de um aluno", () => {
    var aluno = new Aluno();
    aluno.nome = "Victor";
    aluno.cpf = "123";
    cadastro.cadastrar(aluno);

    aluno = new Aluno();
    aluno.nome = "Luana";
    aluno.cpf = "234";
    cadastro.cadastrar(aluno);

    aluno = new Aluno();
    aluno.nome = "Gabi";
    aluno.cpf = "345";
    cadastro.cadastrar(aluno);

    expect(cadastro.getAlunos().length).toBe(3);

    aluno = cadastro.getAlunos()[0];
    expect(aluno.nome).toBe("Victor");
    expect(aluno.cpf).toBe("123");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);

    aluno = cadastro.getAlunos()[1];
    expect(aluno.nome).toBe("Luana");
    expect(aluno.cpf).toBe("234");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);

    aluno = cadastro.getAlunos()[2];
    expect(aluno.nome).toBe("Gabi");
    expect(aluno.cpf).toBe("345");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

})
