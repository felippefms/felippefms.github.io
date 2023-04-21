export default function getAge(){
    const dataNascimento = new Date("1996-12-20");
    const anoNascimento = dataNascimento.getFullYear();
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - anoNascimento;

    if (dataAtual < new Date(dataAtual.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate())) {
        idade--;
    }

    return idade.toString();
}