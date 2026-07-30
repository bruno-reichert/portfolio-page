export const projectsData = {
    pt: [
      {
        id: "fastapi-genai",
        title: "fastapi-genai-project",
        tags: ["Python", "FastAPI", "GroqCloud (Llama 3.3)", "PostgreSQL", "Docker", "RAG"],
        description: "Assistente de pesquisa com RAG (Retrieval-Augmented Generation) para consultas em linguagem natural sobre documentos financeiros, com respostas fundamentadas e citações verificáveis. Envolveu migrar toda a stack de IA de modelos pagos (OpenAI) para uma alternativa gratuita (GroqCloud/Llama), exigindo reimplementar a lógica de extração de respostas estruturadas.",
        github: "https://github.com/bruno-reichert/fastapi-genai-project",
        demo: null
      },
      {
        id: "bookly",
        title: "Bookly",
        tags: ["Python", "FastAPI", "SQLModel", "PostgreSQL", "JWT", "Pytest"],
        description: "API REST para um serviço de avaliações de livros, com autenticação JWT, tratamento de exceções customizado, testes automatizados, e migrações de banco de dados via Alembic. Adaptada para funcionar sem tarefas assíncronas em background, devido a limitações do plano gratuito da plataforma de deploy.",
        github: "https://github.com/bruno-reichert/fastapi-beyond-CRUD",
        demo: null
      },
      {
        id: "fastapi-webapp",
        title: "FastAPI-Web-App",
        tags: ["Python", "FastAPI", "Jinja2", "PostgreSQL", "Amazon S3", "Docker", "Google Cloud Run"],
        description: "Aplicação web full-stack de blog, construída inteiramente com FastAPI — back-end e frontend (renderizado no servidor) na mesma aplicação Python. Inclui autenticação, recuperação de senha por e-mail, upload de foto de perfil via Amazon S3, e deploy em produção via Docker e Google Cloud Run.",
        github: "https://github.com/bruno-reichert/FastAPI-Web-App",
        demo: "https://fastapi-service-605488623154.us-east4.run.app/"
      },
      {
        id: "react-course",
        title: "react-course (App de Filmes)",
        tags: ["React", "Vite", "TailwindCSS", "TMDB API", "Appwrite"],
        description: "Aplicação de descoberta de filmes construída com React e Vite, consumindo a API do TMDB, com um algoritmo de tendências baseado em buscas dos usuários via Appwrite.",
        github: "https://github.com/bruno-reichert/react-course",
        demo: null
      }
    ],
    en: [
      {
        id: "fastapi-genai",
        title: "fastapi-genai-project",
        tags: ["Python", "FastAPI", "GroqCloud (Llama 3.3)", "PostgreSQL", "Docker", "RAG"],
        description: "A RAG (Retrieval-Augmented Generation) research assistant for natural-language queries over financial documents, returning grounded, citable answers. Involved migrating the entire AI stack from paid models (OpenAI) to a free alternative (GroqCloud/Llama), which required rebuilding the structured-answer extraction logic from scratch.",
        github: "https://github.com/bruno-reichert/fastapi-genai-project",
        demo: null
      },
      {
        id: "bookly",
        title: "Bookly",
        tags: ["Python", "FastAPI", "SQLModel", "PostgreSQL", "JWT", "Pytest"],
        description: "A REST API for a book review service, with JWT authentication, custom exception handling, automated tests, and database migrations via Alembic. Adapted to run without background async tasks due to free-tier deployment platform limitations.",
        github: "https://github.com/bruno-reichert/fastapi-beyond-CRUD",
        demo: null
      },
      {
        id: "fastapi-webapp",
        title: "FastAPI-Web-App",
        tags: ["Python", "FastAPI", "Jinja2", "PostgreSQL", "Amazon S3", "Docker", "Google Cloud Run"],
        description: "A full-stack blog web app built entirely with FastAPI — back-end and server-rendered front-end in the same Python application. Includes authentication, email password recovery, profile picture uploads via Amazon S3, and a production deploy via Docker and Google Cloud Run.",
        github: "https://github.com/bruno-reichert/FastAPI-Web-App",
        demo: "https://fastapi-service-605488623154.us-east4.run.app/"
      },
      {
        id: "react-course",
        title: "react-course (Movie App)",
        tags: ["React", "Vite", "TailwindCSS", "TMDB API", "Appwrite"],
        description: "A movie discovery app built with React and Vite, consuming the TMDB API, with a trending-searches algorithm powered by Appwrite.",
        github: "https://github.com/bruno-reichert/react-course",
        demo: null
      }
    ]
  };
  
  export const certificationsData = {
    pt: [
      {
        title: "Cientista de Dados Associado em Python",
        date: "Em curso",
        description: "Pandas, NumPy, Matplotlib, Seaborn, estatística, introdução a machine learning.",
        url: null,
        inProgress: true
      },
      {
        title: "Python Developer",
        date: "Out. 2025",
        description: "Estruturas de dados e algoritmos, complexidade, POO avançada.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/ef6134b92b67f405cba1b9f7d0c354e38c35d947", // Example credential placeholder
        inProgress: false
      },
      {
        title: "Associate Python Developer",
        date: "Set. 2025",
        description: "POO, decorators, context managers, regex.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d90e9d6d5b06f52a788e0ab41f48744b1c855ba6",
        inProgress: false
      },
      {
        title: "Python Programming",
        date: "Set. 2025",
        description: "Módulos, iteradores, list comprehensions.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/8e906e788c0350d7a6e1a4dfcb2983bf9e2c4cb7",
        inProgress: false
      },
      {
        title: "Python Programming Fundamentals",
        date: "Ago. 2025",
        description: "Fundamentos da linguagem.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4bf6db4a5b48e3d0628bc73ca55307ab886c90b6",
        inProgress: false
      },
      {
        title: "Associate AI Engineer for Developers",
        date: "Jul. 2025",
        description: "LLMs via API, prompt engineering, embeddings, RAG, LangChain.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4c3f7cb85b06f52e5a88e0ab41f4875a1c865fa7",
        inProgress: false
      }
    ],
    en: [
      {
        title: "Associate Data Scientist in Python",
        date: "In progress",
        description: "Pandas, NumPy, Matplotlib, Seaborn, statistics, introduction to machine learning.",
        url: null,
        inProgress: true
      },
      {
        title: "Python Developer",
        date: "Oct. 2025",
        description: "Data structures and algorithms, time complexity, advanced OOP.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/ef6134b92b67f405cba1b9f7d0c354e38c35d947",
        inProgress: false
      },
      {
        title: "Associate Python Developer",
        date: "Sep. 2025",
        description: "OOP, decorators, context managers, regex.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/d90e9d6d5b06f52a788e0ab41f48744b1c855ba6",
        inProgress: false
      },
      {
        title: "Python Programming",
        date: "Sep. 2025",
        description: "Modules, iterators, list comprehensions.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/8e906e788c0350d7a6e1a4dfcb2983bf9e2c4cb7",
        inProgress: false
      },
      {
        title: "Python Programming Fundamentals",
        date: "Aug. 2025",
        description: "Language fundamentals.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4bf6db4a5b48e3d0628bc73ca55307ab886c90b6",
        inProgress: false
      },
      {
        title: "Associate AI Engineer for Developers",
        date: "Jul. 2025",
        description: "LLMs via API, prompt engineering, embeddings, RAG, LangChain.",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4c3f7cb85b06f52e5a88e0ab41f4875a1c865fa7",
        inProgress: false
      }
    ]
  };