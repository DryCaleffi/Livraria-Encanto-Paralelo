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
});