document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagem-cadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function (event) {
            event.preventDefault(); // Previne o envio do formulário

            // Obtém os valores dos campos
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email-secundario").value.trim();
            const cpf = document.getElementById("cpf").value.trim();
            const telefone = document.getElementById("telefone").value.trim();

            console.log(nome)

            // Limpa mensagens de erro anteriores
            document.getElementById("erro-nome").textContent = "";
            document.getElementById("erro-email").textContent = "";
            document.getElementById("erro-cpf").textContent = "";
            document.getElementById("erro-telefone").textContent = "";

            let erros = [];

            // Validações
            if (nome.length < 3) {
                erros.push("Nome deve ter pelo menos 3 caracteres.");
                document.getElementById("erro-nome").textContent = "Nome deve ter pelo menos 3 caracteres.";
            }

            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                erros.push("E-mail inválido.");
                document.getElementById("erro-email").textContent = "E-mail inválido.";
            }

            else if (!validarCPF(cpf)) {
                erros.push("CPF inválido. Use o formato 000.000.000-00.");
                document.getElementById("erro-cpf").textContent = "CPF inválido. Use o formato 000.000.000-00.";
            }

            else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
                erros.push("Telefone inválido. Use o formato (00) 00000-0000.");
                document.getElementById("erro-telefone").textContent = "Telefone inválido. Use o formato (00) 00000-0000.";
            }

            // Exibe erros ou mensagem de sucesso
            if (erros.length > 0) {
                mensagem.innerHTML = `⚠️ ERRO:<br>${erros.join("<br>")}`;
                mensagem.classList.remove("mensagem-sucesso");
                mensagem.classList.add("mensagem-erro");
            } else {
                mensagem.innerHTML = "✅ Cadastro realizado com sucesso!";
                mensagem.classList.remove("mensagem-erro");
                mensagem.classList.add("mensagem-sucesso");
            }
        });

        // Remoção automática das mensagens de erro ao digitar nos campos
        document.getElementById("nome").addEventListener("input", function () {
            document.getElementById("erro-nome").textContent = "";
        });

        document.getElementById("email-secundario").addEventListener("input", function () {
            document.getElementById("erro-email").textContent = "";
        });

        document.getElementById("cpf").addEventListener("input", function () {
            document.getElementById("erro-cpf").textContent = "";
        });

        document.getElementById("telefone").addEventListener("input", function () {
            document.getElementById("erro-telefone").textContent = "";
        });
    }

    // Validador de CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica repetição (111.111.111-11)

        let soma = 0, resto;

        // Calcula primeiro dígito verificador
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;

        // Calcula segundo dígito verificador
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;

        return resto === parseInt(cpf.charAt(10));
    }
});


