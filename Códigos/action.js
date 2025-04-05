document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão de login dentro do modal
    const btnLogin = document.querySelector(".btnLogin");

    btnLogin.addEventListener("click", function () {
        // Captura os valores digitados nos campos de email e senha
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Verifica se os campos estão preenchidos
        if (email.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos!");
        } else {
            // Aqui você pode enviar os dados para um servidor ou armazenar localmente
            console.log("Login realizado com sucesso!");
            console.log("Email:", email);
            console.log("Senha:", senha);
            
            // Simula um login bem-sucedido e fecha o modal (opcional)
            alert(`Bem-vindo, ${email}`);
        }
    
    });
    document.addEventListener("DOMContentLoaded", function () {
        const btnLogin = document.querySelector(".btnLogin");
    
        btnLogin.addEventListener("click", function () {
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
    
            if (email.trim() === "" || senha.trim() === "") {
                alert("Por favor, preencha todos os campos!");
            } else {
                alert(`Bem-vindo, ${email}`);
            }
        });
    });
    document.getElementById('btnLogin').addEventListener('click', function () {
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const mensagem = document.getElementById('mensagem');

        // Primeiro valida se tem @ no email
        if (!email.includes('@')) {
            mensagem.textContent = "Email inválido. É necessário conter '@'";
            mensagem.className = "text-danger mt-2";
            return;
        }

        // Agora valida se o email e a senha estão corretos
        if (email === "teste@teste" && senha === "teste") {
            mensagem.textContent = "Bem-vindo!";
            mensagem.className = "text-success mt-2";
        } else {
            mensagem.textContent = "Email ou senha incorretos.";
            mensagem.className = "text-danger mt-2";
        }
    });
});