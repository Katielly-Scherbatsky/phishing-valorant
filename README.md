# ⚠️ Projeto de Engenharia Social - Atividade Educacional

> Este projeto foi desenvolvido exclusivamente para fins acadêmicos, com o objetivo de demonstrar técnicas de engenharia social de forma ética e controlada, conforme as diretrizes do curso.

## 📌 Objetivo da Atividade

Simular um ataque de phishing com consentimento da vítima, como parte de um exercício sobre **cibersegurança e engenharia social**, sem armazenar ou expor dados reais.

## 🧪 Técnicas Utilizadas

- **Phishing**: Criação de uma página falsa simulando o login da Riot Games / Valorant.
- **Pretexting**: Mensagem dizendo que o usuário foi premiado com uma skin exclusiva para engajar a vítima.
- **Baiting**: Oferta de recompensa digital (skin do Valorant) para induzir a interação.

## 📎 Como Funciona

1. O usuário acessa um link enviado por e-mail ou mensagem, convencido por uma oferta fictícia.
2. O site simula uma página de login semelhante à da Riot Games.
3. Ao inserir os dados (e-mail e senha fictícios), o formulário envia as informações usando o serviço **[FormSubmit.co](https://formsubmit.co)** para um e-mail configurado para fins de teste.
4. Nenhum dado é armazenado ou reutilizado — o sistema apenas demonstra como um ataque desse tipo poderia ocorrer.

## 🚨 Aviso de Ética

- ✅ Participação com **consentimento prévio**.
- ❌ Nenhuma senha real foi armazenada ou reutilizada.
- 🔐 Dados foram fornecidos de forma **voluntária e fictícia**, apenas para fins de demonstração.

## 🧾 Exemplo de Mensagem Enviada

> Olá Nome,
> Você foi selecionado para receber uma skin exclusiva gratuita do Valorant, como parte de uma campanha especial da Riot Games para jogadores ativos!
> Para resgatar sua recompensa, acesse o link abaixo e faça login com sua conta Riot:
>  🔗 https://rewards.valorant.com/redeem-skin
> ⚠️ Importante: Essa oferta é válida somente até hoje às 23h59.
> Após o login, sua skin será automaticamente vinculada à sua conta em até 24 horas.
> Boa sorte no campo de batalha!
> Equipe Riot Games 🎮

## 🖼️ Visual do Site

A interface foi construída para simular a aparência da tela de login da Riot Games, utilizando:

- Cores e fontes semelhantes
- Imagens de skins populares

## 📂 Estrutura

```

📁 phishing-valorant
├── index.html       # Página principal (login falso)
├── sucesso.html     # Página de redirecionamento/sucesso
├── style.css        # Estilos personalizados

```

---

> ⚠️ **Este projeto não deve ser usado para fins maliciosos.** Toda simulação foi realizada com fins educativos, conforme os princípios da ética e da legalidade.
