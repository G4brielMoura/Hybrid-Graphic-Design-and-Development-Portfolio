### 📌 Hybrid Graphic Design and Development Portfolio

Este projeto é um portfólio híbrido moderno que une **Design Criativo** com **Desenvolvimento Front-End**, construído com **Next.js 15 (App Router)**, **TypeScript**, **TailwindCSS** e **Framer Motion**.

O objetivo é apresentar projetos, experiências e habilidades de forma dinâmica, com foco tanto na estética visual quanto na performance de desenvolvimento. O projeto possui um **modo interativo** que alterna entre dois contextos (Design e Desenvolvimento), destacando a versatilidade do autor.

---

<p align="center">
  <img alt="Hybrid Graphic Design and Development Portfolio" src=".github/preview.jpg" width="100%">
</p>

---

### 📌 Funcionalidades Principais

- **Switch de Modo (Toggler)**: alterna dinamicamente entre informações voltadas para design e desenvolvimento, usando context API.
- **Componentização**: Arquitetura 100% modular e reutilizável para facilitar manutenção e escalabilidade.
- **Responsividade total** com TailwindCSS.
- **Animações suaves** com Framer Motion para melhorar a experiência do usuário.
- **SEO otimizado** via metadata configurada diretamente no layout.tsx.
- **Context API com persistência de estado** do modo ativo (Design/Dev).
- **Código tipado** com TypeScript, priorizando segurança e previsibilidade.

---

### 📌 Estrutura de Pastas
````
├── public/
│ └── designer/ # Imagens de apoio aos projetos de design
├── src/
│ ├── app/
│ │ ├── _components/ # Todos os componentes reutilizáveis
│ │ ├── about/ # Página Sobre
│ │ ├── contacts/ # Página de Contato
│ │ └── portfolio/ # Página de Portfólio
│ ├── lib/
│ │ └── ModeContext.tsx # Contexto global do modo atual (Design/Dev)
├── styles/
│ └── globals.css # Estilização global
````

---

### 📌 Principais Componentes

### `ModeContext.tsx`
Gerencia o estado global de alternância entre "Designer" e "Developer". Permite que qualquer parte da aplicação reaja ao modo selecionado pelo usuário.

**Melhoria futura**: persistir o estado em `localStorage` ou `cookies` para manter preferência do usuário mesmo após recarregar a página.

---

### `PageWrapper.tsx`
Envoltório para padronizar o layout e aplicar estilos globais nas páginas. Também pode servir para aplicar motion effects ou wrappers contextuais.

---

### `InteractiveShowcase.tsx`
Um componente dinâmico que altera o conteúdo exibido de acordo com o modo atual (design/dev), destacando habilidades e projetos personalizados.

---

### `AboutMe.tsx` / `Portfolio.tsx` / `Form.tsx`
Componentes específicos para as seções, isolando responsabilidades e facilitando refatorações/modificações futuras.

---

### 📌 Tecnologias Utilizadas

| Tecnologia     | Papel                                                    |
|----------------|-----------------------------------------------------------|
| Next.js 15     | Estrutura principal da aplicação                          |
| React          | Biblioteca base de UI                                     |
| TypeScript     | Tipagem estática e robustez no desenvolvimento            |
| TailwindCSS    | Estilização rápida e responsiva com classes utilitárias   |
| Framer Motion  | Animações suaves e declarativas                           |
| Context API    | Gerenciamento de estado leve e eficiente                  |
| Metadata       | SEO e Open Graph Tags                                     |

---

### 📌 Trechos Interessantes

### SEO e Metadata Avançado

```
export const metadata: Metadata = {
  title: "JH | CREATIVE",
  description: "Portfólio com foco em Designer Creative, UX/UI e performance.",
  openGraph: {
    title: "JH | CREATIVE | Portfólio",
    images: [{ url: "/designer/graph1.jpg", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
}
```
### 📌 Composição da page.tsx 

```
return (
  <PageWrapper>
    <div className="max-w-screen-xl xl:max-w-[1102px] mx-auto sm:px-6 lg:px-8">
      <main>
        <Header />
        <Main />
        <Footer />
        <Directone />
        <Directtwo />
        <Directthree />
      </main>
    </div>
  </PageWrapper>
)

OBS:Essa composição modular facilita testes unitários, reaproveitamento e organização.
```
### 📌 Comandos de Desenvolvimento Instalar dependências
```
Editar
npm install

Rodar em modo dev
npm run dev

Build de produção
npm run build
```
### 📌 Licença


Esse projeto está sob a licença [MIT](./LICENSE).  
<a href="./LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-brightgreen.svg" />
</a>


### 📌 Autor

Gabriel Moura
Estudante de Ciência da Computação, apaixonado por desenvolvimento web moderno com foco em JavaScript, TypeScript e o ecossistema Front-End.

<p align="left">
  <a href="https://www.linkedin.com/in/gabrielmouradev/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/G4brielMoura" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.instagram.com/gabrielmouradev/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</p>

---
### 📌 Deploy

[![Ver no Navegador](https://img.shields.io/badge/👀%20Ver%20Projeto%20Online-000?style=for-the-badge&logo=vercel&logoColor=white)](https://hybridgraphicdesignanddevelopmentportfolio.vercel.app/)

---

### 📌 Contribuições
* Sinta-se à vontade para sugerir melhorias, abrir issues ou fazer um fork! Este projeto é uma vitrine e também um campo de testes para novas ideias criativas e técnicas.

---