# Bruno Benno Reichert — Portfólio Pessoal

**🔗 Site ao vivo:** [bruno-reichert.github.io/portfolio-page](https://bruno-reichert.github.io/portfolio-page/)

__Sobre o projeto__

Site de portfólio pessoal, single-page, construído em React + Vite e hospedado via GitHub Pages. Reúne meus principais projetos de desenvolvimento back-end e análise de dados, certificações, e informações de contato — com suporte a tema claro/escuro e a dois idiomas (Português/Inglês).

__Conceito de design: "Ledger & Terminal"__

A identidade visual do site une dois mundos que moldam minha formação: Administração (planilhas, análise estruturada de dados) e desenvolvimento back-end (terminal, código). Isso aparece em detalhes como:
- Seções identificadas por referências de célula de planilha (`A1 · Início`, `B1 · Sobre`, etc.)
- Uma animação de terminal na abertura do site (`bruno@portfolio:~$ whoami`)
- Paleta e tipografia que combinam uma fonte serifada (formal) com uma fonte monoespaçada (código)

__Funcionalidades__

- Alternância entre tema claro e escuro, com persistência da preferência do usuário
- Alternância entre Português e Inglês, com persistência da preferência do usuário
- Cards de projetos com descrições, tecnologias utilizadas, links para o GitHub, e demos ao vivo (quando disponíveis)
- Seção de certificações (DataCamp) com PDFs de credenciais hospedados diretamente no site
- Totalmente responsivo, com suporte a `prefers-reduced-motion` para acessibilidade
- Deploy automático via GitHub Actions a cada push para a branch principal

__Tecnologias__

- React, Vite
- CSS puro (custom properties para tokens de tema, sem frameworks de UI)
- GitHub Actions (CI/CD) + GitHub Pages (hospedagem)

__Como rodar localmente__

```bash
git clone https://github.com/bruno-reichert/portfolio-page.git
cd portfolio-page/portfolio-page
npm install
npm run dev
```

__Deploy__

O deploy é automático: qualquer push para a branch `main` aciona o workflow em `.github/workflows/deploy.yml`, que builda o projeto e publica o resultado no GitHub Pages.
